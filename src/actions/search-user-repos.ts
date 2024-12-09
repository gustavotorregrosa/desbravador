'use server'

import { IRepo } from "@/interfaces/IRepo"
import { httpGet } from "@/services/http.service"

export const searchUserRepos = async (username: string): Promise<IRepo[] | null> => {

    try {
        const repos = (await httpGet<IRepo>(`/users/${username}/repos`)) as IRepo[]
        return repos
    } catch (error) {
        console.log({error})
        return null
    }

}