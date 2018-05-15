import express  from 'express';
import db        from './models';
import Sequelize from 'sequelize';
import router    from './router';
import checkauth from './middleware/checkauth';
import checkRole from './middleware/cheakRole';
import setOrigin from './config/setOrigin';
import controller from './controllers';
import expressValidator  from 'express-validator';

const app 	    = express();
app.use(setOrigin.setHeader);
app.use(expressValidator())
app.use(router.authRoute);
app.use("/api/v1/", 
    checkauth.checkauth,checkRole.checkRole,
    [
       
        router.LeaveRouter,
        router.ProfileRouter,
        router.ProfilesRouter,
        router.myprofile
    ],
);

// app.get('/myprofile', checkauth.checkauth,controller.profile.list),
app.get('/ping' ,checkauth.checkauth,function(req,res){
    res.json({status:200 , info: 'Hello 365Hr'})
})


var port = 3000;

db.sequelize.sync().then(function() {
    console.log("Database Connected.");

    app.listen(process.env.PORT || port, function () {
        console.log(`Server start at: localhost: ${port}`);
    });
});

