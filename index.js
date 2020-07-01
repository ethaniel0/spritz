const express = require('express'),
 fs = require('fs'),
 bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app 
	.engine('html', require('ejs').renderFile)
	.set('views',  __dirname + '/public')
	.set('view engine', 'html')

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/set', (req, res) => {
	let rawdata = fs.readFileSync('time.json');
	console.log(JSON.parse(rawdata))
  res.render('set', JSON.parse(rawdata));
});

app.post('/set', (req, res) => {
	let data = JSON.stringify(req.body);
	fs.writeFileSync('time.json', data);
	res.render('index');
});

app.post('/get-time', (req, res) => {
	let rawdata = fs.readFileSync('time.json');
	let parts = JSON.parse(rawdata);
	let toSend = parts.hour + ' ' + parts.minute + ' ' + parts.half;
	res.send(toSend);
	console.log(toSend);
});

app.listen(3000, () => {
  console.log('server started');
});