import db           from '../../models';
import Validators   from 'express-validators';
import bcrypt       from 'bcrypt';
import jwt          from 'jsonwebtoken';

class profiles{

    async list( req , res ){
        res.json(
            {
                status:"200",
                msg:"success",
                info: req.data
            }
        );
    }

    async listAll( req , res ){
        db.Users.findAll().then(data =>{
            res.json(
                {
                    status:"200",
                    msg:"success",
                    info: data
                }
            )
        })
    }

    async create( req , res ){

        var rules = {
            "email"              : "required|email",
            "fname"              : "required",
            "lname"              : "required",
            "password"           : "required",
            'password_confirm'   : "required|confirmed:password"
        };

        var msg = {
            email:{
                required: "โปรดระบุ email",
                email: "email"
            },
            password_confirm: {
                required : "โปรดระบุ รหัสผ่านอีกครั้ง",
                confirmed : "รหัสผ่านไม่ตรงกัน"
            }
        };

        Validators.validator(req.body, rules , msg , function (err, validated) {
            if (validated.fails) { 
                console.log(validated.getErrors)
                res.json(
                    {
                        status:"400",
                        msg:"bad request",
                        info:validated.getErrors
                    }
                );
            }
        });
        db.Users.findOne({
            where: {email:req.body.email}
        }).then((data)=>{
            if(data == null){
                var currentDate = new Date();
                req.body.workend == "" || req.body.workend == "" ? req.body.workend = currentDate : req.body.workend
                let password = bcrypt.hashSync(req.body.password, 10);
                console.log(password);
                let params = {
                    email:              req.body.email,
                    username:           req.body.username,
                    fname:              req.body.fname,
                    lname:              req.body.lname,
                    ImgUser:            req.body.imguser,
                    nickname:           req.body.nickname,
                    quote:              req.body.quote,
                    password:           password,
                    telphone:           req.body.telphone,
                    birthdate:          req.body.birthdate,
                    company:            req.body.company,
                    department:         req.body.department,
                    position:           req.body.position,
                    workstart:          req.body.workstart,
                    workend:            req.body.workend,
                    emergencyName:      req.body.emergencyName,
                    emergencyRelation:  req.body.emergencyRelation,
                    emergencyTel:       req.body.emergencyTel,
                    userRoles:          2
                };
                
                db.Users.create(params).then((data) => {
                    delete data.password;
                    res.json(
                        {
                            status:"200",
                            msg:"save success",
                            info:data
                        }
                    );
                }).catch((err) => {
                    res.send(err);
                });
            }else{
                res.json(
                    {
                        status:"400",
                        msg:"email has exists",
                    }
                );
            }
        })
        
    }

    async view( req , res ){
        let where = {
            id: req.params.id
        };
        db.Users.findOne({
            where: where
        }).then((data) => {
            res.json(
                    {
                        status: 200,
                        msg: 'success',
                        info : data
                    }
                );
        }).catch((err) => {
            console.log(err)
            res.send(
                {
                    status: 404,
                    msg: 'fail',
                    info : data
                }
            );
        });

    }

    async update( req , res ){
        let params = {
            email:              req.body.email,
            username:           req.body.username,
            fname:              req.body.fname,
            lname:              req.body.lname,
            ImgUser:            req.body.imguser,
            nickname:           req.body.nickname,
            quote:              req.body.quote,
            password:           password,
            telphone:           req.body.telphone,
            birthdate:          req.body.birthdate,
            company:            req.body.company,
            department:         req.body.department,
            position:           req.body.position,
            workstart:          req.body.workstart,
            workend:            req.body.workend,
            emergencyName:      req.body.emergencyName,
            emergencyRelation:  req.body.emergencyRelation,
            emergencyTel:       req.body.emergencyTel,
            userRoles:          2
        };

        let where = {
            id: req.params.id
        };

        db.Users.update(params, {
            where: where
        }).then((data)=>{
            res.json({"status": 200, "error": null, "info": 'Updata Success'});
        }).catch((err) => {
            console.log(err)
            res.send(err);
        });
    }

    async delete( req , res ){

    }
    
}
export default new profiles;
// module.exports = new profiles;
