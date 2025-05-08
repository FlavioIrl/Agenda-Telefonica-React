import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import type { RootState } from '../../store'
import * as S from './styles'
import RegistroClass from '../../models/Registro'
import { Descricao } from '../../styles'

import { remover, editar } from '../../store/reducers/registros'

type Props = RegistroClass

const Contato = ({ id, login, descricao, email, nome, telefone }: Props) => {
  const dispatch = useDispatch()

  const registro = useSelector((state: RootState) =>
    state.registros?.itens?.find((r) => r.id === id)
  )

  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeEdit, setNomeEdit] = useState(nome)
  const [loginEdit, setLoginEdit] = useState(login)
  const [emailEdit, setEmailEdit] = useState(email)
  const [telefoneEdit, setTelefoneEdit] = useState(telefone)
  const [descricaoEdit, setDescricaoEdit] = useState(descricao)

  const [original, setOriginal] = useState({
    nome,
    login,
    email,
    telefone,
    descricao,
  })

  useEffect(() => {
    if (registro) {
      setNomeEdit(registro.nome)
      setLoginEdit(registro.login)
      setEmailEdit(registro.email)
      setTelefoneEdit(registro.telefone)
      setDescricaoEdit(registro.descricao)
    }
  }, [registro])

  function iniciarEdicao() {
    setOriginal({
      nome: nomeEdit,
      login: loginEdit,
      email: emailEdit,
      telefone: telefoneEdit,
      descricao: descricaoEdit
    })
    setEstaEditando(true)
  }

  function cancelarEdicao() {
    setNomeEdit(original.nome)
    setLoginEdit(original.login)
    setEmailEdit(original.email)
    setTelefoneEdit(original.telefone)
    setDescricaoEdit(original.descricao)
    setEstaEditando(false)
  }

  function salvarEdicao() {
    dispatch(
      editar({
        id,
        nome: nomeEdit,
        login: loginEdit,
        email: emailEdit,
        telefone: telefoneEdit,
        descricao: descricaoEdit
      })
    )
    setEstaEditando(false)
  }

  return (
    <S.CardContainer>
      <S.Card>
        <S.BarraAcoes>
          <S.Titulo
            disabled={!estaEditando}
            value={nomeEdit}
            onChange={(e) => setNomeEdit(e.target.value)}
          />
          <S.Botoes>
            {estaEditando ? (
              <>
                <S.EditandoFavorito>
                  <p>Favoritar: </p>
                  <input type="checkbox" />
                </S.EditandoFavorito>
                <S.BotaoSalvar onClick={salvarEdicao}>
                  Salvar
                </S.BotaoSalvar>
                <S.BotaoCancelar onClick={cancelarEdicao}>
                  Cancelar
                </S.BotaoCancelar>
              </>
            ) : (
              <S.BotaoEditarContainer>
                <S.BotaoFavorito>
                  <img src="/icons8-estrela.png" />
                </S.BotaoFavorito>
                <S.BotaoEditar onClick={iniciarEdicao}>
                  <img src="/icons8-edit.png" />
                </S.BotaoEditar>
                <S.BotaoRemover onClick={() => dispatch(remover(id))}>
                  <img src="/icons8-lixeira.png" />
                </S.BotaoRemover>
              </S.BotaoEditarContainer>
            )}
          </S.Botoes>
        </S.BarraAcoes>
        <S.Info>
          <S.TextoContato
            disabled={!estaEditando}
            value={loginEdit}
            onChange={(e) => setLoginEdit(e.target.value)}
          />
          <S.TextoContato
            disabled={!estaEditando}
            value={emailEdit}
            onChange={(e) => setEmailEdit(e.target.value)}
          />
          <S.TextoContato
            disabled={!estaEditando}
            value={telefoneEdit}
            onChange={(e) => setTelefoneEdit(e.target.value)}
          />
        </S.Info>
        <Descricao
          disabled={!estaEditando}
          value={descricaoEdit}
          onChange={(e) => setDescricaoEdit(e.target.value)}
        />
      </S.Card>
    </S.CardContainer>
  )
}

export default Contato
