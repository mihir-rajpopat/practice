



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
        let result = await this.con.query(sql);
        return result;
    }
}


module.exports = connection;