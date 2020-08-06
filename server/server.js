const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('./database');

let app = express();
app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());

/*app.post('/api', (req, res) => {

});*/

app.get('/api', (req, res) => {
  db.getAllProductAndSellerInfo((err, result) => {
    res.send(result);
  })
});

let port = 3210;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
