import { faAngellist } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({ review }) => {
    console.log(review);
    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div className="col-md-4 align-center ">
                <img style={{ height: '100px' }} className="img-fluid mb-3" src={review.img} alt="" />
                <h4 className="text-center">{review.name}</h4>
                <small>
                    {review.description}
                </small>
                <p> <FontAwesomeIcon className="text-primary mt-4" icon={faAngellist} /> <button className="btn btn-outline-danger">Review</button></p>
            </div>
        </div>
    );
};

export default Review;