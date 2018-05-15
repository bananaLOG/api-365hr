import db            from '../../models';
import express       from 'express';
import controller    from './../../controllers';
import body          from '../../config/body-parse'; //รับ rq
import checkRole     from '../../middleware/cheakRole';

const app 	            = express();
var profileRouter       = express.Router()
app.use(body);
app.use('/staff',profileRouter);

// profileRouter.get('/profile' ,controller.profile.list)
profileRouter.put('/:id' ,controller.profile.update)
export default app;

// module.exports = app;