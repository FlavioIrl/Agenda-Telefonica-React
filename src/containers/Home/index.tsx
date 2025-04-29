import { FundoHome, TituloHome, BotaoHome, Texto, ImagemLink } from './styled';

const Home = () => {
  return (
    <FundoHome>
      <TituloHome>Bem-vindo à sua nova agenda corporativa!</TituloHome>
      <BotaoHome>Registre-se</BotaoHome>
      <Texto>
        Organize seu trabalho com segurança e simplicidade. Estamos aqui para
        facilitar a sua rotina!
      </Texto>
      <a>
        <ImagemLink src="../../public/icons-github.png" alt="Descrição da imagem" />
      </a>
      <a>
        <ImagemLink src="../../public/icons8-linkedin.png" alt="Descrição da imagem" />
      </a>
    </FundoHome>
  );
};

export default Home;
