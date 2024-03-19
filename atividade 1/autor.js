const express = require('express');
const routerAutor=express.Router()
const connection=require('./dbcon.js')
//configuração da conexão com o banco de dados mysql

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
routerAutor.post('/',(req,res)=>{
    const NuMatricula=req.body.IdAutopr;
    const NoAluno=req.body.NoAutor
    const TxIngresso=req.body.IdNacionalidade
    const sql = 'INSERT INRO tbaluno(IdAutor,NoAutor,IdNacionalidade) values(?,?,?)';
    connection.query(sql,[NuMatricula,NoAluno,TxIngresso,IdCurso],(erro,linhas)=>{
        if(erro){
            console.log(erro);
            res.status(400).send(erro.message);
        } else{
            res.status(201).send('Autor cadastrado com sucesso')
        }
    })
})
routerAutor.delete('/:id',(req,res)=>{
    const id=req.params.id;
    const sql='DELETE * FROM tbalutor WHERE IdAutor =?';
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
routerAutor.put('/',(req,res)=>{
    const id=req.params.id
    const NoAutor=req.body.NoAutor
    res.status(201).send('Aluno cadastrado com sucesso.')
    const sql = 'UPDATE FROM tbalunmo SET NoAutor=? WHERE IdAutor=?'
    connection.query(sql,[NoAutor,id],(erro,linhas)=>{
        if(erro){
            console.log(erro);
            res.status(400).send(erro.message);
        } else{
            res.status(200).send('Aluno atualizado com sucesso')
        }
    })
})
module.exports=routerAutor