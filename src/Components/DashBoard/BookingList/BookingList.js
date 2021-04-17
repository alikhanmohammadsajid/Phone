import React, { useEffect, useState } from 'react';
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
            {
                bookingList.map(booking => <BookingListDetails booking={booking}></BookingListDetails>)
            }
        </div>
    );
};

export default BookingList;