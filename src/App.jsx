import { useState } from 'react'
import Navbar from './components/Navbar'
import Left from './components/Left'
import Right from './components/Right'
import { FaBootstrap, FaCss3Alt, FaFacebookSquare, FaHtml5, FaInstagram, FaLinkedin, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import restuarant from '../src/assets/restuarant.png'
import course from '../src/assets/course.png'
import resume from '../src/assets/resume.png'
import travel from '../src/assets/travel.png'
import { FaSquareXTwitter } from 'react-icons/fa6'

function App() {


  return (
    <>

      <Navbar />
      <div className='flex'>
        <Left />
        <Right />
      </div>
      {/* about */}
      <div id='home' className='h-screen'>
        <div className='pt-30 flex justify-center'>
          <h1 className='px-10 py-1 border-4 text-3xl font-[500] '>ABOUT ME</h1>
        </div>
        <div className='grid-cols-[1fr_3fr_1fr] md:grid px-10 pt-10'>
          <div></div>
          <div>
            <p className='text-justify'>I am a passionate learner, currently studying MEARN stack development at Luminar Technolab. I’m dedicated to building dynamic and responsive web applications using modern technologies like MongoDB, Express.js, React, and Node.js.
              <br /><br />

              With a focus on clean code and user-friendly design, I aim to create solutions that are both efficient and impactful. I’m constantly exploring new concepts and refining my skills to stay ahead in the ever-evolving world of web development.
              <br /><br />
              As a developer, I am constantly experimenting with new tools, frameworks, and best practices to stay updated in the ever-evolving field of web development. My learning journey is fueled by curiosity, creativity, and a drive to contribute to meaningful projects.</p>
          </div>
          <div></div>
        </div>
        <div>

        </div>
      </div>
      {/* skill */}
      <div id='skills' className='h-screen'>
        <div className='pt-25 flex justify-center'>
          <h1 className='px-10 py-1 border-4 text-3xl font-[500] '>SKILLS</h1>
        </div>
        <div className='px-10 pt-15 md:pt-40'>
          <div className='flex flex-wrap justify-center gap-10'>
            <h1 className='text-9xl md:text-[200px] text-orange-600'><FaHtml5 /></h1>
            <h1 className='text-9xl md:text-[200px] text-blue-600'><FaCss3Alt /></h1>
            <h1 className='text-9xl md:text-[200px] text-violet-600'><FaBootstrap /></h1>
            <h1 className='text-9xl md:text-[200px] text-cyan-500'><RiTailwindCssFill /></h1>
            <h1 className='text-9xl md:text-[200px] text-cyan-300'><FaReact /></h1>
          </div>
        </div>
      </div>
      {/* portfolio */}
<div id='portfolio' className='pt-20'>
<div  className='min-h-fit mt-10 bg-[url("https://t4.ftcdn.net/jpg/04/21/44/29/360_F_421442912_e9dARIDF7CnBKKcB1Ooy0aNcEOJ13eVY.jpg")] py-5 md:py-15'>
        <div className='flex justify-center'>
          <h1 className='px-10 py-1 border-4 text-3xl font-[500] text-gray-700'>PORTFOLIO</h1>
        </div>
      </div>
      <div className='min-h-fit'>
        <div className='grid md:grid-cols-2'>
          <div>
            <a href='https://restuarent-five.vercel.app/' target='blank'><img className='h-full' src={restuarant} alt="" /></a>
          </div>
          <div>
            <a href='https://luxura-travels-nine.vercel.app/' target='blank'><img src={travel} alt="" /></a>
          </div>
          <div>
            <a href='https://react-course-selling-app.vercel.app/' target='blank'><img src={course} alt="" /></a>
          </div>
          <div>
            <a href='https://resume-builder-fronted.vercel.app/' target='blank'><img src={resume} alt="" /></a>
          </div>
        </div>
        <div className='bg-slate-950 py-3 flex justify-center'>
          <h1 className='text-white'>Many more to come.. </h1>
        </div>
      </div>
</div>
      
      {/* contact */}
      <div id='contact' className='h-screen'>
        <div className='pt-25 flex justify-center'>
          <h1 className='px-10 py-1 border-4 text-3xl font-[500] '>CONTACT</h1>
        </div>
        <div className='md:grid grid-cols-[2fr_2fr_2fr] pt-25'>
          <div></div>
          <div className='space-y-10'>
            <div className='px-10'>
              <input type="text" className='border-l-4 border-b-4 w-full outline-0 py-2 px-3' placeholder='ENTER YOUR NAME*' />
            </div>
            <div className='px-10'>
              <input type="text" className='border-l-4 border-b-4 w-full outline-0 py-2 px-3' placeholder='ENTER YOUR EMAIL*' />
            </div>
            <div className='px-10'>
              <input type="text" className='border-l-4 border-b-4 w-full outline-0 py-2 px-3' placeholder='PHONE NUMBER*' />
            </div>
            <div className='px-10'>
              <textarea name="" className='border-l-4 border-b-4 w-full outline-0 pb-8 px-3' placeholder='YOUR MESSEGE*' id=""></textarea>
            </div>
            <div className='flex justify-center'>
              <button className='border-l-4 border-r-4 px-8 cursor-pointer py-1 font-medium'>
                SUBMIT
              </button>
            </div>
          </div>
          <div></div>
        </div>
        <div className='p-15 flex justify-around'>
            <div>
              <h1 className='font-medium text-2xl'>Let's Talk</h1>
              <h1>Feel free to reach out-let's collaborate and create something amazing together!</h1>
            </div>
            <div className='space-x-5 flex flex-wrap'>
              <button className='text-4xl'><FaInstagram /></button>
              <button className='text-4xl'><FaFacebookSquare /></button>
              <button className='text-4xl'><FaSquareXTwitter /></button>
              <button className='text-4xl'><FaLinkedin /></button>
            </div>
        </div>
      </div>




    </>
  )
}

export default App
