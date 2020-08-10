import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './sidebar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    // put some default value so that the page doesn't throw errors when loading
    this.state = {
      product: {},
      seller: { reviews: { rating: 0 } }
    };
  }

  render() {
    return (
      <div>
        <Sidebar product={this.state.product} seller={this.state.seller} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
