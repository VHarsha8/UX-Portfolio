// src/pages/Home.jsx
import React from 'react';
import MyImage from '../assets/animoji.jpg';
import ButtonComponent from '../components/ButtonComponent';


const Home = () => {
  return (
    <section className= "relative flex items-center justify-center overflow-hidden bg-black md:h-[650px]">
               
                <div className='hidden md:absolute  h-[720px] top-0 -right-[520px]  w-[550px] blur-3xl rounded-full opacity-70 bg-violet-700'></div>
                <div className='hidden md:absolute h-[400px]  -top-[280px] -right-[100px]  w-[350px] blur-xl rounded-full opacity-65  bg-pink-700'></div>
                <div className='flex relative   justify-start  w-full md:w-[800px] mx-auto h-fit md:h-[650px] md:px-0 px-4 py-16  flex-col gap-8'>
                <div class="block  absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:24px_24px]"></div>                    <div className='flex flex-col gap-2'>
                         <div className='z-50 flex' >
                            <img src={MyImage} alt="pr" className='w-10 rounded-full' />
                        </div>
                        <div className='z-50 flex'>
                            <h1 className='text-4xl font-medium text-white md:text-5xl font-ibm-plex-mono '>
                                hi.
                         </h1>
                        </div>
                        <div className='z-50 flex'>
                            <h1 className='text-4xl font-medium text-white md:text-5xl font-ibm-plex-mono '>
                                I'm Harsha.  
                            </h1>
                        </div>
                       
                    </div>

                    <div className='z-50 flex md:w-4/6'>
                                <h1 className='tracking-wide text-white md:leading-8 font-space-mono'>I'm a UI/UX designer focused on creating intuitive and impactful digital experiences. My passion lies in blending design and functionality to bring ideas to life.</h1>
                    </div>


                    <ButtonComponent text="Connect" link="mailto:harshavengala9@gmail.com" />

                
                    
                    

                        
                </div>
    </section>
  );
};

export default Home;
