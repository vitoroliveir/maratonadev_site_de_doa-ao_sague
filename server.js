// importa o módulo express para o projeto
const express = require('express')

// inicia um server express
const server = express()

// configura a apresentação de assets do projeto
server.use(express.static('public'))

// habilita o express para capturar dados no corpo do formulário
server.use(express.urlencoded({extended: true}))

// configura a conexão do node com o banco de dados
const Pool = require('pg').Pool
const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'doe',
    password: '33713079vitor',
    port: 5432
})

// configura a template engine
const nunjucks = require('nunjucks')

nunjucks.configure('./', {
   express: server,
   noCache: true
})

// configura a rota e o que deve ser retornado ao acessá-la
server.get('/', function(req, res) {
   const query = 'SELECT * FROM donors'
   db.query(query, function(err, result) {
      if (err) return res.send('Erro ao realizar consulta no Banco de Dados!')

      const donors = result.rows
      return res.render('index.html', {donors})
   })
});

// pega os dados do front-end e envia para o server
server.post('/', function(req, res) {
   // pega os dados do front-end
   const name = req.body.name
   const email = req.body.email
   const blood = req.body.blood

   // se algum campos estiver vazio
   if (name == '' || email == '' || blood == '') {
      return res.send("Todos os campo são obrigatórios.")
   }

   // põe os valores dentro do banco de dados
   const query = `INSERT INTO donors ("name", "email", "blood") VALUES ($1, $2, $3)`
   const values = [name, email, blood]
   db.query(query, values, function(err) {
      if (err) return res.send('Erro ao salvar no Banco de Dados!')

      // redireciona o usuário de volta à tela de cadastro
      return res.redirect('/')
   })


})

// liga o server e permite acesso na porta 3000
server.listen(3000)