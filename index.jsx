import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Sidebar from './sidebar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    //put some default value so that the page doesn't throw errors when loading
    this.state = {
      product: {},
      seller: {reviews: {rating: 0}}
    }
  }

  //when initializing the page
  componentDidMount () {
    //send a get request for the product and seller infomation
    axios.get('http://localhost:3210/api')
      .then((result) => {
        this.setState({
          product: result.data.product,
          seller: result.data.seller
        });
      })
      .catch((err) => {
        console.log('error in get: ' + err);
      });
  }

  render () {
    return (<div>
      <Sidebar product={this.state.product} seller={this.state.seller}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));