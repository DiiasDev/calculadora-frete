import { Usuario } from "./usuarios.js"

export default function FormCadastro() {
  try {
    const usuarioService = new Usuario()

    const form = document.getElementById('form-cadastro')

    if(form){
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        usuarioService.cadastrarUsuario()
      })
    }
    return
  } catch (error) {
    console.error('Erro ao fazer a chamada de cadastro de usuário', error)
  }
}

FormCadastro()