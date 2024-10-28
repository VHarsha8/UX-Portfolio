import React from 'react';
import { FaCube, FaLightbulb, FaCalendarAlt } from 'react-icons/fa';

const ServicesProvided = () => {
    return (
        <div className="flex flex-col gap-10 my-20 mx-auto md:px-0 px-6 md:w-[800px]">
            <style>
                {`
                    .mesh-pattern {
                        background-image: 
                            linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
                        background-size: 20px 20px;
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 60%;
                        height: 65%;
                        border-top-right-radius: 0.75rem;
                        mask-image: linear-gradient(135deg, transparent, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0.8) 60%, black);
                        -webkit-mask-image: linear-gradient(360deg, transparent, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0.8) 60%, black);
                    }
                `}
            </style>
            <h1 className="text-5xl text-white font-ibm-plex-mono">Services.</h1>
            <div className="grid items-center justify-center gap-4 md:grid-cols-3 md:flex-row">
                <div className="relative grid gap-3 p-6 border shadow-lg bg-white/5 backdrop-blur-lg border-white/20 rounded-xl">
                    <div className="mesh-pattern"></div>
                    <img src="/cube.png" alt="UI Design" className="z-10 w-12 h-12 mb-2" />
                    <h1 className="z-10 text-3xl text-white font-playfair">UX Research</h1>
                    <p className='text-sm text-gray-400 font-space-mono'>Conducting interviews with users to gather insights on their needs and behaviors.</p>
                </div>
                <div className="relative grid gap-3 p-6 border shadow-lg bg-white/5 backdrop-blur-lg border-white/20 rounded-xl">
                    <div className="mesh-pattern"></div>
                    <img src="/figma1.png" alt="UI Design" className="z-10 w-12 h-12 mb-2" />
                    <h1 className="z-10 text-3xl text-white font-playfair">UI Design</h1>
                    <p className='text-sm text-gray-400 font-space-mono'>Conducting interviews with users to gather insights on their needs and behaviors.</p>
                </div>
                <div className="relative grid gap-3 p-6 border shadow-lg bg-white/5 backdrop-blur-lg border-white/20 rounded-xl">
                    <div className="mesh-pattern"></div>
                    <img src="/prototype.png" alt="UI Design" className="z-10 w-12 h-12 mb-2" />
                    <h1 className="z-10 text-3xl text-white font-playfair">Prototyping</h1>
                    <p className='text-sm text-gray-400 font-space-mono'>Conducting interviews with users to gather insights on their needs and behaviors.</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesProvided;
