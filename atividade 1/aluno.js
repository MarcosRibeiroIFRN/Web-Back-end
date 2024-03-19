const express = require('express');
const routerAluno=express.Router()
const connection=require('./dbcon.js')

//#region rotas

routerAluno.get('/',(req,res)=>{
    connection.query('SELECT * FROM tbaluno',(err,rows)=>{
        if(err){
            console.error('Erro ao executar a consulta',err);
            return;
        }
        res.json(rows);
    });
});

routerAluno.get('/:id',(req,res)=>{
    const id=req.params.id;
    const sql='SELECT * FROM tbaluno WHERE NuMatricula =?';
    connection.query(sql,[id],(erro,linhas)=>{
        if(erro){
            console.log(erro)
        }else{
            if(linhas.length>0){
                res.json(linhas[0]);
            }else{
                res.status(404).send('Registro não localizado')
            }
        }
    });
});
routerAluno.post('/',(req,res)=>{
    const NuMatricula=req.body.NuMatricula;
    const NoAluno=req.body.NoAluno
    const TxIngresso=req.body.TxIngresso
    const IdCurso=req.body.IdCurso
    res.status(201).send('Aluno cadastrado com sucesso.')
    const sql = 'INSERT INRO tbaluno(NuMatricula,NoAluno,TxIngresso,IdCurso) values(?,?,?,?)';
    connection.query(sql,[NuMatricula,NoAluno,TxIngresso,IdCurso],(erro,linhas)=>{
        if(erro){
            console.log(erro);
            res.status(400).send(erro.message);
        } else{
            res.status(201).send('Aluno cadastrado com sucesso')
        }
    })
})
routerAluno.delete('/:id',(req,res)=>{
    const id=req.params.id;
    const sql='DELETE * FROM tbaluno WHERE NuMatricula =?';
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
routerAluno.put('/',(req,res)=>{
    const id=req.params.id
    const NoAluno=req.body.NoAluno
    const TxIngresso=req.body.TxIngresso
    const IdCurso=req.body.IdCurso
    res.status(201).send('Aluno cadastrado com sucesso.')
    const sql = 'UPDATE FROM tbalunmo SET NoAluno=?, TxIngresso=?,IdCurso=? WHERE NuMaticula=?'
    connection.query(sql,[NoAluno,TxIngresso,IdCurso,id],(erro,linhas)=>{
        if(erro){
            console.log(erro);
            res.status(400).send(erro.message);
        } else{
            res.status(200).send('Aluno atualizado com sucesso')
        }
    })
})
module.exports=routerAluno
//#endregion