mongoose = require( '../config/mongooseConnect');
Schema = mongoose.Schema;

var organizationTypeSchema = Schema({
	name :  {
		type : String,
		unique: true,
		required: true
	}
})

exports.organizationTypeModel = mongoose.model ( 'Type' , organizationTypeSchema );