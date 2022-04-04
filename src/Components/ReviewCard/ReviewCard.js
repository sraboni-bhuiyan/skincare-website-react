import React from 'react';

const ReviewCard = ({review}) => {
    const {id, name, rating, picture, info} = review;

    return (
        <div className='w-3/4 mx-auto my-12 p-5 shadow-lg rounded-2xl'>
            
            <div className='flex justify-between items-center gap-5'>
                <div>
                    <h1 className='font-semibold text-lg'>{name} ~</h1>
                    <img src={picture} alt="" />
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