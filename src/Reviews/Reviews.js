import React, { useEffect, useState } from 'react';
import ReviewCard from '../Components/ReviewCard/ReviewCard';

const Reviews = () => {
    const [userReviews, setUserReviews] = useState([]);
    useEffect( () => {
        fetch('userReview.json')
        .then(res => res.json())
        .then(data => setUserReviews(data))
    }, [userReviews])

    return (
        <div>
            <h1 className='text-center mt-10 text-3xl font-bold'>Customer Reviews</h1>
            {
                userReviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>
                ))
            }
        </div>
    );
};

export default Reviews;