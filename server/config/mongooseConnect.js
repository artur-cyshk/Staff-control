mongoose = require ('mongoose'),
mongooseConnection = require ('./config.js');
mongoose.connect (mongooseConnection.mongoose.uri,function  (err) {
	if(err){
		console.log(err);
	}
});
module.exports = mongoose;
