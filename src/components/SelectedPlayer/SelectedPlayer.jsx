import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";

const SelectedPlayer = ({selectedPlayer,handleRemovePlayer}) => {
    const {name,battingType,image,playerId}= selectedPlayer
    return (
        <div>
            <div className='border-2 border-gray-300 flex justify-between items-center gap-2 rounded-2xl p-4 mb-4'>
                <div className=''>
                    <img className='w-25 h-25 rounded-2xl' src={image} alt="" />
                </div>
                <div className='w-full flex justify-between items-center'>
                    <div className='text-left'>
                        <h3 className='font-bold text-2xl'>{name}</h3>
                        <p>{battingType}</p>
                    </div>
                     <button onClick={()=>handleRemovePlayer(playerId)} className='text-red-500 text-2xl'><RiDeleteBinLine/></button>   
                </div>
            </div>
       </div>
       
    );
};

export default SelectedPlayer;