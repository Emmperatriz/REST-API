//DATABASE CONECTION
const mysql = require('mysql');

/* const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '16061995eab17',
    database: 'Melp'


}); */

const mysqlConnection = mysql.createPool(process.env.CLEARDB_DATABASE_URL);

/* mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Conexión Exitosa');
    }
}); */
module.exports = mysqlConnection;