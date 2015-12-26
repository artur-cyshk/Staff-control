var express = require('express');
var router = express.Router();

router.get('/organizations', require('./getOrganizations.js').get);
router.post('/organizations', require('./addOrganization.js').post);
router.put('/organizations/:id', require('./editOrganization.js').put);
router.delete('/organizations/:id',require('./deleteOrganization.js').delete);

router.get('/types', require('./getTypes.js').get);
router.post('/types', require('./addType.js').post);
router.delete('/types/:id', require('./deleteType.js').delete);

router.get('/directors', require('./getDirectors.js').get);
router.post('/directors', require('./addDirector.js').post);
router.delete('/directors/:id', require('./deleteDirector.js').delete);
module.exports = router;