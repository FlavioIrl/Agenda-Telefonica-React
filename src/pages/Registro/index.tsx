import {
  RegistroConteudo,
  Registro,
  RegistroInput,
  BotaoVoltar,
  BotaoSalvar,
  BotoesContainer
} from './styles'

const RegistroUser = () => {
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

        <label>Empresa: (opcional)</label>
        <RegistroInput type="text" placeholder="Digite a empresa" />

        <label>Cargo: (opcional)</label>
        <RegistroInput type="text" placeholder="Digite o cargo" />
        <BotoesContainer>
          <BotaoVoltar to="/">Voltar</BotaoVoltar>
          <BotaoSalvar to="/paginaPrincipal">Salvar</BotaoSalvar>
        </BotoesContainer>
      </RegistroConteudo>
    </Registro>
  )
}

export default RegistroUser
