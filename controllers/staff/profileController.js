import db                from '../../models';
import Validators        from 'express-validators';
import bcrypt            from 'bcrypt';
import jwt               from 'jsonwebtoken';

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

    async update( req , res ){
        let params = {
            email:              req.body.email,
            username:           req.body.username,
            fname:              req.body.fname,
            lname:              req.body.lname,
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
            emergencyName:      req.body.emer_name,
            emergencyRelation:  req.body.emer_relation,
            emergencyTel:       req.body.emer_tel,
            userRoles:          2
        };

        let where = {
            id: req.params.id
        };

        db.Users.update(params, {
            where: where
        }).then((data)=>{
            res.json({"status": 200, "error": null, "info": 'Update Success'});
        }).catch((err) => {
            console.log(err)
            res.send(err);
        });
    }
    
}
export default new profiles;
// module.exports = new profiles;
