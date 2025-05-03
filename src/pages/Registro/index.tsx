import { useNavigate } from 'react-router-dom'
import {
  RegistroConteudo,
  Registro,
  RegistroInput,
  BotaoVoltar,
  BotaoSalvar,
  BotoesContainer
} from './styles'

const RegistroUser = () => {
  const navigate = useNavigate()

  const handleVoltar = () => {
    navigate(-1) // Volta uma página no histórico
  }

  return (
    <Registro>
      <RegistroConteudo>
        <h2>Registro</h2>
        <label>Nome:</label>
        <RegistroInput type="text" placeholder="Digite o nome" />

        <label>Email:</label>
        <RegistroInput type="email" placeholder="Digite o email" />

        <label>Telefone:</label>
        <RegistroInput type="tel" placeholder="12 3 4567-7899" />

        <label>Login GitHub: (opcional)</label>
        <RegistroInput type="text" placeholder="Login a cadastrar" />

        <label>Descrição: (opcional)</label>
        <RegistroInput type="text" placeholder="Programador Full Stack" />
        <BotoesContainer>
          <BotaoVoltar onClick={handleVoltar}>Voltar</BotaoVoltar>
          <BotaoSalvar to="/paginaPrincipal">Salvar</BotaoSalvar>
        </BotoesContainer>
      </RegistroConteudo>
    </Registro>
  )
}

export default RegistroUser
