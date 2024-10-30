import RailNav from '/railnavmockup1.png';
import ButtonComponent from '../components/ButtonComponent';

const Projects = () =>{
    return(
        <div className='md:w-[800px] md:px-0  px-6 mt-10 bg-black mx-auto md:flex-row-reverse flex flex-col  '>
            <div className='flex items-center justify-center '>
            <img src= {RailNav} alt="mr" className='w-fit'/>
            </div>
            <div className='flex flex-col flex-wrap gap-6 p-0 md:p-6 md:justify-center'>
                            <h1 className='text-4xl text-white md:text-5xl font-ibm-plex-mono '>Rail Nav.</h1>
                     
                     <p className='text-white text-wrap font-space-mono'>A streamlined navigation system for railway stations, guiding passengers seamlessly through routes, platforms, and amenities. Designed for clarity, efficiency, and user-friendly access.</p>
                     <ButtonComponent text="Visit" link="https://www.figma.com/proto/fwXxkHlf41V4Yer2amnh8O/Rael?node-id=37-208&node-type=canvas&t=DkkqgXmDfVFIQJ2w-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" />

            </div>
        

        </div>
    );

};

export default Projects;
