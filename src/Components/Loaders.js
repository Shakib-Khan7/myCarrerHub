const allLoaders = async() =>{
    const loadedJobs = await fetch(`categories.json`);
    const jobs = await loadedJobs.json();

    const anotherDatas = await fetch(`jobs.json`)
    const anotherJobs = await anotherDatas.json();
    
    return [jobs,anotherJobs];

}
export default allLoaders;