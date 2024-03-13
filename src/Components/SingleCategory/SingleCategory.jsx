import React from 'react';

const SingleCategory = ({category}) => {
    const {id,logo,category_name,availability} = category
    
    return (
        <div className=' bg-gray-100 pt-10 pl-6 pb-10 pr-20' >
            <div>
                <img className='w-10 rounded' src={logo} alt="" />
                <h5>{category_name}</h5>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default SingleCategory;