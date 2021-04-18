import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookingListDetails from '../BookingListDetails/BookingListDetails';

const BookingList = () => {
    const [bookingList, setBookingList] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bookingList')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookingList(data)
            })
    }, [])
    return (
        <div>
            
            <div className="container">
            
                {
                    bookingList.map(booking => <BookingListDetails booking={booking}></BookingListDetails>)
                }
            </div>

        </div>
    );
};

export default BookingList;