"use client"

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { useState } from "react"
import { IoHeartOutline } from "react-icons/io5"





export function FavoritePokemons() {

    const favPokemons = useAppSelector(state => Object.values(state.pokemons))
    const [pokemons] = useState(favPokemons)

    return (
        <>

            {
                pokemons.length === 0
                    ? (<NoFavorites />) 
                    : (<PokemonGrid pokemons={favPokemons} />)
            }
        </>
    )
}



export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={70} className=" text-red-500" />
            <span className="text-5xl">No tienes pokemons favoritos</span>
        </div>
    )
}
