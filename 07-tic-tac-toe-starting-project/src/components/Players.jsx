import { useState } from "react";
export default function Player({name, symbol}){
    const [isEditing, setIsEditing] = useState(false);
    function handleClick(pressedButton){
        setIsEditing(pressedButton);
        console.log("working");
    }
    return(
    <li>
    <span className="player">
    <span className="player-name">{name}</span>
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onclick={()=> handleClick(true)}>Edit</button>
    </li>
    );
}