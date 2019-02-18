var express = require('express')
var app = express()
const {promisify} = require('util')
const fs = require('fs');
const readFile = promisify(fs.readFile);
const {resolve} = require('path')

const asset = (...path) => resolve(__dirname, 'assets', ...path);

const header = 

app.get('/', async function (req, res) {
	res.sendFile(asset('index.html'));
})

const port = process.env.PORT || 3000;
console.log(port)

app.listen(port);

app.use('/', express.static('assets'));