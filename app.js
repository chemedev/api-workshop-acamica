const express = require('express');
const app = express();
app.use(express.static(__dirname + '/frontend'));
app.listen(3000, console.log('Listening on port 3000'));

app.use(express.json());