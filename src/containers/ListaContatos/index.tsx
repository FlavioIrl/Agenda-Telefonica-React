import Contato from '../../components/Contato'
import { Titulo, PaginaLista, BotaoLista } from './styles'

const ListaContatos = () => {
  return (
    <PaginaLista>
      <Titulo>Lista de contatos</Titulo>
      <BotaoLista>+ adicionar contato</BotaoLista>
      <Contato />
      <Contato />
      <Contato />
      <Contato />
      <Contato />
      <Contato />
      <Contato />
      <Contato />
    </PaginaLista>
  )
}

export default ListaContatos
