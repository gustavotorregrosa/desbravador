'use client'
import {  IUserDetails } from "@/interfaces/IUser";
import SearchBar from "./search-bar";
import { searchUser } from "@/actions/search-user";
import { searchUserRepos } from "@/actions/search-user-repos";
import { useState } from "react";
import { IRepo } from "@/interfaces/IRepo";
import UserCard from "../user/[username]/user-card";
import ReposTable from "../user/[username]/repos-table";
import { LinearProgress } from "@mui/material";


export default function SearchUsersPage() {

    const [user, setUser] = useState<IUserDetails | null>(null)
    const [repos, setRepos] = useState<IRepo[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const updateUser = async (searchValue: string) => {

        if(!searchValue){
            return
        }
        
        setLoading(true)
        const [_user, _repos] = await Promise.all([
            searchUser(searchValue),
            searchUserRepos(searchValue)
        ])

        setUser(_user)
        setRepos(_repos)
        setLoading(false)
    }

    return <>
        <div className="w-1/2">
            <SearchBar onSearch={updateUser}/>
            {loading && <LinearProgress />}
        </div>
       
        <div className="h-12"></div>
        {user && <UserCard user={user} />}
        <div className="h-12"></div>
        {repos && <ReposTable repos={repos} />}

    </>

}
  