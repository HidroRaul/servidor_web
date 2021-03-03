function start(){
  console.log("El manejador start ha sido llamado.");
  return "Hello Start.";
}

function upload(){
  console.log("El manejador upload ha sido llamado.");
  return "Hello Upload.";
}

exports.start = start;
exports.upload = upload;
