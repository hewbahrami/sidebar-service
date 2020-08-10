const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
app.use(express.static(`${__dirname}/../dist`));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  // get the id of request product
  var id = req.url.substring(8);
  // look for the first data in the list if no id is passed in
  db.getAllProductAndSellerInfo((id || 0), (err, result) => {
    res.send(result);
  });
});

const port = 3210;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
