const config = {
    development: {
        DEBUG: true,
        port: 4041,
        DB_HOST: 'localhost',
        DB_USER: 'root',
        DB_PASSWORD: 'root',
        DB: 'a_com'
    },
    production: {
        DEBUG: false,
        port: 9091,
        DB_HOST: 'localhost',
        DB_USER: 'root',
        DB_PASSWORD: '123456',
        DB: 'a_com'
    }
};

exports.get = function get(env) {
    return config[env] || config.development;
};