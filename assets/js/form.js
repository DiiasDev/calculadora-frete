import { Usuario } from "./usuarios.js"
import { Frete } from "./frete.js"

let usuarioService = new Usuario

export function FormCadastro() {
  try {

    const form = document.getElementById('form-cadastro')

    if (form) {
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

export function formLogin() {
  try {

    const form = document.getElementById('form-login')

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        usuarioService.loginUsuario()
      })
    }

  } catch (error) {
    console.log('Erro chamar função de login: ', error)
  }
}

export function formFrete() {
  try {
    const form = document.getElementById('form-frete');
    const freteService = new Frete

    function hideResult() {
      const resultadoDiv = document.getElementById('resultado')
      if (resultadoDiv) {
        resultadoDiv.classList.remove('show')
        setTimeout(() => {
          resultadoDiv.innerHTML = ''
        }, 400)
      }
    }

    document.querySelectorAll('.btn.next, .btn.prev').forEach(btn => {
      btn.addEventListener('click', hideResult)
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        freteService.calculaFrete()
      })
    }
  } catch (error) {
    console.error("Erro ao chamar função de calcular frete: ", error)
  }
}

FormCadastro()
formLogin()
formFrete()