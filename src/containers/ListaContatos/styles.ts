import styled from 'styled-components'
import { BotaoLink } from '../../styles'

export const PaginaLista = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const DivLista = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`

export const FiltroFavorito = styled.div`
  font-size: 20px;
  margin: 16px 0;
  font-weight: bold;
  font-family: Roboto, sans-serif;

  label {
    margin-right: 8px;
  }

  select {
    font-size: 16px;
    font-weight: bold;
    padding: 4px 8px;
  }
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  margin: 0 auto;
  width: 90%;
`

export const BotaoLista = styled(BotaoLink)`
  background-color: #61abf0;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 200px;
  padding: 10px;

  &:hover {
    background-color: #7ab6ed;
  }
`

export const Titulo = styled.h1`
  font-size: 50px;
  text-align: center;
  margin-top: 40px;
  font-family: Poppins, sans-serif;
`
