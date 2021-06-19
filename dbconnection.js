const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P@ssw0rd21288',
    database: 'learn_nodejs'
})

conn.connect((error) => {
    if (error) throw error;
    console.log('MySQL Connected');
});