/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react';
import { getAppliedJobs } from '../Utilities/FakeDB';
import { useLoaderData } from 'react-router-dom';
import SingleAppliedJob from '../SingleAppliedJob/SingleAppliedJob';

const AppliedJobs = () => {

    
    

    const [myJobs,setmyJobs] = useState([])
    const [filteredmyJobs,setfilteredmyJobs] = useState([])
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setmyJobs(data))
    }, []);

    useEffect(()=>{
        const storedJobs = getAppliedJobs();
        const savedJobs=[]

        for(const id in storedJobs){
            

            const addedJobs = myJobs.find(job=>job.id === parseInt(id))
            if(addedJobs){
                savedJobs.push(addedJobs)
            }
            
        }
        setfilteredmyJobs(savedJobs)
    },[myJobs])
    
    
   
    

    const onSite = ()=>{
        
        let onSiteJobs = []
        const onSite = filteredmyJobs.filter(job=>job.remote_or_onsite === 'Onsite')
        if(onSite){
            
            setfilteredmyJobs(onSite)
        }
    }
    const remote = ()=>{
        
        let onSiteJobs = []
        const remote = filteredmyJobs.filter(job=>job.remote_or_onsite === 'Remote')
        if(remote){
            
            setfilteredmyJobs(remote)
        }
    }
    const showAll = ()=>{
        const storedJobs = getAppliedJobs();
        const savedJobs=[]

        for(const id in storedJobs){
            

            const addedJobs = myJobs.find(job=>job.id === parseInt(id))
            if(addedJobs){
                savedJobs.push(addedJobs)
            }
            
        }
        setfilteredmyJobs(savedJobs)
    }
    console.log(setfilteredmyJobs)
    
    return (
        <div>
            <div className='mt-4'>
                <center>
                <button onClick={()=>onSite()} className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>Onsite</button>
                <button onClick={()=>remote()} className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>Remote</button>
                <button onClick={()=>showAll()} className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>Show All</button>
                </center>
            </div>
            <div>
                {
                    filteredmyJobs.map(fmy=><SingleAppliedJob key={fmy.id}
                    job={fmy}
                    ></SingleAppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;