import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FeaturedJobsContext } from '../Jobs/Jobs';
import SingleFeaturedJobs from '../SingleFeaturedJobs/SingleFeaturedJobs';

const FeaturedJobs = () => {
    const featuredJobs = useContext(FeaturedJobsContext)
    console.log(featuredJobs)
    const [fold, setFold] = useState(true)



    return (

        <div>
            <center><h1 className='font-bold text-3xl mt-20 my-font'>Featured Jobs</h1>
                <p className='mb-10 mt-4'><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p></center>



            <div className='grid lg:grid-cols-2 gap-10 sm:grid-cols-1 mb-10'>
                {

                    fold ? <>{(featuredJobs.slice(0, 4).map(job => <SingleFeaturedJobs key={job.id}
                        job={job}
                    ></SingleFeaturedJobs>))}
                    
                    
                    
                    </>
                    
                     : <>{(featuredJobs.map(job => <SingleFeaturedJobs key={job.id}
                        job={job}
                    ></SingleFeaturedJobs>))}
                    
                    
                    
                    </>






                }
                

            </div>
            <center>{
                    fold ? <><button className='my-btn mb-28'  onClick={()=>setFold(!fold)} >See All jobs</button></> : 
                    <button className='my-btn mb-28'  onClick={()=>setFold(!fold)} >See less jobs</button>
                }</center>
            
        </div>
    );
};

export default FeaturedJobs;