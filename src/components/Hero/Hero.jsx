import React from 'react';
import banner from '../../assets/banner-main.png'
import shadow from '../../assets/bg-shadow.png'

const Hero = ({handleCoinCount,notify}) => {
    return (
        <div className='bg-cover bg-center relative my-6 py-14 flex flex-col items-center gap-6 bg-black rounded-2xl'
            style={{ backgroundImage: `url(${shadow})` }}>
            <img src={banner} alt="Banner" />
            <h1 className='font-bold text-5xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-gray-300 text-2xl'>Beyond Boundaries Beyond Limits</p>
            <div className='border-3 border-lime-400 p-2 rounded-2xl'>
                <button onClick={()=> {handleCoinCount(); notify();}}  className='bg-lime-400 rounded-2xl p-4 text-2xl hover:bg-lime-600 font-bold'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Hero;