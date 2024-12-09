'use client'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";

interface SearchBarProps {
    onSearch: (searchValue: string) => void;
}

let changedValueTimeout: NodeJS.Timeout | null = null;
export default function SearchBar({onSearch}: SearchBarProps) {

    const [searchValue, setSearchValue] = useState<string>('');
    useEffect(() => {

        if (changedValueTimeout) {
            clearTimeout(changedValueTimeout);
        }

        changedValueTimeout = setTimeout(() => {
            onSearch(searchValue);
        }, 1000);

    }, [searchValue]);



    return <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
        <InputLabel htmlFor="user-search-bar">Busque por Usuário</InputLabel>
        <OutlinedInput onChange={e => setSearchValue(e.target.value)} id="user-search-bar" type='text'
            endAdornment={
                <InputAdornment position="end">
                    <IconButton edge="end">
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>
            }
            label="Busque por Usuário"
        />

        
    </FormControl>
    


}