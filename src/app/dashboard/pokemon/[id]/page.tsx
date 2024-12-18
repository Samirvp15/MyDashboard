import { Pokemon } from "@/pokemons"



interface PokemonPageProps {
    params: { id: string }
}

export const metadata = {
    title: 'Pokemon'
}

const getPokemon = async (id: string): Promise<Pokemon> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = await response.json()
    return pokemon
}


export default function PokemonPage({ params }: PokemonPageProps) {
    return (
        <div>
            <h1>Pokemon {params.id}</h1>
        </div>
    )
}
