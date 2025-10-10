import React, { useEffect, useState } from 'react';

import { useLoaderData, useParams } from 'react-router';
import download from '../assets/icon-downloads.png'
import rating from "../assets/icon-ratings.png"
import review from '../assets/icon-review.png'
import Rating from './Rating';
import { addApp, getStoreApps } from '../Hook/Add';
import { toast } from 'react-toastify';




const AppsDetailes = () => {
    const use = useParams()
    const newId = parseInt(use.id)


    const data = useLoaderData()
    const newData = data.find(data => data.id === newId)
    const { companyName, image, title, size, reviews, downloads, ratingAvg } = newData

    const [open, setOpen] = useState(0)




    const clickhandaler = (e) => {
        addApp(e)



        toast('The Apps Install')

        setOpen(true)


    }

    return (
        <div className=' container mx-auto'>
            <div>
                <div className='md:flex px-4 gap-5 items-center justify-between'>
                    <div>
                        <img src={image} className='h-32 rounded-sm' alt="" />


                    </div>
                    <div className='flex-1 space-y-3'>
                        <h1 className='font-bold te'>{title}</h1>
                        <p>Developed by <span className='text-[#9F62F2]'>{companyName}</span></p>
                        <p className='border-1 w-full border-gray-400'></p>

                        <div className='flex md:gap-4'>
                            <div>
                                <img src={download} className='h-8' alt="" />
                                <span className='text-[#7b7676]'>download</span>
                                <p className='font-bold text-2xl'>{downloads}</p>
                            </div>
                            <div className='ml-20 mr-3'>
                                <img src={rating} className='h-8' alt="" />
                                <span className='text-[#7b7676]'>Average Ratings</span>
                                <p className='font-bold text-2xl'>{ratingAvg}</p>
                            </div>

                            <div>
                                <img src={review} className='h-8' alt="" />
                                <span className='text-[#7b7676]'>Average Ratings</span>
                                <p className='font-bold text-2xl'>{reviews}</p>
                            </div>



                        </div>
                        <div className='w-30 h-11 bg-[#00D390] flex items-center justify-center text-white p-1 rounded-sm '><button className='text-sm p-3' onClick={() => clickhandaler(newData)} disabled={open} > {open ? 'instaled' : `Install Now (${size} MB)`} </button></div>
                    </div>

                </div>
            </div>
            <p className='border-1 w-full border-gray-400 mt-7'></p>

            <div className='mt-9'>    <Rating newData={newData}></Rating></div>


        </div>
    );
};

export default AppsDetailes;
