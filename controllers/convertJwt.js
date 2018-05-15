const jwt = require('jsonwebtoken')
class convert{

    convertJWT(data){
        return jwt.decode(data);
    }

}

module.exports = new convert