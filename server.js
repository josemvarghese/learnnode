const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname,'dist')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
io.on('connection', function(socket){
  console.log('a user connected');
});
  // app.use('/',index);
  
  http.listen(port, function() {
      console.log('server running '+port);
  });