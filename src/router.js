function route(handle, pathname, response, request){
  console.log("Para dirigir una petición a " + pathname);
  if (typeof handle[pathname] === 'function'){
    handle[pathname](response, request);
  }else{
    console.log("No encontrado manejador para " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("error, 404 no encontrada");
    response.end();
  }
}

exports.route = route;
