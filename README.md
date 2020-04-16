DOE Sangue

MaratonaDev 3.0 - DOE Sangue
 

Projeto DOE Sangue Desenvolvido durante a 3ª Edição da MaratonaDev da Rocketseat.
🚀 Tecnologias
Node.js | Javascript | Html | CSS | Nodemon | PostgreSQL | Nunjucks

💻 Projeto
O sistema Doe Sangue é um cadastro doadores de sangue, feito com Node.js, PostgreSQL e algumas dependências JS. O mesmo foi desenvolvido nos dias 17 e 18 de Fevereiro de 2020, durante a 3ª Edição do MaratonaDev, da Rocketseat.

Frontend
Página com o form oculto 

Página com o form exposto, ao ser clicado o botão "Quero ajudar" 

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
