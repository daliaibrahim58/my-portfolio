// ------------------ Types ------------------

export interface NavItem {
  name: string;
  link: string;
}

export interface GridItem {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  links?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface Company {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}

export interface WorkExperience {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
}

export interface SocialMedia {
  id: number;
  img: string;
  url: string;
}

// ------------------ Data ------------------

export const navItems: NavItem[] = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems: GridItem[] = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
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
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a Next.js projects",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
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

export const projects: Project[] = [
  {
    id: 1,
    title: "🛒 E-commerce Storefront with React.js",
    des: "A full-stack e-commerce application built with React.js, Node.js, Express, and MongoDB. Users can register, login, browse products, add items to cart, place and rate orders, and view order history. Includes an admin dashboard for managing products, orders, and users, with JWT authentication and a responsive UI.",
    img: "/ecommerce-storefront.png",
    iconLists: [
      "/react-2.svg",
      "/nodejs.svg",
      "/mongodb.svg",
      "/javascript-1.svg",
    ],
    link: "https://depi-frontend-one.vercel.app/",
  },
  {
    id: 2,
    title: "🏬 Dukan Abdulaziz E-Commerce",
    des: "An e-commerce web application for home appliances, similar to Raneen. Supports product filtering, multiple payment methods, special offers when available, and multi-language localization. Built with a responsive UI and integrated backend APIs for complete shopping functionality.",
    img: "/dukan.png",
    iconLists: [
      "/react-2.svg",
      "/tail.svg",
      "/javascript-1.svg",
      "/nodejs.svg",
    ],
    link: "https://dukan-final.vercel.app/en",
  },
  {
    id: 3,
    title: "Next.js Course Platform",
    des: "A Next.js project bootstrapped with create-next-app. It is a course platform designed to help users track their learning progress, interact with content, and test their knowledge.",
    img: "/course-platform.png",
    iconLists: ["/next.svg", "/ts.svg", "/css.svg"],
    link: "https://course-platform-eosin.vercel.app/",
  },
  {
    id: 4,
    title: "Gaming Store Platform",
    des: "A modern gaming e-commerce platform built with Next.js, TypeScript, Redux Toolkit, and Tailwind CSS. Features include game browsing, category filtering, favorites, shopping cart, authentication, and a responsive user interface.",
    img: "/gaming.png",
    iconLists: ["/next.svg", "/ts.svg", "/css.svg"],
    link: "https://gaming-app-woad.vercel.app/",
  },
  {
    id: 5,
    title: "Takween Learning Dashboard",
    des: "A responsive educational dashboard built with Next.js, TypeScript, Redux Toolkit, and RTK Query. It provides course management, instructor profiles, analytics, and dynamic data fetching with a clean, scalable architecture.",
    img: "/takween.png",
    iconLists: ["/react-2.svg", "/redux.svg", "/ts.svg", "/javascript-1.svg"],
    link: "https://takween-dashboard-iota.vercel.app/",
  },
  {
    id: 6,
    title: "React Redux Toolkit Tutorials",
    des: "A series covering Redux Toolkit basics, slices, async thunks, middleware, and RTK Query, using JSONPlaceholder API as a mock data source.",
    img: "/redux.png",
    iconLists: ["/react-2.svg", "/redux.svg", "/ts.svg", "/javascript-1.svg"],
    link: "https://daliaibrahim58.github.io/redux-app/",
  },
  {
    id: 7,
    title: "🔍 Wikipedia Search API Integration",
    des: "A simple Next.js utility that fetches live Wikipedia results using the MediaWiki API, including images, short extracts, and direct links.",
    img: "/wikires.png",
    iconLists: ["/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://wiki-rocket-khaki.vercel.app/",
  },

  {
    id: 8,
    title: "✅ Full-Stack Todo List with Server Actions",
    des: "A Todo List application built with Next.js, React hooks, and server actions. Uses a mock server and includes tests to ensure reliability, with a clean and responsive UI.",
    img: "/todonext.png",
    iconLists: ["/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://todo-list-next-with-test.vercel.app/",
  },
  {
    id: 9,
    title: "📘 User & Posts Explorer with Next.js",
    des: "A Next.js application that fetches users from an API and allows browsing their posts with a clean and modern UI.",
    img: "/users.png",
    iconLists: ["/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://get-users-brown.vercel.app/",
  },
  {
    id: 10,
    title: "JavaScript OOP Quiz App",
    des: "A quiz application built using JavaScript OOP principles. Fetches questions from an API, supports categories, answers, and result tracking.",
    img: "/quizapp.png",
    iconLists: ["/javascript-1.svg", "/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/Quiz-App/",
  },
  {
    id: 11,
    title: "React Vite To-Do List",
    des: "A To-Do List application built with React and Vite. Supports task creation and deletion using Material-UI components and UUIDs.",
    img: "/todo.png",
    iconLists: [
      "/react-2.svg",
      "/vitejs.svg",
      "/javascript-1.svg",
      "/material-ui-1.svg",
    ],
    link: "https://daliaibrahim58.github.io/to_do_list/",
  },

  // ===== Not Responsive Projects =====
  {
    id: 12,
    title: "JavaScript War Game (Not Responsive)",
    des: "A simple war card game built with JavaScript featuring attack mechanics, health points, and restart functionality.",
    img: "/wargame.png",
    iconLists: ["/javascript-1.svg", "/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/simple-war-game/",
  },
  {
    id: 13,
    title: "Weather Application (Not Responsive)",
    des: "A React + Vite weather application with API integration, localization, Material-UI, Tailwind CSS, and date formatting.",
    img: "/wheather.png",
    iconLists: [
      "/react-2.svg",
      "/tail.svg",
      "/javascript-1.svg",
      "/material-ui-1.svg",
    ],
    link: "https://daliaibrahim58.github.io/weather-project/",
  },
  {
    id: 14,
    title: "JavaScript E-Commerce Cart (Not Responsive)",
    des: "A pure JavaScript e-commerce cart supporting add, update, delete, favorites, and localStorage persistence.",
    img: "/ecommerce.png",
    iconLists: ["/javascript-1.svg", "/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/E-commerce-shopping-cart/",
  },
  {
    id: 15,
    title: "HTML & CSS Beginner Project (Not Responsive)",
    des: "Early learning project built with pure HTML and CSS to practice layouts and styling.",
    img: "/firstpro.png",
    iconLists: ["/html.svg", "/css.svg"],
    link: "https://daliaibrahim58.github.io/Template_1/",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Collaborating with Dalia was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dalia's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dalia is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Dalia was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dalia's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dalia is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Dalia was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dalia's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dalia is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Dalia was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dalia's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dalia is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Dalia was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dalia's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dalia is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies: Company[] = [
  { id: 1, name: "cloudinary", img: "/cloud.svg", nameImg: "/cloudName.svg" },
  { id: 2, name: "appwrite", img: "/app.svg", nameImg: "/appName.svg" },
  { id: 3, name: "HOSTINGER", img: "/host.svg", nameImg: "/hostName.svg" },
  { id: 4, name: "stream", img: "/s.svg", nameImg: "/streamName.svg" },
  { id: 5, name: "docker.", img: "/dock.svg", nameImg: "/dockerName.svg" },
];

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Frontend Engineer Intern - Depi",
    desc: "Specialized in building React applications with solid knowledge in HTML, CSS, and JavaScript. Experienced in Git/GitHub for version control, Node.js for server-side scripting, and familiar with Docker & Kubernetes. Completed a capstone project integrating React and Node.js into a real-world web app.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Collaboration Projects",
    desc: "Worked closely with a team using Figma to design and implement frontend projects, ensuring clean UI/UX and smooth development workflow.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "ECPC Participation",
    desc: "Participated in the Egyptian Collegiate Programming Contest (ECPC), enhancing problem-solving and competitive programming skills within a team-based environment.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia: SocialMedia[] = [
  { id: 1, img: "/git.svg", url: "https://github.com/daliaibrahim58" },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/DaliaIb582005?t=3vgIzoIIG_twz0ymeWUIrw&s=09",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/dalia-ibrahim-5883782b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];
