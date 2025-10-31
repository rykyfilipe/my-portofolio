import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';
import { useRef } from 'react';

function Project({ title, description, imgURL, left }) {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false
    });

    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

    const cardVariants = {
        hidden: { 
            opacity: 0,
            x: left ? -100 : 100,
            rotateY: left ? -10 : 10
        },
        visible: { 
            opacity: 1,
            x: 0,
            rotateY: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                duration: 0.8
            }
        }
    };

    const imageVariants = {
        initial: { scale: 1.2, opacity: 0.8 },
        hover: { 
            scale: 1.1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const glowVariants = {
        initial: {
            opacity: 0.5,
            scale: 1
        },
        hover: {
            opacity: 0.8,
            scale: 1.05,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y }}
            className={`
                w-full max-w-6xl mx-auto
                flex flex-col ${left ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                gap-8 lg:gap-12
                items-center
                p-6
                snap-center
                perspective-1000
            `}
        >
            <motion.div
                ref={cardRef}
                className="w-full lg:w-1/2 relative group"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ scale: 1.02 }}
                style={{ scale }}
            >
                <Card className="overflow-hidden bg-[radial-gradient(circle_at_top_center,#020817_0%,#010509_100%)] backdrop-blur-sm border border-[#00A3FF]/10 relative z-10">
                    <motion.div className="relative overflow-hidden group">
                        {imgURL !== null ? (<motion.img
                            src={imgURL}
                            alt={title}
                            className="w-full h-[300px] object-contain rounded-t-xl"
                            loading="lazy"
                            variants={imageVariants}
                            initial="initial"
                            whileHover="hover"
                        />) : <ProjectPlaceholder title={title}/>}
                      

                        <motion.div 
                            className="absolute inset-0 bg-[linear-gradient(135deg,#00A3FF_0%,#0057FF_100%)]/5 mix-blend-overlay"
                            variants={glowVariants}
                            initial="initial"
                            whileHover="hover"
                        />
                        {/* Interactive glow effect */}
                        <motion.div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,#00A3FF_0%,transparent_70%)] mix-blend-overlay"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.4 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                    <CardHeader className="space-y-4">
                        <CardTitle className="text-2xl font-display text-[#E1E7EF] relative">
                            {title}
                            <motion.div
                                className="absolute -inset-1 bg-[linear-gradient(135deg,#00A3FF_0%,#0057FF_100%)]/10 rounded-lg -z-10"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileHover={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                            />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <motion.div 
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {description.split('\\n\\n').map((section, index) => (
                                <div key={index} className="space-y-2">
                                    {section.split('\\n').map((line, i) => (
                                        <motion.p
                                            key={i}
                                            initial={{ opacity: 0, x: left ? -20 : 20 }}
                                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: left ? -20 : 20 }}
                                            transition={{ duration: 0.5, delay: 0.1 * i }}
                                            className={line.startsWith('•') 
                                                ? 'text-sm text-[#E1E7EF]/60 pl-4'
                                                : 'text-sm text-[#E1E7EF]/80'
                                            }
                                        >
                                            {line}
                                        </motion.p>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </CardContent>
                </Card>

                {/* Background effects */}
                <motion.div
                    className="absolute -inset-4 bg-[linear-gradient(135deg,#00A3FF_0%,#0057FF_100%)]/5 rounded-xl blur-2xl -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6 }}
                />
            </motion.div>
        </motion.div>
    );
}

export default Project;


// ProjectPlaceholder.tsx


 function ProjectPlaceholder({
  title = "Nume proiect",
  className = "",
}) {
  return (
    <div
      className={
        "w-full max-w-4xl mx-auto " +
        className
      }
    >
      <div
        className="
          relative
          aspect-video            /* 16:9 ratio */
          rounded-2xl
          border
          border-gray-200
          dark:border-neutral-700
          bg-gradient-to-tr
          from-gray-50 to-gray-100
          dark:from-neutral-900 dark:to-neutral-800
          shadow-sm
          overflow-hidden
          flex items-center justify-center
        "
        role="img"
        aria-label={`Placeholder: nu există imagine pentru proiectul ${title}`}
      >
        {/* Icon + text centered */}
        <div className="flex flex-col items-center gap-4 px-6 text-center">
          {/* pictograma */}
          <svg
            width="86"
            height="86"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="text-neutral-400 dark:text-neutral-400"
          >
            <rect x="1.5" y="4.5" width="21" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M6 9l3 3 2-2 4 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="17.5" cy="8.5" r="0.9" fill="currentColor" />
          </svg>

          {/* Titlu */}
          <div className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
            Project image
          </div>

          {/* Mesaj clar in romana */}
          <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-[70%]">
There is currently no image for this project. You can upload one or use a mockup to demonstrate the interface.          </p>

          {/* Optional: buton upload (stilizat, dar fără acțiune) */}
         
        </div>

        {/* Badge mic sus-dreapta */}
        <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-600">
         No image
        </span>
      </div>

      
    </div>
  );
}
