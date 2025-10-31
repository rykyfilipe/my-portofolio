/** @format */

import Button from "../Components/Button.jsx";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import googleplay from "../assets/icons/googleplay.svg";

function Footer() {
    return (
        <footer
            className='w-full flex flex-col items-center justify-center bg-[#010509] h-[300px] text-[#E1E7EF] border-t-[1px] border-[#E1E7EF]/10'>
            <div className='flex gap-4 mt-10'>
                <Button variant="outline" imgURL={linkedin} key='linkedin'/>
                <Button variant="outline" imgURL={github} key='github'/>
            </div>
            <p className='pt-2'>
                Build with{" "}
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                    alt='React logo'
                    className='inline w-6 h-6'
                />{" "}
                using <span className='text-[#00A3FF]'>💙</span>
            </p>

            <div
                className='w-full md:px-5 pt-22 flex flex-col md:flex-row items-center justify-between text-[#9CA3AF]'>
                <p>Developed by RYKY</p>
                <p>&copy; 2025, ALL RIGHTS RESERVED</p>
            </div>
        </footer>
    );
}

export default Footer;
