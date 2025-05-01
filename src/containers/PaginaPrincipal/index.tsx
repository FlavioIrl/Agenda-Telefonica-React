import { Layout } from "./styles"

import { Perfil } from "../Perfil"
import ListaContatos from "../ListaContatos"

const PaginaPrincipal = () => {
    return(
        <Layout>
            <Perfil />
            <ListaContatos />
        </Layout>
    )
}

export default PaginaPrincipal