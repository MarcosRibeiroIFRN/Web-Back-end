const express = require('express');
const mysql = require('mysql');
const routerAluno=require('./aluno.js')
const app=express();
const bodyParser=require('body-parser')

//configuração da conexão com o banco de dados mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'dbbiblioteca'
});

//conecta-se ao banco de dados
connection.connect((err)=>{
    if(err){
        console.error('Erro ao conectar ao banco de dados:',err);
        return;
    }
    console.log ('Conectado ao banco de dados MySQL')

})
app.use(bodyParser)
app.use('/aluno',routerAluno)
app.listen(3000,()=>{
    console.log('Servidor está rodando na porta 3000!')
})