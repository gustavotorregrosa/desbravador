import { IUser } from "@/interfaces/IUser";
import { httpGet } from "@/services/http.service";
import UsersTable from "./users-table";

export default async function TopUsersPage() {

    let users: IUser[] = []

    try {
        const response = (await httpGet<IUser>('users')) as IUser[]
        users = response
    } catch (error) {
        console.error({error})
    }

    return <UsersTable users={users} />
    
  }
  