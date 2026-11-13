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
    title: "Experience",
  },
  {
    id: "research",
    title: "Research",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const profile = {
  name: "Afridi Ibn Rahman",
  role: "Software Engineer at BRAC IT",
  location: "Dhaka, Bangladesh",
  email: "afridirahman97@gmail.com",
  github: "https://github.com/afridirahman97",
  linkedin: "https://www.linkedin.com/in/afridi-ibn-rahman/",
  scholar: "https://scholar.google.com/citations?user=LTGHL_wAAAAJ&hl=en",
};

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning Researcher",
    icon: creator,
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "C++"],
  },
  {
    title: "Frontend & mobile",
    items: [
      "Angular",
      "React",
      "Next.js",
      "React Native",
      "Flutter",
      "Tailwind CSS",
      "Three.js",
    ],
  },
  {
    title: "Backend & data",
    items: [
      "Spring Boot",
      "JHipster",
      "Node.js",
      "Flask",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "Keras", "scikit-learn", "CNNs", "LLM apps & RAG"],
  },
  {
    title: "Infra & tools",
    items: ["Docker", "Git", "GitHub Actions", "Cloudflare Workers", "Tauri"],
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
    title: "Software Engineer",
    company_name: "BRAC IT",
    icon: bractIT,
    iconBg: "#FFFFFF",
    date: "March 2023 - Present",
    points: [
      "Building and maintaining microfinance web applications with Spring Boot and Angular.",
      "Working across the stack, from REST APIs and business logic on the backend to responsive, cross-browser interfaces on the frontend.",
      "Collaborating with designers, product managers and other engineers to ship features for business users.",
      "Taking part in code reviews and giving constructive feedback to teammates.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Cleinsight",
    icon: cleinsight,
    iconBg: "#000000",
    date: "November 2021 - November 2022",
    points: [
      "Led frontend development of interactive, gamified quiz, survey and feedback-collection platforms built with React.",
      "Integrated the survey system as a plugin into client products, including Hatil, the MyGP app and Rasel Industries.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Took part in code reviews and gave constructive feedback to other developers.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Mighty Egg",
    icon: mightyEgg,
    iconBg: "#383E56",
    date: "February 2021 - October 2021",
    points: [
      "Developed and maintained client websites using WordPress and related technologies.",
      "Worked with designers, product managers and other developers to deliver high-quality products.",
    ],
  },
];

const publications = [
  {
    title: "Lung Cancer Detection Using Ensemble Technique of CNN",
    authors: [
      "Zebel-E-Noor Akhand",
      "Afridi Ibn Rahman",
      "Anirudh Sarda",
      "Md. Zubayer Ahmed Fahim",
    ],
    etAl: true,
    venue:
      "Proceedings of International Conference on Information and Communication Technology for Development (ICICTD), Springer",
    year: 2023,
    type: "Conference paper",
    summary:
      "Uses transfer learning with pre-trained CNNs (ResNet101, VGG16, InceptionV3 and DenseNet169) to classify chest CT images as adenocarcinoma, large cell carcinoma, squamous cell carcinoma or normal, and compares the models' performance.",
    tags: ["Medical imaging", "Transfer learning", "Ensemble CNN"],
    link: "https://doi.org/10.1007/978-981-19-7528-8_39",
    code: "https://github.com/afridirahman97/Lung-Cancer-Detector",
  },
  {
    title:
      "Continuous Sign Language Interpretation to Text Using Deep Learning Models",
    authors: ["Afridi Ibn Rahman"],
    etAl: true,
    venue: "IEEE conference paper",
    year: 2022,
    type: "Conference paper",
    summary:
      "Builds an enriched dataset of common ASL phrases used in professional meetings, then detects and classifies signs with CNN and LSTM models (93.75% and 96.54% accuracy). Proposes deploying the LSTM in video-conferencing tools for real-time captions.",
    tags: ["Sign language", "Action recognition", "CNN", "LSTM"],
    link: "https://ieeexplore.ieee.org/document/10054721/",
  },
  {
    title:
      "Intracranial Hemorrhage Detection on CT Scan Images using Transfer Learning Approach of Convolutional Neural Network",
    authors: [
      "Afridi Ibn Rahman",
      "Subhi Bhuiyan",
      "Ziad Hasan Reza",
      "Jasarat Zaheen",
      "Tasin Al Nahian Khan",
      "Dewan Ziaul Karim",
    ],
    venue:
      "International Conference on Computing Advancements (ICCA), ACM",
    year: 2022,
    type: "Conference paper",
    summary:
      "Benchmarks six pre-trained models (EfficientNetB6, DenseNet121, ResNet50, InceptionResNetV2, InceptionV3 and VGG16) against a custom 11-layer CNN for binary hemorrhage detection on head CT scans. EfficientNetB6 performed best at 95.99% accuracy, and a web app demonstrates real-world use.",
    tags: ["Medical imaging", "Transfer learning", "EfficientNet"],
    link: "https://doi.org/10.1145/3542954.3542980",
    code: "https://github.com/afridirahman97/Detection-of-Intracranial-Hemorrhage",
  },
  {
    title:
      "Comparative Analysis on Joint Modeling of Emotion and Abuse Detection in Bangla Language",
    authors: [
      "Afridi Ibn Rahman",
      "Farhan",
      "Zebel-E-Noor Akhand",
      "Md Asad Uzzaman Noor",
      "Jubayer Islam",
      "Md. Motahar Mahtab",
      "Md Humaion Kabir Mehedi",
      "Annajiat Alim Rasel",
    ],
    venue:
      "Advances in Computing and Data Sciences (ICACDS), Springer, pp. 199-209",
    year: 2022,
    type: "Conference paper",
    summary:
      "A comparative review of Bangla-language research on emotion and abusive-language detection, assessing each model's performance, accuracy, ease of implementation and complexity.",
    tags: ["NLP", "Bangla", "Emotion detection", "Abuse detection"],
    link: "https://doi.org/10.1007/978-3-031-12641-3_17",
  },
  {
    title:
      "Detection of Intracranial Hemorrhage on CT Scan Images Using Convolutional Neural Network",
    authors: [
      "Afridi Ibn Rahman",
      "Subhi Bhuiyan",
      "Ziad Hasan Reza",
      "Jasarat Zaheen",
      "Tasin Al Nahian Khan",
    ],
    venue:
      "BSc thesis, Department of Computer Science and Engineering, BRAC University. Supervisor: Mohammad Zavid Parvez",
    year: 2021,
    type: "Undergraduate thesis",
    summary:
      "Applies convolutional neural networks with transfer learning to help diagnose intracranial hemorrhage from CT scan images. This work grew into the ICCA 2022 paper above.",
    tags: ["Medical imaging", "CNN", "Thesis"],
    link: "http://hdl.handle.net/10361/15890",
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Afridi on a complex e-commerce project, and I was thoroughly impressed. His deep expertise in web development shone through in every aspect of the project. From designing a user-friendly interface to implementing robust backend functionalities, Afridi demonstrated a level of skill and professionalism that is truly commendable. His ability to tackle challenges head-on and deliver high-quality code within tight deadlines is a testament to their dedication and technical prowess. I would not hesitate to recommend Afridi for any web development project.",
    name: "Rizwanul Hoque Ratul",
    designation: "Software Engineer",
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
  },
];

const projects = [
  {
    name: "Intracranial Hemorrhage Detection",
    description:
      "A convolutional neural network that flags brain hemorrhage in head CT images, served through a Flask web app: upload a scan, get a prediction.",
    tags: [
      { name: "TensorFlow", color: "blue-text-gradient" },
      { name: "CNN", color: "green-text-gradient" },
      { name: "Flask", color: "pink-text-gradient" },
      { name: "Medical Imaging", color: "orange-text-gradient" },
    ],
    source_code_link: "https://github.com/afridirahman97/Detection-of-Intracranial-Hemorrhage",
  },
  {
    name: "Lung Cancer Detector",
    description:
      "Classifies chest CT scans with an ensemble of pre-trained CNNs, wrapped in an upload-and-predict web app.",
    tags: [
      { name: "TensorFlow", color: "blue-text-gradient" },
      { name: "Transfer Learning", color: "green-text-gradient" },
      { name: "Ensembles", color: "pink-text-gradient" },
      { name: "Flask", color: "orange-text-gradient" },
    ],
    source_code_link: "https://github.com/afridirahman97/Lung-Cancer-Detector",
  },
  {
    name: "Agentic Password Vault",
    description:
      "A secure, minimalist desktop password manager built with Tauri (Rust + React), made as a hands-on workshop on agentic AI coding workflows.",
    tags: [
      { name: "Tauri", color: "blue-text-gradient" },
      { name: "Rust", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "TypeScript", color: "orange-text-gradient" },
    ],
    source_code_link: "https://github.com/afridirahman97/agentic-password-vault",
  },
  {
    name: "Voice-Controlled News Application",
    description:
      "A React news app you control by voice: ask for the latest headlines and navigate articles hands-free, powered by the Alan AI voice SDK.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Alan AI", color: "green-text-gradient" },
      { name: "Material UI", color: "pink-text-gradient" },
    ],
    image: 
      "https://firebasestorage.googleapis.com/v0/b/githubs-30fab.appspot.com/o/screencapture-news-app-c61c8-web-app-2020-12-12-13_45_02.png?alt=media&token=6ffcc4c9-537f-4dba-92a8-c8175cad0518",
    source_code_link: "https://github.com/afridirahman97/Voice-Assisted-News-Site",
  },
  {
    name: "Customer Survey System for Hatil",
    description:
      "A gamified survey module embedded into the Hatil website, built as a Cleinsight product. The source is private.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: hatil,
  },
  {
    name: "Covid-19 Updates",
    description:
      "A dashboard showing Covid-19 statistics for each location on a world map.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "REST API", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: 
      "https://firebasestorage.googleapis.com/v0/b/githubs-30fab.appspot.com/o/screencapture-covid-ea0e8-firebaseapp-2020-09-18-18_22_46.png?alt=media&token=67e1e537-f7b2-4836-a064-f75f55a30f07",
    source_code_link: "https://github.com/afridirahman97/covid_updates",
    live_link: "https://covid-ea0e8.firebaseapp.com/",
  },
  {
    name: "PID Line-Following Robot",
    description:
      "A PID-controlled line follower simulated in Webots, with controllers written in C++ and Python.",
    tags: [
      { name: "Robotics", color: "blue-text-gradient" },
      { name: "C++", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
      { name: "Webots", color: "orange-text-gradient" },
    ],
    source_code_link: "https://github.com/afridirahman97/PID-Controlled-lline-following-robot",
  },
  {
    name: "Ecovia",
    description:
      "Landing page for Ecovia Ltd, a biodegradable polymer packaging company.",
    tags: [
      { name: "WordPress", color: "blue-text-gradient" },
      { name: "Divi Theme", color: "green-text-gradient" },
    ],
    image: ecovia,
    source_code_link: "https://github.com/afridirahman97/EcoVia-Limited",
  },
  {
    name: "Qatar AC Services",
    description:
      "Landing page for a Doha-based AC repair and servicing company, with a one-click call feature.",
    tags: [
      { name: "WordPress", color: "blue-text-gradient" },
      { name: "Divi Theme", color: "green-text-gradient" },
    ],
    image: qatar,
    source_code_link: "https://github.com/afridirahman97/Qatar-AC-Services-",
  },
];

export {
  services,
  skillGroups,
  technologies,
  experiences,
  publications,
  testimonials,
  projects,
};
