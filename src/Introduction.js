import './Introduction.css';
import React from 'react';

function Rules() {


    return (
        <div >
            <div className="rules">Здрувствуте!</div>
            <div className="rules">Вы открыли игру крестики нолики.</div>
            <p></p>
            <div className="rules1">ПРАВИЛА:</div>
            <div className="rules1">1.Начинают крестики</div>
            <div className="rules1">2.После каждого хода, происходит его смена</div>
            <div className="rules1">3.Выигрывает тот, кто первый поставил три в ряд</div>
            <p></p>
            <div className="rules1">Передача хода происходит после ничьи</div>
            <div className="rules1">Также ход меняется при победе любого игрока</div>
            <p></p>
            <div className="rules">Намжмите ниже на кнопку для начала игры</div>
            <div className="rules">Удачи!</div></div>
    );

}

class Introduction extends React.Component {
    render() {
        return (
            <div>
                <Rules />
            </div>
        );
    }
}

export default Introduction;