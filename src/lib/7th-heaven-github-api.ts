import { Octokit } from '@octokit/core';

type ReleaseInfo = {
    url: string;
    exeDownloadUrl?: string;
    zipDownloadUrl?: string;
    tagName: string;
};

const octokit = new Octokit();

export const getLatestRelease = async (owner: string, repo: string): Promise<ReleaseInfo> => {
    const releaseResponse = await octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
        owner,
        repo,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    if (releaseResponse.status != 200)
        throw new Error('Github REST API request failed with status {}', releaseResponse.status);

    const exeDownloadUrl = releaseResponse.data.assets.find((asset) =>
        asset.browser_download_url.endsWith('exe')
    )?.browser_download_url;

    const zipDownloadUrl = releaseResponse.data.assets.find((asset) =>
        asset.browser_download_url.endsWith('zip')
    )?.browser_download_url;

    return {
        url: releaseResponse.data.url,
        tagName: releaseResponse.data.tag_name,
        exeDownloadUrl,
        zipDownloadUrl
    };
};
