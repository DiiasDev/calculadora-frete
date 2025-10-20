import { Usuario } from "./usuarios.js"

let usuarioService = new Usuario

export function FormCadastro() {
  try {

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

export function formLogin(){
  try{

    const form = document.getElementById('form-login')

    if(form){
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        usuarioService.loginUsuario()
      })
    }
    
  } catch(error){
    console.log('Erro chamar função de login: ', error)
  }
}

FormCadastro()
formLogin()