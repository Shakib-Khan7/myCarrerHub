import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faLocation } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleFeaturedJobs = ({job}) => {
    const {id,logo,job_title,company_name,job_type,remote_or_onsite,location,salary} = job;
   
    return (
        <div className='mb-10 border relative h-full p-6'>
            <div>
                <img className='w-20 mb-4' src={logo} alt="" />
                <h6 className='my-font mb-2'>{job_title}</h6>
                <p className='font-serif mb-4'>{company_name}</p>
                <div className='flex mb-4'>
                    <div className=' btn-secondary mr-2'>{remote_or_onsite}</div>
                    <div className='btn-secondary'>{job_type}</div>
                </div>
                <div className='flex'>
                    <p className='mr-4 mb-4'> <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> {location} </p>
                    <p> <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon> Salary : {salary}</p>
                </div>
                
            </div>
            <Link to={`/JobDetails/${id}`}>
            <button className='py-2 px-5 bg-violet-500 text-white font-semibold rounded shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 absolute bottom-4'  >View Details</button>
            </Link>
        </div>
    );
};

export default SingleFeaturedJobs;