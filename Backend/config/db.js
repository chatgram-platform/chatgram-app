const mysql = require('mysql2');
require('dotenv').config();
// console.log("pass",process.env.DB_PASSWORD)
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: '12345678',
  database:  'chatgram',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
pool.getConnection((err,corr)=>{
  if (err){
    console.log("Error occurred when connecting to the database",err);
  }
  else{
    console.log("Successfully Connected to database")
  }
})
module.exports = pool.promise();
