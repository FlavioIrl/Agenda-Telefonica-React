import { Link } from 'react-router-dom'
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

export const BotaoLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  padding: 8px 50px;
  text-decoration: none;
  font-size: 20px;
  border-radius: 16px;
  cursor: pointer;
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const Texto = styled.h3`
  font-size: 20px;
  color: #434343;
  font-family: Roboto, sans-serif;
  font-weight: bold;
`

export default EstiloGlobal
