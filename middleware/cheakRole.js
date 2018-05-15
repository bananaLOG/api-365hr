import db from '../models';
exports.checkRole = function(req,res,next){

    // var check = db.Users.findOne({
    //     where:  {    
    //                 token: req.headers.token,
    //                 userRoles: 1
    //             }
    // }).then((data)=>{
    //     if(data != null){
    //         console.log(data.dataValues);
    //         next()
    //     }else{
    //         console.log('Token Unauthorized')
    //         res.json(
    //             {   
    //                 status:500,
    //                 message:'Permission denies',
    //                 info:'สิทธิ์การใช้งานไม่ถึง'
    //             }
    //         )
    //     }
    // })
    next();
}