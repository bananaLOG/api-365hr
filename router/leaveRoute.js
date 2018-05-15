import db            from '../models';
import express       from 'express';
import controller    from './../controllers';
import body          from '../config/body-parse'; //รับ rq

const app 	        = express();
var LeaveRouter     = express.Router()
app.use(body);
app.use('/leave',LeaveRouter);
// console.log(leave);
LeaveRouter.get('/' ,controller.leave.list)
LeaveRouter.post('/' ,controller.leave.create)
LeaveRouter.get('/:id' ,controller.leave.view)
LeaveRouter.put('/:id' ,controller.leave.update)

module.exports = app;