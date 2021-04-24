import './Game.css';
import React from 'react';

function Square(props) {
    return (
        <button className="Cell" onClick={props.click}>
            <div className="XOstyle"><div className={props.clName}>{props.value}</div></div>
        </button >
    );
}
function StartNewGame(props) {
    return (
        <button className="startButton" onClick={props.click}>
            <div className="startButtonContent">vat</div>
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
            nextTurn: "X",
            numTurn: 0
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
    handleNewGameClick() {
        this.setState({
            squares: Array(9).fill(null),
            nextTurn: "X",
            numTurn: 0
        });
    }


    handleFieldClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) != null) {
            return;
        }
        if (squares[i]) {
            return;
        }
        squares[i] = this.state.nextTurn;
        this.changeTurn();
        this.setState(
            {
                gameStatus: 1,
                numTurn: this.state.numTurn + 1,
                squares: squares,
            });
    }

    renderSquare(i, winnerStatus) {
        if (winnerStatus != null) {
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
            if ((i === lines[winnerStatus][0]) || (i === lines[winnerStatus][1]) || (i === lines[winnerStatus][2])) {
                return (
                    <Square
                        value={this.state.squares[i]}
                        click={() => this.handleFieldClick(i)}
                        clName={"CellContentWin"}
                    />);
            }
        }
        return (
            <Square
                value={this.state.squares[i]}
                click={() => this.handleFieldClick(i)}
                clName={null}
            />);

    }

    renderStartGameButton() {
        return (
            <StartNewGame
                click={() => this.handleNewGameClick()}
            />);
    }

    render() {

        const winnerStatus = calculateWinner(this.state.squares);
        let status;

        if (winnerStatus != null) {
            let next = this.state.nextTurn;
            if (next === "X") {
                next = "O";
            } else {
                next = "X";
            }
            status = 'Winner: ' + next + " !";
        } else if (this.state.numTurn === 9) {
            status = "Draw!";
        }
        else {
            status = "Next turn: " + this.state.nextTurn;
        }

        return (
            <div>
                <div>
                    <div className="current-turn">{status}</div>
                    <div className="playing-board">
                        <div className="board-row">
                            {this.renderSquare(0, winnerStatus)}
                            {this.renderSquare(1, winnerStatus)}
                            {this.renderSquare(2, winnerStatus)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(3, winnerStatus)}
                            {this.renderSquare(4, winnerStatus)}
                            {this.renderSquare(5, winnerStatus)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(6, winnerStatus)}
                            {this.renderSquare(7, winnerStatus)}
                            {this.renderSquare(8, winnerStatus)}
                        </div>
                    </div>
                </div >
                <div>{this.renderStartGameButton()}</div>
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