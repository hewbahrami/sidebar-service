import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

import Sidebar from './Sidebar.jsx';

/*var product = {
  name: 'Martin 75th Anniversary of Grand Ole Opry, #223 of #650 owned by Brother Oswald from Roy Acuff Band',
  condition: 'mint',
  shippingFee: 79.00,
  priceOriginal: 3499.00,
  priceActual: 3299.00,
  isOpenToOffers: true
};

var seller = {
  name: 'Average Joe\'s Guitars',
  address: 'Beaufort, NC, United States',
  isQuickShipper: true,
  joinedYear: 2016,
  reviews: {rating: 4}
};*/

var product = {};
var seller = {reviews: {rating: 0}};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: product,
      seller: seller
    }
  }

  render () {
    return (<div>
      <Sidebar product={this.state.product} seller={this.state.seller}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));