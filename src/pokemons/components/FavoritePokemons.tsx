"use client"

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"

export function FavoritePokemons() {

    const favPokemons = useAppSelector(state => state.pokemons)

    return (
        <PokemonGrid pokemons={Object.values(favPokemons)} />
    )
}
