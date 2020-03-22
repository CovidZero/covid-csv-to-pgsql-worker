# [COVID-19] CSV to PgSql Worker

O projeto em questão consiste em ler os dados relacionados ao COVID-19 do repositório [wcota/covid19br](https://github.com/wcota/covid19br) e transformá-los em dados inseridos/atualizados em um banco de dados Postgres.

## Início rápido

Para realizar a primeira execução do projeto, siga os passos informados abaixo:

1. Realize o clone do projeto;
2. Copie o arquivo `.env.example` para `.env` e preencha-o com as variáveis solicitadas.
3. Execute a instalação das bibliotecas com o comando `npm install`;
4. Caso seja seu primeiro contato com o Postgres, siga os passos descritos abaixo em "Instalando o cliente do PostgreSQL" para garantir que a conexão funcione corretamente;
5. Escolha uma das funções descritas no arquivo `serverless.yml` e execute o comando `npm run func -- {nome_da_funcao}` para executá-la. Exemplo: `npm run func -- worker-total`

### Instalando o cliente do PostgreSQL

Para garantir o funcionamento da biblioteca `pg-native`, é necessário instalar o cliente do PostgreSQL. Para isso, siga os passos citados abaixo:
- Para OS X: `brew install postgres`
- Para Ubuntu/Debian: `apt-get install libpq-dev g++ make` (válido para Ubuntu for Windows)
- Para RHEL/CentOS: `yum install postgresql-devel`
- Para Windows: 
1. Instale o Visual Studio C++ (successfully built with Express 2010).
2. Instale o PostgreSQL (http://www.postgresql.org/download/windows/)
3. Adicione o diretório `bin` da instalação do Postgres no path do sistema (i.e. C:\Program Files\PostgreSQL\9.3\bin).
4. Confira se os arquivos libpq.dll e pg_config.exe estão nessa pasta.

## Estrutura

O worker está dividido em várias funções Lambdas que serão executadas em rotina. Para executar uma função localmente, use o comando a seguir: `npm run func -- {nome_da_funcao}`

## Deploy

Para realizar o deploy, popule o arquivo `.env` com os dados necessários e execute o comando `npm run deploy:prd`. É necessário possuir as chaves da AWS nas variáveis de ambiente (`AWS_ACCESS_KEY_ID` e `AWS_SECRET_ACCESS_KEY`).