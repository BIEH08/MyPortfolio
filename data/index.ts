export const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Experience", link: "#testimonials" },
	{ name: "Contact", link: "#contact" },
];

export const gridItems = [
	{
		id: 1,
		title: "I prioritize verifiable claims over confident ones",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "./b1.svg",
		spareImg: "",
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "AI Engineer with a full-stack foundation.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "./grid.svg",
		spareImg: "./b4.svg",
	},

	{
		id: 5,
		title: "Currently building agentic systems and autonomous QA",
		description: "The Inside Scoop",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "./b5.svg",
		spareImg: "./grid.svg",
	},
	{
		id: 6,
		title: "Do you want to start a project together?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

// Las entradas de abajo quedan comentadas: eran ejercicios de curso y pruebas
// tecnicas, no trabajo representativo. Descomentar solo lo que se quiera mostrar,
// o sustituir por proyectos reales (Conoce+ en Google Play, sitios de cliente,
// el agente de generacion de tests).
export const projects: {
	id: number;
	title: string;
	des: string;
	img: string;
	iconLists: string[];
	link: string;
}[] = [
	//  {
	//  	id: 1,
	//  	title: "Phone 3D Animated Website Clone",
	//  	des: "Recreated the Phone website, combining GSAP animations and Three.js 3D effects..",
	//  	img: "./p4.svg",
	//  	iconLists: ["./tail.svg", "./re.svg", "./three.svg", "./gsap.svg"],
	//  	link: "https://bieh01.github.io/PhoneClone/",
	//  },
	// {
	// id: 1,
	// title: "Igualitika is for legal advice",
	// des: "A little page to showcase legal information, built with Next.js.",
	// img: "./p12.svg",
	// iconLists: ["./re.svg", "./tail.svg", "./ts.svg"],
	// link: "https://bieh01.github.io/aracari-studio-technical-test/",
	// },
	// {
	// id: 2,
	// title: "Desserts for special occasions",
	// des: "The webpage was created with React and Sass",
	// img: "./p8.svg",
	// iconLists: ["/re.svg"],
	// link: "https://bieh01.github.io/jdk-technical-test/",
	// },
	// {
	// id: 3,
	// title: "Looking for a trip, try Platzi Travel",
	// des: "It is a webpage with amazing places to explore the world, interactive experience with a dark mode UI",
	// img: "./p11.svg",
	// iconLists: ["./tail.svg"],
	// link: "https://bieh01.github.io/PlatziTravel/",
	// },
	// {
	// id: 4,
	// title: "ToDo App for Tracking Your Tasks",
	// des: "Keep your tasks on track and complete with the ToDo app, built with React.js.",
	// img: "./p5.svg",
	// iconLists: ["./re.svg"],
	// link: "https://bieh01.github.io/ToDoApp/",
	// },
	// {
	// id: 5,
	// title: "Have fun with Animationland",
	// des: "A little game design to enjoy while surfing the internet, built with CSS animations",
	// img: "./p7.svg",
	// iconLists: [],
	// link: "https://bieh01.github.io/Animationland/",
	// },
	// {
	// id: 6,
	// title: "BatataBit for cryptocurrency exchange",
	// des: "A little project with responsive design and mobile first",
	// img: "./p9.svg",
	// iconLists: [],
	// link: "https://bieh01.github.io/ResponsiveDesignAndMobileFirst/",
	// },
	// {
	// 	id: ,
	// 	title: "Yoom - Video Conferencing App",
	// 	des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
	// 	img: "/p2.svg",
	// 	iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
	// 	link: "",
	// },
	// {
	// 	id: ,
	// 	title: "AI Image SaaS - Canva Application",
	// 	des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
	// 	img: "/p3.svg",
	// 	iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
	// 	link: "",
	// },
];

// El testimonio que traia el template era inventado: "Michael Johnson, Director of
// AlphaStream Technologies" elogiando a "Adrian". No es un cliente real y no es
// sobre Bryan. Se deja vacio hasta que haya un testimonio verificable.
export const testimonials: { quote: string; name: string; title: string }[] = [];

// cloudinary, appwrite, Hostinger, stream y docker venian del template y se
// mostraban como si fueran clientes o partners. No lo son. Comentado.
export const companies: { id: number; name: string; img: string; nameImg: string }[] = [];

// export const companies = [
// 	{
// 		id: 1,
// 		name: "cloudinary",
// 		img: "./cloud.svg",
// 		nameImg: "./cloudName.svg",
// 	},
// 	{
// 		id: 2,
// 		name: "appwrite",
// 		img: "./app.svg",
// 		nameImg: "./appName.svg",
// 	},
// 	{
// 		id: 3,
// 		name: "HOSTINGER",
// 		img: "./host.svg",
// 		nameImg: "./hostName.svg",
// 	},
// 	{
// 		id: 4,
// 		name: "stream",
// 		img: "./s.svg",
// 		nameImg: "./streamName.svg",
// 	},
// 	{
// 		id: 5,
// 		name: "docker.",
// 		img: "./dock.svg",
// 		nameImg: "./dockerName.svg",
// 	},
// ];

export const workExperience = [
	{
		id: 1,
		title: "AI Engineer — Applaudo Studios",
		desc: "I build agentic systems: MCP servers, LLM orchestration, and autonomous end-to-end QA for AI coding agents.",
		className: "md:col-span-2",
		thumbnail: "./exp1.svg",
	},
	{
		id: 2,
		title: "Agentic systems",
		desc: "I design pipelines where the model proposes as structured data and deterministic code owns the executable form, rejects what the model invented, and renders the rest.",
		className: "md:col-span-2",
		thumbnail: "./exp2.svg",
	},
	{
		id: 3,
		title: "Autonomous QA",
		desc: "I generate and run full-flow test suites that explore an application on their own, self-heal failures, and separate real product defects from test-side noise.",
		className: "md:col-span-2",
		thumbnail: "./exp3.svg",
	},
	{
		id: 4,
		title: "Full-stack foundation",
		desc: "TypeScript, Python and SQL across Node.js, FastAPI, React and Next.js, on Google Cloud with Docker and CI gates.",
		className: "md:col-span-2",
		thumbnail: "./exp4.svg",
	},
];

export const socialMedia = [
	{
		id: 1,
		name: "GitHub",
		img: "./git.svg",
		link: "https://github.com/BIEH01",
	},
	{
		id: 2,
		name: "Linkedin",
		img: "./link.svg",
		link: "https://www.linkedin.com/in/bryanescamilla-ai",
	},
	// {
	// 	id: 3,
	// 	name: "X",
	// 	img: "/twit.svg",
	// 	link: "",
	// },
];
