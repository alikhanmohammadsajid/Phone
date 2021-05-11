import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookingCard from '../BookingCard/BookingCard';


const BookingBuy = () => {
    const [bookingData, setBookingData] = useState([])
    const { _id } = useParams();
    useEffect(() => {
        fetch(`https://glacial-atoll-37822.herokuapp.com/services`)
        .then(res => res.json())
        .then(data =>{
            setBookingData(data)
            console.log(data);
        })
    }, [])
    console.log('id found', _id);
    return (
        <section>
            <h2 className="container text-dark text-center mb-5">Available Gadgets</h2>
            <div style={{ width: "100%" }} className="row">
                {
                    bookingData.map(booking => <BookingCard booking={booking} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookingBuy;