import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Registro from '../../models/Registro'

type RegistroState = {
    itens: Registro[]
}

const initialState: RegistroState = {
    itens: [
      {
        id: 1,
        email: 'Flavioirlra@gmail.com',
        nome: 'Flavio Irala',
        telefone: '67999116545',
        login: 'flavioirl',
        descricao: 'Programador Full Stack'
      }
    ]
  }



const registrosSlice = createSlice({
    name: 'registros',
    initialState,
    reducers: {
        cadastrar: (state, action: PayloadAction<Registro>) => {
            state.itens.push((action.payload))
        },
        editarPerfil: (state, action: PayloadAction<Registro>) =>{
            const indexDoContato = state.itens.findIndex(
                (r) => r.id === action.payload.id
            )
            if (indexDoContato >= 0) {
                state.itens[indexDoContato] = action.payload
            }
        }
    }
})

export const { cadastrar, editarPerfil } = registrosSlice.actions
export default registrosSlice.reducer