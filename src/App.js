import './App.css';
import Game from './Game'
import Introduction from './Introduction'

import React from 'react';




class App extends React.Component {
  render() {
    return (<div>
      <Introduction />
      <Game />
    </div>);
  }
}

export default App;