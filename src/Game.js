import './Game.css';
function Cell(props) {
    return (
        <div className="cell">{props.name} </div>
    );
}



function Game() {
    return (
        <><Cell name="Алиса" />
            <Cell name="Базилио" />
            <Cell name="Буратино" />
            <Cell name="Алиса" />
            <Cell name="Базилио" />
            <Cell name="Буратино" />
            <Cell name="Алиса" />
            <Cell name="Базилио" />
            <Cell name="Буратино" />
        </>
    );
}

export default Game;