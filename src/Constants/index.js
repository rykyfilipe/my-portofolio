/** @format */
import arrow_right from "../assets/icons/arrow-right.svg";
import project_1 from "../assets/images/project_1.png"
import project_2 from "../assets/images/project_2.png"

import project_4 from "../assets/images/project_4.png"
import project_5 from "../assets/images/project_5.png"
import project_6 from "../assets/images/project_6.png"


import imagine1 from "../assets/images/1.png";
import imagine2 from "../assets/images/2.png";
import imagine3 from "../assets/images/3.png";
import imagine4 from "../assets/images/4.png";
import imagine5 from "../assets/images/5.png";
import imagine6 from "../assets/images/6.png";
import imagine7 from "../assets/images/7.png";
import imagine8 from "../assets/images/8.png";
import imagine9 from "../assets/images/9.png";
import imagine10 from "../assets/images/10.png";
import imagine11 from "../assets/images/11.png";
import imagine12 from "../assets/images/12.png";
import imagine13 from "../assets/images/13.png";
import imagine14 from "../assets/images/14.png";


export const experience = [
    {
        number: 20,
        title: "Projects",
    },
    {
        number: 2,
        title: "Certifications",
    },
    {
        number: 3,
        title: "Years of CS Studies",
    },
    {
        number: 5,
        title: "Programming Languages",
    },
];


export const images = [
  { image: imagine1 },
  { image: imagine2 },
  { image: imagine3 },
  { image: imagine4 },
  { image: imagine5 },
  { image: imagine6 },
  { image: imagine7 },
  { image: imagine8 },
  { image: imagine9 },
  { image: imagine10 },
  { image: imagine11 },
  { image: imagine12 },
  { image: imagine13 },
  { image: imagine14 },

];

export const services = [
    {
        title: "Frontend Development",
        description: "Expert in React.js, Next.js, and modern UI frameworks like Shadcn. Proficient in creating responsive designs with HTML, CSS, JavaScript, and Tailwind.",
        cta: "View Projects 👨‍💻",
        color: "primary",
        imgURL: arrow_right,
    },
    {
        title: "Backend Development",
        description: "Experience with Node.js, Express.js, Django, and Spring. Skilled in building RESTful APIs and working with WebSockets for real-time applications.",
        cta: "See Backend Work 🔧",
        color: "secondary",
        imgURL: arrow_right,
    },
    {
        title: "Database & Architecture",
        description: "Proficient in SQL database management and software engineering concepts. Strong understanding of Client-Server Architecture and API design.",
        cta: "Explore Skills 💾",
        color: "accent",
        imgURL: arrow_right,
    },
    {
        title: "Development Tools",
        description: "Experienced with Visual Studio, Git version control, and modern development environments. ",
        cta: "Tool Stack 🛠️",
        color: "primary",
        imgURL: arrow_right,
    },
];


export const projects = [
    {
        title: "Business Management App (YDV Digital)",
        description:
            "A complex SaaS project for small and medium business management. Main features:\n\n" +
            "• Excel-like dynamic tables for company data management, with advanced editing and filtering functions\n" +
            "• Customizable dashboard with interactive widgets for KPIs, charts, and reports\n" +
            "• Invoice generator with e-Factura integration (Romanian official e-invoicing system)\n" +
            "• Multi-tenant architecture for client data isolation\n" +
            "• Performance optimizations and caching for fast operations\n\n" +
            "Tech Stack: Prisma ORM, Next.js 14, React, Shadcn UI, Tailwind CSS v4\n" +
            "Live: https://ydv.digital",
        imgURL: project_1,
        left: true,
    },
    {
        title: "Income Tracker - Personal Finance Dashboard",
        description:
            "Modern web application for personal finance management:\n\n" +
            "• 4 interactive charts (Bar Chart, Pie Charts) for financial analysis\n" +
            "• Complete tracking of income, bills, expenses, debts, and savings\n" +
            "• Theme system with 3 customizable colors (primary, secondary, accent)\n" +
            "• Multi-currency support: 9 currencies ($, €, £, ¥, ₹, R, lei, CHF, kr)\n" +
            "• Dynamic tables with auto-expanding rows and intelligent cleanup\n" +
            "• Automatic calculations: Net Income, Disposable Income, budget analysis\n" +
            "• Responsive design optimized for desktop and mobile\n\n" +
            "Tech Stack: React 18, TypeScript, Chart.js, Context API, Vite\n" +
            "Live: https://rykyfilipe.github.io/income-traker/",
        imgURL: project_6,
        left: false,
    },
    {
        title: "Interview ChatBot",
        description:
            "Innovative web application for technical interview simulation:\n\n" +
            "• Authentication system and user profiles for personalized experience\n" +
            "• Domain selection (frontend, backend, databases) for specialized questions\n" +
            "• Gemini AI integration for generating contextual questions and answers\n" +
            "• Interview history and progress tracking\n" +
            "• Personalized feedback and improvement suggestions\n\n" +
            "Tech Stack: React.js, Vite, Tailwind CSS, Node.js, Express.js, MySQL, Google Gemini API",
        imgURL:project_2,
        left: true,
    },
    {
        title: "Real-time Chat Application",
        description:
            "Real-time chat application with comprehensive features:\n\n" +
            "• Authentication system and user management\n" +
            "• Private and group chats with real-time updates\n" +
            "• Advanced message and conversation search\n" +
            "• Complete conversation history with pagination\n" +
            "• Real-time notifications for new messages\n" +
            "• Online/offline status indicators\n\n" +
            "Tech Stack: Node.js, Express.js, Socket.io, MySQL, React, Tailwind CSS",
        imgURL: null,
        left: true,
    },
    {
        title: "YouTube Clone",
        description:
            "Functional YouTube clone with essential features:\n\n" +
            "• Main page with video feed and recommendations\n" +
            "• Detailed video page with functional player\n" +
            "• Search system with advanced filtering\n" +
            "• Responsive implementation for all screen sizes\n" +
            "• RESTful API for data management\n\n" +
            "Tech Stack: HTML5, CSS3, JavaScript, Express.js, Node.js",
        imgURL: project_4,
        left: false,
    },
    {
        title: "Amazon Clone",
        description:
            "Amazon platform replica with e-commerce functionalities:\n\n" +
            "• Product catalog with filtering and sorting\n" +
            "• Interactive shopping cart\n" +
            "• Order and tracking system\n" +
            "• API integration for stock and price management\n" +
            "• Responsive design optimized for mobile\n\n" +
            "Tech Stack: HTML5, CSS3, JavaScript, REST APIs",
        imgURL: project_5,
        left: true,
    },
    {
        title: "Weather Application",
        description:
            "Weather application with modern interface and real-time data:\n\n" +
            "• Detailed hourly and daily forecast\n" +
            "• City and location search with autocomplete\n" +
            "• Current weather conditions display with animations\n" +
            "• weatherapi.com integration for accurate data\n" +
            "• Favorite locations saving\n\n" +
            "Tech Stack: HTML5, CSS3, JavaScript, Weather API",
        imgURL: null,
        left: false,
    },
    {
        title: "Multiplayer Board Game",
        description:
            "Multiplayer board game implemented in C:\n\n" +
            "• Robust client-server architecture using TCP/IP\n" +
            "• Threading system for managing multiple connections\n" +
            "• Real-time synchronization between players\n" +
            "• Custom protocol for network communication\n" +
            "• Efficient game state management\n\n" +
            "Tech Stack: C, Socket Programming, POSIX Threads",
        imgURL: null,
        left: true,
    },
    {
        title: "Diverse Proiecte Practice",
        description:
            "Collection of applications for learning and experimentation:\n\n" +
            "• Todo App - Task management application with local persistence\n" +
            "• Password Generator - Secure password generator with customizable options\n" +
            "• Age Calculator - Precise age calculator down to days\n" +
            "• Slot Machine - Slot machine game with CSS animations\n" +
            "• Live Cursor Broadcast - Real-time cursor position broadcasting system between users\n\n" +
            "Tech Stack: React, JavaScript, CSS3, WebSocket",
        imgURL: null,
        left: false,
    }
];
