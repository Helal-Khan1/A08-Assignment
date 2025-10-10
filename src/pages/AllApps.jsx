import React, { useState } from 'react';
import useDataHook from '../Hook/UseHook';
import icoDawnload from '../assets/icon-downloads.png'
import iconrating from '../assets/icon-ratings.png'
import { NavLink } from 'react-router';
import { Search } from 'lucide-react';


const AllApps = () => {


    const apps = useDataHook()
    const newAppsData = apps.setData
    const [search, setSearch] = useState("")
    const trim = search.trim().toLocaleLowerCase()
    const appsSearch = trim ? newAppsData.filter(apps => apps.title.toLocaleLowerCase().includes(trim)) : newAppsData



    return (
        <div className=' container mx-auto'>

            <div className='text-center py-15'>
                <h1 className='font-bold text-5xl'>Our All Applications</h1>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex  justify-between px-3'><p>({appsSearch.length})  <span> Apps Found</span></p>

                <input onChange={(e) => setSearch(e.target.value)} className='border-1 bg-white p-1 rounded-sm' value={search} placeholder='search' type="search" name="search" id="" />
            </div>





            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3  container mx-auto p-3 mb-16 '>



                {

                    appsSearch.length === 0 ? (

                        <div className=' col-span-4 flex items-center justify-center w-full'>   <div>

                            <h1 className='text-5xl font-bold mb-2.5'>OPPS!! APP NOT FOUND</h1>
                            <NavLink to={"/"}> <div className='flex justify-center items-center'>    <div className='text-center mb-7 flex justify-center items-center  text-white rounded-sm  w-[145px] h-[45px] bg-gradient-to-r from-[#632ee3]  to-[#9f62f2] '><button>Show All</button></div>
                            </div></NavLink>


                        </div>           </div>
                    ) : (
                        appsSearch.map(apps => <NavLink key={apps.id} to={`/appsDetail/${apps.id}`}><div className='  bg-white p-4 rounded-sm shadow-2xl space-y-2.5 hover:scale-105   '
                        >
                            <figure className=''><img src={apps.image} alt="" className='h-48  w-full rounded-sm' /></figure>
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
                        </div></NavLink>)
                    )}
            </div>



        </div>
    );
};

export default AllApps;