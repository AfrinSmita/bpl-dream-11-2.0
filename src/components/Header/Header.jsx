import React from 'react';
import logo from '../../assets/logo.png'
import { BsCoin } from "react-icons/bs";

const Header = ({coins}) => {
    return (
        <div className='flex justify-between items-center'>
            <img src={logo} alt="" />
            <div className='flex justify-around items-center gap-4'>
                <a href="">Home</a>
                <a href="">Fixtures</a>
                <a href="">Team</a>
                <a href="">Schedule</a>
                <div className='flex justify-evenly items-center gap-2'>
                    <p>{coins} Coin</p>
                    <button >
                        <BsCoin className='text-2xl text-yellow-500'></BsCoin>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default Header;