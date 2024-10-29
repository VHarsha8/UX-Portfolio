import RailNav from '/AhaMockup.png';
import ButtonComponent from '../components/ButtonComponent';

const Projects = () =>{
    return(
        <div className='md:w-[800px] bg-black mx-auto md:flex-row flex flex-col  '>
            <div className='flex items-center justify-center'>
            <img src= {RailNav} alt="mr" className='w-3/4 md:w-1/2'/>
            </div>
            <div className='flex flex-col flex-wrap gap-6 p-6'>
                    <div className='flex gap-3 flex-col'>
                            <h1 className='text-5xl text-white font-ibm-plex-mono '>Aha Bhojanam.</h1>
                             <h1 className='text-xl text-white font-ibm-plex-mono '>a Restaurant app</h1>
                    </div>
                     
                     <p className='text-white text-wrap font-space-mono'>I'm driven by curiosity, mixing analog and digital media to develop novel visual expressions for wallpapers and my work on AI based systems.</p>
                     <ButtonComponent text="Visit" link="https://www.figma.com/proto/fwXxkHlf41V4Yer2amnh8O/Rael?node-id=37-208&node-type=canvas&t=DkkqgXmDfVFIQJ2w-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" />

            </div>
        

        </div>
    );

};

export default Projects;
