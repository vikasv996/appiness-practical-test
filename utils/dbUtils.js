const config = require('../config.js').get(process.env.NODE_ENV);
const util = require('util');
const mysql = require('mysql');
let connectionGlobal;

module.exports.initAndConnectDb = function (callback) {
    if (config.DEBUG) console.log(new Date().toISOString() + " dbUtils: initAndConnectDb ++");
    const connection = mysql.createConnection({
        host: config.DB_HOST,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        database: config.DB
    });
    connection.connect((err) => {
        if (err) {
            return callback(err);
        } else {
            console.log(new Date().toISOString(), "mysql db initialized");
            connectionGlobal = connection;
            return callback(null);
        }
    });
    if (config.DEBUG) console.log(new Date().toISOString() + " dbUtils: initAndConnectDb --");
};

module.exports.closeDbConnection = function (callback) {
    if (config.DEBUG) console.log(new Date().toISOString() + " dbUtils: closeDbConnection ++");
    connectionGlobal.end((err) => {
        if (err) {
            return callback(err);
        }
        return callback(null);
    });
    if (config.DEBUG) console.log(new Date().toISOString() + " dbUtils: closeDbConnection --");
};


module.exports.getDatabase = function () {
    return {
        query(sql, args) {
            return util.promisify(connectionGlobal.query)
                .call(connectionGlobal, sql, args);
        }
    }
};
