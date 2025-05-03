import EstiloGlobal from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Registro from './pages/Registro'
import PaginaPrincipal from './pages/PaginaPrincipal'

const rotas = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/registro', element: <Registro /> },
  { path: '/paginaPrincipal', element: <PaginaPrincipal /> }
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
