import * as S from './styles'

import { Descricao } from '../../styles'

const Contato = () => {
  return (
    <S.CardContainer>
      <S.Card>
        <S.BarraAcoes>
          <S.Titulo>Flavio Irala Pereira</S.Titulo>
          <S.Botoes>
            <S.BotaoFavorito>
              <img src="../../public/icons8-estrela.png" />
            </S.BotaoFavorito>
             <S.EditandoFavorito><p>Favoritar: </p><input type="checkbox" /></S.EditandoFavorito> 
            <S.BotaoEditar>
              <img src="../../public/icons8-edit.png" />
            </S.BotaoEditar>
            <S.BotaoRemover>
              <img src="../../public/icons8-lixeira.png" />
            </S.BotaoRemover>
          </S.Botoes>
        </S.BarraAcoes>
        <S.Info>
          <p>Email: flavio@gmail.com</p>
          <p>Telefone: 37 9 9999-9999</p>
          <p>Login Github: FlavioIRl</p>
        </S.Info>
        <Descricao>Um programador muito organizado e competente.</Descricao>
      </S.Card>
    </S.CardContainer>
  )
}

export default Contato
