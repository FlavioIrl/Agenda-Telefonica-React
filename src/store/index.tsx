import { configureStore } from '@reduxjs/toolkit'
import registrosReducer from './reducers/registros'
import perfilReducer from './reducers/salvarPefil'

const store = configureStore({
  reducer: {
    registros: registrosReducer,
    perfil: perfilReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store