console.log('Appoint Model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppointSchema = new mongoose.Schema({
	date:{
		type: Date,
		required: true,
	},
	time:{
		type: String,
		required:true,
	},
	text:{
		type: String,
		required: true,
	},
	_user:{
		type: Schema.Types.ObjectId, ref: "User"
	}
},{timestamps:true});

mongoose.model('Appoint',AppointSchema);
var Appoint = mongoose.model('Appoint');