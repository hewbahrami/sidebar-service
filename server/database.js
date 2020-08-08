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

/*
  "product" : {
    "name" : "Martin 75th Anniversary of Grand Ole Opry,
       #223 of #650 owned by Brother Oswald from Roy Acuff Band",
    "condition" : "mint",
    "shippingFee" : 79,
    "priceOriginal" : 3499,
    "priceActual" : 3299,
    "isOpenToOffers" : true
  },
  "seller" : {
    "name" : "Average Joe's Guitars",
    "address" : "Beaufort, NC, United States",
    "isQuickShipper" : true,
    "joinedYear" : 2016,
    "reviews" : {
            "rating" : 4
    }
  }
*/
