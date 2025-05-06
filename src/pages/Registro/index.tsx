import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/registros'
import * as S from './styles'

const RegistroUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleVoltar = () => {
    navigate(-1) // Volta uma página no histórico
  }

  const [login, setLogin] = useState('')
  const [descricao, setDescricao] = useState('')
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarPessoa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        login,
        telefone,
        email,
        descricao
      })
    )
    navigate('/paginaPrincipal')
  }

  return (
    <S.Registro>
      <form onSubmit={cadastrarPessoa}>
        <S.RegistroConteudo>
          <h2>S.Registro</h2>
          <label>Nome:</label>
          <S.RegistroInput
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome"
          />

          <label>Email:</label>
          <S.RegistroInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Digite o email"
          />

          <label>Telefone:</label>
          <S.RegistroInput
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            type="tel"
            placeholder="12 3 4567-7899"
          />

          <label>Login GitHub: (opcional)</label>
          <S.RegistroInput
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Login a cadastrar"
          />

          <label>Descrição: (opcional)</label>
          <S.RegistroInput
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            type="text"
            placeholder="Programador Full Stack"
          />
          <S.BotoesContainer>
            <S.BotaoVoltar onClick={handleVoltar}>Voltar</S.BotaoVoltar>
            <S.BotaoSalvar type="submit">Salvar</S.BotaoSalvar>
          </S.BotoesContainer>
        </S.RegistroConteudo>
      </form>
    </S.Registro>
  )
}

export default RegistroUser
