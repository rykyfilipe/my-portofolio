import { motion, useScroll, useTransform } from 'framer-motion';
import { Section, SectionTitle, SectionSubtitle } from "../components/Section";
import Project from "../Components/Project";
import { projects } from "../Constants";
import { useRef } from 'react';

function Projects() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <Section 
            ref={sectionRef}
            className="relative bg-[#010509] z-30 overflow-hidden"
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-center space-y-4"
                >
                    <SectionTitle className="text-[#E1E7EF] text-5xl md:text-6xl lg:text-7xl relative inline-block">
                        Turning Ideas Into Apps
                        <motion.div
                            className="absolute -inset-2 bg-[#1a1a1a]/5 rounded-lg blur-lg"
                            animate={{
                                opacity: [0.3, 0.5, 0.3],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </SectionTitle>
                    <SectionSubtitle className="text-[#E1E7EF]/80 text-xl md:text-2xl">
                        Scaling to Server, Designed to Impress
                    </SectionSubtitle>
                </motion.div>

                <motion.div
                    className="space-y-24 py-12 relative"
                >
                    {/* Decorative lines */}
                    <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#333]/20 to-transparent" />
                    <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#333]/20 to-transparent" />

                    {projects.map((project, index) => (
                        <div key={index} className="relative">
                            {/* Project connection line */}
                            <motion.div
                                className={`absolute top-0 bottom-0 ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'} w-px bg-gradient-to-b from-[#333]/10 via-[#333]/20 to-[#333]/10`}
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: false }}
                                exit={{ scaleY: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                            <Project
                                {...project}
                                left={index % 2 === 0}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}

export default Projects;
