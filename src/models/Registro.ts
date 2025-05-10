import { Favorito } from '../utils/enums/Contato'

class RegistroClass {
  id: number
  nome: string
  login: string
  email: string
  telefone: string
  descricao: string
  status: Favorito

  constructor(
    id: number,
    nome: string,
    login: string,
    email: string,
    telefone: string,
    descricao: string,
    status: Favorito
  ) {
    this.id = id
    this.nome = nome
    this.login = login
    this.email = email
    this.telefone = telefone
    this.descricao = descricao
    this.status = status
  }
}

export default RegistroClass
