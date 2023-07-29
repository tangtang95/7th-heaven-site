import { Octokit } from '@octokit/core';
import { XMLParser } from 'fast-xml-parser';
import { CATALOG_REPO } from './constants';

type CatalogMod = {
    ID: string;
    Name: string;
    Description: string;
    Author: string;
    Category: string;
    LatestVersion: {
        Version: string;
        Link: string | string[];
        DownloadSize: number;
        PreviewImage: string;
        ReleaseDate: string;
        ReleaseNotes: string;
        CompatibleGameVersions: string;
    };
    Link: string;
    DonationLink?: string;
    Tags: string[];
    MetaVersion?: number;
    Deprecated?: '';
};

type Catalog = {
    Catalog: {
        Mods: {
            Mod: CatalogMod[];
        };
    };
};

const octokit = new Octokit();

export async function getModsFromCatalogTagRelease(tag: string): Promise<CatalogMod[]> {
    const response = await octokit.request('GET /repos/{owner}/{repo}/releases/tags/{tag}', {
        owner: CATALOG_REPO.owner,
        repo: CATALOG_REPO.repo,
        tag,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    if (response.status != 200)
        throw new Error('Github REST API request failed with status {}', response.status);

    const xmlFileNames: string[] = response.data.assets
        .filter((asset) => asset.name.endsWith('xml'))
        .map((asset) => asset.name);
    const commitHash = response.data.target_commitish;

    const parser = new XMLParser();
    const xmlDataList = await Promise.all(
        xmlFileNames.map((name) => getXmlContentFromCatalog(`catalogs/${name}`, commitHash))
    );

    const mods = xmlDataList
        .map((xml) => parser.parse(xml) as Catalog)
        .map((catalog) => catalog.Catalog.Mods.Mod)
        .flatMap((catalog) => catalog);
    return mods;
}

async function getXmlContentFromCatalog(path: string, ref?: string) {
    const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: CATALOG_REPO.owner,
        repo: CATALOG_REPO.repo,
        path,
        ref,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    if (response.status != 200)
        throw new Error('Github REST API request failed with status {}', response.status);
    if (Array.isArray(response.data)) {
        throw new Error('Github REST API request returned an array but it should be a single file');
    }
    if (
        response.data.type != 'file' ||
        response.data.encoding != 'base64' ||
        !response.data.content
    )
        throw new Error('Content is not a file encoded in base64');

    return atob(response.data.content);
}
