import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Sidebar from './Sidebar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (<div>
      <Sidebar/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));