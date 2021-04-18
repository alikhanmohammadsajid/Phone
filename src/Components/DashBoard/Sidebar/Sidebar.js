import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faUsers, faColumns, faSignLanguage, faClipboardList, faUserAltSlash, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                
                <li>
                    <Link to="/bookingList" className="text-white">
                        <FontAwesomeIcon icon={faClipboardList} /> <span>BookingList</span> 
                    </Link>
                </li>
                
                <li>
                <Link to="/addReview" className="text-white" >
                            <FontAwesomeIcon icon={faSignLanguage} /> <span>Add review</span>
                        </Link>
                </li>
                
                
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;