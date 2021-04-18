import React, { useEffect, useState } from 'react';
import './Services.css'
import ServiceDetail from '../ServiceDetail/ServiceDetail';



const Services = () => {

    const [services, setServices] = useState([]) 

    useEffect(() =>{
        fetch('https://glacial-atoll-37822.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <section className="services-container mb-5">
            <div className="text-center mt-5">
                <h5 style={{ color: '#336FCC' }} className="mt-3">FASTER PROCESSING WITH LESS POWER</h5>
                <h2 className="mt-4">POSSIBILITIES. PERFORMANCE. POWER.</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w75 row mb-5 service">
                    {
                        services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Services;