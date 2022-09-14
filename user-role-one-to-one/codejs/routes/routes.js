const user = require('/home/tectoro/Desktop/codejs/controller/users.js');
const role = require('/home/tectoro/Desktop/codejs/controller/roles.js');
const router = require('express').Router();

router.get('/findbyid/:userid',user.findUser);
router.get('/find',user.findall);
router.post('/adduser',user.add);
router.delete('/deletebyid/:userid',user.deleteuserbyid);

router.post('/addrole',role.addrole);
router.get('/find1',role.findall);
router.delete('/deleterolebyid/:id',role.deleterolesbyid);


module.exports = router;

