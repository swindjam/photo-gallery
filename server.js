var http = require('http');
var fs = require('fs');
var PhotoGalleryAPI = require('./PhotoGalleryAPI');

http.createServer(function (req, res) {
  //Mime types map
  var contentTypes= {
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.wav': 'audio/wav',
    '.html': 'text/html',
    'ico': 'image/x-icon'
  };
  var originalUrl = req.url;

//API
if(req.url === '/api') {
  res.writeHead('Content-Type', 'application/json');
  res.write(PhotoGalleryAPI.getAllPhotos());
res.end();
} else {

  //Set default to load index.html
  if(req.url === '/' || !~req.url.indexOf('.')) {
    req.url = '/index.html'
  }
  //Get the file extension from the filepath
  var fileExtension = req.url.substring(req.url.lastIndexOf('.'));

  //Remove leading slash from file - readFile needs this to not bee present
  var filePath = req.url.substring(1);

  //Load the file - but only if it exists
  if(fs.existsSync(filePath)) {
    fs.readFile(filePath, function(err, data) {
      res.writeHead('Content-Type', contentTypes[fileExtension]);
      res.write(data);
      res.end();
    });
    console.log('path ' + originalUrl + ' loaded ' + filePath);
  }
}

}).listen(8080, function() {
  console.log('Server running at http://localhost:8080');
});
