import React, { useContext } from 'react';
import { CategoriesContext } from '../Jobs/Jobs';
import SingleCategory from '../SingleCategory/SingleCategory';



const Category = () => {
    const categories = useContext(CategoriesContext)
    
    
    return (
        <div>
            <center><h1>Job Category List</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veniam amet laborum culpa, soluta necessitatibus aliquam quis nemo provident blanditiis.</p></center>

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