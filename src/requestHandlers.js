var exec =require("child_process").exec;

function start(response){
  console.log("El manejador start ha sido llamado.");

  exec("find /", {timeout: 10000, maxBuffer: 20000*1024}, function(error, stdout, stderror){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });

}

function upload(response){
  console.log("El manejador upload ha sido llamado.");
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("Hello Upload.");
  response.end();
}

exports.start = start;
exports.upload = upload;
