class Rules extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            nextTurn: "X",
            numTurn: 0,
            xwin: 0,
            owin: 0,
            gameStatus: 0
        };
    }

    render() {


        return;
    }
}

class Introduction extends React.Component {
    render() {
        return (
            <div className="rules">
                <Rules />
            </div>
        );
    }
}

export default Game;