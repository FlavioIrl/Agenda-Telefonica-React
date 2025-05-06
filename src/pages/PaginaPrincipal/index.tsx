import { Layout, ListaContatosWrapper } from './styles'

import { Perfil } from '../../containers/Perfil'
import ListaContatos from '../../containers/ListaContatos'

const PaginaPrincipal = () => {
  return (
    <Layout>
        <Perfil />
      <ListaContatosWrapper>
        <ListaContatos />
      </ListaContatosWrapper>
    </Layout>
  )
}

export default PaginaPrincipal
