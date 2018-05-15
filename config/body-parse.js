const bodyParser = require('body-parser');

const body = [bodyParser.urlencoded({
        extended: true
    }),bodyParser.json()]

module.exports = body;


