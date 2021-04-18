import { faAngellist } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({ review }) => {
    console.log(review);
    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div className="col-md-4 text-center">
                <img style={{ height: '60px', borderRadius: "50px" }} className="img-fluid mb-3" src={review.imageURL} alt="" />
                <h4>{review.name}</h4>
                <small>
                    {review.description}
                </small>
                <p> <FontAwesomeIcon className="text-primary mt-4 text-center" icon={faAngellist} /></p>
            </div>
        </div>
    );
};

export default Review;