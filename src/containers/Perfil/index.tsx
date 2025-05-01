import { Aside, Titulo, TextoPerfil, Nome, Email, BotaoPerfil } from "./style"
import { Texto } from "../../styles";

export const Perfil = () => {
    return (
        <Aside>
            <Titulo>Seu Perfil</Titulo>
            <Nome>Flávio Irala Pereira</Nome>
            <Email>Flavioiralap@gmail.com</Email>
            <TextoPerfil>
                <Texto>67 9 1234-6789</Texto>
                <Texto>Dev Front-End</Texto>
                <Texto>EBAC - Escola Britanica</Texto>
            </TextoPerfil>
            <BotaoPerfil>Editar Perfil</BotaoPerfil>
        </Aside>
    )
}