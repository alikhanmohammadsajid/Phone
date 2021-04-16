import React from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import BookingBuy from './BookingBuy/BookingBuy';
import BuyHeader from './BuyHeader/BuyHeader';

const Buy = () => {
    return (
        <div>
            <Navbar></Navbar>
            <BuyHeader></BuyHeader>
            <BookingBuy></BookingBuy>
            <Footer></Footer>
        </div>
    );
};

export default Buy;