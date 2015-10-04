// var cors = require("cors");
// var http = require('http');
// var uploader = require('express-fileuploader');
// var S3Strategy = require('express-fileuploader-s3');


var express = require("express");
var mutilpart = require('connect-multiparty');
var bodyParser = require('body-parser');
var imageController = require("./api/imageController.js");
var less = require("less");

var app = express();

app.use(express.static("public"))
app.use('/upload/image', mutilpart());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.post('/api/newimage', imageController.saveImage); 

var port = 8000;
app.listen(port, function() {
	console.log("listening of port", port);
});