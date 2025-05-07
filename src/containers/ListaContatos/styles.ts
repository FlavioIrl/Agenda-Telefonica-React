import styled from 'styled-components'
import { BotaoLink } from '../../styles'

export const PaginaLista = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  margin-left: 30px;
  width: 88%;
`

export const BotaoLista = styled(BotaoLink)`
  background-color: #61abf0;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 30px;
  margin-left: 30px;
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
