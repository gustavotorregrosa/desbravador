import { IRepo } from "@/interfaces/IRepo"
import { httpGet } from "@/services/http.service"
import RepositoryCard from "./repo-card"

interface Props {
    params: Promise<{ owner: string, reponame: string }>
}

export default async function RepositoryPage({params}: Props) {

    const { owner, reponame } = await params

    const repo: IRepo = (await httpGet<IRepo>(`repos/${owner}/${reponame}`)) as IRepo

    return <RepositoryCard repository={repo} />

}