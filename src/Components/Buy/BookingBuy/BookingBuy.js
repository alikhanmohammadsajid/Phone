import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData =[
    {
        id: 1,
        sub:'CAMERA',
        visitHour: '',
        totalSpaces: 10,
        price: 500
    },{
        id: 2,
        sub:'Dual Sim',
        visitHour: '',
        totalSpaces: 10,
        price: 300
    },{
        id: 3,
        sub:'Processor',
        visitHour: '',
        totalSpaces: 10,
        price: 400
    }
]

const BookingBuy = () => {
    return (
        <section>
            <h2   className="container text-brand text-center mb-5">Available Gadgets</h2>
            <div  style={{width: "100%"}}  className="row">
                {
                    bookingData.map(booking=> <BookingCard booking={booking} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookingBuy;