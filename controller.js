'use strict';

const response = require('./res');
const conn = require('./dbconnection')

exports.index = function(req, res) {
    response.ok("REST API is Running");
}