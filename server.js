var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/app', express.static('src'));
app.use('/tests', express.static('test/unit'));
app.use('/vendor', express.static('node_modules'));

app.listen(3000, function () {
  console.log('Development Server listening on port 3000!');
});
