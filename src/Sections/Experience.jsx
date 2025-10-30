/** @format */

import { motion } from 'framer-motion';
import { experience } from "../Constants";
import { useInView } from 'react-intersection-observer';

function Experience() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div className='relative w-full py-12 md:py-16 bg-[#010509]'>
            {/* Gradient overlay for smooth transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#010509] via-[#010509] to-[#010509] pointer-events-none" />
            
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="container mx-auto px-4"
            >
                <ul className='grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center'>
                    {experience.map((item, index) => (
                        <motion.li 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { 
                                opacity: 1, 
                                scale: 1,
                                transition: { delay: index * 0.1 }
                            } : {}}
                            className='group relative flex flex-col items-center gap-3 text-center p-6 rounded-2xl bg-[#020817]/50 backdrop-blur-sm transition-colors'
                        >
                            <span className='text-white text-5xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text  group-hover:from-accent group-hover:to-primary transition-all duration-500'>
                                {item.number}+
                            </span>
                            <span className='text-base md:text-lg font-medium text-foreground/90 max-w-[120px]'>
                                {item.title}
                            </span>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
}

export default Experience;
