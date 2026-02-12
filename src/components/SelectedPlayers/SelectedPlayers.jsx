import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({addSelectedPlayers,countSelectedPlayers}) => {


    return (
        <div>
            <h3>Selected:{countSelectedPlayers}/12</h3>
            
            {
                addSelectedPlayers.map( selectedPlayer=> 
                <SelectedPlayer
                    key={selectedPlayer.index}
                    selectedPlayer={selectedPlayer}
                
                ></SelectedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;