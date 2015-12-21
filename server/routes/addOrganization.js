var organizationModel = require('../models/organizationModel').organizationModel;
exports.post = function (req, res, next) {
	var organization = new organizationModel ( req.body );
	organization.save (function (err){
	   	return (err) ? next (err) : res.status(200).end();
	})
};