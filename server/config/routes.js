console.log('future routes.');
var user = require('../controllers/UsersController.js')
var appoint = require('../controllers/AppointmentController.js')

module.exports = function (app) {
	app.post('/login', function(req, res) {
		user.login(req, res);
	});
	app.post('/appointment/:id', function(req, res) {
		appoint.create(req, res);
	});
	app.get('/appointment',function(req,res){
		appoint.index(req,res);
	});
	app.delete('/appointment/:id', function(req, res) {
		appoint.delete(req, res);
	});
}