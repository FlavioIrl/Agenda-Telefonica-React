import styled from 'styled-components'
import { BotaoBase } from '../../styles'

export const CardContainer = styled.div`
max-width: 90%;
font-family: Roboto, sans-serif;
`


export const Card = styled.div`
background-color: #cacaca;
padding: 8px;
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
}

`


export const Descricao = styled.p`
margin-top: 12px;
font-size: 13px;
color: #888;
font-style: italic;

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
background-color: #527AD0;
color: white;
width: 40px;
height: 40px;
margin-right: 10px;

img {    
  width: 100%;
}
&:hover {
  background-color: #2d2d2d;
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
  background-color: #c9302c;
}



`
