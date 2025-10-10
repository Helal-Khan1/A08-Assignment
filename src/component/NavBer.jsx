import { CircleX, Github, Menu } from 'lucide-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'

const NavBer = () => {
    const [open, setOpen] = useState(false)

    const openHandalar = () => {
        setOpen(!open)

    }
    return (
        <div className='bg-[#FFFFFF] '>
            <div className='max-w-[1140px] mx-auto p-1'>
                <nav className=' flex  items-center justify-between'>
                    <span onClick={() => openHandalar(setOpen(true))} className='flex items-center gap-1.5 ml-1.5'>
                        {
                            open ? <CircleX className='md:hidden'></CircleX> : <Menu className='md:hidden'></Menu>
                        }


                        <Link to={'/'}> <div className='flex items-center'><p><img src={logo} className='h-9' alt="" /></p><h1 className='text-2xl font-bold  '>HERO.IO</h1></div></Link></span>
                    <div className='flex items-center gap-4 '><ul className=' md:flex hidden gap-5 '>   <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/Allpss'}>Apps</NavLink></li>
                        <li><NavLink to={'/install'}>Installation</NavLink></li></ul>
                    </div> <NavLink to={'https://github.com/helal1234H'} ><div className='border-2 h-[43px] w-[145px] flex items-center justify-center bg-gradient-to-r from-[#632ee3]  to-[#9f62f2] text-[#ffff] rounded-md'>  <Github /><button className=' '>Contribute</button> </div></NavLink>
                </nav>
                <nav className={`md:hidden ml-1.5 relative bottom-2 ${open ? '' : 'hidden'}`}><ul> <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/Allpss'}>Apps</NavLink></li>
                    <li><NavLink to={'/install'}>Installation</NavLink></li></ul></nav>
            </div>
        </div>
    );
};

export default NavBer;
