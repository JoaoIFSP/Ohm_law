# Projeto: Site Multifunção

Este projeto é um site multifuncional com um design moderno e interativo, utilizando HTML, CSS e conceitos de design como Glassmorphism e transições dinâmicas. O site tem várias seções interativas e é otimizado para dispositivos móveis.

## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Detalhes do Código](#detalhes-do-código)
- [Responsividade](#responsividade)
- [Instruções para Execução](#instruções-para-execução)
- [Licença](#licença)

---

## Visão Geral

Este site foi desenvolvido com foco em uma experiência de usuário limpa e moderna. Ele utiliza uma estrutura de layout flexível e responsiva, com transições e efeitos visuais agradáveis, como o Glassmorphism e animações em hover. O site é composto por um cabeçalho, área principal e rodapé, com áreas específicas de conteúdo e uma seção de overlay.

---

## Tecnologias Utilizadas

- **HTML5**: Utilizado para estruturar o conteúdo da página.
- **CSS3**: Usado para estilizar o layout e aplicar efeitos visuais, como o Glassmorphism, transições e animações.
- **Media Queries**: Para tornar o site responsivo, ajustando o layout conforme o tamanho da tela.

---

## Estrutura do Projeto

O projeto está organizado da seguinte maneira:

/project-root ├── /css │ ├── apis.css # Estilos principais │ ├── calc.css # Estilos para a seção de cálculo │ ├── exemp.css # Estilos para exemplo específico │ ├── trifurc.css # Estilos para a seção trifurcação │ └── style.css # Estilos gerais ├── /index.html # Arquivo principal da página ├── /README.md # Este arquivo └── /footer.html # HTML do rodapé


---

## Detalhes do Código

### HTML - Estrutura e Tags

1. **Tag `<header>`**:
   - Utilizada para definir o cabeçalho do site. Contém o logo, links de navegação e o layout do cabeçalho.
   - Exemplo:
     ```html
     <header>
       <div class="header-left">
         <div class="logo">Logo</div>
       </div>
       <div class="nav-links">
         <button>Home</button>
         <button>Sobre</button>
       </div>
     </header>
     ```

2. **Tag `<nav>`**:
   - Representa a navegação do site. Dentro do `header`, contém os links de navegação.
   - Exemplo:
     ```html
     <nav>
       <button>Home</button>
       <button>Sobre</button>
     </nav>
     ```

3. **Tag `<main>`**:
   - Representa a parte principal da página. Aqui, o conteúdo da página é distribuído entre duas áreas: esquerda e direita.
   - Exemplo:
     ```html
     <main class="main-container">
       <div class="left-side">Conteúdo Esquerdo</div>
       <div class="right-side">Conteúdo Direito</div>
     </main>
     ```

4. **Tag `<footer>`**:
   - Definido para o rodapé do site. Geralmente contém informações de copyright ou links adicionais.
   - Exemplo:
     ```html
     <footer>
       <p>&copy; 2025 Seu Nome</p>
     </footer>
     ```

5. **Tag `<div>`**:
   - Utilizada para agrupar outros elementos. Não altera a aparência da página por si só, mas serve para estruturar o layout.
   - Exemplo:
     ```html
     <div class="container">
       <h1>Seção de Conteúdo</h1>
       <p>Texto de exemplo</p>
     </div>
     ```

### CSS - Estilos e Efeitos

1. **Reset de Estilos**:
   - A regra `* { margin: 0; padding: 0; box-sizing: border-box; }` é utilizada para garantir que todos os elementos tenham as mesmas configurações de margens e preenchimento, evitando variações indesejadas entre navegadores.

2. **Flexbox**:
   - Utilizado para criar layouts flexíveis. A regra `display: flex;` permite que os elementos se alinhem facilmente em uma direção (linha ou coluna).
   - Exemplo:
     ```css
     .main-container {
       display: flex;
       flex-direction: row-reverse;
     }
     ```

3. **Efeito de Hover**:
   - Adiciona animações aos botões quando o usuário passa o mouse sobre eles. No caso, há uma transformação de escala e mudança de cor.
   - Exemplo:
     ```css
     .nav-links button:hover {
       background: #0077B6;
       transform: scale(1.05);
     }
     ```

4. **Glassmorphism**:
   - Efeito visual aplicado a algumas áreas do site, onde o fundo tem uma opacidade e é desfocado, criando uma aparência de vidro.
   - Exemplo:
     ```css
     .container {
       backdrop-filter: blur(10px);
       background-color: rgba(27, 31, 59, 0.8);
     }
     ```

5. **Media Queries**:
   - Utilizadas para tornar o layout responsivo, ajustando o design para diferentes tamanhos de tela.
   - Exemplo:
     ```css
     @media (max-width: 768px) {
       .main-container {
         flex-direction: column;
       }
     }
     ```

---

## Responsividade

O layout foi desenvolvido para se ajustar a diferentes tamanhos de tela, garantindo que o conteúdo seja apresentado de forma otimizada em dispositivos móveis e desktops.

- **Acima de 992px**: Layout padrão, com elementos dispostos em linha.
- **Entre 768px e 992px**: O layout se adapta, centralizando o conteúdo.
- **Abaixo de 768px**: O layout se reorganiza em uma coluna, com os elementos se ajustando ao tamanho da tela.

---

## Instruções para Execução

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
