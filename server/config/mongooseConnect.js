mongoose = require ('mongoose'),
mongooseConnection = require ('./config.js');
mongoose.connect (mongooseConnection.mongoose.uri,function  (err) {
	if(err){
<<<<<<< HEAD
		console.log(err);
=======
		console.log(err);	
>>>>>>> 2da4ad884b946388ba056447bc347d73eab5614b
	}
});
module.exports = mongoose;
