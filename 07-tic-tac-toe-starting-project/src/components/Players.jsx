import { useState } from "react";

export default function Player({intialName, symbol}){
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
    <li>
    <span className="player">
    {player}
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleClick} >{clicked}</button>
    </li>
    );
}