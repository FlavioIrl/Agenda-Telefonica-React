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
    cadastrar: (state, action: PayloadAction<Omit<Registro, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    },
    editar: (state, action: PayloadAction<Registro>) => {
      const indexDoContato = state.itens.findIndex(
        (r) => r.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((registro) => registro.id !== action.payload)
      ]
    }
  }
})

export const { cadastrar, editar, remover } = registrosSlice.actions
export default registrosSlice.reducer
