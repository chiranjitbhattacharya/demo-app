'use strict';

const express = require('express');
const path = require('path');

// Constants 
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/health', (req, res) => {
  res.send('App is running...');
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
