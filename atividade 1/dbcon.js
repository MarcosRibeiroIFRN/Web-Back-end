const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'dbbiblioteca'
});
connection.connect((err)=>{
    if(err){
        console.error(err);
    
    }else{
    console.log ('Conectado ao banco de dados MySQL')
    }
})
module.exports=connection;