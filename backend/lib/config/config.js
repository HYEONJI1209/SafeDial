const mysql = require("mysql2");
require("dotenv").config(); 

const ExdbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
    timezone: process.env.DB_TIMEZONE,
}

const ExdbConnection = mysql.createPool(ExdbConfig);

ExdbConnection.getConnection((err, connection) => {
    if (err) {
        console.error("데이터베이스 연결 실패:", err);
    } else {
        console.log("데이터베이스에 성공적으로 연결되었습니다.");
    }
    connection.release();
});

module.exports = { ExdbConfig };