import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({addSelectedPlayers,handleRemovePlayer, handleAddMorePlayer}) => {


    return (
        <div>
           
            
            {
                addSelectedPlayers.map( selectedPlayer=> 
                <SelectedPlayer
                    key={selectedPlayer.playerId}
                    selectedPlayer={selectedPlayer}
                    handleRemovePlayer={handleRemovePlayer}
                    handleAddMorePlayer={handleAddMorePlayer}
                   
                
                ></SelectedPlayer>)
            }
            
            <button onClick={()=>handleAddMorePlayer()} className='bg-lime-400 hover:bg-lime-500 font-bold p-4 rounded-2xl'>Add More Player</button>
        </div>
    );
};

export default SelectedPlayers;