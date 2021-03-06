const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;

const getAllProductAndSellerInfo = (id, callback) => {
  mongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      throw err;
    } else {
      // try to access the db and get some data
      const db = client.db('reburke');
      db.collection('reburke').findOne({ id: parseInt(id, 10) }, (error, result) => {
        if (error || !result) {
          const emptyResultError = new Error('Not Found');
          emptyResultError.status = 404;
          callback(emptyResultError, { product: {}, seller: { reviews: { rating: 0 } } });
        } else {
          const data = {
            product: result.product,
            seller: result.seller
          };
          callback(error, data);
          client.close();
        }
      });
    }
  });
};

var database = {
  getAllProductAndSellerInfo
};

module.exports = database;
