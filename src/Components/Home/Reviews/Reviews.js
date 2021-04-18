import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://glacial-atoll-37822.herokuapp.com//reviews')
            .then(res => res.json())
            .then(data => {
                setReview(data)
                console.log(data)
            })
    }, [])

    return (
        <div className="row d-flex">
            {
                review.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;