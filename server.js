const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();


app.use(express.static(path.join(__dirname,'dist')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
  
  // app.use('/',index);
  
  app.listen(port, function() {
      console.log('server running '+port);
  });