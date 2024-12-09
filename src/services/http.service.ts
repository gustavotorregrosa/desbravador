import axios from 'axios';

const httpInstance = axios.create({
    baseURL: process.env.GITHUB_API_URL,
    headers: {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`
    },
    params: {
        per_page: 100
    }
})

export const httpGet = async <R>(endpoint: string): Promise<R[] | R> => {
    const response = (await httpInstance.get<R[] | R>(endpoint)).data
    return response
}

