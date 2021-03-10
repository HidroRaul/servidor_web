var http = require("http");
var url = require("url");

function start(route, handle){
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Solicitud para " + pathname + " recibida");
    route(handle, pathname, response, postData);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor en marcha.");
}

exports.start = start;
