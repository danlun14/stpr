import './App.css';
import Game from './Game'
import Introduction from './Introduction'
import './Introduction.css';
import React from 'react';


function StartGame(props) {
  return (
    <button className="startButton" onClick={props.click}>
      <div className="startButtonContent">Start</div>
    </button >
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: 0
    };
  }
  handleStartGameClick() {
    this.setState({

      gameStart: 1
    });
  }

  renderStartGameButton() {
    return (
      <div>
        <Introduction />
        <div className="rules"><StartGame click={() => this.handleStartGameClick()} /></div>
      </div>
    );
  }
  render() {
    if (this.state.gameStart === 0) {
      return this.renderStartGameButton();
    } else {
      return (<div>
        <Game />
      </div>);
    }
  }
}

export default App;