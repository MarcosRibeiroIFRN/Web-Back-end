const express = require('express');
const routerAluno=require('./aluno.js')
const bodyParser=require('body-parser')
const routerAutor=require('./autor.js')

const app=express();
app.use(bodyParser.json())
app.use('/aluno',routerAluno)
app.use('/autor',routerAutor)

app.listen(3000,()=>{
    console.log('Servidor está rodando na porta 3000!')
})