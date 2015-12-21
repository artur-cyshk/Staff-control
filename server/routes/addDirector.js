var directorModel = require ('../models/organizationDirectorModel').organizationDirectorModel;
exports.post=function (req, res, next) {
	var director = new directorModel ( req.body );
	director.save (function (err,data){
		return (err) ? next (err) : res.status(200).send (data);
	})
}