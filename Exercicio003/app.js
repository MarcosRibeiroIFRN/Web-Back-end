const express = require('express');
const routerAluno = require('./aluno.js');
const routerAutor = require('./autor.js');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const dbconn= require('./conexao.js')
const crypto =require('crypto')

const secretWord = 'IFRN2@24';

const app = express();
app.use(bodyParser.json());
app.use('/aluno', verificarToken, routerAluno);
app.use('/autor', verificarToken, routerAutor);

function gerarToken(payload) {
  return jwt.sign(payload, secretWord, { expiresIn: 20 });
}

function verificarToken(req, res, next) {
  //var token = req.headers['x-access-token'];
  var token = req.headers.authorization;
  token = token.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({
      mensagemErro:
        'Usuário não autenticado. Faça login antes de chamar este recurso.',
    });
  } else {
    jwt.verify(token, secretWord, (error, decoded) => {
      if (error) {
        return res
          .status(403)
          .json({ mensagemErro: 'Token inválido. Faça login novamente.' });
      } else {
        const nomeUsuario = decoded.nomeUsuario;
        console.log(`Usuário ${nomeUsuario} autenticado com sucesso.`);
        next();
      }
    });
  }
}

app.post('/login', (req, res) => {
  const loginName = req.body.loginName;
  const password = req.body.password;
  if (loginName === 'admin' && password === '123') {
    const payload = { nomeUsuario: 'Administrador' };
    const token = gerarToken(payload);
    res.json({ acessToken: token });
  } else {
    res.status(403).json({ mensagemErro: 'Usuário ou senha inválidos' });
  }
});

app.listen(3000, () => {
  console.log(`Servidor web iniciado na porta 3000`);
});
