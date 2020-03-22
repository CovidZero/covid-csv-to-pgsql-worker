# [COVID-19] CSV to PgSql Worker

O projeto em questão consiste em ler os dados relacionados ao COVID-19 do repositório [wcota/covid19br](https://github.com/wcota/covid19br) e transformá-los em dados inseridos/atualizados em um banco de dados Postgres.

## Estrutura

O worker está dividido em várias funções Lambdas que serão executadas em rotina. Para executar uma função localmente, use o comando a seguir: `npm run func -- {função}`