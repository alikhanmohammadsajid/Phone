import React from 'react';
import BookingList from '../BookingList/BookingList';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    position: 'absolute',
    right: 0,
    backgroundColor: '#F4FDFB',
    height: '100%'
}

const DashBoard = () => {
    return (
        <section>
            <div style={{containerStyle}} className="row">
                <div className="col-md-12">
                    <Sidebar></Sidebar>
                </div>
                
            </div>
        </section>
    );
};

export default DashBoard;