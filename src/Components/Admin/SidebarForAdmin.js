import { faCalendar, faCog, faGripHorizontal, faHome, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const SidebarForAdmin = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
            <li>
                    <Link to="/" className="text-white" >
                      <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/bookingList" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>BookingList</span> 
                    </Link>
                </li>
                
                <li>
                    <Link to="/makeAdmin" className="text-white" >
                      <FontAwesomeIcon icon={faGripHorizontal} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addServices" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Add Services</span>
                    </Link>
                </li>
                
                <li>
                    <Link to="/setting" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
            </ul>
            
        </div>
    );
};

export default SidebarForAdmin;