import React from 'react'
import cover from '../assets/cover.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLogoVercel } from 'react-icons/io5'

function Right() {
    return (
        <>
            <div className='h-screen w-full bg-cover bg-center relative ' style={{ backgroundImage: `url(${cover})`, backgroundRepeat: "no-repeat" }}>
                <div className='bg-slate-50 opacity-70 min-h-fit py-10 w-full absolute bottom-0 md:hidden'>
                     <div className='px-5 md:px-25'>
                                        <h1 className='text-3xl text-slate-400 font-bold'>Hi I'm</h1>
                                    </div>
                                    <div className='px-5 pt-8 md:px-25'>
                                        <h1 className='text-4xl font-extrabold'>Rishi Sankar R</h1>
                                    </div>
                                    <div className='px-5 md:px-25 pt-2'>
                                        <h1 className='text-2xl text-slate-400 font-bold'>Full Stack Developer</h1>
                                    </div>
                    
                                    <div className='px-5 gap-5 flex md:px-25 pt-15'>
                                        <button className='px-2 py-2 text-3xl bg-slate-300 shadow-2xl rounded cursor-pointer'><FaGithub /></button>
                                        <button className='px-2 py-2 text-3xl bg-slate-300 shadow-2xl rounded cursor-pointer'><FaLinkedin /></button>
                                        <button className='px-2 py-2 text-3xl bg-slate-300 shadow-2xl rounded cursor-pointer'><IoLogoVercel /></button>
                                    </div>
                </div>
            </div>
        </>
    )
}

export default Right