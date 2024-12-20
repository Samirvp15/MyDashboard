
import { SimplePokemon } from "../interfaces/simple-pokemon"
import PokemonCard from "./PokemonCard"



type PokemonGridProps = {
    pokemons: SimplePokemon[]
}


export function PokemonGrid({ pokemons }: PokemonGridProps) {
    return (
        <>
            <div className="flex flex-wrap  gap-10 items-center">
                {pokemons.map(pokemon => (

                    <PokemonCard pokemon={pokemon} key={pokemon.id} />
                    

                ))}
            </div>
        </>
    )
}
