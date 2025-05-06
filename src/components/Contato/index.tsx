import * as S from './styles'
import RegistroClass from '../../models/Registro'
import { Descricao } from '../../styles'

type Props = RegistroClass

const Contato = ({ login, descricao, email, nome, telefone}: Props) => {

  return (
    <S.CardContainer>
      <S.Card>
        <S.BarraAcoes>
          <S.Titulo>{nome}</S.Titulo>
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
          <p>{email}</p>
          <p>{telefone}</p>
          <p>{login}</p>
        </S.Info>
        <Descricao>{descricao}</Descricao>
      </S.Card>
    </S.CardContainer>
  )
}

export default Contato
