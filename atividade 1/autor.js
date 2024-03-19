const express = require('express');
const mysql = require('mysql');
const routerAutor=express.Router()
//configuração da conexão com o banco de dados mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'dbbiblioteca'
});
//#region rotas

routerAutor.get('/',(req,res)=>{
    connection.query('SELECT * FROM tbautor',(err,rows)=>{
        if(err){
            console.error('Erro ao executar a consulta',err);
            return;
        }
        res.json(rows);
    });
});

routerAutor.get('/:id',(req,res)=>{
    const id=req.params.id;
    const sql='SELECT * FROM tbautor WHERE IdAutor =?';
    connection.query(sql,[id],(erro,linhas)=>{
        if(erro){
            console.log(erro)
        }else{
            if(linhas.length>0){
                res.json(linhas);
            }else{
                res.status(404).send('Registro não localizado')
            }
        }
    });
});