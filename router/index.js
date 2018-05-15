import LeaveRouter   from './leaveRoute';
import AuthRouter    from './authRoute';
import ProfilesRouter from './admin/profilesRoute';
import ProfileRouter from './staff/profileRoute';
import controller    from './../controllers';
import express       from 'express';

const app 	        = express();
var router = {};

router.LeaveRouter      = LeaveRouter;
router.authRoute        = AuthRouter;
router.ProfileRouter    = ProfileRouter;
router.ProfilesRouter   = ProfilesRouter;

router.myprofile        = app.get('/myprofile',controller.profile.list)

export default router;
// module.exports = router;