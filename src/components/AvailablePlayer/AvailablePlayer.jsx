import React from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { IoFlag } from "react-icons/io5";

const AvailablePlayer = ({availablePlayer, handleAddSelectedPlayers}) => {
    const {name,image,price,role,bowlingType,battingType,country} = availablePlayer
    return (
        <div className=''>
           <div className=''>
            <div className='p-4 border border-gray-300 rounded-lg'>
                <div className=' w-full flex justify-center mb-6 '>
                    <img className='h-60 w-full object-cover rounded-2xl' src={image} alt="" />
                </div>
                
                <div className='flex justify-start gap-2 items-center'>
                    <FaCircleUser size={20}></FaCircleUser>
                <h3 className='font-bold'>{name}</h3>
                </div>
                <div className='flex justify-between'>
                    <div className='flex justify-between gap-2 items-center'>
                        <IoFlag size={20}></IoFlag>
                        <p>{country}</p>
                    </div>
            
                <p className='bg-gray-200 p-2 rounded-lg'>{role}</p>
                </div>

                <div>
                    <h3 className='font-bold flex justify-start mb-2'>Rating</h3>
                    <div className='flex justify-between items-center mb-2'>
                        <p>{battingType}</p>
                        <p>{bowlingType}</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p>Price:{price}</p>
                        <button className='border border-gray-400 px-2 py-1 rounded-lg bg-lime-400 hover:bg-lime-200' onClick={()=>{handleAddSelectedPlayers(availablePlayer);}}>Choose Player</button>
                    </div>
                </div>
            </div>
         </div>                
            {/* //   <button onClick={()=>{handleAddSelectedPlayers(availablePlayer);}}>Choose Player</button>
            
            //     <h3>Name:{name}</h3>
            //     <p>{price}</p> */}
            
        </div>
    );
};

export default AvailablePlayer;