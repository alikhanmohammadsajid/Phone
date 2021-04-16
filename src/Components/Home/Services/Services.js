import React from 'react';
import './Services.css'
import processor from '../../../images/processor.jpg'
import camera from '../../../images/camera.jpg'
import dualSim from '../../../images/dualSim.jpg'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const serviceData = [
    {
        name: "PROCESSOR",
        img: processor

    }, {
        name: "DUAL SIM",
        img: dualSim

    }, {
        name: "CAMERA",
        img: camera

    }
]

const Services = () => {
    return (
        <section className="services-container">
            <div className="text-center mt-5">
                <h5 style={{ color: '#336FCC' }} className="mt-3">FASTER PROCESSING WITH LESS POWER</h5>
                <h2 className="mt-4">POSSIBILITIES. PERFORMANCE. POWER.</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w75 row service  mb-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Services;