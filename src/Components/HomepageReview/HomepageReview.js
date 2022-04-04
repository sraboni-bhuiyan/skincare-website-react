import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const HomepageReview = () => {
    const [userReviews, setUserReviews] = useState([]);
    useEffect( () => {
        fetch('userReview.json')
        .then(res => res.json())
        .then(data => setUserReviews(data))
    }, [userReviews])

    return (
        <div>
            {
                userReviews.slice(0,3).map((review) => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>
                ))
            }
        </div>
    );
};

export default HomepageReview;