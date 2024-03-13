import React from 'react';

const SingleAppliedJob = ({job}) => {
    const {job_title,remote_or_onsite} =job
    return (
        <div className='mt-5'>
            <h1 className='font-bold' >{job_title}</h1>
            <p>{remote_or_onsite}</p>
        </div>
    );
};

export default SingleAppliedJob;