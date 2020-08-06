import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

import Sidebar from './Sidebar.jsx';

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