let mysql = require("mysql2")
const { config } = require("dotenv")
require("dotenv").config()


let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "node_dashboard",
    password: "password",
    dateStrings: true
}).promise()

console.log("connected");




module.exports = conn;