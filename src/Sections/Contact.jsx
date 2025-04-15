/** @format */

import Button from "../Components/Button";
import {useState} from "react";
import ContactForm from "../Components/ContactForm.jsx";

function Contact() {
    const [showForm, setShowForm] = useState(false);

    return (
        <section
            className="relative flex flex-col justify-center items-center w-full h-fit text-white text-bold min-h-[50vh] py-20"
            id="contact">
            <h1 className="text-center w-full pb-10 text-[50px] md:text-[70px] lg:text-[150px]">
                LET'S MAKE SOMETHING SPECIAL
            </h1>
            <Button text="CONNECT" handleClick={() => setShowForm(!showForm)}/>

            {showForm && (
                <div className=" fixed inset-0 flex justify-center items-center z-50">
                    <ContactForm onClose={() => setShowForm(false)}/>
                </div>
            )}
        </section>
    );
}

export default Contact;