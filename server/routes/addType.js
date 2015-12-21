var typeModel = require('../models/organizationTypeModel').organizationTypeModel;
var async = require ('async');
exports.post = function (req, res, next) {
	async.waterfall([
	    function(callback) {
	    	typeModel.find( {'name' : req.body.name.toLowerCase() },function (err, data){
	    			callback(err, data);
	    	})
	    },
	    function(data, callback) {
	      if(data.length){
	      	return res.status(400).end ();
	      }else{
	      	var type = new typeModel ( req.body );
			type.save(function (err, type){
				callback(err, type);
			})
	      }
	    },
	], function (err, result) {
	    return (err) ? next(err) : res.status(200).send(result);
	});
	
}