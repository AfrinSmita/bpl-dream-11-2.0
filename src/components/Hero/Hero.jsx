import React from 'react';
import banner from '../../assets/banner-main.png'
import shadow from '../../assets/bg-shadow.png'

const Hero = ({handleCoinCount,notify}) => {
    return (
        <div className='bg-cover bg-center relative my-6 py-14 flex flex-col items-center gap-6'
            style={{ backgroundImage: `url(${shadow})` }}>
            <img src={banner} alt="Banner" />
            <h1 className='font-bold text-5xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p>Beyond Boundaries</p>
            <button onClick={()=> {handleCoinCount(); notify();}}  className='bg-lime-400 rounded-2xl p-4 text-2xl hover:bg-lime-600'>Claim Free Credit</button>
        </div>
    );
};

export default Hero;