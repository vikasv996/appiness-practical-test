const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const config = require('./config.js').get(process.env.NODE_ENV);
const appMaster = require("./api/appMaster");
const dbUtils = require("./utils/dbUtils");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });
}

dbUtils.initAndConnectDb((error) => {
    if (error) {
        return console.log(new Date().toISOString() + ' mysql db connection error : ' + error);
    }
    const port = 4041;
    app.listen(port, (error) => {
        if (error) {
            return console.log(`${new Date().toISOString()} Server Down: ${error}`);
        } else {
            console.log(`${new Date().toISOString()} Connected to port ${port}, env ${process.env.NODE_ENV}`);
        }
    });
});

process.on('SIGINT', () => {
    dbUtils.closeDbConnection((err) => {
        if (err) {
            return console.log(`${new Date().toISOString()} Error closing DB connection ${err}`);
        }
        process.exit(0);
    })
});

app.use('/api', appMaster);
