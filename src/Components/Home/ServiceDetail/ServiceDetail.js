import React from 'react';
import './ServiceDetail.css'
const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center shadow p-3 mb-4 bg-body rounded service-detail">

            <img className="mt-3" style={{height: "100px"}} src={service.img} alt="" />
            <h5 className="mt-4 text-warning">{service.name}</h5>
            <p className="mt-3 align-center text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="btn btn-outline-dark">View</button>
        </div>
    );
};

export default ServiceDetail;