var mysql=require('mysql');

var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'angular-itea-db',
    port: 3306
});

module.exports = connection;