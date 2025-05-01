import Contato from '../../components/Contato'
import { Titulo, PaginaLista, BotaoLista } from './styles'

const ListaContatos = () => {
  return (
    <PaginaLista>
      <Titulo>Lista de contatos</Titulo>
      <BotaoLista>+ adicionar contatos</BotaoLista>
      <Contato />
    </PaginaLista>
  )
}

export default ListaContatos
