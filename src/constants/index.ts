import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
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
    title: "Virtual Reality Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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

const experiences: TExperience[] = [
  {
    title: "VR Dev",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "from February 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graphic design",
    companyName: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "from 2021 - ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "from 2021 - ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Zlatimir proved me wrong.",
    name: "Gergana Petrova",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Zlati does.",
    name: "Georgi Cvetanov",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Zlati optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Petq Cvetanova",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Virtual-Educational Simulational Metaverse",
    description:
      "The project represents a simulation application (game) aimed at showcasing simulations in virtual reality through visual experience. The main goal of the application is to provide an educational tool that excites and motivates students to study the sciences. Through virtual reality and interactive simulations, students can immerse themselves in studying STEM sciences in a way that is fun, engaging, and easily accessible. With this modern learning system, students can expand their knowledge in the fields of astronomy, physics, chemistry, and biology while simultaneously enjoying and being excited about the learning process in the simulation Metaverse.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Side Quest",
        color: "green-text-gradient",
      },
      {
        name: "C",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "AI-Powered Platform for Learning Resources and Generative Models",
    description:
      "The idea of creating an AI platform that use educational materials and generative models interests me. This platform would enable  students to work together to create and distribute AI models that are suited to their specific needs. I want to get started on the task of creating a flexible platform that enhances educational results through automation and innovation, thanks to my skills in software engineering.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Phyton",
        color: "green-text-gradient",
      },
      {
        name: "Jupiter Notebook",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Fitness apps and information websites...",
    description:
      "As an experienced web developer, I specialize in crafting customized and engaging personal websites that highlight your unique personality and skills. My portfolio features a diverse array of personal sites tailored to individual needs, ensuring a professional and polished online presence. With a focus on user experience and the latest web technologies, I create personal websites that are both visually appealing and highly functional. Whether you require a professional portfolio, a personal blog, or a comprehensive online CV, I can build a website that fulfills your needs and surpasses your expectations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
