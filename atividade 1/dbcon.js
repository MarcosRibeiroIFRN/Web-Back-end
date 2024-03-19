const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'dbbiblioteca'
});
connection.connect((err)=>{
    if(err){
        console.error('Erro ao conectar ao banco de dados:',err);
        return;
    }
    console.log ('Conectado ao banco de dados MySQL')

})
module.export=connection