const express = require('express');
const config = require('config');
const consign = require('consign');

module.exports = app => {
    const app = express();
    app.set('port', process.env.PORT ?? config.get('server.port'));
    app.use(express.json());

    consign({cwd: 'api', locale: 'pt-br', verbose: false, extensions: ['.js','.json']})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}