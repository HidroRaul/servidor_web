function route(handle, pathname){
  console.log("Para dirigir una petición a " + pathname);
  if (typeof handle[pathname] === 'function'){
    return handle[pathname]();
  }else{
    console.log("No encontrado manejador para " + pathname);
    return "404 not found";
  }
}

exports.route = route;
