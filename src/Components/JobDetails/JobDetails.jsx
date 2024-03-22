/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../Utilities/FakeDB';

const JobDetails = () => {
    const jobData = useLoaderData()
    console.log(jobData)
    const { id, job_description, job_title, salary, contact_information, job_responsibility, educational_requirements, experiences } = jobData
    return (
        <div>
            <div className='bg-gray-50 pt-20 pb-20'>
                <center><h2 className='my-font text-2xl'>Job Details</h2></center>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-1  sm:grid-cols-1 gap-10'>
                <div className='sm:col-span-1 lg:col-span-3'>

                    <h5 className='mb-4 mt-10'><span className='my-font'>Job Description</span> : <span className='font-serif'>{job_description}</span></h5>

                    <p className='mt-10'><span className='my-font'>Job Responsibility</span> : <span className='font-serif'>{job_responsibility}</span></p>

                    <p className='mb-10 mt-10'><span className='my-font'>Educational Recuirements </span>: <span className='font-serif'>{educational_requirements}</span></p>

                    <p><span className='my-font'>Experience </span>: <span className='font-serif'>{experiences}</span></p>




                </div>
                <div className=''>
                    <div className='md:me-10 md:ms-10 lg:me-20 bg-gray-300 p-6'>
                        <p className='mb-3 my-font'>Job Details</p>

                        <hr className=' border-gray-700'></hr>

                        <p className='mb-3'><span className='font-semibold'>Salary</span> : {salary} (Per Month) </p>

                        <p className='mb-3'><span className='font-semibold'>Job Title</span> : <span className='font-serif'>{job_title}</span></p>

                        <p className='mb-3 my-font'>Contact Information</p>

                        <hr className='mb-2'></hr>

                        <p><span className='mb-3 font-semibold'>Phone : </span><span className='font-serif'>{contact_information.phone}</span></p>

                        <p className='mb-3'><span className='font-semibold'>Email</span> : <span className='font-serif'>{contact_information.email}</span></p>

                        <p className='mb-3'><span className='font-semibold'>Address</span> : <span className='font-serif'>{contact_information.address}</span></p>

                        <button onClick={() => addToDb(id)} className='py-2 px-5 bg-violet-500 text-white font-semibold rounded shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 w-full focus:ring-opacity-75'>APPLY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;