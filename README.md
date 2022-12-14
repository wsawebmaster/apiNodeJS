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
 - npm init -y                   => Cria o arquivo package.json(registra todas as dependências do projeto)
 - npm install express --save    => Instala o framework Express.js e todas suas dependências(para construir APIs back-end com o Node.js)
                                  - Cria a pasta node_modules(temos express e outros arquivos necessários para o funcionamento)
                                  - Cria o arquivo package-lock.json(relaciona as dependências, versões e outros detalhes sobre elas)
 - node src/server.js            => Inicia Servidor
 - npm install mongoose          => Instala pacote mongoose
 - npm install bcryptjs          => Instala pacote bcryptjs
 - npm install jsonwebtoken      => Instala pacote
 
## Após baixar o projeto utilize o comando
 - npm install                   => Instala novamente as dependências do projeto e cria os arquivos necessários para execução do projeto

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
