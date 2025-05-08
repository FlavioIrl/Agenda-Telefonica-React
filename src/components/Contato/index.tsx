import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import type { RootState } from '../../store'
import * as S from './styles'
import RegistroClass from '../../models/Registro'
import { Descricao } from '../../styles'

import { remover, editar } from '../../store/reducers/registros'

type Props = RegistroClass

const Contato = ({ id, login, descricao: descricaoOriginal, email, nome, telefone }: Props) => {
  const dispatch = useDispatch()

  const registro = useSelector((state: RootState) =>
    state.registro?.itens?.find((r) => r.id === id))

  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  const [loginEdit, setLogin] = useState(login)
  const [emailEdit, setEmail] = useState(email)
  const [telefoneEdit, setTelefone] = useState(telefone)

  useEffect(() => {
    if (descricaoOriginal && descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <S.CardContainer>
      <S.Card>
        <S.BarraAcoes>
          <S.Titulo>
            {estaEditando && <em>Editando: </em>}
            {nome}
          </S.Titulo>
          <S.Botoes>
            {estaEditando ? (
              <>
                <S.EditandoFavorito>
                  <p>Favoritar: </p>
                  <input type="checkbox" />
                </S.EditandoFavorito>
                <S.BotaoSalvar
                  onClick={() => {
                    dispatch(
                      editar({
                        id,
                        login: loginEdit,
                        descricao,
                        email: emailEdit,
                        nome,
                        telefone: telefoneEdit,
                      })
                    )
                    setEstaEditando(false)
                  }}
                >
                  Salvar
                </S.BotaoSalvar>

                <S.BotaoCancelar onClick={cancelarEdicao}>
                  Cancelar
                </S.BotaoCancelar>
              </>
            ) : (
              <>
                <S.BotaoEditarContainer>
                  <S.BotaoFavorito>
                    <img src="/icons8-estrela.png" />
                  </S.BotaoFavorito>
                  <S.BotaoEditar
                    onClick={() => setEstaEditando(true)}
                  >
                    <img src="/icons8-edit.png" />
                  </S.BotaoEditar>

                  <S.BotaoRemover onClick={() => dispatch(remover(id))}>
                    <img src="/icons8-lixeira.png" />
                  </S.BotaoRemover>
                </S.BotaoEditarContainer>
              </>
            )}
          </S.Botoes>
        </S.BarraAcoes>
        <S.Info>
          <S.TextoContato
            disabled={!estaEditando}
            value={loginEdit}
            onChange={(e) => setLogin(e.target.value)}
          />

          <S.TextoContato
            disabled={!estaEditando}
            value={emailEdit}
            onChange={(e) => setEmail(e.target.value)}
          />

          <S.TextoContato
            disabled={!estaEditando}
            value={telefoneEdit}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </S.Info>

        <Descricao
          disabled={!estaEditando}
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </S.Card>
    </S.CardContainer>
  )
}

export default Contato
