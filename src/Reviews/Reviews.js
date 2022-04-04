import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [userReviews, setUserReviews] = useState([]);
    useEffect( () => {
        fetch('userReview.json')
        .then(res => res.json())
        .then(data => setUserReviews(data))
    }, [userReviews])

    return (
        <div>
            <h1>Review</h1>
        </div>
    );
};

export default Reviews;