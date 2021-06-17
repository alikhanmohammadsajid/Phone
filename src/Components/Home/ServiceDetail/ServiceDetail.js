import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'
const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 m-2 shadow p-3 mb-4 bg-body rounded service-detail">

            <img className="mt-3" style={{ height: "100px", borderRadius: '20px' }} src={service.imageURL} alt="" />

            <h5 className="mt-4 text-dark">{service.name}</h5>
            <h6 className="text-dark">{service.price}</h6>

            <Link style={{ textDecoration: "none" }} to={`/buy/${service._id}`}>
                <button className="btn btn-info">Go To Shop</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;