import React from 'react';

const BookingListDetails = ({booking}) => {
    return (
        <div className="container">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr className="shadow p-3 mb-5 bg-body rounded">
      <th scope="row">#</th>
      <td>{booking.name}</td>
      <td>{booking.phone}</td>
      <td>{booking.email}</td>
    </tr>
    
    
  </tbody>
</table>

        </div>
    );
};

export default BookingListDetails;