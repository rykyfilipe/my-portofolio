import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import me from '../assets/images/portret.png';

const Hero = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [hoveredButton, setHoveredButton] = useState(null);

    // Variante animații
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const floatingVariants = {
        animate: {
            y: [0, -15, 0],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
    };

    const glowVariants = {
        animate: {
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
    };

    const scrollToContact = () => {
        // Funcție de scroll la contact
        console.log("Mergi la contact");
    };

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,#020817_0%,#010509_100%)]" />
            
            {/* Subtle animated glow */}
            <motion.div
                className="absolute top-0 left-1/3 w-96 h-96 bg-[radial-gradient(circle,rgba(0,163,255,0.08),transparent_70%)] rounded-full blur-3xl"
                animate={{
                    x: [0, 30, 0],
                    y: [0, -40, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute bottom-0 right-1/4 w-80 h-80 bg-[radial-gradient(circle,rgba(0,87,255,0.06),transparent_70%)] rounded-full blur-3xl"
                animate={{
                    x: [0, -40, 0],
                    y: [0, 50, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Content container */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 min-h-[calc(100vh-80px)] flex items-center justify-center py-8 sm:py-12">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="w-full max-w-7xl"
                >
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 xl:gap-32 items-center">
                        {/* Left Content */}
                        <motion.div className="space-y-10 order-2 lg:order-1 lg:pr-8 xl:pr-12">
                            {/* Status Badge */}
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A3FF]/5 w-fit"
                            >
                                <span className="w-1.5 h-1.5 bg-[#00A3FF] rounded-full animate-pulse" />
                                <span className="text-sm text-[#00A3FF]/90">Open for opportunities</span>
                            </motion.div>

                            {/* Main Title */}
                            <motion.div variants={itemVariants}>
                                <p className="text-[#00A3FF] font-semibold text-sm sm:text-base tracking-widest mb-3">
                                   Welcome
                                </p>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#E1E7EF] leading-tight">
                                    I'm <span className="bg-gradient-to-r from-[#00A3FF] to-[#0057FF] bg-clip-text text-transparent">Ricardo-Filipe</span>
                                </h1>
                            </motion.div>

                            {/* Subtitle */}
                            <motion.div variants={itemVariants}>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#E1E7EF]/90 leading-relaxed">
                                    FullStack Developer specializing in
                                    <span className="block bg-gradient-to-r from-[#00A3FF] via-[#0057FF] to-[#0087CC] bg-clip-text text-transparent mt-2">
                                        React & Node.js
                                    </span>
                                </h2>
                            </motion.div>

                            {/* Description */}
                            <motion.div variants={itemVariants} className="space-y-4">
                                <p className="text-base sm:text-lg text-[#E1E7EF]/80 leading-relaxed max-w-lg">
                                    Computer Science student passionate about crafting elegant web experiences with modern technologies.
                                </p>
                                <p className="text-base sm:text-lg text-[#E1E7EF]/70 leading-relaxed max-w-lg">
                                    Analytical, persistent, and driven to build innovative solutions that make an impact.
                                </p>
                            </motion.div>

                            {/* Info Grid */}
                            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 pt-6">
                                <motion.div
                                    className="p-6 rounded-lg bg-[#00A3FF]/5 transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <p className="text-xs text-[#00A3FF]/80 uppercase tracking-wider mb-1">Location</p>
                                    <p className="text-sm text-[#E1E7EF] font-medium">Iași, Romania</p>
                                </motion.div>
                                <motion.div
                                    className="p-4 rounded-lg bg-[#00A3FF]/5 transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <p className="text-xs text-[#00A3FF]/80 uppercase tracking-wider mb-1">Email</p>
                                    <p className="text-sm text-[#E1E7EF] font-medium truncate">b.ryky.filipe@gmail.com</p>
                                </motion.div>
                                <motion.div
                                    className="p-4 rounded-lg bg-[#00A3FF]/5 transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <p className="text-xs text-[#00A3FF]/80 uppercase tracking-wider mb-1">Phone</p>
                                    <p className="text-sm text-[#E1E7EF] font-medium">+40 750 406 066</p>
                                </motion.div>
                            </motion.div>

                            {/* CTA Buttons */}
                            {/* Temporarily removed contact buttons
                            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-6">
                                <motion.button
                                    onClick={scrollToContact}
                                    onHoverStart={() => setHoveredButton('contact')}
                                    onHoverEnd={() => setHoveredButton(null)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative px-6 py-3 rounded-lg font-medium text-white text-base sm:text-lg overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-[#00A3FF] opacity-90 z-0" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        Let's Connect
                                        <motion.span
                                            animate={hoveredButton === 'contact' ? { x: 3 } : { x: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            →
                                        </motion.span>
                                    </span>
                                </motion.button>

                                <motion.a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onHoverStart={() => setHoveredButton('linkedin')}
                                    onHoverEnd={() => setHoveredButton(null)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-3 rounded-lg font-medium text-[#E1E7EF] bg-[#00A3FF]/5 hover:bg-[#00A3FF]/10 transition-all duration-300"
                                >
                                    LinkedIn
                                </motion.a>

                                <motion.a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onHoverStart={() => setHoveredButton('github')}
                                    onHoverEnd={() => setHoveredButton(null)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-3 rounded-lg font-medium text-[#E1E7EF] bg-[#00A3FF]/5 hover:bg-[#00A3FF]/10 transition-all duration-300"
                                >
                                    GitHub
                                </motion.a>
                            </motion.div>
                            */}
                        </motion.div>

                        {/* Right Visual */}
                        <motion.div
                            variants={itemVariants}
                            className="order-1 lg:order-2 relative flex justify-center lg:justify-end mt-8 sm:mt-0"
                        >
                            <motion.div
                                className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-xl xl:max-w-2xl"
                            >
                                {/* Outer glow circles */}
                                <motion.div
                                    variants={glowVariants}
                                    animate="animate"
                                    className="absolute inset-0 bg-gradient-to-br from-[#00A3FF]/20 to-[#0057FF]/10 rounded-3xl blur-3xl"
                                    style={{ scale: 1.1 }}
                                />

                                {/* Inner glow */}
                                <motion.div
                                    variants={glowVariants}
                                    animate="animate"
                                    className="absolute inset-4 bg-gradient-to-tr from-[#0057FF]/15 to-transparent rounded-2xl blur-2xl"
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                />

                                {/* Placeholder for image - elegant gradient box */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden group"
                                >
                                    {/* Subtle background */}
                                    <div className="absolute inset-0 bg-[#00A3FF]/5" />
                                    
                                    {/* Hover effect */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            background: 'radial-gradient(circle at center, rgba(0,163,255,0.1), transparent 70%)'
                                        }}
                                    />

                                    <motion.img
                                        src={me}
                                        alt="Portret Ricardo-Filipe"
                                        className="relative z-10 w-full h-full object-cover"
                                        loading="lazy">
                                    </motion.img>
                                    
                                </motion.div>

                                {/* Floating decorative elements */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -top-10 -right-10 w-32 h-32 border border-[#00A3FF]/10 rounded-full z-0"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute -bottom-10 -left-10 w-40 h-40 border border-[#0057FF]/10 rounded-full z-0"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block"
            >
                <div className="flex flex-col items-center gap-2">
                    <p className="text-xs text-[#E1E7EF]/50 uppercase tracking-widest">Scroll Down</p>
                    <div className="w-6 h-10 border-2 border-[#00A3FF]/30 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-2 bg-[#00A3FF] rounded-full mt-2"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;