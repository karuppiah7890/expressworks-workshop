var express = require('express');

var app = express();

app.get('/',express.static(process.argv[3]));

app.listen(process.argv[2]);
