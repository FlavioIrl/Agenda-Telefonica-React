import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import Contato from '../../components/Contato'
import { Titulo, PaginaLista, BotaoLista, Campo } from './styles'
import { alterarTermo } from '../../store/reducers/filtro'

const ListaContatos = () => {
  const registros = useSelector((state: RootState) => state.registros.itens)
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootState) => state.filtro)

  const registrosFiltrados = registros
    .filter((r) => r.id !== 2)
    .filter((r) => r.nome.toLowerCase().includes(termo.toLowerCase()))

  return (
    <PaginaLista>
      <Titulo>Lista de contatos</Titulo>
      <Campo
        type="text"
        placeholder="Buscar pelo nome"
        value={termo}
        onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
      />
      <BotaoLista to="/registro">+ adicionar contato</BotaoLista>
      {registrosFiltrados.map((r) => (
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
