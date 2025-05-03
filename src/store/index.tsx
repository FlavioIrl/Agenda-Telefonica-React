import { configureStore } from '@reduxjs/toolkit'
import registrosReducer from './reducers/registros'

const store = configureStore({
  reducer: {
    registros: registrosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store