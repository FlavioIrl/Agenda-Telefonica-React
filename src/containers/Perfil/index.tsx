import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import type { RootState } from '../../store'
import * as S from './styles'
import { editarPerfil } from '../../store/reducers/registros'

export const Perfil = () => {
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
        editarPerfil({
          id: 1,
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
    <S.ContainerPerfil>
      <S.Aside>
        <S.Titulo> {editando ? 'Editando...' : 'Seu perfil'}</S.Titulo>
        <S.ImagemPerfil
          src={`https://www.github.com/${login}.png`}
          alt="Foto do perfil do usuario"
        />
        <S.Nome
          disabled={!editando}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <S.Email
          disabled={!editando}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.TextoDiv>
          <S.TextoPerfil
            disabled={!editando}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <S.TextoPerfil
            disabled={!editando}
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <S.DescricaoPerfil
            disabled={!editando}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </S.TextoDiv>
        <S.BotaoPerfil onClick={handleSalvar}>
          {editando ? 'Salvar' : 'Editar Perfil'}
        </S.BotaoPerfil>
      </S.Aside>
    </S.ContainerPerfil>
  )
}
