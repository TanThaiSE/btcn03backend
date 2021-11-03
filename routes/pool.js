var mysql=require('mysql');
var connect =mysql.createConnection({
    host:'sql6.freemysqlhosting.net',
    user:'sql6448665',
    password:'rBnnRyQvUT',
    database:'sql6448665',
    connectionLimit:10
})
module.exports=connect;
