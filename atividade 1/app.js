const express = require('express');
const routerAluno=require('./aluno.js')
const bodyParser=require('body-parser')
const routerAutor=require('./autor.js')
const jwt =require ('jsonwebtoken')
const secretWord="ifrn2024"
const app=express();
app.use(bodyParser.json())
app.use('/aluno',verificarToken,routerAluno)
app.use('/autor',routerAutor)

function gerarToken(payload){
    return jwt.sign(payload,secretWord,{expiresIn:20})
}
function verificarToken(req,res,next){
    const token =req.headers['x-acess-token'];
    if(!token){
        return res.status(401).json({
            mensagemErro:"Usuário não autenticado. Faça o login antes de chamar esse recurso"
        })
    }else{
        jwt.verify(token,secretWord,(error,decoded)=>{
            if(error){
                return res.status(403).json({mensagemErro:'Token inválido. Faça o login novamente.'})
            }else{
                const nomeUsuario=decoded.nomeUsuario;
                console.log(`Usuário ${nomeUsuario} autenticado com sucesso.`)
                next();
            }
        })
    }
}
app.post('/login',(req,res)=>{
    const loginName=req.body.loginName;
    const password=req.body.password;
    if (loginName==="admin"&&password==="123"){
        const payload={nomeUsuario:'Administrador'}
        const token=gerarToken(payload);
        res.json({acessToken:token})
    }else{
        res.status(403).send("Usuário ou senha inválido")
    }
})

app.listen(3000,()=>{
    console.log('Servidor está rodando na porta 3000!')
})