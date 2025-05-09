import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import Contato from '../../components/Contato'
import * as S from './styles'
import { alterarFiltro, alterarTermo } from '../../store/reducers/filtro'
import { Favorito } from '../../utils/enums/Contato'

const ListaContatos = () => {
  const dispatch = useDispatch()
  const registros = useSelector((state: RootState) => state.registros.itens)
  const { termo, valor } = useSelector((state: RootState) => state.filtro)

  console.log('valor do filtro:', valor)
  console.log('registros:', registros)

  const contemTermo = (texto: string, termo: string | undefined) =>
    texto.toLowerCase().includes((termo || '').toLowerCase())

  const registrosFiltrados = registros
    .filter((r) => contemTermo(r.nome, termo))
    .filter((r) => {
      console.log('status do registro:', r.status)
      if (valor === 'TODOS' || !valor) return true
      return r.status.toLowerCase() === valor.toLowerCase()
    })

  return (
    <S.PaginaLista>
      <S.Titulo>Lista de contatos</S.Titulo>
      <S.Campo
        type="text"
        placeholder="Buscar pelo nome"
        value={termo}
        onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
      />
      <S.DivLista>
        <S.BotaoLista to="/registro">+ adicionar contato</S.BotaoLista>
        <S.FiltroFavorito>
          <label htmlFor="filtroFavorito">Mostrar:</label>
          <select
            id="filtroFavorito"
            value={valor || 'TODOS'}
            onChange={(e) => {
              const valorSelecionado = e.target.value as Favorito | 'TODOS'
              dispatch(alterarFiltro(valorSelecionado))
            }}            
          >
            <option value="TODOS">Todos</option>
            <option value="SIM">Favoritos</option>
            <option value="NAO">Não favoritos</option>
          </select>
        </S.FiltroFavorito>
      </S.DivLista>
      {registrosFiltrados.filter(r => r.id !== 2).map((r) =>(
        <Contato
          key={r.id}
          id={r.id}
          login={r.login}
          descricao={r.descricao}
          email={r.email}
          nome={r.nome}
          telefone={r.telefone}
          status={r.status}
        />
      ))}
    </S.PaginaLista>
  )
}

export default ListaContatos
