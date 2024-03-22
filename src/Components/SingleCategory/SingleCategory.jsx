import React from 'react';

const SingleCategory = ({category}) => {
    const {id,logo,category_name,availability} = category
    
    return (
        <div className=' bg-gray-100 pt-4 pl-6 pb-10 pr-20' >
            <div>
                <img className='w-10 rounded mb-4' src={logo} alt="" />
                <h5 className='font-bold font-sans'>{category_name}</h5>
                <p className='antialiased  font-thin mt-2 text-sm'>{availability}</p>
            </div>
        </div>
    );
};

export default SingleCategory;