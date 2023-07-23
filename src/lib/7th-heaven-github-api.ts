import { Octokit } from '@octokit/core';

type ReleaseInfo = {
    url: string;
    exe_download_url?: string;
    zip_download_url?: string;
    tag_name: string;
};

const octokit = new Octokit();

export const getLatestRelease = async (owner: string, repo: string): Promise<ReleaseInfo> => {
    const release_response = await octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
        owner,
        repo,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    if (release_response.status != 200)
        throw new Error('Github REST API request failed with status {}', release_response.status);

    const exe_download_url = release_response.data.assets.find((asset) =>
        asset.browser_download_url.endsWith('exe')
    )?.browser_download_url;

    const zip_download_url = release_response.data.assets.find((asset) =>
        asset.browser_download_url.endsWith('zip')
    )?.browser_download_url;

    return {
        url: release_response.data.url,
        tag_name: release_response.data.tag_name,
        exe_download_url,
        zip_download_url
    };
};
