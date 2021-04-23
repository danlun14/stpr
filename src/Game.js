import './Game.css';
import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            clName: "CellWin",
        };
    }

    render() {
        return (
            <button type="" className="Cell"
                onClick={() => this.setState({ value: 'x' })}>
                <div className="XOstyle"><div className={this.props.clName}>{this.state.value}</div></div>
            </button >
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    renderSquare(i, winCell) {
        return <Square value={this.state.squares[i]} clName={winCell} />;
    }

    render() {
        const status = 'Next turn:';

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