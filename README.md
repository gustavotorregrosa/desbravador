

## Desbravador - desafio frontend

A aplicação frontend aqui descrita se propõe a explorar a API do Github mostrando usuários, repositórios, buscas e informações correlatas.


- **Tecnologias Utilizadas:**
    - NextJS 15
    - Server Components
    - Server Actions
    - Axios
    - Material UI
    - Tailwind CSS
    - Cypress
    - pm2

- **Funcionalidades:**
    - Exploração da API do Github
    - Exibição de usuários e repositórios
    - Busca de informações correlatas

- **Hospedagem e Código:**
    - [Aplicação hospedada](https://desbravador.gustavo.torregrosa.dev)
    - [Código fonte](https://github.com/gustavotorregrosa/desbravador)


- **Observações:**
    - Foi usada a versão 15 do NextJS com o App Router, explorando o uso dos Server Components e também das Server Actions quando foi necessário usar Client Components
    - Para proteger a chave da API nenhuma request para os endpoints foi feita pelo frontend: está tudo do lado do server
    - Para as requests, foi criado um serviço http usando Axios (já embutindo os cabeçalhos) e um tipo genérico do TS
    - Utilizei a biblioteca do Material UI para os componentes, utilizando suas tabelas, cards, icones, navbar, etc
    - Apesar da aplicação ser voltada para desktop, coloquei uma responsividade, em especial mudando o background (com animação) para mobile
    - Utilizei tailwind para facilitar o CSS
    - Testes end-to-end com cypress
    - No container, uso o pm2 para manter a aplicação ativa
    - hospedado em https://desbravador.gustavo.torregrosa.dev
    - codigo em https://github.com/gustavotorregrosa/desbravador