import { useState } from "react";

export default function Player({intialName, symbol, isActive}){
    const [playerName, setplayerName] = useState(intialName);
    const [isEditing, setIsEditing] = useState(false);
    function handleClick(){
        setIsEditing((editing) => !isEditing);
    }
    function handleChangeName(event){
        setplayerName(event.target.value);
    }
    let player = <span className="player-name">{playerName}</span>;
    let clicked="edit";
    if(isEditing) {
        clicked = "save";
        player= <input type="text" required value={playerName} onChange={handleChangeName} />;
    }
    return(
    <li className={ isActive ? 'active' : undefined} >
    <span className='Player' >
    {player}
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleClick} >{clicked}</button>
    </li>
    );
}