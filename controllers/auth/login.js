import db         from '../../models';
import bcrypt     from 'bcrypt';
import jwt        from 'jsonwebtoken';
import config     from '../../config/secret';

class auth{

    async login( req , res ){
        req.checkBody('password', 'โปรดระบุรหัสผ่าน').notEmpty();
        req.checkBody('email', 'โปรดระบุ อีเมล์').notEmpty();
        req.checkBody('email', 'รูปแบบ email').isEmail();
        console.log(req.body)
        var errors = req.validationErrors();
        if(errors){
            res.json(
                {
                    status:"400",
                    msg:"bad request",
                    info: errors,
                }
            );
        }else{
            db.Users.findOne({
                where: {email: req.body.email}
            }).then(data=>{
                if(data != null){
                    try{
                        if(bcrypt.compareSync(req.body.password,data.dataValues.password) == true){
                            if( data != null ){
                                let nbf = Date.now() / 1000
                                let timeExpire = 60 * 60;
                                let expires = (nbf + timeExpire )
                                ////////////////////////////////////
                                delete data.dataValues.password;
                                var formatdate = new Date(nbf * 1000);
                                var jwtToken = jwt.sign({ data: data ,exp: expires},config.secret);
                                
                                res.json({"status": 200, "msg": 'success' , "info": jwtToken});
                            }else{
                                res.json({"status": 200, "msg": 'success' , "info": jwtToken});
                            }
                        }else{
                            res.json({"status": 400, "error": null, "info": 'รหัสผ่านไม่ถูกต้อง'});
                        }
                    }catch(err){
                        res.json({"status": 400, "error": null, "info": err});
                    }
                }else{
                    res.json({"status": 404, "error": null, "info": 'ไม่มีผู็ใช้'});
                }
            });
        }

    }

}
export default new auth;
// module.exports = new auth;
