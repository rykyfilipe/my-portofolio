/** @format */

function Scroller({ columnPosition, animation, images }) {
	let repeatedImages = [...images, ...images];

	return (
		<div
			className='w-[calc(100vw/4)] h-full flex flex-col items-center justify-center'
			style={{
				transform: columnPosition,
			}}>
			<div className={`relative flex flex-col ${animation}`}>
				{repeatedImages.map((project, index) => (
					<img
						key={`first-${project.id}-${index}`}
						src={project.image}
						className='
							h-[200px] w-[100px] min-w-[80px] min-h-[160px] 
							md:h-[300px] md:w-[150px] md:min-w-[120px] md:min-h-[240px]
							lg:h-[500px] lg:w-[300px] lg:min-w-[200px] lg:min-h-[400px]
							object-cover my-4 rounded-3xl
						'
						alt={project.name || "Project image"}
					/>
				))}
				{repeatedImages.map((project, index) => (
					<img
						key={`second-${project.id}-${index}`}
						src={project.image}
						className='
							h-[200px] w-[100px] min-w-[80px] min-h-[160px] 
							md:h-[300px] md:w-[150px] md:min-w-[120px] md:min-h-[240px]
							lg:h-[500px] lg:w-[300px] lg:min-w-[200px] lg:min-h-[400px]
							object-cover my-4 rounded-3xl
						'
						alt={project.name || "Project image"}
					/>
				))}
			</div>
		</div>
	);
}

export default Scroller;
