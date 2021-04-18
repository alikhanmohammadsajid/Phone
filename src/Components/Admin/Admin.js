import React from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import SidebarForAdmin from './SidebarForAdmin';

const Admin = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <SidebarForAdmin></SidebarForAdmin>
            </div>
            <div className="col-md-8">

            </div>
        </div>
    );
};

export default Admin;