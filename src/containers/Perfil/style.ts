import styled from 'styled-components'
import { BotaoBase, Texto } from '../../styles'

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #cacaca;
  width: 350px;
  height: 100vh;
  position: fixed;
`

export const Titulo = styled.h1`
  font-size: 40px;
  margin: 80px auto 50px;
  font-family: Poppins, sans-serif;
`

export const BotaoPerfil = styled(BotaoBase)`
  height: 50px;
  width: 250px;
  margin: 120px auto 0;
  padding: 5px;
  background-color: #3a3a3a;

  &:hover {
    background-color: rgb(78, 77, 77);
  }
`

export const TextoPerfil = styled.div`
  margin: 60px 15px;
`

export const Email = styled(Texto)`
  margin: 0 auto;
`

export const Nome = styled.h2`
  font-size: 30px;
  margin: 20px auto 0;
  font-family: Roboto, sans-serif;
`
