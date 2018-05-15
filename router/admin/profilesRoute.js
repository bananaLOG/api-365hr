import db            from '../../models';
import express       from 'express';
import controller   from './../../controllers';
import body          from '../../config/body-parse';
import checkRole     from '../../middleware/cheakRole';

const app 	        = express();
var profilesRouter     = express.Router()
app.use(body);
app.use('/admin',checkRole.checkRole,profilesRouter);

profilesRouter.get('/staffs' ,controller.profiles.listAll)
profilesRouter.post('/staffs' ,controller.profiles.create)
profilesRouter.get('/staffs/:id' ,controller.profiles.view)
profilesRouter.put('/staffs/:id' ,controller.profiles.update)

export default app;
// module.exports = app;