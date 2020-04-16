Instalação
Em primeiro lugar, é necessário que você tenha o Node.js (com o NPM) e o PostgreSQL instalados em sua máquina. Caso ainda não os tenha, deixarei aqui os links para download, mas infelizmente não poderei na instalação dos mesmos. Segue os respectivos links de download:
Node.JS
PostgreSQL
Siga às etapas seguintes para realizar a instalação do projeto em si:
Para baixar o projeto em sua máquina:
git clone https://github.com/edsssonrodrigues/maratona-dev-3.git
Entre na pasta do projeto:
cd maratona-dev-3
Baixe as depêndencias que o projeto precisa para executar:
npm install
No PostgreSQL, crie um Banco de Dados chamado 'doe' (sem as aspas) e dentro dele uma tabelas chamada 'donors' (também sem aspas). Segue o código SQL para a criação da tabela:
CREATE TABLE "public"."donors" (
"id" int4 DEFAULT nextval('donors_id_seq'::regclass) NOT NULL,
"name" text COLLATE "default" NOT NULL,
"email" text COLLATE "default" NOT NULL,
"blood" text COLLATE "default" NOT NULL
)
WITH (OIDS=FALSE);
Execute o projeto:
npm start
Abra o projeto em seu navegador, no seguinte endereço:
localhost:3000
