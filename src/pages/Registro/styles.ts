import styled from 'styled-components'
import { BotaoBase, BotaoLink } from '../../styles'

export const Registro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e1e1e;
  font-family: Roboto, sans-serif;
`

export const RegistroConteudo = styled.div`
  background-color: #535353;
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  color: #fff;
  max-width: 600px;
  border: 4px solid #777777;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 20px;
  }

  h2 {
    font-size: 50px;
    margin-bottom: 30px;
    text-align: center;
  }
`

export const RegistroInput = styled.input`
  font-size: 16px;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;

  &:focus {
    outline: none;
    background-color: #d9d9d9;
  }
`

export const BotaoHome = styled.button`
  color: #fff;
  font-weight: bold;
  font-family: Poppins, sans-serif;
  padding: 5px 10px;
  border: none;
  font-size: 40px;
  background-color: #4e10a3;
  width: 400px;
  border-radius: 16px;
  margin: 130px;
  cursor: pointer;

  &:hover {
    background-color: #6a1dd3;
  }
`

export const BotoesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; /* espaço entre os botões */
  margin-top: 40px;
`

export const BotaoVoltar = styled(BotaoBase)`
  background-color: #f12b2b;

  &:hover {
    background-color: #f94a4a;
  }
`

export const BotaoSalvar = styled(BotaoLink)`
  background-color: #09e536;
  padding: 8px 72px;

  &:hover {
    background-color: #46f569;
  }
`
