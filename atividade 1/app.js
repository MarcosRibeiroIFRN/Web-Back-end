const express = require('express');
const routerAluno=require('./aluno.js')
const app=express();
const bodyParser=require('body-parser')

app.use(bodyParser)
app.use('/aluno',routerAluno)
app.listen(3000,()=>{
    console.log('Servidor está rodando na porta 3000!')
})