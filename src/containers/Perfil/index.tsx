import { useState } from 'react'
import * as S from './styles'

export const Perfil = () => {
  const [editando, setEditando] = useState(false)
  const [login, setLogin] = useState('FlavioIrl')
  const [descricao, setDescricao] = useState(
    'Um programador muito organizado e competente.'
  )
  const [email, setEmail] = useState('Flavio3230@gmail.com')
  const [nome, setNome] = useState('Flavio Irala Pereira')
  const [telefone, setTelefone] = useState('67 9 1234-6789')

  // const handleEditar = () => {
  //   setEditando(true);
  // }

  // const handleSalvar = () => {
  //   setEditando(false);
  // }

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
        <S.BotaoPerfil onClick={() => setEditando(!editando)}>
          {editando ? 'Salvar' : 'Editar Perfil'}
        </S.BotaoPerfil>
      </S.Aside>
    </S.ContainerPerfil>
  )
}
