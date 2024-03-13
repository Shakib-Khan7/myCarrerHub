/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between'>
                <Link to='/' ><h2 className='cursor-pointer'>JobPub</h2></Link>
                <div>
                    <Link to='/Applied_Jobs' className='ml-8'>Applied Jobs</Link>
                    <Link className='ml-8'>Statistics</Link>
                    <Link className='ml-8'>Blog</Link>
                </div>
                <div>
                    <button>Start Applyting</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;
