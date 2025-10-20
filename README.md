# 📦 Vision Calculate - Calculadora de Frete

**Seguro. Pontual. Profissional.**

Sistema web para cálculo de frete desenvolvido para transportadoras que buscam eficiência e profissionalismo no gerenciamento de cargas.


<img width="1609" height="834" alt="image" src="https://github.com/user-attachments/assets/a70e2720-c508-4239-a741-beb241dec0bb" />


## 🚀 Características

- **Sistema de Autenticação**: Login e cadastro de usuários seguros
- **Cálculo Inteligente**: Algoritmo preciso para cálculo de fretes baseado em peso, distância e taxas
- **Interface Intuitiva**: Design responsivo e experiência de usuário otimizada
- **Processo Guiado**: Formulário em etapas para facilitar o preenchimento
- **Validação em Tempo Real**: Verificação instantânea dos dados inseridos


<img width="1923" height="997" alt="image" src="https://github.com/user-attachments/assets/dc6570c8-963f-4526-b612-d8421f877754" />


## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript/TypeScript
- **Arquitetura**: Modular com ES6 Modules e Programação Orientada a Objetos
- **Design**: CSS Grid, Flexbox, Responsive Design
- **Validação**: JavaScript nativo para validação de formulários
- **Paradigma**: Orientação a Objetos (Classes, Encapsulamento, Abstração)

## 🏗️ Arquitetura Orientada a Objetos

O projeto foi desenvolvido seguindo os princípios da **Programação Orientada a Objetos**, com classes especializadas para cada funcionalidade:

### 📚 Classes Principais

#### `Usuario` - Gerenciamento de Usuários
```javascript
export class Usuario {
  constructor() {
    // Inicialização dos dados de usuários
  }
  
  cadastrarUsuario() {
    // Lógica para cadastrar novos usuários
  }
  
  loginUsuario() {
    // Validação e autenticação de usuários
  }
}
```

#### `Frete` - Cálculos de Frete
```javascript
export class Frete {
  constructor() {
    // Inicialização da calculadora
  }
  
  calculaFrete() {
    // Algoritmo de cálculo de frete
  }
}
```

#### `CustomAlert` - Sistema de Alertas
```javascript
export class CustomAlert {
  static success(message) {
    // Exibe alertas de sucesso
  }
  
  static error(message) {
    // Exibe alertas de erro
  }
}
```

### 🔧 Benefícios da Abordagem OOP

- **Encapsulamento**: Cada classe gerencia suas próprias responsabilidades
- **Reutilização**: Código modular e reutilizável
- **Manutenibilidade**: Estrutura clara e organizada
- **Escalabilidade**: Fácil adição de novas funcionalidades
- **Testabilidade**: Classes isoladas facilitam os testes


<img width="1923" height="997" alt="image" src="https://github.com/user-attachments/assets/32a80d8e-7708-433f-972a-981014da4daa" />


## 📋 Funcionalidades

- Cadastro e login de usuários com validação de dados
- Cálculo de frete baseado em peso, distância e taxas
- Interface responsiva e intuitiva
- Feedback visual para ações do usuário
- Persistência de dados cadastrais no navegador

## 📁 Estrutura do Projeto

```
calculadora-de-frete/
├── index.html                 # Página de login
├── assets/
│   ├── pages/
│   │   ├── cadastroUsuario.html   # Página de cadastro
│   │   ├── homePage.html          # Dashboard principal
│   │   └── formFrete.html         # Formulário de cálculo
│   ├── css/
│   │   ├── login.css              # Estilos do login
│   │   ├── cadastroUsuario.css    # Estilos do cadastro
│   │   ├── homePage.css           # Estilos do dashboard
│   │   ├── formFrete.css          # Estilos do formulário
│   │   └── customAlert.css        # Estilos dos alertas
│   └── js/
│       ├── form.js                # Controlador dos formulários
│       ├── usuarios.js            # Classe Usuario (OOP)
│       ├── frete.js               # Classe Frete (OOP)
│       └── customAlert.js         # Classe CustomAlert (OOP)
└── README.md
```

## 🔧 Funcionalidades Técnicas

- **Programação Orientada a Objetos**: Classes especializadas para cada módulo
- **ES6 Modules**: Sistema modular de importação/exportação
- **Validação de Formulários**: Verificação em tempo real
- **Navegação por Etapas**: Interface progressiva
- **Responsividade**: Compatível com dispositivos móveis
- **Alertas Customizados**: Feedback visual para o usuário
- **LocalStorage**: Persistência de dados no navegador


<img width="1923" height="997" alt="image" src="https://github.com/user-attachments/assets/b1d6d5c9-f019-4a2d-a970-fc7c5813f7cd" />
