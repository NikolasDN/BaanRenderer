var express = require('express');
var http = require('http');
var path = require('path'); 
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
var svgHelper = require('../services/svgHelper').svgHelper;
var fileParser = require('../services/fileParser').fileParser;
var router = express.Router();


/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { svg: 'Nog geen baan gekozen' });
});

// upload posted file
router.post('/upload', function(req, res, next) {

    var form = new formidable.IncomingForm();
    //Formidable uploads to operating systems tmp dir by default
    form.uploadDir = __dirname + "/../public/img";       //set upload directory
    form.keepExtensions = true;     //keep file extension

    form.parse(req, function (err, fields, files) {
      //res.writeHead(200, {'content-type': 'text/plain'});
      //res.write('received upload:\n\n');
      console.log("form.bytesReceived");
      //TESTING
      console.log("file size: "+JSON.stringify(files.image.size));
      console.log("file path: "+JSON.stringify(files.image.path));
      console.log("file name: "+JSON.stringify(files.image.name));
      console.log("file type: "+JSON.stringify(files.image.type));
      console.log("astModifiedDate: "+JSON.stringify(files.image.lastModifiedDate));

      // var helper = new svgHelper();
      // var path = {};
      // helper.addPath(path);

      fs.readFile(files.image.path, function(err, content)
      {
        //res.render('index', { title: 'Express', svg: content });
        var parser = new fileParser();
        result = parser.parseFile(content, (result) => {
          res.render('index', { svg: result });
        });

        
      });
      //res.render('index', { svg: helper.getSvg() });
      

      //Formidable changes the name of the uploaded file
      //Rename the file to its original name
      //res.end();
      
    });

     

});

// function createSvg() {
//   var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//   var rect = document.createElementNS(svgNS,'rect');
//   rect.setAttribute('x',5);
//   rect.setAttribute('y',5);
//   rect.setAttribute('width',500);
//   rect.setAttribute('height',500);
//   rect.setAttribute('fill','#95B3D7');
//   svg.appendChild(rect);
//   return svg;
// }

module.exports = router;
