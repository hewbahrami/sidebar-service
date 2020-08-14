const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
app.use(express.static(`${__dirname}/../dist`));
app.use('/', express.static(`${__dirname}/../dist`));
app.use(bodyParser.json());

app.get('/item/:id', (req, res) => {
  // get the id of request product
  const id = req.url.substr(6);
  // look for the first data in the list if no id is passed in
  db.getAllProductAndSellerInfo(id, (err, result) => {
    res.send(result);
  });
});

const port = 3210;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
