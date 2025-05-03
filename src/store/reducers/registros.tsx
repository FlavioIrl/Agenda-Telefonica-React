import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Registros = {
  nome: string
  email: string
  telefone: string
  login?: string
  descricao?: string
}

const initialState: Registros[] = []

const registrosSlice = createSlice({
    name: 'registros',
    initialState,
    reducers: {
        cadastrar: (state, action: PayloadAction<Registros>) => {
            state.push((action.payload))
        }
    }
})

export const { cadastrar } = registrosSlice.actions
export default registrosSlice.reducer