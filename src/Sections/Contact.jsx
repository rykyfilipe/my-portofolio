import { motion, AnimatePresence } from 'framer-motion';
import { Section, SectionTitle } from "../components/Section";
import Button from "../Components/Button";
import { useState } from "react";
import ContactForm from "../Components/ContactForm";

const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            duration: 0.3
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
};

const formVariants = {
    hidden: { 
        opacity: 0,
        scale: 0.8,
        y: 20
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 300
        }
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        y: 20,
        transition: {
            duration: 0.2
        }
    }
};

function Contact() {
    const [showForm, setShowForm] = useState(false);

    return (
        <Section 
            className="relative bg-[linear-gradient(180deg,rgba(2,8,23,0.9)_0%,#010509_100%)] z-40" 
            id="contact"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center space-y-8 flex flex-col items-center"
                >
                    <SectionTitle className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-[#E1E7EF]">
                        Let's Make Something
                        <br />
                        <span className="bg-[linear-gradient(135deg,#00A3FF_0%,#0057FF_100%)] bg-clip-text text-transparent">
                            Special Together
                        </span>
                    </SectionTitle>

                    <p className="text-[#9CA3AF] text-lg md:text-xl max-w-2xl mx-auto">
                       Let's discuss how we can bring your ideas to life.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button 
                            text="Let's Connect" 
                            handleClick={() => setShowForm(true)}
                            variant="default"
                            size="lg"
                            className="text-lg"
                        />
                    </motion.div>
                </motion.div>

                <AnimatePresence>
                    {showForm && (
                        <>
                            <motion.div
                                variants={backgroundVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="fixed inset-0 bg-[#020817]/80 backdrop-blur-sm z-50"
                                onClick={() => setShowForm(false)}
                            />
                            <motion.div
                                variants={formVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
                            >
                                <div className="pointer-events-auto w-full max-w-2xl">
                                    <ContactForm onClose={() => setShowForm(false)} />
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
           
        </Section>
    );
}

export default Contact;