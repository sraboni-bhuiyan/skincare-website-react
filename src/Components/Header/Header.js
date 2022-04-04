import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-orange-100'>
            <div className='w-1/2 mx-auto sticky top-0 flex justify-around gap-7 text-xl font-semibold px-12 py-8'>
                <Link to='/'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Header;