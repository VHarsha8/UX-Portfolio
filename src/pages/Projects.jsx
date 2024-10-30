import RailNav from '/railnavmockup1.png';
import ButtonComponent from '../components/ButtonComponent';

const Projects = () =>{
    return(
        <div className='md:w-[800px] md:px-0  px-6 mt-10 bg-black mx-auto md:flex-row-reverse flex flex-col  '>
            <div className='flex items-center justify-center '>
            <img src= {RailNav} alt="mr" className='w-fit'/>
            </div>
<<<<<<< HEAD
            <div className='flex flex-col flex-wrap items-start justify-center gap-6 py-6'>
                     <h1 className='text-5xl font-medium text-white font-ibm-plex-mono '>RailNav.</h1>
                     <p className='text-white text-wrap font-space-mono'>A streamlined navigation system for railway stations, guiding passengers seamlessly through routes, platforms, and amenities. Designed for clarity, efficiency, and user-friendly access.</p>
=======
            <div className='flex flex-col flex-wrap gap-6 p-6'>
                    <div className='flex gap-3 flex-col'>
                            <h1 className='md:text-5xl text-4xl text-white font-ibm-plex-mono '>Aha Bhojanam.</h1>
                             <h1 className='text-xl text-white font-ibm-plex-mono '>a Restaurant app</h1>
                    </div>
                     
                     <p className='text-white text-wrap font-space-mono'>I'm driven by curiosity, mixing analog and digital media to develop novel visual expressions for wallpapers and my work on AI based systems.</p>
>>>>>>> d86af7fc0b804cf3b4c0f0b077ca4b3facea0515
                     <ButtonComponent text="Visit" link="https://www.figma.com/proto/fwXxkHlf41V4Yer2amnh8O/Rael?node-id=37-208&node-type=canvas&t=DkkqgXmDfVFIQJ2w-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" />

            </div>
        

        </div>
    );

};

export default Projects;
