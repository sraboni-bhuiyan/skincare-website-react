import React from 'react';
import { Link } from 'react-router-dom';
import HomepageReview from '../HomepageReview/HomepageReview';

const Homepage = () => {
    return (
        <div>
            <div className='flex mx-auto justify-evenly items-center gap-5 border'>
                <div className='mx-10 my-12'>
                    <h1 className='text-center font-extrabold text-5xl my-4'>Introducing Our New <span className='text-green-800'>Skincare Product</span></h1>
                    <p className='text-center mt-6 font-semibold'>Find the best ingredients to help tackle breakouts, excess oil and keep skin healthy. Shop AM & PM skincare routines suited to your skin concerns and goals.</p>
                    <div className='flex justify-center mt-10'>
                        <button className='border px-6 py-4 rounded-md bg-green-800 text-white font-bold cursor-pointer hover:bg-green-600'>See Demo</button>
                    </div> 
                </div>
                <div className=''>
                    <img className='w-[500px]' src="https://img.freepik.com/free-psd/2-oz-tube-mockup_1332-5136.jpg?t=st=1649032559~exp=1649033159~hmac=a1c8f7f5f3803b5790703ea1a1885b170f14b57e64c3347ed65a8e27da78668e&w=740" alt="" />
                </div>
            </div>
            <div className='my-24'>
                <h1 className='text-center mt-10 text-3xl font-bold'>Glimps of Customer Satisfacttion</h1>
                <HomepageReview></HomepageReview>
                <div className='flex justify-center'>
                    <Link to='/reviews' className='border px-6 py-4 rounded-md bg-green-800 text-white font-bold hover:bg-green-600'>See All Reviews</Link>   
                </div>
            </div>
        </div>
    );
};

export default Homepage;