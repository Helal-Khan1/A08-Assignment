import { Facebook, Instagram, Linkedin } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white sm:h-[200px]  flex items-center justify-center'>
            <footer className=" sm:flex  container mx-auto justify-between items-center text-center md:p-5">

                <nav className=' list-none'>
                    <h3>Our Servises </h3>
                    <li><a href="/">Home</a></li>
                    <li><a href="">Apps</a></li>
                    <li><a href="">Installation</a></li>
                </nav>
                <nav className='list-none'>
                    <h3>Countract information</h3>
                    <li><a href="">Blog</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Countract</a></li>
                </nav>
                <nav className='list-none '>
                    <h3>Socal Midiya Information</h3>
                    <li className=' flex gap-1.5 text-center'> <Facebook className='h-5' /><a href="">Facebook</a></li>
                    <li className=' flex gap-1.5'> <Linkedin className='h-5' /><a href="">LinkedIn</a></li>
                    <li className=' flex gap-1.5'> <Instagram className='h-5' /><a href="">Instragram</a></li>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;