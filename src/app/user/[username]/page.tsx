import { IUserDetails } from "@/interfaces/IUser";
import { httpGet } from "@/services/http.service";
import UserCard from "./user-card";
import { IRepo } from "@/interfaces/IRepo";
import ReposTable from "./repos-table";


interface Props {
  params: Promise<{ username: string }>
}


export default async function UserPage({params}: Props) {

    const { username } = await params

    const user = (await httpGet<IUserDetails>(`users/${username}`)) as IUserDetails
    const repos: IRepo[] = (await httpGet<IRepo>(`users/${username}/repos`)) as IRepo[]


    return <>
        <UserCard user={user} />
        <div className="mt-8"></div>
        <ReposTable repos={repos} />
    </>
     
    
  }
  