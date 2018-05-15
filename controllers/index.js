import leave        from './leaveController';
import profiles     from './admin/profilesController';
import profile      from './staff/profileController';

var controller = {};

controller.leave      = leave;
controller.profile    = profile;
controller.profiles   = profiles;

export default controller;
// module.exports = controller;
