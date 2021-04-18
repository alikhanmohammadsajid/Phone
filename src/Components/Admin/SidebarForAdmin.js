import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faCalendar, faClipboardList, faCog, faColumns, faGripHorizontal, faHome, faUsers, faUserShield } from '@fortawesome/free-solid-svg-icons';
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
                    <Link to="/dashboard/mobile" className="text-white">
                        <FontAwesomeIcon icon={faColumns} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/bookingList" className="text-white">
                        <FontAwesomeIcon icon={faClipboardList} /> <span>BookingList</span> 
                    </Link>
                </li>
                
                <li>
                    <Link to="/makeAdmin" className="text-white" >
                      <FontAwesomeIcon icon={faUserShield} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addServices" className="text-white">
                        <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Services</span>
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