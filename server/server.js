const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();

app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.static(`${__dirname}/../public`));
app.use('/item/:id', express.static(`${__dirname}/../public`));
app.use(bodyParser.json());

app.get('/api/item/:id', (req, res) => {
  // get the id of request product
  const id = req.url.substr(10);
  // look for the first data in the list if no id is passed in
  db.getAllProductAndSellerInfo(id || 0, (err, result) => {
    res.send(result);
  });
});

const port = 3210;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
