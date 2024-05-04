import { useState } from "react";

export default function Player({name, symbol}){

    const [isEditing, setIsEditing] = useState(false);
    function handleClick(){
        setIsEditing((editing) => !isEditing);
    }
    let player = <span className="player-name">{name}</span>;
    let clicked="edit";
    if(isEditing) {
        clicked = "save";
        player= <input type="text" required value={name} />;
    }
    return(
    <li>
    <span className="player">
    {player}
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleClick}>{clicked}</button>
    </li>
    );
}