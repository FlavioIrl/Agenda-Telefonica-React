import {RegistroConteudo, Registro, RegistroInput, BotaoVoltar, BotaoSalvar, BotoesContainer} from './styles'

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

                <label>Empresa:</label>
                <RegistroInput type="text" placeholder="Digite o cargo ou a empresa" />
                <BotoesContainer>
                    <BotaoVoltar>Voltar</BotaoVoltar>
                    <BotaoSalvar>Salvar</BotaoSalvar>
                </BotoesContainer>
            </RegistroConteudo>
        </Registro>
    )
}

export default RegistroUser