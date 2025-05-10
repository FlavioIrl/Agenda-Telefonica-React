import styled from 'styled-components'
import { BotaoBase, TextArea } from '../../styles'

export const CardContainer = styled.div`
  margin-right: 30px;
  font-family: Roboto, sans-serif;
`

export const BotaoFavorito = styled.div`
  background-color: #dcdcdc;
  margin-bottom: 5px;
  color: white;
  width: 42px;
  height: 42px;
  padding: 4px;
  border-radius: 16px;

  img {
    width: 94%;
  }
`

export const EditandoFavorito = styled.div`
  background-color: #56616b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 8px;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;

  p {
    font-weight: bold;
    font-size: 16px;
    margin-right: 8px;
  }

  input {
    width: 15px;
    height: 15px;
    background-color: #56616b;
  }
`

export const Card = styled.div`
  background-color: #cacaca;
  padding: 12px;
  margin-left: 30px;
  border-radius: 12px;
  margin-bottom: 20px;
`

export const Titulo = styled(TextArea)`
  font-size: 26px;
  margin-bottom: 8px;
  color: #333;
  background-color: #e0e0e0;
  height: 36px;
  padding-left: 12px;
  margin-right: 20px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const TextoContatoEmail = styled(TextArea)`
  font-size: clamp(13px, 4vw, 18px);
  height: 42px;
  margin-inline: 10px;
  margin-top: 5px;
  margin-bottom: 11px;
  padding: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const TextoContato = styled(TextArea)`
  font-size: clamp(13px, 4vw, 18px);
  height: 42px;
  margin-top: 5px;
  margin-bottom: 11px;
  padding: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const Info = styled.div`
  display: flex;

  p {
    margin-right: 80px;
    font-size: 14px;
    color: #555;
    font-weight: bold;
  }
`

export const Botoes = styled.div`
  display: flex;
  gap: 8px;
`

export const BarraAcoes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BotaoCancelar = styled.div`
  font-size: 16px;
  font-weight: bold;
  background-color: #df6161;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  padding: 9px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &:hover {
    background-color: #e64343;
  }
`

export const BotaoEditarContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const BotaoEditar = styled.div`
  background-color: #4ca5f8;
  padding: 6px;
  border-radius: 13px;
  cursor: pointer;

  img {
    width: 26px;
    height: 24px;
  }

  &:hover {
    background-color: #3998f1;
  }
`

export const BotaoSalvar = styled.div`
  font-size: 16px;
  font-weight: bold;
  background-color: #4ca5f8;
  color: white;
  padding: 9px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-inline: 10px;
  cursor: pointer;

  &:hover {
    background-color: #3998f1;
  }
`

export const BotaoRemover = styled(BotaoBase)`
  background-color: #df6161;
  color: white;
  border-radius: 13px;

  width: 40px;
  height: 40px;

  img {
    width: 100%;
  }

  &:hover {
    background-color: #e64343;
  }
`
