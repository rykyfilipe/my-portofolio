/** @format */

import Button from "../Components/Button";
import chat from "../assets/icons/chat.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import googleplay from "../assets/icons/googleplay.svg";

function Hero() {
	return (
		<section className='w-screen h-screen gradient-radial flex'>
			<div className='w-full md:w-[50%] h-full flex flex-col justify-center items-start ml-20 leading-normal'>
				<h1 className='text-white text-3xl md:text-7xl font-bienale font-bold w-max leading-25'>
					👋I'm RYKY
				</h1>
				<h1
					className='text-4xl md:text-7xl font-bienale font-bold w-max break-words leading-[1.2] 
             text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-blue-500 
             bg-[length:200%_200%] animate-[gradient_3s_ease-in-out_infinite]'>
					Web Design +<br /> ReactNative Developer
				</h1>

				<div className='mt-10 leading-5 text-white text-md font-bienale font-normal   '>
					<p>Welcome to my digital playground!</p>
					<p>
						Let's embark on a journey of creativity and innovation together.
					</p>
				</div>

				<div className='flex gap-4 mt-10'>
					<Button text='Contact Me' imgURL={chat} />
					<Button imgURL={linkedin} />
					<Button imgURL={github} />
					<Button imgURL={googleplay} />
				</div>
			</div>
			<div className='w-[50%] h-full flex justify-center items-center '></div>
		</section>
	);
}

export default Hero;
