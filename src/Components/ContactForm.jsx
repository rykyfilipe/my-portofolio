import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import Button from './Button';
import close from '../assets/icons/close.svg';

const inputVariants = {
    focus: {
        scale: 1.02,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15
        }
    }
};

const successVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 25
        }
    }
};

const ContactForm = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = {
            service_id: 'service_yscjc1l',
            template_id: 'template_v2y9a97',
            user_id: '5zD8tI7qqxHWdmpXi',
            template_params: {
                'username': name,
                'email': email,
                'message': message,
            }
        };

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.status === 200) {
                setIsSuccess(true);
                setTimeout(onClose, 2000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <Card className="relative overflow-hidden bg-background/95 backdrop-blur-lg border border-primary/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                <CardContent className="relative p-8">
                    <motion.div
                        variants={successVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center space-y-6"
                    >
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", damping: 10, stiffness: 100 }}
                            className="text-7xl"
                        >
                            ✨
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Message Sent!
                        </h3>
                        <p className="text-foreground/80 text-lg">
                            Thank you for reaching out. I'll get back to you soon!
                        </p>
                    </motion.div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="relative overflow-hidden bg-background/95 backdrop-blur-lg border border-primary/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl transform -translate-x-16 translate-y-16" />
            
            <CardHeader className="relative space-y-2 p-6">
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-background/50 transition-colors"
                >
                    <img src={close} alt="close" className="w-6 h-6" />
                </motion.button>
                <CardTitle className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Let's Connect
                </CardTitle>
                <p className="text-foreground/80">Fill out the form below and I'll get back to you soon.</p>
            </CardHeader>

            <CardContent className="relative p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={inputVariants} whileFocus="focus">
                        <label htmlFor="name" className="block text-sm font-medium text-foreground/90 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full p-3 rounded-lg bg-background/50 border-2 border-border hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </motion.div>

                    <motion.div variants={inputVariants} whileFocus="focus">
                        <label htmlFor="email" className="block text-sm font-medium text-foreground/90 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full p-3 rounded-lg bg-background/50 border-2 border-border hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50"
                            placeholder="your.email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </motion.div>

                    <motion.div variants={inputVariants} whileFocus="focus">
                        <label htmlFor="message" className="block text-sm font-medium text-foreground/90 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            required
                            rows="4"
                            className="w-full p-3 rounded-lg bg-background/50 border-2 border-border hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none placeholder:text-muted-foreground/50"
                            placeholder="Tell me about your thoughts"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                    >
                        <Button
                            type="submit"
                            text={isSubmitting ? "Sending..." : "Send Message"}
                            variant="default"
                            className="w-full py-6 text-lg font-medium"
                            disabled={isSubmitting}
                        />
                    </motion.div>
                </form>
            </CardContent>
        </Card>
    );
};

export default ContactForm;
