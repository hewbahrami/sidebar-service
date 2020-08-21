const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();

app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('*/bundle.js', (req, res) => {
  res.redirect('https://hrr47-fec-sidebar.s3.ap-northeast-2.amazonaws.com/js/bundle.js');
});

app.use(express.static(`${__dirname}/../public`));
app.use('/item/:id', express.static(`${__dirname}/../public`));
app.use(bodyParser.json());

app.get('/sb/api/item/:id', (req, res) => {
  // get the id of request product
  const idIndex = req.url.indexOf('item') + 5;
  const id = req.url.substr(idIndex);
  // look for the first data in the list if no id is passed in
  db.getAllProductAndSellerInfo(id || 0, (err, result) => {
    if (err) {
      res.status(404).send('Not found!');
    } else {
      res.send(result);
    }
  });
});

const port = 3210;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
