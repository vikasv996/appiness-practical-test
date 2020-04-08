const config = require('../config.js').get(process.env.NODE_ENV);


/*******************************
 * Database Table constant
 ******************************/
exports.TABLE_CATEGORY = "`" + config.DB + "`.`category`";
exports.TABLE_PRODUCT = "`" + config.DB + "`.`product`";
