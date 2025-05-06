import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Registro from '../../models/Registro'

type PerfilState = Registro

const initialState: PerfilState = {
    id: 1,            // já definimos id=1 de antemão
    nome: '',
    email: '',
    telefone: '',
    login: '',
    descricao: ''
  }

  const perfilSlice = createSlice({
    name: 'perfil',
    initialState,
    reducers: {
      salvarPerfil: (state, action: PayloadAction<Omit<Registro, 'id'>>) => {
        state.nome = action.payload.nome
        state.email = action.payload.email
        state.telefone = action.payload.telefone
        state.login = action.payload.login ?? ''
        state.descricao = action.payload.descricao ?? ''
      }
    }
  })

export const { salvarPerfil } = perfilSlice.actions
export default perfilSlice.reducer
