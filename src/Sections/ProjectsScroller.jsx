/** @format */
import Scroller from "../Components/Scroller";
import { images } from "../Constants";

function ProjectsScroller() {
	// Function to shuffle array
	const shuffleArray = (array) => {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	// Create different shuffled versions for each scroller
	const images1 = shuffleArray(images);
	const images2 = shuffleArray(images);
	const images3 = shuffleArray(images);
	const images4 = shuffleArray(images);

	return (
		<section className='relative w-full h-[800px] flex bg-[#010509] overflow-hidden gap-5 py-8'>
			{/* Gradient overlays for smooth fade effects */}
			<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#010509] to-transparent z-10" />
			<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#010509] to-transparent z-10" />
			<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#010509] to-transparent z-10" />
			<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#010509] to-transparent z-10" />
			<Scroller
				images={images1}
				columnPosition='translateY(0)'
				animation='animate-infinite-scroll-1'
			/>
			<Scroller
				images={images2}
				columnPosition='translateY(-20%)'
				animation='animate-infinite-scroll-2'
			/>
			<Scroller
				images={images3}
				columnPosition='translateY(20%)'
				animation='animate-infinite-scroll-3'
			/>
			<Scroller
				images={images4}
				columnPosition='translateY(-10%)'
				animation='animate-infinite-scroll-4'
			/>
		</section>
	);
}

export default ProjectsScroller;
