import React, {useEffect, useState} from "react";
import useLevelStore from "../contexts/LevelContext";

const Navigation = () => {
    const [time, setTime] = useState(0);
    const difficulty = useLevelStore((state) => state.difficulty);
    //const changeDifficulty = useLevelStore((state) => state.changeDifficulty)
    
    const formatTime = (time) => {
        const getSeconds = `0${Math.round(time % 60)}`.slice(-2);
        const getMinutes = `0${(Math.floor(time / 60)) % 60}`.slice(-2);
      
        return `${getMinutes}:${getSeconds}`;
      };
    
    useEffect(() => {
        setInterval(() => {
            setTime((prevTime) => prevTime + 1);
          }, 1000);
         
          
    }
    , [])

    return (


        <nav>
            <ul>
                <div className="logo-column">
                    <li className="logo-text">Where's the cat?</li>
                </div>
                <div className="info-column">
                    <li>{formatTime(time)}</li>
                    <li>Difficulty: <span className="difficulty-display">{difficulty}</span></li>
                    <li className="nav-info">Leaderboard</li>
                    <li className="nav-info">About</li>
                </div>
            </ul>
        </nav>

    )

}

export default Navigation;