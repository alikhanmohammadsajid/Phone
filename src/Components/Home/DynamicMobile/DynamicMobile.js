import React from 'react';
import './DynamicMobile.css';
import man from '../../../images/man.png'
import samsung from '../../../images/samsung.jpg'
const Mobile = () => {
    return (
        <section className="mt-5 mb-5 ">
            <div className="row d-flex container shadow-lg p-3 mb-5 bg-body rounded  align-center mobile-container ms-5">
                <div className="col-md-4 mt-5">
                    <h2 className="text-secondary">Dynamic and GLORIOUS MOBILE</h2>
                    <h5 className="text-warning">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam incidunt necessitatibus, blanditiis illo quibusdam odio iure est velit quas maiores?</h5>
                    <button type="button" className="btn btn-outline-danger mt-4">Learn more</button>                </div>
                <div className="col-md-4">
                    <img style={{ height: "350px" }} src={man} alt="" />
                </div>
                <div className="col-md-4">
                    <img style={{ height: "350px" }} src={samsung} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Mobile;