
class connection {
    constructor(host, user, password, database) {
        let mysql = require('mysql2');

        this.con = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database,
            dateStrings: true

        }).promise();
    }

    async queary(sql) {
        try {

            let result = await this.con.query(sql);
            return result;
        } catch (error) {
            console.log(error);

        }
    }

    async update(sql, content) {
        try {

            console.log("sql is", sql);
            let result = await this.con.query(sql, content);
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);

        }
    }
}


module.exports = connection;