/** @format */
import { motion } from 'framer-motion';

function Scroller({ columnPosition, animation, images }) {
	let repeatedImages = [...images, ...images];

	return (
		<div
			className='w-[calc(100vw/4)] h-full flex flex-col items-center justify-center relative'
			style={{
				transform: columnPosition,
			}}>
			<div className={`relative flex flex-col ${animation}`}>
				{repeatedImages.map((project, index) => (
					<motion.div
						key={`first-${project.id}-${index}`}
						className="
							relative group my-6 
							h-[200px] w-[100px] min-w-[80px] min-h-[160px] 
								md:h-[300px] md:w-[150px] md:min-w-[120px] md:min-h-[240px]
								lg:h-[500px] lg:w-[300px] lg:min-w-[200px] lg:min-h-[400px]
							bg-black border-4 border-neutral-800 rounded-[2rem]
							shadow-lg shadow-gray-700/30
							overflow-hidden
							flex items-center justify-center
						"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
						>
						<motion.img
							src={project.image}
							className='
								h-[200px] w-[100px] min-w-[80px] min-h-[160px] 
								md:h-[300px] md:w-[150px] md:min-w-[120px] md:min-h-[240px]
								lg:h-[500px] lg:w-[300px] lg:min-w-[200px] lg:min-h-[400px]
								object-cover rounded-[2rem]
								transition-all duration-300
								group-hover:shadow-[0_0_30px_rgba(0,163,255,0.3)]
							'
							alt={project.name || "Project image"}
						/>
						{/* Glow overlay */}
						<motion.div
							className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							style={{
								background: 'radial-gradient(circle at center, rgba(0,163,255,0.1) 0%, transparent 70%)',
								mixBlendMode: 'overlay'
							}}
						/>
						{/* Border glow */}
						<motion.div
							className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							style={{
								background: 'linear-gradient(45deg, rgba(0,163,255,0.1), rgba(0,87,255,0.1))',
								filter: 'blur(2px)'
							}}
						/>
					</motion.div>
				))}
				{repeatedImages.map((project, index) => (
					<motion.div
						key={`second-${project.id}-${index}`}
						className="relative group my-4"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
					>
						<motion.img
							src={project.image}
							className='
								h-[200px] w-[100px] min-w-[80px] min-h-[160px] 
								md:h-[300px] md:w-[150px] md:min-w-[120px] md:min-h-[240px]
								lg:h-[500px] lg:w-[300px] lg:min-w-[200px] lg:min-h-[400px]
								object-cover rounded-3xl
								transition-all duration-300
								group-hover:shadow-[0_0_30px_rgba(0,163,255,0.3)]
							'
							alt={project.name || "Project image"}
						/>
						{/* Glow overlay */}
						<motion.div
							className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							style={{
								background: 'radial-gradient(circle at center, rgba(0,163,255,0.1) 0%, transparent 70%)',
								mixBlendMode: 'overlay'
							}}
						/>
						{/* Border glow */}
						<motion.div
							className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							style={{
								background: 'linear-gradient(45deg, rgba(0,163,255,0.1), rgba(0,87,255,0.1))',
								filter: 'blur(2px)'
							}}
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
}

export default Scroller;
