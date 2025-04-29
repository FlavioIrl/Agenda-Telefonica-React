import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        pedding: 0;
        box-sizing: border-box;
        list-style: none;
    }
`
export const BotaoBase = styled.button`
  color: #fff;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  padding: 5px;
  border: none;
  font-size: 20px;
  width: 200px;
  border-radius: 16px;
  cursor: pointer;
`

export default EstiloGlobal
