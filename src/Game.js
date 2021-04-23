import './Game.css';
import React from 'react';

function Square(props) {
    return (
        <button type="" className="Cell" onClick={props.click}>
            <div className="XOstyle"><div className={props.clName}>{props.value}</div></div>
        </button >
    );
}


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            nextTurn: "X"
        };
    }


    handleClick(i) {
        const squares = this.state.squares.slice();
        if (squares[i]) {
            return;
        }
        squares[i] = this.state.nextTurn;
        let next = this.state.nextTurn;
        if (next === "X") {
            next = "O";
        } else {
            next = "X";
        }
        this.setState(
            {
                squares: squares,
                nextTurn: next
            });
    }

    renderSquare(i, winCell) {
        return (
            <Square
                value={this.state.squares[i]}
                click={() => this.handleClick(i)}
                clName={winCell}
            />);
    }

    render() {
        const status = 'Next turn: ' + this.state.nextTurn;

        return (
            <div>
                <div className="current-turn">{status}</div>
                <div className="playing-board">
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4, "CellContentWin")}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
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