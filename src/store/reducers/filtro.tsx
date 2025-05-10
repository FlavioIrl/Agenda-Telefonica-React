import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { Favorito } from '../../utils/enums/Contato'

type FiltroState = {
  termo?: string
  valor?: Favorito | 'TODOS'
}

const initialState: FiltroState = {
  termo: '',
  valor: 'TODOS'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<Favorito | 'TODOS'>) => {
      state.valor = action.payload
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer
