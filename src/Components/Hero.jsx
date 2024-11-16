import React from 'react';
import Image from '../Assets/pp.jpg';

const Hero = () => {
    return (
        <section id="hero" className="h-screen flex flex-row justify-center items-center bg-red-900 text-left px-8">
            <div className=" rounded-sm">

            <img src={Image} className='w-64 mr-8' alt="Profile" />
            </div>
            <div>
                <h1 className='text-white text-4xl font-bold'>Nurfadil Irfan</h1>
                <p className='text-white mt-2'>Newbie Front End Development.</p>
            </div>
        </section>
    );
};

export default Hero;
