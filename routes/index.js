var express = require('express');
var http = require('http');
var path = require('path'); 
var fs = require('fs');
var bodyParser = require('body-parser');
var formidable = require("formidable");
var util = require('util');
var router = express.Router();


/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// upload posted file
router.post('/upload', function(req, res, next) {

    console.log('### Starting upload ');

    var form = new formidable.IncomingForm();
    //Formidable uploads to operating systems tmp dir by default
    form.uploadDir = __dirname + "/../public/img";       //set upload directory
    form.keepExtensions = true;     //keep file extension

    form.parse(req, function (err, fields, files) {
      if (err) {
        console.log(err);
      }
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        console.log("form.bytesReceived");
        //TESTING
        console.log("file size: "+JSON.stringify(files.image.size));
        console.log("file path: "+JSON.stringify(files.image.path));
        console.log("file name: "+JSON.stringify(files.image.name));
        console.log("file type: "+JSON.stringify(files.image.type));
        console.log("astModifiedDate: "+JSON.stringify(files.image.lastModifiedDate));

        //Formidable changes the name of the uploaded file
        //Rename the file to its original name
        res.end();
    });

     

});

module.exports = router;
