import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  vote,
  carrent,
  jobit,
  tripguide,
  threejs,
  mern1,
  jobify,
  translator,
  translatorImage,
  social,
  movie,
  resturant,
  viu
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "PHP Developer",
    company_name: "PHP, HTML, JS",
    icon: vote,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "A web system manage votes and deliver good result for the users .",
    ],
  },

  {
    title: "React.js Developer",
    company_name: "MongoDB, Express Js , React Js , Node Js",
    icon: mern1,
    iconBg: "#383E56",
    date: "Jan 2023 - Jun 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "A web Application for manage restaurant and good result for the customers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Mobile app Developer",
    company_name: "Jobify",
    icon: jobify,
    iconBg: "#383E56",
    date: "Jun 2023 - Dec 2023",
    points: [
      "Developing and maintaining web applications using Kotlin and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "A web Application for apply for jobs and find employees for jobs.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "SEES Translator",
    icon: translator,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Jun 2024",
    points: [
      "Developing and maintaining web applications using MERN stack.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "A web Application for translate Sinhala-To-english and Englsih-To-Sinhala.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "SEES Translator",
    description:
      "Web-based platform that allows users to translate Sinhala-To-english and Englsih-To-Sinhala. Providing a convenient and efficient solution for language barriers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: " pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: translatorImage,
    source_code_link: "https://github.com/it21387494samitha/SEES_Translator.git",
  },
  {
    name: "PowerPlus",
    description:
      "This project intends to provide an interesting and interactive environment in which fitness enthusiasts may connect, share, and motivate one another on their fitness journey",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
     
    ],
    image:social,
    source_code_link: "https://github.com/PAF-IT3030/paf-assignment-2024-jun_we_117_team",
  },
  {
    name: "JOBIFY",
    description:
      "         A Android Application for apply for jobs and find employees for jobs. We provide User friendly interfaces.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: jobify,
    source_code_link: "https://github.com/it21387494samitha",
  },
  {
    name: "Restaurant Management System",
    description:
      " A web Application for manage restaurant and good result for  the customers. Customer can order foods and book the table for thier special ocassions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: resturant,
    source_code_link: "https://github.com/",
  },

  {
    name: " Movie and Tv series system",
    description:
      " A web Application forwatching download and suffer film and  tv series. Customers can save or download movies to watch later. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/it21387494samitha",
  },
  {
    name: "Vue js application",
    description:
      "This project demonstrates a Vue.js application with a datatable component that allows sorting, pagination, and inline editing. Features,Sorting by columns,Pagination controls,Inline editing of rows,Toast notifications on update and delete actions. ",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: viu,
    source_code_link: "https://github.com/it21387494samitha/VUE_JS_Assignment.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
