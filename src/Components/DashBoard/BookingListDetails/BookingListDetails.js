import React from 'react';
import { Link } from 'react-router-dom';

const BookingListDetails = ({ booking }) => {
  return (
    <div className="container row">
      <div className="col-md-4">
       
          
            <Link to="/" className="text-white " >
              
              <button className="btn btn-outline-success"> Home</button>
            </Link>
          
        
      </div>
      <div className="col-md-8">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Item</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr className="shadow p-3 mb-5 bg-body rounded">
              <th scope="row">#</th>
              <td>{booking.name}</td>
              <td>{booking.phone}</td>
              <td>{booking.service}</td>
              <td>{booking.email}</td>
            </tr>


          </tbody>
        </table>
      </div>


    </div>
  );
};

export default BookingListDetails;