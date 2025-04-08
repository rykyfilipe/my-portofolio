/** @format */
import Scroller from "../Components/Scroller";
import { images } from "../Constants";

function ProjectsScroller() {
	return (
		<section className=' w-full h-[800px] flex bg-black  overflow-hidden '>
			<Scroller
				images={images}
				columnPosition='translateY(0)'
				animation='animate-infinite-scroll-1'
			/>
			<Scroller
				images={images}
				columnPosition='translateY(-20%)'
				animation='animate-infinite-scroll-2'
			/>
			<Scroller
				images={images}
				columnPosition='translateY(20%)'
				animation='animate-infinite-scroll-3'
			/>
			<Scroller
				images={images}
				columnPosition='translateY(-10%)'
				animation='animate-infinite-scroll-4'
			/>
		</section>
	);
}

export default ProjectsScroller;
