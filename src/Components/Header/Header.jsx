/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHamburger, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    return (
       <div>
         <div className='hidden lg:block lg:px-52 pb-6 bg-gray-50'>
            <nav className='flex justify-between bg-gray-50 font-medium pt-4 items-center'>
                <Link to='/' ><h2 className='cursor-pointer font-bold text-3xl'>JobPub</h2></Link>
                <div className='grid grid-cols-3 gap-5'>
                    <ActiveLink to='/Applied_Jobs' className=''>Applied Jobs</ActiveLink>
                    <ActiveLink to='/statistics'>Statistics</ActiveLink>
                    <Link to='/blog'>Blog</Link>
                </div>

                <div>
                    <button className='btn-primary mr-6'>Start Applying</button>
                </div>
            </nav>
        </div>

        {/* Mobile navbar section */}

        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <div className='flex justify-between bg-gray-50 px-2'>
            <h2 className='my-font text-2xl'>JobPub</h2>
          <button className='text-2xl'
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </button>
          </div>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase my-font'>
                        JobPub
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                     <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/Applied_Jobs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Applied Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/statistics'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Statistics
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>

        </div>
















       
    );
};

export default Header;
