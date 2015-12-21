var directorModel = require('../models/organizationDirectorModel').organizationDirectorModel;
exports.delete = function (req, res, next) {
	directorModel.remove( { "_id" : req.params.id } , function(err){
		return (err) ? next(err) : res.status(200).end();
	})
}