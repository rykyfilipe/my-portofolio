/** @format */

import Button from "../Components/Button";

function Contact() {
    return (
        <section className='flex flex-col justify-center items-center w-full h-fit text-white text-bold '>
            <h1 className='text-center w-full pb-10 text-[50px] md:text-[70px] lg:text-[150px]  '>
                LET'S MAKE SOMETHING SPECIAL
            </h1>
            <Button text='CONNECT'/>
        </section>
    );
}

export default Contact;
