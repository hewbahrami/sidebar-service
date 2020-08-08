const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;

const getAllProductAndSellerInfo = (callback) => {
  mongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      throw err;
    } else {
      // try to access the db and get some data
      const db = client.db('reburke');
      db.collection('reburke').find({}).toArray((error, result) => {
        if (error) {
          throw error;
        } else {
          const data = {
            product: result[0].product,
            seller: result[0].seller
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
