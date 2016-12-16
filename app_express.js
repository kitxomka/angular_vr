
// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var routes = require('./router.js');
var mongoose = require('mongoose');


// configuration =================

app.use(express.static(__dirname + '/public/'));                // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use('/', routes);
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


//mongoose.connect('mongodb://localhost/VR', function(err) {
//    console.log('Connected');
//    if (err) throw err;
//});
//
//console.log('after init connect');
//
//var Schema = new mongoose.Schema({
//    title: String,
//    description: String,
//    img: String,
//    href: String,
//    class: String,
//    categoryId: Array,
//    tagId: Array
//});
//
//var site = mongoose.model('sites', Schema);
//
//site.find({}).exec(function callback(err, data){
//    //console.log('err: ', err);
//    //console.log('data: ', data);
//    if(err){
//        res.send('error has occured')
//    }else{
//        //console.log(data);
//        res.json(data);
//    }
//});



// listen (start app with node server.js) ======================================
app.listen(3011);
console.log("App listening on port 3011");