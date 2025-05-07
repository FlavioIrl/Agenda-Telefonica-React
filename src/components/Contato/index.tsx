import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import type { RootState } from '../../store'
import * as S from './styles'
import RegistroClass from '../../models/Registro'
import { Descricao } from '../../styles'

import { remover, editar } from '../../store/reducers/registros'

type Props = RegistroClass

const Contato = ({ id }: Props) => {
  const dispatch = useDispatch()

  const registro = useSelector((state: RootState) =>
    state.registros.itens.find((r) => r.id === 2)
  )
  const [editando, setEditando] = useState(false)

  const [login, setLogin] = useState('')
  const [descricao, setDescricao] = useState('')
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (registro) {
      setLogin(registro.login)
      setDescricao(registro.descricao)
      setEmail(registro.email)
      setNome(registro.nome)
      setTelefone(registro.telefone)
    }
  }, [registro])

  const handleSalvar = () => {
    if (editando && registro) {
      dispatch(
        editar({
          id: 2,
          nome,
          email,
          telefone,
          login,
          descricao
        })
      )
    }
    setEditando(!editando)
  }

  return (
    <S.CardContainer>
      <S.Card>
        <S.BarraAcoes>
          <S.Titulo
            disabled={!editando}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          >
            {nome}
          </S.Titulo>
          <S.Botoes>
            <S.BotaoFavorito>
              <img src="/icons8-estrela.png" />
            </S.BotaoFavorito>
            <S.EditandoFavorito>
              <p>Favoritar: </p>
              <input type="checkbox" />
            </S.EditandoFavorito>
            <S.BotaoEditar>
              <img src="/icons8-edit.png" />
            </S.BotaoEditar>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              <img src="/icons8-lixeira.png" />
            </S.BotaoRemover>
          </S.Botoes>
        </S.BarraAcoes>
        <S.Info>
          <p
            disabled={!editando}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          >
            {login}
          </p>
          <p
            disabled={!editando}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            {email}
          </p>
          <p
            disabled={!editando}
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          >
            {telefone}
          </p>
          <p>{login}</p>
        </S.Info>
        <Descricao
          disabled={!editando}
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        >
          {descricao}
        </Descricao>
      </S.Card>
    </S.CardContainer>
  )
}

export default Contato
