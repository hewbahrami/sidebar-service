const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
app.use(express.static(`${__dirname}/../dist`));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  db.getAllProductAndSellerInfo((err, result) => {
    res.send(result);
  });
});

const port = 3210;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
