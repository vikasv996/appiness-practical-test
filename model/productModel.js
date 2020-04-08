const config = require('../config.js').get(process.env.NODE_ENV);
const CONSTANT = require('../constant/constants');
const dbUtils = require('../utils/dbUtils');

module.exports.listCategories = function () {
    if (config.DEBUG) console.log(new Date().toISOString() + " productModel: listCategories ++");
    const LIST_CATEGORIES_SQL = `SELECT id, name FROM ${CONSTANT.TABLE_CATEGORY};`;
    if (config.DEBUG) console.log(new Date().toISOString() + " productModel: listCategories --");
    return new Promise((resolve, reject) => {
        dbUtils.getDatabase().query(LIST_CATEGORIES_SQL)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    })
};


module.exports.listProducts = function (id) {
    if (config.DEBUG) console.log(new Date().toISOString() + " productModel: listProducts ++");
    const LIST_PRODUCTS_SQL = `SELECT name FROM ${CONSTANT.TABLE_PRODUCT} WHERE category_id = ${id};`;
    if (config.DEBUG) console.log(new Date().toISOString() + " productModel: listProducts --");
    return new Promise((resolve, reject) => {
        dbUtils.getDatabase().query(LIST_PRODUCTS_SQL)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    })
};
