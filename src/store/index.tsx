import { configureStore } from '@reduxjs/toolkit'
import registrosReducer from './reducers/registros'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    registros: registrosReducer,
    filtro: filtroReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
