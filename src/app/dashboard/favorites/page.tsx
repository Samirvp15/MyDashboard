import { FavoritePokemons } from "@/pokemons"


export const metadata = {
    title: "Pokemons Favoritos",
    description: "Pagina de listado de pokemons favoritos"
}



export default function PokemonsPage() {

    return (
        <div className=" flex flex-col">

            <span className=" my-5 text-5xl">Listado de Pokemons Favoritos <small>Global State</small></span>

           <FavoritePokemons/>
        </div>
    )
}
