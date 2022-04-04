import React from 'react';

const Homepage = () => {
    return (
        <div className='flex mx-auto justify-evenly items-center gap-5 border'>
            <div className='mx-10 my-12'>
                <h1 className='text-center font-extrabold text-5xl my-4'>Introducing Our New <span className='text-green-800'>Skincare Product</span></h1>
                <p className='text-center mt-6 font-semibold'>Find the best ingredients to help tackle breakouts, excess oil and keep skin healthy. Shop AM & PM skincare routines suited to your skin concerns and goals.</p>
            </div>
            <div className=''>
                <img className='w-[500px]' src="https://img.freepik.com/free-psd/2-oz-tube-mockup_1332-5136.jpg?t=st=1649032559~exp=1649033159~hmac=a1c8f7f5f3803b5790703ea1a1885b170f14b57e64c3347ed65a8e27da78668e&w=740" alt="" />
            </div>
        </div>
    );
};

export default Homepage;