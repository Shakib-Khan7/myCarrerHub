import React from 'react';

const SingleFeaturedJobs = ({job}) => {
    const {id,logo,job_title,company_name,job_type,remote_or_onsite,location,salary} = job;
   
    return (
        <div className='mb-10 border relative h-80 p-6'>
            <div>
                <img className='w-20' src={logo} alt="" />
                <h6>{job_title}</h6>
                <p>{company_name}</p>
                <div className='flex'>
                    <div>{remote_or_onsite}</div>
                    <div>{job_type}</div>
                </div>
                <div className='flex'>
                    <p>{location}</p>
                    <p>Salary : {salary}</p>
                </div>
                
            </div>
            <button className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 absolute bottom-4'  >View Details</button>
        </div>
    );
};

export default SingleFeaturedJobs;