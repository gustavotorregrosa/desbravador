'use server'

import { IUserDetails } from "@/interfaces/IUser"
import { httpGet } from "@/services/http.service"


export const searchUser = async (username: string): Promise<IUserDetails | null> => {

    try {
        const user = (await httpGet<IUserDetails>(`/users/${username}`)) as IUserDetails
        return user
    } catch (error) {
        console.log({error})
        return null
    }

}