import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({addSelectedPlayers,handleRemovePlayer}) => {


    return (
        <div>
           
            
            {
                addSelectedPlayers.map( selectedPlayer=> 
                <SelectedPlayer
                    key={selectedPlayer.playerId}
                    selectedPlayer={selectedPlayer}
                    handleRemovePlayer={handleRemovePlayer}
                   
                
                ></SelectedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;