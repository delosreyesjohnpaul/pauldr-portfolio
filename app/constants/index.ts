export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Data Analyst",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Machine Learning Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Python",
		icon: "/tech/Python_logo_01.svg",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Scikit-Learn",
		icon: "/tech/scikit-learn-seeklogo.svg",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "TensorFlow",
		icon: "/tech/tensorflow-logo-icon-479x512-zcxjco9r.png",
	},
	{
		name: "Weka",
		icon: "/tech/weka.png",
	},
	{
		name: "PyTorch",
		icon: "/tech/PyTorch_logo_icon.svg",
	},
];

const experiences = [
	{
		title: "Data Analyst",
		company_name: "Isabela State University-Cauayan",
		icon: "/company/isylo-removebg-preview.png",
		iconBg: "#383E56",
		date: "2021 -  2025",
		points: [
			"Self-Taught Expertise: Mastered Python, Scikit-learn, TensorFlow and MySQL through independent study, with hands-on experience implementing SVM and Naive Bayes for text-similarity analysis.",
			"Collaborative Analysis: Partnered with BSCS and BSIT students to collect thesis datasets (2021-2025), define performance metrics, and iterate on model thresholds based on user feedback.",
			"Successful Application Development: Architected and delivered a full-stack plagiarism-detection web app using Flask, MySQL, and Tailwind CSS.",
			"Positive Academic Impact: Boosted detection accuracy to 95%, slashed manual review time by over 40%, and supported integrity checks for 200+ thesis submissions—streamlining the review process and reinforcing academic standards."
		],
	},
	{
		title: "Python Developer",
		company_name: "ISU-Cauyan",
		icon: "/company/isylo-removebg-preview.png",
		iconBg: "#E6DEDD",
		date: "2022 - 2025",
		points: [
			"Self-Taught Expertise: Gained proficiency in Python, Scikit-learn and TensorFlow through independent study of machine-learning algorithms and hands-on experimentation.",
			"High-Accuracy Plagiarism Detection: Designed and implemented a plagiarism-detection pipeline using SVM and Naive Bayes, fine-tuned on BSCS/BSIT thesis data to achieve over 95% accuracy.",
			"Full-Stack Web Application Development: Built a Flask-and-MySQL web app for PDF/TXT extraction, interactive result display and pie-chart visualization, styling the UI with Tailwind CSS and iterating features based on stakeholder feedback."
		],
	},
	{
		title: "Software Developer",
		company_name: "Freelancing",
		icon: "/company/myavatar.png",
		iconBg: "#E6DEDD",
		date: "2023 - Present",
		points: [
			"Full-Stack Application Development: Architected and developed end-to-end web solutions and delivering responsive UIs and robust back-end services.",
			"Agile Collaboration & Iteration: Partnered with cross-functional teams and stakeholders to gather requirements, prototype features, and refine functionality through regular sprints and user feedback loops.",
			"Search Engine Optimization.",
			"DevOps & Deployment: Automated testing and CI/CD workflows, containerized applications for consistent staging/production environments, and managed cloud deployments to ensure high availability and quick rollouts.",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
		name: "PaulDR",
		image: "/socialmedia/behance.svg",
		link: "https://www.behance.net/johnpadelosr2",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "PaulDR",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/delos-reyes-john-paul-26b028260/",
	},
	{
		id: 3,
		testimonial:
			"Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
		name: "PaulDR",
		image: "/socialmedia/dribble.svg",
		link: "https://dribbble.com/PaulDR",
	},
	{
		id: 4,
		testimonial:
			"Also do check out my Portfolio where I have shared by design studies.",
		name: "PaulDR",
		image: "/socialmedia/portfolio.svg",
		link: "https://paul-portfolio-website-six.vercel.app/",
	},
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "PaulDR",
		image: "/tech/github.webp",
		link: "https://github.com/delosreyesjohnpaul",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "SyncPanda",
		description:
			"SyncPanda is a SaaS platform that tracks changes on websites and sends notifications to a specified Discord channel. This service is designed to help users stay updated with the latest changes on their favorite websites without needing to manually check them.",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "SaaS",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/SyncPanda.png",
		platform: "Wordpress",
		deploy_link: "https://syncpanda.vercel.app/",
	},
	{
		name: "Zyncly",
		description:
			"Scheduling meetings can be a hassle, but at Zyncly, we make it effortless. With our seamless scheduling solution, your clients can easily find the perfect time to connect with you—no back-and-forth, no stress. Let us handle the logistics.",
		tags: [
			{
				name: "next",
				color: "red-text-gradient",
			},
			{
				name: "Next UI",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/Zyncly.png",
		source_code_link: "https://github.com/delosreyesjohnpaul/zyncly",
		platform: "Web",
		deploy_link: "https://zyncly.vercel.app/",
	},
	{
		name: "Damag",
		description:
			"DAMAG is an interactive knowledge-sharing platform where users can post questions, share thoughts, and provide answers on a wide range of topics. Designed to foster collaborative learning and idea exchange.",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/damag.png",
		source_code_link: "https://github.com/delosreyesjohnpaul/damag",
		platform: "Vercel",
		deploy_link: "https://damag-msyk.vercel.app/",
	},
	{
		name: "ZyncroBind",
		description:
			" Zyncrobind is a web app that instantly converts chemical structures between formats (SMILES, InChI, PDB, etc.) and provides interactive 2D/3D visualizations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "navidia",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/zync.png",
		source_code_link: "https://github.com/delosreyesjohnpaul/zyncrobind",
		platform: "Web",
		deploy_link: "https://github.com/delosreyesjohnpaul/zyncrobind",
	},
	{
		name: "YuScape",
		description:
			"YuScape is an innovative collaborative platform designed to enhance team creativity and streamline brainstorming sessions.",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "organization",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/yuscape.png",
		source_code_link: "https://github.com/delosreyesjohnpaul/yuscape",
		platform: "Vercel",
		deploy_link: "https://yuscape.vercel.app/",
	},
	{
		name: "Thesis Similarity Checker",
		description:
			"Thesis Similarity Checker SVM is a tool designed to check the similarity between thesis documents using Support Vector Machines (SVM).",
		tags: [
			{
				name: "flask",
				color: "blue-text-gradient",
			},
			{
				name: "python",
				color: "green-text-gradient",
			},
			{
				name: "SVM",
				color: "orange-text-gradient",
			},
			{
				name: "mySQL",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/sim.png",
		source_code_link: "https://github.com/delosreyesjohnpaul/Thesis-Similarity-Checker-SVM-V3",
		platform: "Vercel",
		deploy_link: "https://github.com/delosreyesjohnpaul/Thesis-Similarity-Checker-SVM-V3",
	},
];

export { services, technologies, experiences, testimonials, projects };
