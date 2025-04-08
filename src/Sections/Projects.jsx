/** @format */

import Project from "../Components/Project";
import { projects } from "../Constants";

function Projects() {
	return (
		<section className='w-full h-fit pb-30 bg-black relative z-[99] text-white font-bold shadow-top items-center flex flex-col'>
			<h1 className='text-4xl md:text-6xl mb-4'>TURNING IDEAS INTO APPS</h1>
			<h2 className='text-xl md:text-4xl mb-16'>
				SCALING TO SERVER, DESIGNED TO IMPRESS
			</h2>

			<div className='pl-15 flex overflow-x-auto no-scrollbar snap-x snap-mandatory md:flex-col md:gap-10 gap-10  w-full items-center'>
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</section>
	);
}

export default Projects;
