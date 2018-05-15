import db                from '../models';
import convertJWT        from '../controllers/convertJwt';
import config            from '../config/secret';
import jwt               from 'jsonwebtoken';

exports.checkauth = function(req,res,next){
    let authorization = "";
    if(req.headers.authorization != undefined){
        authorization = req.headers.authorization.replace("Bearer","").replace(/^\s+/,"");
    }
    jwt.verify(authorization, config.secret, function(err, decoded) {
        if (err) {
            res.json({
                status : 401,
                msg: 'Unauthorized',
                info: err               
            })
        }
        else{
            let dataJWT = jwt.decode(authorization)
            
            if(dataJWT != null){
                let data = dataJWT.data;
                req.data = data;
                next();
            }else{
                console.log('Token Unauthorized')
                res.json(
                    {   
                        status:401,
                        message:'Unauthorized',
                        info:'Your token can\'t connected this server.'
                    }
                )
            }
        }
    });
}