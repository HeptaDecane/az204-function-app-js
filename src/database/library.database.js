const mysql = require('mysql2/promise')

const connectionPool = mysql.createPool({
    host: process.env.LIBRARY_DB_HOST,
    user: process.env.LIBRARY_DB_USER,
    password: process.env.LIBRARY_DB_PASSWORD,
    database: 'library',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 1,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true
})

module.exports = {
    libraryConnectionPool: connectionPool
}