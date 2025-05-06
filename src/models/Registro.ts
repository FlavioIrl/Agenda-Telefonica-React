class Registro {
  nome: string
  email: string
  telefone: string
  login?: string
  descricao?: string
  id: number

  constructor(
    nome: string,
    email: string,
    telefone: string,
    id: number,
    login?: string,
    descricao?: string
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.login = login
    this.descricao = descricao
    this.id = id
  }
}
export default Registro