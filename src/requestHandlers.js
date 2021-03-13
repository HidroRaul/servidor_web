// var exec =require("child_process").exec;
var querystring = require("querystring"), fs = require("fs"), formidable = require("formidable"), util = require('util');

function start(response, postData){
  console.log("El manejador start ha sido llamado.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="file" name="upload"/>'+
    '<input type="submit" value="Subir archivo" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}

function upload(response, request){
  console.log("El manejador upload ha sido llamado.");

  var form = new formidable.IncomingForm();
  console.log("about to parse");

  form.parse(request, function(error, fields, files){
    console.log('fields:', fields);
    console.log('files:', files);
    console.log("parsing done.");

    fs.rename(files.upload.path, "images/test.png", function(error){
      if(error){
        console.log("El error está aquí.");
      }
    });

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("imagen recibida:<br/>");
    response.write("<img src='/show' />");
    //response.end();
    response.end(util.inspect({fields: fields, files: files}));

  });
}

function show(response){
  console.log("El manejador show ha sido llamado.");
  fs.readFile("images/test.png","binary", function(error,file){
    if(error){
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    }else{
      response.writeHead(200, {"Content-Type": "image/img"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
