import React from 'react';
import './BattleScreen.css';

const BattleScreen = ({myPokeSelection, ComputerRandomSelection, enemyHealth, myHealth}) =>{

    console.log(myPokeSelection)
    console.log(ComputerRandomSelection)

    return(
        <div className="battle-container">
            <div className="enemy-container">
                <h1>{enemyHealth}</h1>
                <img src={ComputerRandomSelection[0].sprites.front_default}/>
            </div>
            <div className="my-container">
                <h1>{myHealth}</h1>
                <img src={myPokeSelection[0].sprites.front_default}/>
            </div>
        </div>
    )
}

export default BattleScreen