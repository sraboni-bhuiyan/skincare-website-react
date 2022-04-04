import React from 'react';

const ReviewCard = ({review}) => {
    const {id, name, rating, picture, info} = review;

    return (
        <div className='w-3/4 mx-auto my-12 p-5 shadow-xl rounded-2xl'>
            
            <div className='flex justify-between items-center gap-5'>
                <div className='my-2'>
                    <img className='w-[200px] rounded-xl' src={picture} alt="" />
                    <h1 className='bg-green-800 text-white text-center font-semibold text-lg my-4 rounded'>{name}</h1>
                </div>
                <div className='w-3/4'>
                    <p >Rating: <span className='font-semibold text-lg'>{rating}</span> out of 10</p>
                    <p className='font-semibold mt-6'>"{info}"</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;