const express = require('express');
const routerAluno=require('./aluno.js')
const app=express();
const bodyParser=require('body-parser')
const routerAutor=require('./autor.js')

app.use(bodyParser.json())
app.use('/aluno',routerAluno)
app.use('/autor',routerAutor)
app.listen(3000,()=>{
    console.log('Servidor está rodando na porta 3000!')
})