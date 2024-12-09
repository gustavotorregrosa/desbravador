'use client'

import { IRepo } from "@/interfaces/IRepo";
import { Card } from "@mui/material";

interface Props {
    repository: IRepo
}

export default function RepositoryCard({repository}: Props) {

    return <div className="w-full flex flex-col text-lg font-semibold">
        <Card variant="outlined" className="p-8 opacity-80">

            <div className="flex flex-row justify-between">
                <div className="w-1/2">
                    <p>Nome: <span className="font-normal">{repository.name}</span></p> 
                </div>
                <div className="w-1/2">
                    <p>Linguagem: <span className="font-normal">{repository.language}</span></p> 
                </div>
            </div>

            <div className="flex flex-row justify-between mt-4">
                <div className="w-1/2">
                    <p>Estrelas: <span className="font-normal">{repository.stargazers_count}</span></p> 
                </div>
                <div className="w-1/2">
                    <p>Descrição: <span className="font-normal">{repository.description}</span></p> 
                </div>
            </div>

            <div className="flex flex-row justify-between mt-4">
                <div className="w-1/2">
                    <p>Link: <span className="font-normal">{repository.html_url}</span></p>
                </div>
             
            </div>
        </Card>


    </div>
  }