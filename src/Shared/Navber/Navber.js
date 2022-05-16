import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navber = () => {
    const [user, loading, error] = useAuthState(auth);

    const handelSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const manu = <>
        <li><Link className='font-bold' to='/home'>Home</Link></li>
        <li><Link className='font-bold' to='/about'>About</Link></li>
        <li><Link className='font-bold' to='/appoinment'>Appoinment</Link></li>
        <li><Link className='font-bold' to='/reviews'>Reviews</Link></li>
        <li><Link className='font-bold' to='/contuct'>Contuct</Link></li>
        {
            user && <li><Link className='font-bold' to='/dashboard'>Dashboard</Link></li>

        }
        <li>{user ? <button onClick={handelSignOut} className='btn btn-ghost font-bold'>Sign  out</button> : <Link className='font-bold' to='/login'>Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors portal</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {manu}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabindex="1"  for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navber;