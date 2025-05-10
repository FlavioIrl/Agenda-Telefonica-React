import { FundoHome, TituloHome, BotaoHome, Texto, ImagemLink } from './styles'

const Home = () => {
  return (
    <FundoHome>
      <TituloHome>Bem-vindo à sua nova agenda corporativa!</TituloHome>
      <BotaoHome to="/registro">Registre-se</BotaoHome>
      <Texto>
        Organize seu trabalho com segurança e simplicidade. Estamos aqui para
        facilitar a sua rotina!
      </Texto>
      <a href="https://github.com/FlavioIrl" target="_blank" rel="noopener noreferrer">
        <ImagemLink src="/icons-github.png" alt="GitHub" />
      </a>
      <a href="https://linkedin.com/in/flavio-irala-pereira-16ab22b" target="_blank" rel="noopener noreferrer">
        <ImagemLink src="/icons8-linkedin.png" alt="LinkedIn" />
      </a>

    </FundoHome>
  )
}

export default Home
