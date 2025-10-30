/** @format */
import { Suspense } from 'react';
import { ThemeProvider } from "./providers/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { lazyLoad } from './utils/lazyLoad';
import CustomCursor from "./Components/CustumCursor";

// Lazy load components
const Hero = lazyLoad(() => import("./Sections/Hero"));
const Experience = lazyLoad(() => import("./Sections/Experience"));
const ProjectsScroller = lazyLoad(() => import("./Sections/ProjectsScroller"));
const Services = lazyLoad(() => import("./Sections/Services"));
const Projects = lazyLoad(() => import("./Sections/Projects"));
const Contact = lazyLoad(() => import("./Sections/Contact"));
const Footer = lazyLoad(() => import("./Sections/Footer"));

function App() {
	return (
		<ThemeProvider>
			<div className="min-h-screen bg-background text-foreground">
				<CustomCursor />
				<ThemeToggle />
				<Hero />
				<Experience />
				<ProjectsScroller />
				<Services />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
