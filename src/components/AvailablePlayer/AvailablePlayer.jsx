import React from 'react';

const AvailablePlayer = ({availablePlayer, handleAddSelectedPlayers}) => {
    const {name,price} = availablePlayer
    return (
        <div>
              <button onClick={()=>{handleAddSelectedPlayers(availablePlayer);}}>Choose Player</button>
            
                <h3>Name:{name}</h3>
                <p>{price}</p>
            
        </div>
    );
};

export default AvailablePlayer;