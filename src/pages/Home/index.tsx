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
      <a>
        <ImagemLink
          src="../../public/icons-github.png"
          alt="Descrição da imagem"
        />
      </a>
      <a>
        <ImagemLink
          src="../../public/icons8-linkedin.png"
          alt="Descrição da imagem"
        />
      </a>
    </FundoHome>
  )
}

export default Home
