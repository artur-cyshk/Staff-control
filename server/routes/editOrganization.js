var organizationModel = require('../models/organizationModel').organizationModel;
exports.post = function (req, res, next) {
	var organization = new organizationModel ( req.body );
	organizationModel.update({ "_id" : req.body._id }, organization, {'overwrite':true}, function(err){
	    return (err) ? next(err) : res.status(200).end();
	});
};