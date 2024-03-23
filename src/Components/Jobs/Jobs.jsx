import React, { createContext, useContext } from 'react';
import logo from '../Jobs/hardy.png'
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { Categories } from '../Home/Home';
export const CategoriesContext = createContext()
export const FeaturedJobsContext = createContext()

const Jobs = () => {
    const jobCategories = useContext(Categories)
    console.log(jobCategories[0])
    
    
    return (
        <div>
            <div className='flex justify-between bg-gray-50 lg:px-52'>
                <div className='mt-10 space-y-4'>
                    <div className=''>
                    <h1 className='font-bold mb-2 leading-2  text-5xl'>One Step <br />Closer To Your <br /><span className='text-violet-700'>Dream Job</span></h1>
                    <p className='font-sans'><small>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish..</small></p>
                    </div>
                    <button className='btn-primary'>Get Started</button>
                </div>
                <div>
                    <img className='hidden md:block w-80' src={logo} alt="" />
                </div>
            </div>

            <div className='my-container'>
            <div>
               
                    <Category></Category>
                
            </div>

            <div>
                
                <FeaturedJobs></FeaturedJobs>
                
            </div>
            </div>








        </div>
    );
};

export default Jobs;