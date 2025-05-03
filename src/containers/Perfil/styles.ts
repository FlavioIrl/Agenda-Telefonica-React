import styled from 'styled-components'
import { BotaoBase } from '../../styles'

export const ContainerPerfil = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: #cacaca;
`

export const ImagemPerfil = styled.img`
  background-color: #61abf0;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 0 auto;
`

export const Aside = styled.aside`
  display: flex;
  width: 350px;
  flex-direction: column;
  height: 100vh;
`

export const Titulo = styled.h1`
  font-size: 40px;
  margin: 40px auto 60px;
  font-family: Poppins, sans-serif;
`

export const BotaoPerfil = styled(BotaoBase)`
  height: 50px;
  width: 250px;
  margin: 20px auto 0;
  padding: 5px;
  background-color: #3a3a3a;

  &:hover {
    background-color: rgb(78, 77, 77);
  }
`

export const TextoDiv = styled.div`
  margin: 20px 15px;
  padding: 8px;
  padding-top: 20px;
  border-radius: 10px;
  background-color: #3a3a3a;
`

export const TextoPerfil = styled.textarea`
  font-size: 22px;
  font-family: Roboto, sans-serif;
  margin-left: 5px;
  font-weight: bold;
  width: 100%;
  line-height: 13px;
  resize: none;
  border: none;
  background-color: transparent;
  color: #cacaca;
`

export const Email = styled.textarea`
  margin: 0 auto;
  margin-bottom: 60px;
  font-size: 15px;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  color: #545454;
  width: 100%;
  height: 30px;
  color: #545454;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Nome = styled.textarea`
  font-size: 30px;
  color: #1d1d1d;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  margin: 20px auto 0;
  width: 100%;
  height: 40px;
  line-height: 24px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const DescricaoPerfil = styled.textarea`
  padding: 10px;
  color: #c9c9c9;
  font-size: 15px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  max-height: 150px;
  height: 100px;
  width: 100%;
  line-height: 24px;
  resize: none;
  border: none;
  background-color: #56616b;
  margin-top: 30px;
  border-radius: 10px;
`
