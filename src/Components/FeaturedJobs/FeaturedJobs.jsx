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
            <center><h1>Featured Jobs</h1>
                <p><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, repudiandae!</small></p></center>



            <div className='grid lg:grid-cols-2 gap-10 sm:grid-cols-1'>
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
                    fold ? <><button  onClick={()=>setFold(!fold)} >See All jobs</button></> : 
                    <button  onClick={()=>setFold(!fold)} >See less jobs</button>
                }</center>
            
        </div>
    );
};

export default FeaturedJobs;