/** @format */

import Service from "../Components/Service";
import { services } from "../Constants";
function Services() {
	return (
		<section className='relative z-99 w-full h-fit bg-black  text-white font-bold flex flex-col items-center justify-center py-20 shadow-top'>
			<h1 className='text-4xl md:text-6xl mb-4'>WHAT I CAN OFFER TO YOU</h1>
			<h2 className='text-2xl md:text-4xl mb-16'>TRANSFORM YOUR PROJECTS</h2>

			<div className='w-full h-[600px] overflow-x-auto overflow-y-hidden relative no-scrollbar'>
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
