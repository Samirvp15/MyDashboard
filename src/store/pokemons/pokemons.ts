
import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'



interface PokemonState {
    [key: string]: SimplePokemon
}


const initialState: PokemonState = {
    '1': { id: '1', name: 'Bulbasaur' },
    '2': { id: '2', name: 'Ivysaur' },
}

const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        toogleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload
            const { id } = pokemon
            if (state[id]) {
                delete state[id]
                return
            } else {
                state[id] = pokemon

            }
        }
    }
})

export const {toogleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer