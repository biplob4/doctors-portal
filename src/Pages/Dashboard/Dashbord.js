import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from './hooks/useAdmin';

const Dashbord = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h1 className='text-2xl text-purple-500 font-bold'>Welcome to your Dashboard</h1>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">My Appoinments</Link></li>
                        <li><Link to="/dashboard/review">My reviews</Link></li>
                        <li><Link to="/dashboard/history">My History</Link></li>
                        {admin && <>
                             <li><Link to="/dashboard/users">All Users</Link></li>
                           <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                           <li><Link to="/dashboard/manageDoctor">Manage Doctor</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;