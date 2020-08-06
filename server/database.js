/*const mongodb = require('mongodb');
const url = require('url');
const http = require('http');
const axios = require('axios');

const con = new mongodb();
const db = con.getDB('myDatabase'); //need the database name*/

var data = {
  product: {
    name: 'Martin 75th Anniversary of Grand Ole Opry, #223 of #650 owned by Brother Oswald from Roy Acuff Band',
    condition: 'mint',
    shippingFee: 79.00,
    priceOriginal: 3499.00,
    priceActual: 3299.00,
    isOpenToOffers: true
  },
  seller: {
    name: 'Average Joe\'s Guitars',
    address: 'Beaufort, NC, United States',
    isQuickShipper: true,
    joinedYear: 2016,
    reviews: {rating: 4}
  }
};

var db = {};

db.getSomething = function (callback) {
  callback(null, data);
};

db.updateSomething = function (callback) {

}

module.exports = db;