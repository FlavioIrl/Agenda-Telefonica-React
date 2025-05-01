import styled from "styled-components"
import { BotaoBase } from '../../styles'

export const PaginaLista = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const BotaoLista = styled(BotaoBase)`
    background-color: #61ABF0;
    border-radius: 10px;
    margin: 20px 80% 0;
    padding: 10px 0;

    &:hover{
        background-color: #7ab6ed;
    }
` 

export const Titulo = styled.h1`
    font-size: 50px;
    text-align: center;
    margin-top:  68px;
    font-family: Poppins, sans-serif;
`
