import EstiloGlobal from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './containers/Home'
import Registro from './containers/Registro'           
import PaginaPrincipal from './containers/PaginaPrincipal'

const rotas = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/registro', element: <Registro /> },
  { path: '/paginaPrincipal', element: <PaginaPrincipal /> },
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
