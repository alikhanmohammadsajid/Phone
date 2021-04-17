import React, { useEffect, useState } from 'react';
import BookingListDetails from '../BookingListDetails/BookingListDetails';
import Sidebar from '../Sidebar/Sidebar';

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
            <div className="col-md-4">
<Sidebar></Sidebar>
            </div>
            <div className="col-md-8 container">
            {
                bookingList.map(booking => <BookingListDetails booking={booking}></BookingListDetails>)
            }
            </div>

        </div>
    );
};

export default BookingList;