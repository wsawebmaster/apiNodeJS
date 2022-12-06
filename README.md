## Criando API [NodeJS + Express + MongoDB]

Softwares Recomendados:
 - npm: https://docs.npmjs.com/cli/v6/commands/npm-install
 - NodeJS: https://nodejs.org/en/
 - VSCode: https://code.visualstudio.com/download
 - Postman: https://www.postman.com/downloads/

## Iniciando Projeto:
 - Após instalar os softwares recomendados
 - Crie um diretório como nome do projeto

## Comando recomendados
 - npm init -y             => Inicia desenvolvimento do Projeto
 - npm install express     => Instala pacote Express
 - node src/server.js      => Inicia Servidor
 - npm install mongoose    => Instala pacote mongoose
 - npm install bcryptjs    => Instala pacote bcryptjs
 - npm install jsonwebtoken    => Instala pacote

## Resumo
 - Criação de Banco no MongoDB (NoSQL)
 - Adicionando registros ao banco
   - Validação por email não permitindo duplicidade de registro
   - Criptografia de senha aumentando um pouco a segurança

## Gitignore
/node_modules

- Criado Rota de autenticação
- Gerado Token
- Adicionado Autenticação JWT com pacote jsonwebtoken