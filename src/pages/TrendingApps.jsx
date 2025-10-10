import React from 'react';
import useDataHook from '../Hook/UseHook';

import icoDawnload from '../assets/icon-downloads.png'
import iconrating from '../assets/icon-ratings.png'
import { NavLink } from 'react-router';

const TrendingApps = () => {
    const apps = useDataHook()
    const newAppsData = apps.setData


    const newApps = newAppsData.slice(0, 8)

    return (
        <div className='  '>
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3  container mx-auto p-3 mb-16'>

                {
                    newApps.map(apps =>
                        <div key={apps.id} className='  bg-white p-4 rounded-sm shadow-2xl hover:scale-105 transform  ease-in-out '>
                            <figure className=''><img src={apps.image} alt="" className='h-48 w-full  ' /></figure>
                            <p>{apps.title}</p>
                            <div className='flex justify-between'>
                                <div className='w-15 rounded-lg bg-green-200 py-1 px-1'><div className='flex items-center gap-2 text-[#00D390]  font-bold  '><span><img src={icoDawnload} className='h-4' alt="" /></span><span className='w-'>{apps.downloads}</span></div></div>

                                <div className='bg-[#eec195] px-2 items-center flex justify-center rounded-sm'>
                                    <div className='flex font-bold items-center gap-1'>
                                        <span><img src={iconrating} className='h-4' alt="" /></span>
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }


            </div>
            <NavLink to={"/Allpss"}> <div className='flex justify-center items-center'>    <div className='text-center mb-7 flex justify-center items-center  text-white rounded-sm  w-[145px] h-[45px] bg-gradient-to-r from-[#632ee3]  to-[#9f62f2] '><button>Show All</button></div>
            </div></NavLink>
        </div>
    );
};

export default TrendingApps;
