import React, { useContext } from 'react';
import { CategoriesContext } from '../Jobs/Jobs';
import SingleCategory from '../SingleCategory/SingleCategory';



const Category = () => {
    const categories = useContext(CategoriesContext)
    
    
    return (
        <div className='mt-8'>
            <center><h1 className='font-bold text-3xl mb-6 my-font'>Job Category List</h1>
            <p className='font-sans mb-6'>Explore thousands of job opportunities with all the information you need. Its your future</p></center>

            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-10'>
            {
                categories.map(c=> 
                <SingleCategory key={c.id} category={c}>
                    
                </SingleCategory>)
            }
            </div>

           

        </div>
    );
};

export default Category;