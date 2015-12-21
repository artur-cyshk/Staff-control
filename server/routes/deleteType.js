var typeModel = require('../models/organizationTypeModel').organizationTypeModel;
exports.delete = function (req, res, next) {
	typeModel.remove( { "_id" : req.params.id } , function(err){
		return (err) ? next(err) : res.status(200).end();
	})
}