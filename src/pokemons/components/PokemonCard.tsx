"use client"
import Link from "next/link";
import Image from "next/image"
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toogleFavorite } from "@/store/pokemons/pokemons";


type PokemonCardProps = {
    pokemon: SimplePokemon
}


export default function PokemonCard({ pokemon }: PokemonCardProps) {

    const isFavorite = useAppSelector(state => !!state.pokemons[pokemon.id])
    const dispatch = useAppDispatch()
    const onToggle = () => {
        dispatch(toogleFavorite(pokemon))
    }

    return (

        <div className="mx-auto right-0 mt-2 w-60">
            <div className=" flex flex-col items-center bg-white rounded overflow-hidden shadow-lg">
                <div className=" flex flex-col items-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        width={100}
                        height={100}
                        alt="Pokemon Image"
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{pokemon.name}</p>
                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemons/${pokemon.name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Mas informacion
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div onClick={onToggle}  className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer" >

                        <div className="text-red-600">
                            {
                                isFavorite
                                    ? <IoHeart />
                                    : <IoHeartOutline />
                            }
                        </div>
                        <div className="pl-3">
                            {
                                isFavorite
                                    ? <p className="text-sm font-medium text-gray-800 leading-none">
                                        Es favorito
                                    </p>
                                    : <p className="text-sm font-medium text-gray-800 leading-none">
                                        No es favorito
                                    </p>
                            }
                            <p className="text-xs text-gray-500">View your campaigns</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
