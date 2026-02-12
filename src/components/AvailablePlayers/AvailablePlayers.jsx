import React, { useEffect, useState } from 'react';
import AvailablePlayer from '../AvailablePlayer/AvailablePlayer';

const AvailablePlayers = ({handleAddSelectedPlayers}) => {
    const [availablePlayers, setAvailablePlayers] = useState([])

    useEffect(() => {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setAvailablePlayers(data))
    },[]);
    return (
        <div>
            <h3>hi</h3>
            <p>{availablePlayers.length}</p>
          

            {
                availablePlayers.map(availablePlayer=>
                    <AvailablePlayer
                    key={availablePlayer.id}
                    availablePlayer={availablePlayer}
                    // handleCountSelectedPlayers={handleCountSelectedPlayers}
                    handleAddSelectedPlayers={handleAddSelectedPlayers}
                    ></AvailablePlayer>
                )
            }
            
            
        </div>
    );
};

export default AvailablePlayers;