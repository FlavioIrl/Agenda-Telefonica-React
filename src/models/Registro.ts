import * as enums from '../utils/enums/Contato'

class Registro {
  nome: string
  email: string
  telefone: string
  login: string
  descricao: string
  id: number
  status: enums.Favorito

  constructor(
    nome: string,
    email: string,
    telefone: string,
    id: number,
    login: string,
    descricao: string,
    status: enums.Favorito
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.login = login
    this.descricao = descricao
    this.id = id
    this.status = status
  }
}
export default Registro
