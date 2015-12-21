var express = require('express'),
    http=require('http'),
    app = express(),         
    morgan = require('morgan'),     
    bodyParser = require('body-parser'),
    routes = require('./server/routes/index'),
    errorHandler = require('./server/config/errorHandler');

app.use(express.static(__dirname + '/public'));            
app.use(morgan('dev'));                                
app.use(bodyParser.urlencoded({'extended':'true'}));           
app.use(bodyParser.json());                                
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var server = http.createServer(app);
server.listen(8000, function(){
    console.log('server listening on port 8000');
});

app.use(errorHandler.handler);
app.use('/',routes);