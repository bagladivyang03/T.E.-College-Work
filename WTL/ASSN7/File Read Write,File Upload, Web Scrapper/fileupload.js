var fs = require('fs'); 
var http = require('http');
var formidable = require('formidable');
const axios = require('axios');



http.createServer((req,res)=>{
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, (err,fields, files)=>{
            var oldpath = files.filetoupload.path;
            var newpath = 'C:\Users\Divyang\Desktop\Trimester 8\WTL\ASSN6' + files.filetoupload.name;
            fs.rename(oldpath, newpath, (err)=>{
                if(err) throw err;
                res.write('File Succesfully uploaded!!');
                res.end();
            });
        });
    }else{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
}).listen(8080);