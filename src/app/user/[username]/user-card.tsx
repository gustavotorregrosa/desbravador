'use client'

import { IUserDetails } from "@/interfaces/IUser";
import { Avatar, Card } from "@mui/material";

interface Props {
    user: IUserDetails
}

export default function UserCard({user}: Props) {

    return <div className="w-full flex flex-col text-lg font-semibold">
        <Card variant="outlined" className="p-8 opacity-80">

            <div className="flex flex-row justify-between">
                <div className="w-1/2">
                  <p>Nome: <span className="font-normal">{user.name}</span></p> 
                </div>
                <div className="w-1/2">
                    <Avatar className="h-24 w-24" src={user.avatar_url} alt={user.name} />
                </div>
            </div>

            <div className="flex flex-row justify-between mt-4">
                <div className="w-1/2">
                    <p>Email: <span className="font-normal">{user.email}</span></p> 
                </div>
                <div className="w-1/2">
                    <p>Bio: <span className="font-normal">{user.bio}</span></p> 
                </div>
            </div>

            <div className="flex flex-row justify-between mt-4">
                <div className="w-1/2">
                    <p>Seguidores: <span className="font-normal">{user.followers}</span></p>
                </div>
                <div className="w-1/2">
                    <p>Seguidos: <span className="font-normal">{user.following}</span></p>
                </div>
            </div>
        </Card>


    </div>
  }