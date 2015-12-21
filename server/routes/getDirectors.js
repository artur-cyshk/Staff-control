var directorModel = require('../models/organizationDirectorModel').organizationDirectorModel;
exports.get=function (req, res, next) {
	directorModel.find( {} , function(err, data){
		return (err) ? next(err) : res.status(200).send(data);
	})
}