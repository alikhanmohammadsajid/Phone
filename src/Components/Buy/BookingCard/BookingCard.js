import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingForm from '../BookingForm/BookingForm';

const BookingCard = ({ booking }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="col-md-4 mb-5 ">
            <div className="card p-3 shadow-lg p-3 mb-5 bg-body rounded ">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">
                        {booking.sub}
                    </h5>
                    <h6>
                        {booking.totalSpace}
                    </h6>
                    <p>
                        {booking.price}
                    </p>
                    <Link to="/payment"><button className="btn btn-info text-uppercase">Pay Now</button></Link> 
                    <br/>
                    <small>Then Buy</small>
                    <br/>
                    <button onClick={openModal} className="btn btn-warning text-uppercase">
                        Buy Now
                    </button>
                    <BookingForm modalIsOpen={modalIsOpen} appointmentOn={booking.sub} closeModal={closeModal}></BookingForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;