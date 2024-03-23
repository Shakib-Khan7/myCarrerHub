import React from 'react';
import { Link } from 'react-router-dom';

const SingleAppliedJob = ({ job }) => {
    const {id, job_title, remote_or_onsite,logo,company_name,job_type,location,salary } = job
    return (
        <div className='mt-5 my-container'>
            <div className='flex justify-between items-center border p-6'>
            <div className='flex'>
                <div>
                    <img className='w-28' src={logo} alt="" />
                </div>
                <div className='ms-4'>
                    <h1 className='font-bold font-serif' >{job_title}</h1>
                    <p>{company_name}</p>
                    <div className='flex mt-2'>
                    <p className='btn-secondary'>{remote_or_onsite}</p>
                    <p className='btn-secondary ms-2'>{job_type}</p>
                    </div>
                </div>
            </div>
            <div>
            <Link to={`/details/${id}`}>
            <button className='py-2 px-5 bg-violet-500 text-white font-semibold rounded shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'  >View Details</button>
            </Link>
            </div>
            </div>
        </div>
    );
};

export default SingleAppliedJob;