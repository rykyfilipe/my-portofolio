/** @format */
import Hero from "./Sections/Hero";
import Experience from "./Sections/Experience";
import ProjectsScroller from "./Sections/ProjectsScroller";
import Services from "./Sections/Services";
import Projects from "./Sections/Projects";
import CustomCursor from "./Components/CustumCursor";
import Footer from "./Sections/Footer";
import Contact from "./Sections/Contact";

function App() {
	return (
		<div>
			<CustomCursor />
			<Hero />
			<Experience />
			<ProjectsScroller />
			<Services />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
