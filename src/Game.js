import './Game.css';
import React from 'react';

class Square extends React.Component {
    render() {
        return (
            <button className="Cell">
            </button>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game-board">
                <Square />
            </div>
        );
    }
}


export default Game;