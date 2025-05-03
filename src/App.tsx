import EstiloGlobal from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Registro from './pages/Registro'
import PaginaPrincipal from './pages/PaginaPrincipal'
import { Provider } from 'react-redux'
import store from './store'

const rotas = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/registro', element: <Registro /> },
  { path: '/paginaPrincipal', element: <PaginaPrincipal /> }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App
