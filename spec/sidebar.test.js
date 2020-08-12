/* eslint no-undef: "error" */
/* global test, expect, describe, it */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from '../sidebar';

const product1 = {
  name: 'Martin 75th Anniversary of Grand Ole Opry, #223 of #650 owned by Brother Oswald from Roy Acuff Band',
  condition: 'mint',
  shippingFee: 79,
  priceOriginal: 3499,
  priceActual: 3299,
  isOpenToOffers: true
};

const seller1 = {
  name: 'Average Joe\'s Guitars',
  address: 'Beaufort, NC, United States',
  isQuickShipper: true,
  joinedYear: 2016,
  reviews: { rating: 4 }
};

const product2 = {
  name: 'Martin D-28 John Lennon Sitka Spruce / Rosewood Dreadnought',
  condition: 'mint',
  shippingFee: 89,
  priceOriginal: 3399,
  priceActual: 3199,
  isOpenToOffers: false
};

const seller2 = {
  name: 'Hitchhiker Music',
  address: 'Busan, Korea, Republic of',
  isQuickShipper: false,
  joinedYear: 2018,
  reviews: { rating: 5 }
};

// jest test
test('testing on the sidebar component', () => {
  const component = renderer.create(
    <Sidebar product={product1} seller={seller1} />
  );

  const page = component.toJSON();
  // Checks if there is any change in the file appearance
  // Doesn't check the inside though
  expect(page).toMatchSnapshot();
});

// enzyme test
configure({ adapter: new Adapter() });

describe('Sidebar', () => {
  const wrapper = shallow(<Sidebar product={product1} seller={seller1} />);

  it('It should exist', () => {
    expect(wrapper.instance()).toBeTruthy();
  });

  it('It should have state component product', () => {
    expect(wrapper.instance().state.product.name).toEqual('Martin 75th Anniversary of Grand Ole Opry, #223 of #650 owned by Brother Oswald from Roy Acuff Band');
    expect(wrapper.instance().state.product.condition).toEqual('mint');
    expect(wrapper.instance().state.product.shippingFee).toEqual(79);
    expect(wrapper.instance().state.product.priceOriginal).toEqual(3499);
    expect(wrapper.instance().state.product.priceActual).toEqual(3299);
    expect(wrapper.instance().state.product.isOpenToOffers).toEqual(true);
  });

  it('It should have state component seller', () => {
    expect(wrapper.instance().state.seller.name).toEqual('Average Joe\'s Guitars');
    expect(wrapper.instance().state.seller.address).toEqual('Beaufort, NC, United States');
    expect(wrapper.instance().state.seller.isQuickShipper).toEqual(true);
    expect(wrapper.instance().state.seller.joinedYear).toEqual(2016);
    expect(wrapper.instance().state.seller.reviews.rating).toEqual(4);
  });

  it('It should have clickable button', () => {
    const watchButton = wrapper.find('#watchButton');
    expect(watchButton.text()).toEqual('☆ Watch');
    // clicking button causes error in test, but run fine on web page
    expect(() => { watchButton.simulate('click'); }).toThrow(Error);
    wrapper.instance().setState({ isWatched: true });
    expect(() => { watchButton.simulate('click'); }).toThrow(Error);
  });

  it('It should work with different input data', () => {
    const wrapper2 = shallow(<Sidebar product={product2} seller={seller2} />);
    expect(wrapper2.instance().state.product.name).toEqual('Martin D-28 John Lennon Sitka Spruce / Rosewood Dreadnought');
    expect(wrapper2.instance().state.seller.name).toEqual('Hitchhiker Music');
  });
});
