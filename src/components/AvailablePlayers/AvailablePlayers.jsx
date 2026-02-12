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
        <div className='grid grid-cols-3 items-center gap-4'>
 
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