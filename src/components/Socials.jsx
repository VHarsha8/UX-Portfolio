const Socials = () =>{
    return(
        <div className="md:w-[800px] mx-auto flex justify-center mb-10 items-center">


            <div className="flex gap-3 p-4 border shadow-lg rounded-xl bg-white/5 backdrop-blur-xl backdrop-filter border-white/20">
                     <a href="https://wa.me/9963018688" target="_blank"><img src="/whatsapp.png" alt="s" className="w-12 h-12 md:w-16 md:h-16" /></a>
                     <a href="https://github.com/VHarsha8" target="_blank"><img src="/github.png" alt="o" className="w-12 h-12 md:w-16 md:h-16" /></a>
                    <a href="mailto:harshavengala9@gmail.com" target="_blank"><img src="/outlook.png" alt="c" className="w-12 h-12 md:w-16 md:h-16" /></a>
                    <a href="linkedin.com/in/harshavardhan8" target="_blank"><img src="/linkedin.png" alt="i" className="w-14 h-14 md:w-16 md:h-16" /></a>
                    
            </div>

        </div>
    );
};


export default Socials;