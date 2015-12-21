var express = require('express');
var router = express.Router();

router.get('/getOrganizations', require('./getOrganizations.js').get);
router.post('/addOrganization', require('./addOrganization.js').post);
router.post('/editOrganization', require('./editOrganization.js').post);
router.delete('/deleteOrganization/:id',require('./deleteOrganization.js').delete);

router.get('/getTypes', require('./getTypes.js').get);
router.post('/addType', require('./addType.js').post);
router.delete('/deleteType/:id', require('./deleteType.js').delete);

router.get('/getDirectors', require('./getDirectors.js').get);
router.post('/addDirector', require('./addDirector.js').post);
router.delete('/deleteDirector/:id', require('./deleteDirector.js').delete);
module.exports = router;