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
  cleinsight,
  mightyEgg,
  bractIT,
  ecovia,
  qatar,
  hatil,
  threejs,
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
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
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
    title: "Junior Software Developer",
    company_name: "Mighty Egg",
    icon: mightyEgg,
    iconBg: "#383E56",
    date: "February 2021 - October 2021",
    points: [
      "Developing and maintaining web applications using Wordpress other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Cleinsight",
    icon: cleinsight,
    iconBg: "#000000",
    date: "November 2021 - November 2022",
    points: [
      "Developing and maintaining interactive and gamified Quiz, Survey and Feedback collection platforms using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Integrating survey system into the client's landing page as a plugin such as Hatil, MyGp app, Rasel Industry etc.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "BracIT",
    icon: bractIT,
    iconBg: "#FFFFFF",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications for micro finance using Spring boot and Angular Js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Afridi on a complex e-commerce project, and I was thoroughly impressed. His deep expertise in web development shone through in every aspect of the project. From designing a user-friendly interface to implementing robust backend functionalities, Afridi demonstrated a level of skill and professionalism that is truly commendable. His ability to tackle challenges head-on and deliver high-quality code within tight deadlines is a testament to their dedication and technical prowess. I would not hesitate to recommend Afridi for any web development project.",
    name: "Rizwanul Hoque Ratul",
    designation: "Software Engineer |",
    company: "Optimizely",
    image: "https://avatars.githubusercontent.com/u/63251500?v=4",
  },
  {
    testimonial:
      "Afridi is a standout web developer with a rare combination of technical prowess and creativity. He was instrumental in revamping many websites, resulting in a sleek, modern, and highly functional platform. his attention to detail and commitment to writing clean, efficient code is truly impressive. What sets Afridi apart is his ability to not only understand and implement complex technical requirements, but also to communicate effectively with non-technical stakeholders. Working with Afridi has been a pleasure, and I would highly recommend him to anyone seeking a top-tier web developer.",
    name: "Mushfikunnabi Nijhum",
    designation: "Software Engineer",
    company: "Intercloud Limited",
    image: "https://avatars.githubusercontent.com/u/46829164?v=4",
  },
  {
    testimonial:
      "Having collaborated with Afridi on several web development projects, I can confidently say he is a true expert in his field. His in-depth knowledge of web technologies, coupled with his problem-solving skills, consistently lead to outstanding results. Afridi has a knack for translating complex ideas into elegant, user-friendly interfaces. His commitment to staying up-to-date with the latest industry trends is evident in the quality of their work. It's a pleasure working with Afridi, and I wholeheartedly recommend him to anyone in need of a skilled web developer.",
    name: "Sayeem Abdullah",
    designation: "Software Engineer",
    company: "Intercloud Limited",
    image: "https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/358456903_10221567318749249_8548393009285444350_n.jpg?stp=c0.56.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=fe8171&_nc_eui2=AeFN6cGGT6FR18bvuJvUVCk02zSzTT6_OwHbNLNNPr87ATTjfSDJizLIFWRNOgf6tY1Tb9aKsj8Y-KJM3XzGsW61&_nc_ohc=MZarMmIUSREAX_GNymk&_nc_ht=scontent.fdac157-1.fna&oh=00_AfBs3eNYuxIsfhzMfHBGNjEBIW9f2gmPMon0hddi_vYnpw&oe=650319F1",
  },
];

const projects = [
  {
    name: "Ecovia",
    description:
      "Landing page for Ecovia ltd. A biodegradable ploymar packaging company.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Divi Theme",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecovia,
    source_code_link: "https://github.com/afridirahman97/EcoVia-Limited",
  },
  {
    name: "Qatar AC Services",
    description:
      "Landing page for Qatar AC Services ltd, A Doha based AC repairment and service providing company with one click call feature.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Divi Theme",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: qatar,
    source_code_link: "https://github.com/afridirahman97/Qatar-AC-Services-",
  },
  {
    name: "Customer Survey System for Hatil",
    description:
      "As a product of Cleinsight, A gamified survey module imbeded into Hatil website.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hatil,
    source_code_link: "https://github.com/",
  },

  {
    name: "Covid-19 Update Project",
    description:
      "A web application displaying covid updates in each location of the world map",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/githubs-30fab.appspot.com/o/screencapture-covid-ea0e8-firebaseapp-2020-09-18-18_22_46.png?alt=media&token=67e1e537-f7b2-4836-a064-f75f55a30f07",
    source_code_link: "https://github.com/afridirahman97/covid_updates",
  },

  {
    name: "Voice Controlled News Application",
    description:
      "A news web application which can be operated by voice controll ",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Alan AI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/githubs-30fab.appspot.com/o/screencapture-news-app-c61c8-web-app-2020-12-12-13_45_02.png?alt=media&token=6ffcc4c9-537f-4dba-92a8-c8175cad0518",
    source_code_link:
      "https://github.com/afridirahman97/Voice-Assisted-News-Site",
  },
];

export { services, technologies, experiences, testimonials, projects };
