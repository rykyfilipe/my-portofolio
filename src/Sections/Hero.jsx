/** @format */

import { motion } from 'framer-motion';
import { Section } from "../components/Section";
import Button from "../Components/Button";
import { useInView } from 'react-intersection-observer';
import chat from "../assets/icons/chat.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import portret from "../assets/images/portret.png";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeInDelayVariants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

function Hero() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <Section 
            className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_center,#020817_0%,#010509_100%)] z-10"
            initial={false}
            animate={false}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,163,255,0.05),transparent_50%)]" />

           
            <div className="container relative mx-auto grid lg:grid-cols-2 gap-12 items-center pt-20">
                {/* Left Column - Text Content */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="space-y-8"
                >
                    <motion.div variants={fadeInUpVariants}>
                        <motion.h1 
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[#E1E7EF]"
                        >
                            👋 I'm Ricardo-Filipe
                        </motion.h1>
                    </motion.div>

                    <motion.h2
                        variants={fadeInUpVariants}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold"
                    >
                        <span className="animate-gradient-text">
                            FullStack Developer <br/> React & Node.js 
                        </span>
                    </motion.h2>

                    <motion.div
                        variants={fadeInUpVariants}
                        className="space-y-4 text-lg sm:text-xl"
                    >
                        <p className="text-[#E1E7EF]/90">Computer Science student passionate about web development, with a focus on frontend technologies.</p>
                        <p className="text-[#E1E7EF]/80">Analytical, calm, and persistent developer ready to contribute to innovative projects.</p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUpVariants}
                        className="flex flex-wrap items-center gap-4 text-lg"
                    >
                        <span className="flex items-center gap-2 text-[#E1E7EF]/70 hover:text-[#00A3FF]/90 transition-colors">
                            <span className="text-[#00A3FF]">📍</span> Iasi, Romania
                        </span>
                        <span className="hidden sm:inline text-[#E1E7EF]/40">•</span>
                        <span className="flex items-center gap-2 text-[#E1E7EF]/70 hover:text-[#00A3FF]/90 transition-colors">
                            <span className="text-[#00A3FF]">📧</span> b.ryky.filipe@gmail.com
                        </span>
                        <span className="hidden sm:inline text-[#E1E7EF]/40">•</span>
                        <span className="flex items-center gap-2 text-[#E1E7EF]/70 hover:text-[#00A3FF]/90 transition-colors">
                            <span className="text-[#00A3FF]">📱</span> +40 750 406 066
                        </span>
                    </motion.div>

                    <motion.div
                        variants={fadeInUpVariants}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <Button 
                            text="Contact Me " 
                            handleClick={scrollToContact}
                            variant="default"
                            className="bg-[linear-gradient(135deg,#00A3FF_0%,#0057FF_100%)] hover:opacity-90 transition-opacity"
                        />
                        <Button
                            imgURL={linkedin}
                            handleClick={() => window.open("https://www.linkedin.com/in/bondor-ricardo-filipe-966a20307/", "_blank")}
                            variant="outline"
                            className="border-2 border-[#00A3FF]/20 bg-[#020817]/50 backdrop-blur-sm hover:border-[#00A3FF]/50 hover:bg-[#00A3FF]/10"
                        />
                        <Button
                            imgURL={github}
                            handleClick={() => window.open("https://github.com/rykyfilipe", "_blank")}
                            variant="outline"
                            className="border-2 border-[#00A3FF]/20 bg-[#020817]/50 backdrop-blur-sm hover:border-[#00A3FF]/50 hover:bg-[#00A3FF]/10"
                        />
                    </motion.div>
                </motion.div>

                {/* Right Column - Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hidden lg:block relative"
                >
                    <div className="relative w-full aspect-square">
                        <motion.div
                            className="absolute inset-0 bg-[linear-gradient(135deg,#00A3FF_0%,#0057FF_100%)]/20 rounded-full filter blur-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <motion.img
                            src={portret}
                            alt="Ricardo-Filipe Bondor"
                            className="relative z-10 w-full h-full object-cover rounded-2xl drop-shadow-2xl "
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}

export default Hero;