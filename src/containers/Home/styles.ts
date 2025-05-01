import styled from 'styled-components'

export const FundoHome = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    31deg,
    rgba(6, 1, 12) 20%,
    rgba(78, 16, 131, 1) 92%
  );
  position: fixed;
  color: #fff;
  text-align: center;
  font-family: Poppins, sans-serif;
`

export const TituloHome = styled.h1`
  font-size: 70px;
  margin: 0 auto;
  max-width: 1000px;
  padding-top: 130px;
  font-weight: bold;
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

export const Texto = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
  max-width: 600px;
  margin-bottom: 80px;
`

export const ImagemLink = styled.img`
  width: 80px;
  margin: 20px;
`
