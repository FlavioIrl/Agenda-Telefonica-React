import { Layout, ListaContatosWrapper } from "./styles"

import { Perfil } from "../Perfil"
import ListaContatos from "../ListaContatos"

const PaginaPrincipal = () => {
    return(
        <Layout>
            <Perfil />
            <ListaContatosWrapper>
                <ListaContatos />
            </ListaContatosWrapper>
        </Layout>
    )
}

export default PaginaPrincipal