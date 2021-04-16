import React from 'react';
import Review from '../Review/Review';
import samsung from '../../../images/samsung.jpg'
import iphone from '../../../images/iphone.jpg'
import onePlus from '../../../images/onePlus.jpg'
const review = [
    {
        name: 'Samsung',
        img: samsung,
        description: ''
    },
    {
        name: 'Iphone',
        img: iphone,
        description: ''
    },
    {
        name: 'One Plus',
        img: onePlus,
        description: ''
    }
]

const Reviews = () => {
    return (
        <div className="row d-flex">
            {
                review.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;