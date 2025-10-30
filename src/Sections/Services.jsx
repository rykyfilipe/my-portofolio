import { motion } from 'framer-motion';
import { Section, SectionTitle, SectionSubtitle } from "../components/Section";
import Service from "../Components/Service";
import { services } from "../Constants";
import { useInView } from 'react-intersection-observer';

function Services() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <Section className="relative bg-[linear-gradient(180deg,#010509_0%,#020817_50%,rgba(2,8,23,0.95)_100%)] py-20 z-20">
            <div className="absolute inset-0 bg-[#FFFFFF]/5 [mask-image:linear-gradient(0deg,transparent,white,transparent)]" />
            
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4 mb-16"
                >
                    <SectionTitle className="text-4xl md:text-5xl lg:text-6xl font-display text-[#E1E7EF]">
                        What I Can Offer
                    </SectionTitle>
                    <SectionSubtitle className="text-xl md:text-2xl text-[#E1E7EF]/80 max-w-2xl mx-auto">
                        Transform Your Projects with Expertise
                    </SectionSubtitle>
                </motion.div>

                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { 
                                opacity: 1, 
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }
                            } : {}}
                        >
                            <Service {...service} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}

export default Services;
