const express = require('express');
const mysql = require('mysql');
const app=express();

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

//#region rotas

    app.get('/aluno',(req,res)=>{
        connection.query('SELECT * FROM tbaluno',(err,rows)=>{
            if(err){
                console.error('Erro ao executar a consulta',err);
                return;
            }
            res.json(rows);
        });
    });

    app.get('/aluno/:id',(req,res)=>{
        const id=req.params.id;
        const sql='SELECT * FROM tbaluno WHERE NuMatricula =?';
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
//#endregion
app.listen(3000,()=>{
    console.log('Servidor está rodando na porta 3000!')
})