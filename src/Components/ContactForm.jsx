import {useEffect, useState} from 'react';
import close from '../assets/icons/close.svg';

const ContactForm = ({onClose}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            service_id: 'service_64zwhx8',
            template_id: 'template_v2y9a97',
            user_id: '-wWsEaw_q3ZlOIKj3',
            template_params: {
                'username': name,
                'email': email,
                'message': message,
            }
        };

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (response.status === 200) {
                    alert('Mesaj trimis cu succes!');
                    onClose();
                } else {
                    alert('Eroare la trimiterea mesajului.');
                }
            })
            .catch(error => {
                alert(`Eroare: ${error.message}`);
            });
    };


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative bg-white rounded-3xl p-8 w-full max-w-2xl text-black">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl rounded-full font-bold cursor-pointer hover:bg-stone-300"
                >
                    <img src={close} alt="close"/>
                </button>

                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 border rounded"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border rounded"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full p-2 border rounded"
                            placeholder="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
