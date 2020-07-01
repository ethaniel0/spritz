const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile('index');
});

app.get('/set', (req, res) => {
  res.sendFile(__dirname + '/public/set.html');
});


app.post('get-time', (req, res) => {

})

app.listen(3000, () => {
  console.log('server started');
});