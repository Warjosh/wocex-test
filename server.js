const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/lbd-free-angular-cli'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/lbd-free-angular-cli/index.html'));});
app.listen(process.env.PORT || 8080);