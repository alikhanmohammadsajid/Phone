import { faAngellist } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({ review }) => {
    console.log(review);
    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div className="col-md-4 text-center">
            <img style={{ height: '100px'}} className="img-fluid mb-3" src={review.img} alt=""/>
            <h4>{review.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faAngellist}/> <button className="btn btn-outline-danger">Review</button></p>
        </div>
        </div>
    );
};

export default Review;