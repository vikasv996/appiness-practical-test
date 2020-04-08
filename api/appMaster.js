const express = require('express');
const appMaster = express.Router();
const config = require('../config.js').get(process.env.NODE_ENV);
const error = require('../constant/errorCodes');
const productModel = require('../model/productModel');

appMaster.get('/list-categories', async (req, res) => {
    if (config.DEBUG) console.log(new Date().toISOString() + " appMaster: list-categories ++");
    if (config.DEBUG) console.log(new Date().toISOString() + " appMaster: list-categories --");
    try {
        const categories = await productModel.listCategories();
        if (categories && categories.length > 0) {
            return res.json({
                code: 100,
                message: "Success",
                categories
            });
        } else {
            return res.json(error.categoriesNotFound);
        }
    } catch (e) {
        if (config.DEBUG) console.log(new Date().toISOString() + " Error executing query", e);
        return res.json(error.somethingWentWrong);
    }
});

appMaster.get('/list-products/:id', async (req, res) => {
    if (config.DEBUG) console.log(new Date().toISOString() + " appMaster: list ++");
    let { id } = req.params;
    if (id) {
        if (!(typeof id === 'string' || id instanceof String)) {
            return res.json(error.idNotString);
        }
        id = id.trim();
    }

    if (config.DEBUG) console.log(new Date().toISOString() + " appMaster: list --");
    try {
        const products = await productModel.listProducts(id);
        if (products && products.length > 0) {
            return res.json({
                code: 100,
                message: "Success",
                products
            });
        } else {
            return res.json(error.productsNotFound);
        }
    } catch (e) {
        if (config.DEBUG) console.log(new Date().toISOString() + " Error executing query", e);
        return res.json(error.somethingWentWrong);
    }
});

module.exports = appMaster;
