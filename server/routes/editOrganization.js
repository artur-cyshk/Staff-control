var organizationModel = require('../models/organizationModel').organizationModel;
exports.put = function (req, res, next) {
	var organization = new organizationModel ( req.body );
	console.log(organization)
	organizationModel.update({ "_id" : req.body._id }, organization, {'overwrite':true}, function(err){
	    return (err) ? next(err) : res.status(200).end();
	});
};