global.APP = {}
global.CFG = require('./config')

APP.modules = {
    request: require('request'),
    brain: require('brain'),
    mongoose: require('mongoose')
}

global.mongo = require('./mongo/index')

APP.utils = {
    // regex: require('./regex')
}


var express = require('express');
var app = express();

app.configure(function(){
    app.listen(5000);
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname+"/public"));
    require('./router')(app);
})

APP.modules.mongoose.connect('mongodb://localhost/myapp', {

});

console.log('Server started on port', 5000)
