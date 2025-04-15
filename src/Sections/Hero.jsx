/** @format */

import Button from "../Components/Button";
import chat from "../assets/icons/chat.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import {useEffect, useRef} from "react";

function Hero() {
    const gradientTextRef = useRef(null);

    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start"});
        }
    };

    // Animation for gradient text
    useEffect(() => {
        const gradientText = gradientTextRef.current;
        if (gradientText) {
            const animation = gradientText.animate(
                {
                    backgroundPosition: ["0% 50%", "100% 50%"]
                },
                {
                    duration: 6000,
                    iterations: Infinity,
                    easing: "linear"
                }
            );
            return () => animation.cancel();
        }
    }, []);

    return (
        <section className="w-full h-screen gradient-radial flex flex-col md:flex-row relative overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full z-50 bg-yellow-400 bg-opacity-90 text-black text-sm md:text-base px-4 py-2 text-center font-medium shadow-md animate-pulse">
                ⚠️ This site is under construction — Content is placeholder and will be updated soon.
            </div>

            <div
                className="w-full xl:w-[50%] h-full flex flex-col justify-center items-start pt-20 px-6 md:px-10 lg:px-20 xl:ml-20">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bienale font-bold leading-tight transition-all duration-300 transform hover:scale-105">
                    👋 I'm RYKY
                </h1>
                <h2
                    ref={gradientTextRef}
                    className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bienale font-bold leading-[1.2]
          text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-blue-500
          bg-[length:200%_200%]"
                >
                    Frontend Developer <br/> React + Tailwind
                </h2>

                <div
                    className="mt-8 text-white text-lg sm:text-xl md:text-2xl font-bienale space-y-2 transition-all duration-500 delay-75">
                    <p className="opacity-0 animate-fadeIn [animation-fill-mode:forwards]">Welcome to my digital
                        playground!</p>
                    <p className="opacity-0 animate-fadeIn [animation-fill-mode:forwards] [animation-delay:300ms]">
                        Let's embark on a journey of creativity and innovation together.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-10 transition-all duration-300 delay-150">
                    <Button text='Contact Me' imgURL={chat} handleClick={scrollToContact}/>
                    <Button
                        imgURL={linkedin}
                        handleClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/bondor-ricardo-filipe-966a20307/",
                                "_blank"
                            )
                        }
                    />
                    <Button
                        imgURL={github}
                        handleClick={() =>
                            window.open("https://github.com/rykyfilipe", "_blank")
                        }
                    />
                </div>
            </div>

            {/* Right side - future content */}
            <div className="hidden md:flex w-[50%] h-full justify-center items-center">
                {/* You can add an image, canvas or interactive content here later */}
            </div>
        </section>
    );
}

export default Hero;