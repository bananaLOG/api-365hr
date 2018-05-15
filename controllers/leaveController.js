import db            from '../models';
import Validators    from 'express-validators';

class leaveController{
    async list( req , res ){
        console.log(req.query);
        db.Leave.findAll({
            include: [
                {model: db.Users},
                {model: db.LeaveTypes}
            ]
        }).then(data =>{
            console.log(JSON.stringify(data));
            res.json(
                {
                    status : 200,
                    msg : "success",
                    info : data
                }
            )
        })
    }
    async create( req , res ){
        var rules = {
            "UserId"             : "required",
            "LeaveTypeId"        : "required",
        };

        var msg = {
            UserId:{
                required: "โปรดระบุ พนักงาน",
            },
            LeaveTypeId: {
                required : "โปรดระบุ ประเภทการลา",
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
        let params = {
            UserId:         req.body.UserId,
            LeaveTypeId:    req.body.LeaveTypeId,
            remark:         req.body.remark
        };
        db.Leave.create(params).then((data) => {
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
    }
    async view( req , res ){
        console.log(req.params.id)
        let where = {
            id: req.params.id
        };
        db.Leave.findOne({
            include: [
                {
                    model: db.Users,
                },
                {
                    model: db.LeaveTypes
                }
            ],
            where: where
        }).then((data) => {
            res.json(
                {
                    status:"200",
                    msg:"success",
                    info:data
                }
            );
        }).catch((err) => {
            console.log(err)
            res.json(
                {
                    status:"404",
                    msg:"not found",
                    info:data
                }
            );
        });

    }
    async update( req , res ){
        let params = {
            UserId:         req.body.UserId,
            LeaveTypeId:    req.body.LeaveTypeId,
            remark:         req.body.remark
        };

        let where = {
            id: req.params.id
        };

        db.Leave.update(params, {
            where: where
        }).then((data)=>{
            res.json({"status": 200, "error": null, "info": 'Updata Success'});
        }).catch((err) => {
            console.log(err)
            res.send(err);
        });
    }
}
export default new leaveController;
// module.exports = new leaveController;
      
