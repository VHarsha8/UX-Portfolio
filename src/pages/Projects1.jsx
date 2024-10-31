import ButtonComponent from '../components/ButtonComponent';

const Projects1 = () =>{
    return(
        <div className='md:w-[800px] md:px-0  overflow-hidden relative p-6 mt-6 bg-blue-700/10 border border-white/20 rounded-2xl mx-4 md:mx-auto md:flex-row-reverse flex flex-col  '>
            <div className='absolute w-full h-full rounded-full bg-blue-700/30 blur-3xl top-[30%] right-[40%]'></div>
            <div className='flex items-center justify-center '>
            <img src="/ahabhojanammockup2.png" alt="mr" className='z-30 w-3/4 md:w-fit '/>
            </div>
            <div className='flex flex-col flex-wrap gap-6 p-0 md:p-6 md:justify-center'>
                            <h1 className='z-30 text-3xl text-white md:text-5xl font-ibm-plex-mono '>Aha Bhojanam.</h1>
                     
                     <p className='hidden text-white md:flex text-wrap font-space-mono'>Designed an intuitive restaurant app interface that streamlines menu browsing, ordering, and payment, enhancing the dining experience with a visually appealing and user-friendly layout tailored for convenience.</p>
                     <ButtonComponent text="Visit" link="https://www.figma.com/proto/qXllmLJBVyQuZ1sgbhWvch/Design-2?node-id=0-1&node-type=canvas&t=rasO6HAMX5LptxS5-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" className='z-30' />

            </div>
        

        </div>
    );
};

export default Projects1;