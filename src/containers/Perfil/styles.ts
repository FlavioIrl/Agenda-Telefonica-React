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
  width: 30vw;
  max-width: 100px;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  margin: 0 auto;
  display: block;
`

export const Aside = styled.aside`
  display: flex;
  width: 350px;
  flex-direction: column;
  height: 100vh;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Titulo = styled.h1`
  font-size: clamp(24px, 5vw, 40px);
  margin: 10px auto 30px;
  font-family: Poppins, sans-serif;

  @media (max-width: 768px) {
    font-size: 30px;
  }
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
  f @media (max-width: 768px) {
    width: 80%;
  }
`

export const TextoDiv = styled.div`
  margin: 20px 15px;
  padding: 8px;
  border-radius: 10px;
  background-color: #3a3a3a;
`

export const TextoPerfil = styled.textarea`
  font-size: clamp(18px, 4vw, 22px);
  font-family: Roboto, sans-serif;
  margin-left: 5px;
  font-weight: bold;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
  color: #cacaca;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const Email = styled.textarea`
  margin: 0 auto;
  margin-bottom: 60px;
  font-size: clamp(12px, 3vw, 15px);
  text-align: center;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  color: #545454;
  width: 100%;
  height: 30px;
  resize: none;
  border: none;
  background-color: transparent;
  overflow: hidden;
`

export const Nome = styled.textarea`
  font-size: clamp(24px, 4vw, 30px);
  color: #1d1d1d;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  margin: 20px auto 0;
  width: 100%;
  height: 40px;
  line-height: 24px;
  border: none;
  background-color: transparent;
  resize: none;
  overflow: hidden;
`
