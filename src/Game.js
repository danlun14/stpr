import './Game.css';
import React from 'react';

function Square(props) {
    return (
        <button type="" className="Cell" onClick={props.click}>
            <div className="XOstyle"><div className={props.clName}>{props.value}</div></div>
        </button >
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return i;
        }
    }
    return null;
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            nextTurn: "X"
        };
    }

    changeTurn() {
        let next = this.state.nextTurn;
        if (next === "X") {
            next = "O";
        } else {
            next = "X";
        }
        this.setState(
            {
                nextTurn: next
            });
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.nextTurn;
        this.changeTurn();
        this.setState(
            {
                squares: squares,
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

        const winnerStatus = calculateWinner(this.state.squares);
        let status;

        if (winnerStatus) {
            let next = this.state.nextTurn;
            if (next === "X") {
                next = "O";
            } else {
                next = "X";
            }
            status = 'Winner: ' + next;
        } else {
            status = 'Next turn: ' + this.state.nextTurn;
        }

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