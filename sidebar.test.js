import React from 'react';
import renderer from 'react-test-renderer';

import Sidebar from './sidebar';

var product = {
  name: "Martin 75th Anniversary of Grand Ole Opry, #223 of #650 owned by Brother Oswald from Roy Acuff Band",
  condition: "mint",
  shippingFee: 79,
  priceOriginal: 3499,
  priceActual: 3299,
  isOpenToOffers: true
};

var seller = {
  name: "Average Joe's Guitars",
  address: "Beaufort, NC, United States",
  isQuickShipper: true,
  joinedYear: 2016,
  reviews: {rating: 4}
};

test('testing on the sidebar component', () => {
  const component = renderer.create(
    <Sidebar product={product} seller={seller}></Sidebar>
  )

  var page = component.toJSON();
  //I honestly don't know what snapshot it's talking about
  expect(page).toMatchSnapshot();
});