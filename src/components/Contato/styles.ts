import styled from 'styled-components'
import { BotaoBase } from '../../styles'

export const CardContainer = styled.div`
max-width: 90%;
font-family: Roboto, sans-serif;
`

export const BotaoFavorito = styled.div`
background-color: #dcdcdc;
color: white;
width: 40px;
height: 40px;
margin-right: 10px;
padding: 6px;
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

  p{
    font-weight: bold;
    font-size: 20px;
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
`

export const Titulo = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #333;
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


export const Descricao = styled.p`
  margin-top: 12px;
  font-size: 13px;
  color: #c9c9c9;
  font-style: Roboto, sans-serif;
  font-weight: bold;
  background-color: #56616b;
  padding: 10px;
  border-radius: 10px;
  padding-bottom: 20px;
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

export const BotaoEditar = styled(BotaoBase)`
background-color: #4ca5f8;
color: white;
width: 40px;
height: 40px;
margin-right: 10px;

img {    
  width: 94%;
}
&:hover {
  background-color: #3998f1;
}

`


export const BotaoRemover = styled(BotaoBase)`
background-color: #DF6161;
color: white;

width: 40px;
height: 40px;

img {    
  width: 100%;
}

&:hover {
  background-color: #e64343;
}



`
