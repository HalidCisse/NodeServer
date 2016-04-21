var express =   require("express");
var multer  =   require('multer');
var app         =   express();

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

var upload = multer({ storage : storage}).single('image');

app.get('/',function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post('/upload',function(req,res){
  upload(req,res,function(err) {
    if(err) {
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  });
});

module.exports = app;

// app.listen(3000,function(){
//   console.log("Working on port 3000");
// });

