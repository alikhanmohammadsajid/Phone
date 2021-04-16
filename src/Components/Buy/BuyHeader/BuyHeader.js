import React from 'react';
import buy from '../../../images/buy.png'
const BuyHeader = () => {
    return (
        <main className="d-flex align-items-center mt-5 mb-5">
            <div className="col-md-12 ms-auto d-flex justify-content-center">
                <img style={{
                    height: "400px",
                    borderRadius: "50px"
                }} src={buy} alt="" />
            </div>
        </main>
    );
};

export default BuyHeader;