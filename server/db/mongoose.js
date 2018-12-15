const mongoose = require('mongoose');
var config = require('../../config');

mongoose.Promise = global.Promise;

try{
mongoose.connect(config.dbconnection,{useNewUrlParser: true});
} catch (e) {
	console.log(e);
}
module.exports = {mongoose};
