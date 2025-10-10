import React from 'react';
import png from '../assets/App-Error.png'
const AppsDetailErorr = () => {
    return (
        <div className='flex items-center justify-center py-5'>

            <div>  <span><img className=' w-50% mx-auto  h-60' src={png} alt="" /></span>
                <h1 className='text-5xl font-bold'>OPPS!! APP NOT FOUND</h1></div>
        </div>
    );
};

export default AppsDetailErorr;