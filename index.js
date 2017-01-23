const express = require('express');
const app = express();
const multer  = require('multer');
const upload = multer();


app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/get-file-size', upload.single('file_uploaded'), (req, res) => {
  if (!req.file) res.redirect('/');
  
  res.json({
    size: req.file.size
  });
});

app.listen(app.get('port'), () => console.log('File Size Microservice running on Port:', app.get('port')));
