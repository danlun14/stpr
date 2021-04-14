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

class Board extends React.Component {
    renderSquare() {
        return <Square />;
    }

    render() {
        return (
            <div>
                <div className="playing-board">
                    <div className="board-row">
                        {this.renderSquare()}
                        {this.renderSquare()}
                        {this.renderSquare()}
                    </div>
                    <div className="board-row">
                        {this.renderSquare()}
                        {this.renderSquare()}
                        {this.renderSquare()}
                    </div>
                    <div className="board-row">
                        {this.renderSquare()}
                        {this.renderSquare()}
                        {this.renderSquare()}
                    </div>
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
}


export default Game;