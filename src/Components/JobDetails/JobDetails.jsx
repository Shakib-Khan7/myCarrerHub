import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../Utilities/FakeDB';

const JobDetails = () => {
    const jobData = useLoaderData()
    console.log(jobData)
    const {id,job_description,job_title,salary} = jobData
    return (
        <div>
            <h2>Job Details</h2>
            <div className='grid grid-cols-2'>
            <div>

                <h5>Job Description : <span>{job_description}</span></h5>

 


            </div>
            <div>
                

                <button onClick={()=>addToDb(id)} className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>APPLY NOW</button>
            </div>
        </div>
        </div>
    );
};

export default JobDetails;