import React from 'react';
import { Link, NavLink } from 'react-router';
import heroPng from '../assets/hero.png'
import TrendingApps from './TrendingApps';


const Home = () => {

    return (
        <div className=' '>
            <div className=' container mx-auto '> <div className='text-center mt-[80px]'>
                <h1 className='sm:text-6xl text-3xl font-bold' >We Build <br /> <span className=' bg-gradient-to-r from-[#632EE3]
                to-[#9F62F2] bg-clip-text text-transparent'>Productive</span>Apps</h1>
                <p className='text-[#c4c4c4] mt-6'>At HERO.IO we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

                <div className='flex gap-4  items-center justify-center mt-10'>
                    <div className='flex items-center gap-1.5 border-1 border-gray-300 rounded-sm p-3'>
                        <figure><img src="https://i.ibb.co.com/GfvkFNwh/download.png" className='h-6' alt="" /></figure>
                        <Link to={'https://play.google.com/store/apps'}><button> Google play</button></Link>
                    </div>
                    <div className='flex items-center gap-1.5 border-1 border-gray-300 p-3 rounded-sm'>
                        <figure><img src="https://i.ibb.co.com/7t2HdtDk/download.jpg" className='h-6' alt="" /></figure>
                        <Link to={'https://www.apple.com/store'}><button> App Store</button></Link>
                    </div>
                </div>

                <div className='mt-20 items-center w-full px-4 flex  justify-center'>
                    <img src={heroPng} alt="" /></div>
            </div>

            <div className=' md:h-[200px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] pt-10  '>
                <p className='text-center font-bold text-3xl text-white mb-3.5'>Trusted by Millions, Built for You</p>
                <div className='flex justify-center items-center sm:space-x-40 space-x-4 p-4'>
                    <div className='text-white text-center space-y-2'>
                        <p className='text-[10px]'>Total Downloads</p>
                        <p className='text-3xl font-bold'>29.6M</p>
                        <p className='text-[10px]'>21% more than last month</p>
                    </div>
                    <div className='text-white text-center space-y-2'>
                        <p className='text-[10px]'>Total Reviews</p>
                        <p className='text-3xl font-bold'>906K</p>
                        <p className='text-[10px]'>46% more than last month</p>
                    </div>
                    <div className='text-white text-center space-y-2'>
                        <p className='text-[10px]'>Active Apps</p>
                        <p className='text-3xl font-bold'>132+</p>
                        <p className='text-[10px]'>31 more will Launch</p>
                    </div>

                </div>

            </div>
            <div className='mt-20 text-center'>
                <p className='font-bold text-3xl text-shadow-(--my-text-shadow) ...'>Trending Apps</p>
                <p className='text-shadow-(--my-text-shadow) ...'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='mt-10'> <TrendingApps ></TrendingApps>
            </div>
        </div>

    );
};

export default Home;