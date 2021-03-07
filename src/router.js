function route(handle, pathname, response, postData){
  console.log("Para dirigir una petición a " + pathname);
  if (typeof handle[pathname] === 'function'){
    return handle[pathname](response, postData);
  }else{
    console.log("No encontrado manejador para " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("error, 404 no encontrada");
    response.end();
  }
}

exports.route = route;
