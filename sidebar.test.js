/* eslint no-undef: "error" */
/* global test, expect, describe, it */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from './sidebar';

const product = {
  name: 'Martin 75th Anniversary of Grand Ole Opry, #223 of #650 owned by Brother Oswald from Roy Acuff Band',
  condition: 'mint',
  shippingFee: 79,
  priceOriginal: 3499,
  priceActual: 3299,
  isOpenToOffers: true
};

const seller = {
  name: 'Average Joe\'s Guitars',
  address: 'Beaufort, NC, United States',
  isQuickShipper: true,
  joinedYear: 2016,
  reviews: { rating: 4 }
};

// jest test
test('testing on the sidebar component', () => {
  const component = renderer.create(
    <Sidebar product={product} seller={seller} />
  );

  const page = component.toJSON();
  // Checks if there is any change in the file appearance
  // Doesn't check the inside though
  expect(page).toMatchSnapshot();
});

// enzyme test
configure({ adapter: new Adapter() });

describe('Sidebar', () => {
  it('It should show up', () => {
    shallow(<Sidebar product={product} seller={seller} />);
  });

  it('It should have state component product', () => {
    const wrapper = shallow(<Sidebar product={product} seller={seller} />);
    // expect(wrapper.instance().state.product).toExist();
    expect(wrapper.instance().state.product.name).toEqual('Martin 75th Anniversary of Grand Ole Opry, #223 of #650 owned by Brother Oswald from Roy Acuff Band');
    expect(wrapper.instance().state.product.condition).toEqual('mint');
    expect(wrapper.instance().state.product.shippingFee).toEqual(79);
    expect(wrapper.instance().state.product.priceOriginal).toEqual(3499);
    expect(wrapper.instance().state.product.priceActual).toEqual(3299);
    expect(wrapper.instance().state.product.isOpenToOffers).toEqual(true);
  });

  it('It should have state component seller', () => {
    const wrapper = shallow(<Sidebar product={product} seller={seller} />);
    expect(wrapper.instance().state.seller.name).toEqual('Average Joe\'s Guitars');
    expect(wrapper.instance().state.seller.address).toEqual('Beaufort, NC, United States');
    expect(wrapper.instance().state.seller.isQuickShipper).toEqual(true);
    expect(wrapper.instance().state.seller.joinedYear).toEqual(2016);
    expect(wrapper.instance().state.seller.reviews.rating).toEqual(4);
  });
});
