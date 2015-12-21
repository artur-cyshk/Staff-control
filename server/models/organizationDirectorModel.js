mongoose = require( '../config/mongooseConnect');
Schema = mongoose.Schema;

var organizationDirectorSchema = Schema ({
	name : {
		type : String ,
		required : true
	},
	surname : {
		type : String,
		required : true
	},
	patronymic : {
		type : String,
		required : true
	}
});


exports.organizationDirectorModel = mongoose.model ( 'Director', organizationDirectorSchema );
