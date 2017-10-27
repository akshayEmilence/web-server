var express = require('express');
var app = express();
var PORT = 3000;
/*app.get('/', function (req, res) {
	res.send('hello Express !');
});*/
//about page 
// about us
var middleware = {
	reuireAuthencation : function(req, res, next) {
		console.log('private route hit !');
		next();
	},
	logger: function (req, res, next){

		console.log('request'+new Date().toString()+' '+req.method+'  '+req.originalUrl);
		next();
	}
};

app.use(middleware.logger);
//app.use(middleware.reuireAuthencation);

app.get('/about', middleware.reuireAuthencation, function(req, res){
	res.send('About US!!');
});

//app.use(express.static());
app.use(express.static(__dirname+'/public'));

app.listen(PORT, function() {
	console.log('Express server started on port '+PORT);
});