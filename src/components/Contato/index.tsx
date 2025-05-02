import { Card, Titulo, Botoes, Info, Descricao, BarraAcoes, BotaoEditar, BotaoRemover, CardContainer } from './styles'

const Contato = () => {
  return (
    <CardContainer>
        <Card>
            <BarraAcoes>
                <Titulo>Nome: Flavio Irala Pereira</Titulo>
                <Botoes>
                    <BotaoEditar><img src="../../public/icons8-edit.png" /></BotaoEditar>
                    <BotaoRemover><img src="../../public/icons8-lixeira.png" /></BotaoRemover>
                </Botoes>
            </BarraAcoes>
            <Info>
                <p>Email: flavio@gmail.com</p>
                <p>telefone: 37 9 9999-9999</p>
                <p>Empresa: Eletrônica Paraná</p>
            </Info>
            <Descricao>
                Contato importante da área técnica.
            </Descricao>
        </Card>
    </CardContainer>
  )
}

export default Contato