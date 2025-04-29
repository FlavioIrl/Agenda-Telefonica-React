import { FundoRegistro, TituloRegistro, BotaoRegistro, Texto, ImagemLink } from './styled';

const Registro = () => {
  return (
    <FundoRegistro>
      <TituloRegistro>Bem-vindo à sua nova agenda corporativa!</TituloRegistro>
      <BotaoRegistro>Registre-se</BotaoRegistro>
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
    </FundoRegistro>
  );
};

export default Registro;
