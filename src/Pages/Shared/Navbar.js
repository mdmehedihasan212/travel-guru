import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
    const menu =
        <>
            <li className='mx-4'><Link to={'/'}>News</Link></li>
            <li className='mx-4'><Link to={'/'}>Destination</Link></li>
            <li className='mx-4'><Link to={'/'}>Blog</Link></li>
            <li className='mx-4'><Link to={'/'}>Contact</Link></li>
            <li className='mx-4'><Link to={'/'}>Login</Link></li>
        </>
    return (
        <div class="navbar px-20">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <img className='w-28' src={logo} alt="" />
                <input type="text" placeholder="Search Your Destination..." class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal navbar-center">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;