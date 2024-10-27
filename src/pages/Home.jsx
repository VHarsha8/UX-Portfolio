// src/pages/Home.jsx
import React from 'react';
import MyImage from '../assets/animoji.jpg';


const Home = () => {
  return (
    <section className= "relative  h-screen overflow-hidden flex items-center justify-center bg-black">
               
                <div className='hidden md:absolute  h-[720px] top-0 -right-[520px]  w-[550px] blur-3xl rounded-full opacity-70 bg-violet-700'></div>
                <div className='hidden md:absolute h-[400px]  -top-[280px] -right-[100px]  w-[350px] blur-xl rounded-full opacity-65  bg-pink-700'></div>
                <div className='flex relative   justify-start  w-full md:w-[800px] mx-auto  h-screen md:px-0 px-4 py-16  flex-col gap-8'>
                    <div className='flex gap-2 flex-col'>
                         <div className='flex' >
                            <img src={MyImage} alt="pr" className='w-10 rounded-full' />
                        </div>
                        <div className='flex'>
                            <h1 className='text-3xl md:text-5xl font-ibm-plex-mono font-medium text-white '>
                                hi.
                         </h1>
                        </div>
                        <div className='flex'>
                            <h1 className='text-3xl md:text-5xl font-ibm-plex-mono font-medium text-white '>
                                I'm Harsha.  
                            </h1>
                        </div>
                       
                    </div>

                    <div className='flex md:w-4/6'>
                                <h1 className=' text-white font-space-mono tracking-wide'>I'm a UI/UX designer focused on creating intuitive and impactful digital experiences. My passion lies in blending design and functionality to bring ideas to life.</h1>
                    </div>


                    <div className='flex gap-1'>
                       <a href='#' className=' p-4 border rounded-full text-center'><span className='text-lg text-white'>&#8594;</span> <span className='text-white font-space-mono'>Text me</span></a>
                    </div>
                
                    
                    

                        
                </div>
    </section>
  );
};

export default Home;
