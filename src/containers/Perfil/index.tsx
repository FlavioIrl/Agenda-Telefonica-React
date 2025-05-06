import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import type { RootState } from '../../store'
import * as S from './styles'
import { cadastrar } from '../../store/reducers/registros'
import RegistroClass from '../../models/Registro'

type Props = RegistroClass

export const Perfil = (login, descricao, email, nome, telefone) => {
  const dispatch = useDispatch()

  const registros = useSelector((state: RootState) => state.registros)

  const [editando, setEditando] = useState(false)

  if (!perfilSalvo) return <p>Nenhum perfil registrado ainda.</p>
  
  const handleSalvar = () => {
    if(editando){
      dispatch(
        cadastrar({
          email:String,

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
