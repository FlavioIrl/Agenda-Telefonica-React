import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import Contato from '../../components/Contato'
import { Titulo, PaginaLista, BotaoLista } from './styles'

const ListaContatos = () => {
  const registros = useSelector((state: RootState) => state.registros.itens)

  return (
    <PaginaLista>
      <Titulo>Lista de contatos</Titulo>
      <BotaoLista to="/registro">+ adicionar contato</BotaoLista>
      {registros.map((r) => (
        <Contato
          key={r.id}
          id={r.id}
          login={r.login}
          descricao={r.descricao}
          email={r.email}
          nome={r.nome}
          telefone={r.telefone}
        />
      ))}
    </PaginaLista>
  )
}

export default ListaContatos
