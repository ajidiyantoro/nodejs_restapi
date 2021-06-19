'use strict';

module.exports = function(app) {
    const myJson = require('./controller');

    app.route('/')
        .get(myJson.index);
}