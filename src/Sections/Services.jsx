/** @format */

import Service from "../Components/Service";
import { services } from "../Constants";
function Services() {
	return (
		<section className='relative z-99 w-full h-fit bg-black  text-white font-bold flex flex-col items-center justify-center py-20 shadow-top'>
			<h1 className='text-3xl md:text-6xl mb-4 text-center'>
				WHAT I CAN OFFER TO YOU
			</h1>
			<h2 className='text-2xl md:text-4xl mb-16 text-center'>
				TRANSFORM YOUR PROJECTS
			</h2>

			<div
				className='w-full h-[600px]  relative no-scrollbar overflow-x-auto no-scrollbar snap-x snap-mandatory
			'>
				<div
					className='flex h-full items-center gap-8 pl-4 pr-4'
					style={{ minWidth: "max-content" }}>
					{services.map((service, index) => (
						<Service key={index} {...service} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
