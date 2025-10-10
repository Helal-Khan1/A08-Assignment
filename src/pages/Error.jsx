import React from 'react';

import error from '../assets/error-404.png'

const Error = () => {
    return (
        <div className='max-w-[1240px] mx-auto h-[1140px]   '>

            <div className=' flex items-center justify-center'>
                <img src={error} alt="" /></div>

        </div>
    );
};

export default Error;