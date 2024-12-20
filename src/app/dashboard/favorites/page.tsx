
import { PokemonsResponse,SimplePokemon, PokemonGrid } from "@/pokemons"



export const metadata = {
    title: "Pokemons Favoritos",
    description: "Pagina de listado de pokemons favoritos"
}

const getPokemons = async (limit = 151, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json())

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))

    return pokemons
}


export default async function PokemonsPage() {

    const pokemons = await getPokemons()


    return (
        <div className=" flex flex-col">

            <span className=" my-5 text-5xl">Listado de Pokemons Favoritos <small>Global State</small></span>

            <PokemonGrid pokemons={pokemons} />
        </div>
    )
}
