import db        from '../models';
import express   from 'express';
import auth      from './../controllers/auth/login';
import body      from '../config/body-parse';

const app 	    = express();
var UserRouter = express.Router()

app.use(body);

app.post('/login' ,auth.login)

export default app;
// module.exports = app;