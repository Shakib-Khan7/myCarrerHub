import React, { createContext } from 'react';
import logo from '../Jobs/hardy.png'
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
export const CategoriesContext = createContext()
export const FeaturedJobsContext = createContext()

const Jobs = () => {
    const jobCategories = useLoaderData()
    console.log(jobCategories[0])
    
    
    return (
        <div>
            <div className='flex justify-between bg-gray-50'>
                <div className='mt-10'>
                    <h1>One Step <br />Closer to your <br />Dream job</h1>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, necessitatibus.</small></p>
                    <button>Get Started</button>
                </div>
                <div>
                    <img className='w-80' src={logo} alt="" />
                </div>
            </div>

            <div>
                <CategoriesContext.Provider value={jobCategories[0]}>
                    <Category></Category>
                </CategoriesContext.Provider>
            </div>

            <div>
                <FeaturedJobsContext.Provider value={jobCategories[1]}>
                <FeaturedJobs></FeaturedJobs>
                </FeaturedJobsContext.Provider>
            </div>








        </div>
    );
};

export default Jobs;