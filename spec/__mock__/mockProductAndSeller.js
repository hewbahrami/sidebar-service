const response = {};

response.data = {
  product: {
    name: 'Martin 75th Anniversary of Grand Ole Opry, #223 of #650 owned by Brother Oswald from Roy Acuff Band',
    condition: 'mint',
    shippingFee: 79,
    priceOriginal: 3499,
    priceActual: 3299,
    isOpenToOffers: true
  },
  seller: {
    name: "Average Joe's Guitars",
    address: 'Beaufort, NC, United States',
    isQuickShipper: true,
    joinedYear: 2016,
    reviews: {
      rating: 4
    }
  }
};

response.json = () => response.data;

module.exports = response;
