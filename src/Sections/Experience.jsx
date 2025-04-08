/** @format */

import { experience } from "../Constants";

function Experience() {
	return (
		<div className='relative z-99 w-full h-40 bg-black shadow-bottom'>
			<ul className='flex flex-wrap items-center justify-around text-white text-4xl'>
				{experience.map((item, index) => (
					<li key={index} className='flex items-center gap-2 pb-5'>
						<span className='text-4xl md:text-6xl font-bienale font-bold'>
							{item.number}+
						</span>
						<span className='text-sm  font-bienale  w-[100px] font-bold'>
							{item.title}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Experience;
