import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'
const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center shadow p-3 mb-4 bg-body rounded service-detail">

            <img className="mt-3" style={{height: "100px"}} src={service.img} alt="" />
            <h5 className="mt-4 text-brand">{service.name}</h5>
            <h6 className="text-success">{service.price}</h6>
            <p className="mt-3 align-center text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="btn btn-outline-dark"><Link style={{textDecoration: "none"}} to="./buy">Buy</Link></button>
        </div>
    );
};

export default ServiceDetail;