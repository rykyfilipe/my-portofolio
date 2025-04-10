/** @format */

import Button from "../Components/Button.jsx";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import googleplay from "../assets/icons/googleplay.svg";

function Footer() {
    return (
        <footer
            className='w-full flex flex-col items-center justify-center bg-black h-[300px] mt-20 text-white border-t-1 border-white'>
            <div className='flex gap-4 mt-10'>
                <Button imgURL={linkedin} key='linkedin'/>
                <Button imgURL={github} key='github'/>
                <Button imgURL={googleplay} key='googleplay'/>
            </div>
            <p className='pt-2'>
                Build with{" "}
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                    alt='React logo'
                    className='inline w-6 h-6'
                />{" "}
                using <span className='text-blue-500'>💙</span>
            </p>

            <div
                className='w-full md:px-5 pt-22 flex flex-col md:flex-row items-center justify-between text-neutral-400'>
                <p>Developed by RYKY</p>
                <p>&copy; 2025, ALL RIGHTS RESERVED</p>
            </div>
        </footer>
    );
}

export default Footer;
