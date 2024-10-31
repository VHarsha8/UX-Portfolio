import RailNav from '/railnavmockup2.png';
import ButtonComponent from '../components/ButtonComponent';

const Projects = () =>{
    return(
        <div className='md:w-[800px] md:p-0 overflow-hidden  relative p-6 mt-6 bg-blue-800/10 border border-white/10 rounded-2xl mx-4 md:mx-auto md:flex-row-reverse flex flex-col  '>
                        <div className='absolute hidden w-full h-full rounded-full bg-blue-700/30 blur-3xl top-[30%] right-[40%]'></div>

            <div className='flex items-center justify-center '>
            <img src= {RailNav} alt="mr" className='z-30 w-3/4 md:w-fit' />
            </div>
            <div className='flex flex-col flex-wrap gap-6 p-0 md:p-6 md:justify-center'>
                            <h1 className='z-30 text-3xl text-white md:text-5xl font-ibm-plex-mono '>Rail Nav.</h1>
                     
                     <p className='hidden text-white md:flex text-wrap font-space-mono'>A streamlined navigation system for railway stations, guiding passengers seamlessly through routes, platforms, and amenities. Designed for clarity, efficiency, and user-friendly access.</p>
                     <ButtonComponent text="Visit" link="https://www.figma.com/proto/fwXxkHlf41V4Yer2amnh8O/Rael?node-id=37-208&node-type=canvas&t=DkkqgXmDfVFIQJ2w-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" className='z-30' />

            </div>
        

        </div>
    );

};

export default Projects;
