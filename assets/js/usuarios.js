import { CustomAlert } from './customAlert.js';

export class Usuario {
  constructor() {
    this.dados = localStorage.getItem('usuarios')
    this.usuarios = this.dados ? JSON.parse(this.dados) : []
  }

  cadastrarUsuario() {
    try {

      const usuario = document.getElementById('usuarioCadastro').value;
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senhaCadastro').value;

      const usuarioExistente = this.usuarios.find(user => user.email === email)

      if(usuarioExistente){
        CustomAlert.error('Email já cadastrado...')
        return null
      }

      const novoUsuario = {
        usuario: usuario,
        email: email,
        senha: senha
      };

      this.usuarios.push(novoUsuario)
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios))

      console.log('Usuário cadastrado com sucesso ', novoUsuario)

      CustomAlert.success('Usuário cadastrado com sucesso!')

      return novoUsuario

    } catch (error) {
      console.error('Erro ao cadastrar usuário')
      CustomAlert.error('Erro ao cadastrar usuário. Tente novamente.')
    }
  }

  loginUsuario(){
    try{
      const usuario = document.getElementById('usuario').value;
      const senha = document.getElementById('senha').value;

      const validaLogin = this.usuarios.find(user => user.usuario === usuario || user.senha === senha); 

      if(!validaLogin){
        CustomAlert.error('Usuário ou senha incorretos')
        return
      }

      CustomAlert.success("Logando...")

      setTimeout(() => {
        window.location.href ="./assets/pages/homePage.html"
      },1000)

    } catch(error){
      console.error('Erro ao logar: ', error)
      CustomAlert.error('Erro ao fazer login. Tente novamente.')
    }
  }
}
