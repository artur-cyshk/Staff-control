var organizationModel = require('../models/organizationModel').organizationModel;
exports.get=function (req, res, next) {
	organizationModel
		.find( {} )
		.populate( 'director' )
		.populate( 'type' )
		.exec( function(err,data){
			return (err) ? next(err) : res.status(200).send(data);
		});
}