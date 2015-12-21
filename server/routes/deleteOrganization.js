var organizationModel = require('../models/organizationModel').organizationModel;
exports.delete = function (req, res, next) {
	organizationModel.remove({ "_id" : req.params.id }, function(err){
		return (err) ? next(err) : res.status(200).end();
	})
}