import { CVData, alanUrbanCV, waldemarWanatCV } from './cvData';

export interface CVVersion {
  id: string;
  name: string;
  label: string;
  description: string;
  data: CVData;
}

export const alanUrbanCVV1Angular: CVData = {
  name: "Alan Urban",
  title: "Senior Angular & Node.js Developer",
  email: "alan.urban23@gmail.com",
  phone: "+48 784 202 512",
  location: "Rzeszow, Poland",
  experienceSummary: {
    coreTechnologies: [
      { name: "Angular", years: "8y", color: "red" },
      { name: "Node.js", years: "7y", color: "green" },
      { name: "React", years: "7y 3m", color: "blue" },
      { name: "TypeScript", years: "6y", color: "blue" },
    ],
    developmentAreas: [
      { name: "Fullstack", years: "9y", color: "emerald" },
      { name: "Frontend", years: "10y", color: "emerald" },
      { name: "Backend (Node.js)", years: "7y", color: "green" },
      { name: "Python", years: "3y", color: "yellow" },
    ],
    totalExperience: "10+ Years",
    totalExperienceLabel: "Total Experience",
  },
  profile:
    "Senior Angular and Node.js Fullstack Developer with 10+ years of experience building scalable enterprise web applications. Deep expertise in Angular ecosystem including NgRx, RxJS, Angular Material, and Angular Universal for server-side rendering. Strong Node.js backend development skills with Express.js, RESTful APIs, and microservices architecture. Proven track record delivering high-performance Angular applications across healthcare, e-commerce, enterprise software, and education sectors. Experienced in React and React Native for mobile development, Python for AI/ML and data processing, and Docker containerization with Azure and AWS cloud deployment. Founder of an educational platform focused on Angular, Node.js, and modern web development mentoring.",
  experiences: [
    // YUBU - unchanged per user request
    {
      title: "Fullstack Developer",
      company: "YUBU (Education Technology)",
      date: "June 2025 - August 2025",
      responsibilities: [
        "Built educational MVP from scratch for children's development startup using React, Node.js, and Python",
        "Created nearly 30 interactive educational games using plain JavaScript and React, enhancing learning engagement by 45%",
        "Developed AI-powered chat system using Facebook's LLaMA and RAG technology in Python to analyze player behavior and learning progress",
        "Implemented real-time communication pattern analysis using Python machine learning algorithms, improving personalized learning recommendations by 35%",
        "Built backend data processing pipelines in Python for handling educational content and user analytics",
        "Designed and deployed scalable architecture combining educational technology with AI-driven insights using Docker and AWS",
      ],
      technologies: [
        "React",
        "Node.js",
        "Python",
        "JavaScript",
        "TypeScript",
        "Facebook LLaMA",
        "RAG",
        "AI/ML",
        "Real-time Analytics",
        "MVP Development",
        "Docker",
        "AWS",
      ],
    },
    // Live Engage - unchanged per user request
    {
      title: "Fullstack Developer",
      company: "Live Engage (Communication Technology)",
      date: "June 2022 - Now",
      responsibilities: [
        "Developed React-based communication widget with AI-powered user behavior analysis, increasing user engagement by 30%",
        "Created Node.js administrative panel with AI integration for management processes optimization by 50%",
        "Built RESTful API using Express.js for customer dashboard, improving data visibility by 40%",
        "Implemented AI-driven analytics for widget performance monitoring and user interaction patterns",
        "Implemented responsive design principles and ensured cross-browser compatibility",
        "Utilized Git for version control and participated in Agile development processes",
        "Deployed applications using Docker containers and Azure cloud infrastructure",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "JavaScript",
        "TypeScript",
        "AI Analytics",
        "Docker",
        "Azure",
        "RESTful API",
        "Git",
        "Agile",
        "CSS3",
        "HTML5",
      ],
    },
    // Sii - Angular/Node emphasis
    {
      title: "Fullstack Developer",
      company: "Sii (Healthcare Technology)",
      date: "June 2022 - April 2024",
      responsibilities: [
        "Developed patient management application using Angular and TypeScript, building complex component architectures for neurosurgery treatment scheduling, enhancing operational efficiency by 40%",
        "Built Node.js backend services with Express.js for medical data processing, patient record management, and real-time treatment scheduling APIs",
        "Created Angular-based interactive dashboards for real-time patient data visualization and health monitoring using RxJS for reactive data streams",
        "Worked on GraphQL integration with Angular Apollo client, optimizing data fetching and reducing load times by 25%",
        "Implemented Python-based automated scheduling algorithms for optimizing treatment schedules and resource allocation",
        "Implemented containerization using Docker and deployed applications on AWS infrastructure",
      ],
      technologies: [
        "Angular",
        "Node.js",
        "Express.js",
        "TypeScript",
        "RxJS",
        "GraphQL",
        "Python",
        "PWA",
        "Docker",
        "AWS",
        "Healthcare Systems",
        "Patient Management",
      ],
    },
    // Jak Na Frontend - Angular/Node emphasis
    {
      title: "Founder & Mentor",
      company: "Jak Na Frontend (Education Technology)",
      date: "January 2022 - Present",
      responsibilities: [
        "Established and managed educational platform for aspiring front-end developers with focus on Angular and modern web technologies",
        "Mentored over 25 students in Angular, React, Next.js, Node.js, and React Native technologies",
        "Developed comprehensive curriculum covering Angular architecture, component design, RxJS, NgRx state management, and Node.js backend development",
        "Conducted code reviews and provided feedback to improve students' coding practices in Angular and React projects",
      ],
      technologies: [
        "Angular",
        "React",
        "Node.js",
        "Next.js",
        "React Native",
        "JavaScript",
        "TypeScript",
        "RxJS",
        "NgRx",
        "State Management",
        "Code Review",
        "Mentoring",
      ],
    },
    // Polcode - Angular/Node emphasis
    {
      title: "Fullstack Developer",
      company: "Polcode (E-commerce & Web Development)",
      date: "January 2021 - June 2022",
      responsibilities: [
        "Developed web and mobile applications using Angular, React, React Native, and Node.js",
        "Built Angular-based e-commerce frontends with advanced component architecture and NgRx state management, increasing conversion rates by 25%",
        "Developed Node.js backend services with Express.js for e-commerce data processing and API integration",
        "Integrated RESTful APIs and GraphQL endpoints for efficient data fetching across Angular and React applications",
      ],
      technologies: [
        "Angular",
        "React",
        "React Native",
        "Node.js",
        "Express.js",
        "Redux",
        "NgRx",
        "RESTful API",
        "GraphQL",
        "E-commerce",
        "JavaScript",
        "TypeScript",
        "Mobile Development",
        "Azure",
        "Docker",
      ],
    },
    // Transition Technology Software - Angular/Node emphasis (primary)
    {
      title: "Frontend Developer",
      company: "Transition Technology Software (Enterprise Software)",
      date: "July 2019 - December 2020",
      responsibilities: [
        "Built enterprise web applications primarily using Angular framework with TypeScript, developing complex component architectures",
        "Developed Angular modules with NgRx state management and RxJS reactive programming for enterprise data handling",
        "Built Node.js backend services for enterprise data processing and API integration",
        "Optimized Angular application performance, reducing loading time by 40% through lazy loading and change detection strategies",
        "Implemented responsive designs using CSS3, SASS, and Angular Material components",
        "Conducted unit testing using Jest, Jasmine, and Angular Testing utilities",
      ],
      technologies: [
        "Angular",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "RxJS",
        "NgRx",
        "Angular Material",
        "CSS3",
        "SASS",
        "Jest",
        "Jasmine",
        "Performance Optimization",
        "AWS",
      ],
    },
    // iCOMP Business - Angular/Node emphasis
    {
      title: "Fullstack Developer",
      company: "iCOMP Business (Business Solutions)",
      date: "March 2018 - August 2019",
      responsibilities: [
        "Developed full-stack solutions using Angular, React, and Node.js for business process management",
        "Built Angular-based admin dashboards for internal business operations management",
        "Developed Node.js REST API backends with Express.js for data processing",
        "Implemented database designs using MongoDB and PostgreSQL",
      ],
      technologies: [
        "Angular",
        "React",
        "Node.js",
        "Express.js",
        "JavaScript",
        "MongoDB",
        "PostgreSQL",
        "Full-stack Development",
      ],
    },
    // JustPremium - Angular/Node emphasis
    {
      title: "Full Stack Developer",
      company: "JustPremium (Digital Advertising)",
      date: "August 2017 - December 2017",
      responsibilities: [
        "Created rich media advertisements using Angular, JavaScript, and HTML5",
        "Built Angular-based ad management dashboard for campaign tracking and optimization",
        "Developed Node.js backend services for ad delivery and performance tracking",
        "Optimized ad performance for various platforms and browsers",
      ],
      technologies: [
        "Angular",
        "Node.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Rich Media",
        "Digital Advertising",
        "Cross-browser Development",
      ],
    },
    // TDS SOFT - Angular/Node emphasis
    {
      title: "Full Stack Developer",
      company: "TDS SOFT ALAN URBAN (Custom Software Development)",
      date: "August 2016 - June 2017",
      responsibilities: [
        "Developed custom web applications for clients using Angular, JavaScript, PHP, and .NET",
        "Built Node.js backend services and RESTful APIs for client web applications",
        "Managed project timelines and client communications",
      ],
      technologies: [
        "Angular",
        "Node.js",
        "JavaScript",
        "PHP",
        ".NET",
        "Web Applications",
        "Project Management",
        "Client Communication",
      ],
    },
    // Websin - Angular/Node emphasis
    {
      title: "Fullstack Developer",
      company: "Websin (Web Development Agency)",
      date: "July 2015 - August 2016",
      responsibilities: [
        "Co-created GFG project, developing frontend components using Angular and JavaScript",
        "Built Node.js backend services for web application functionality",
        "Implemented responsive designs and ensured cross-browser compatibility",
      ],
      technologies: [
        "Angular",
        "Node.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Responsive Design",
        "Cross-browser Development",
        "Frontend Development",
      ],
    },
  ],
  technicalSkills: [
    "Front-end: Angular, React, JavaScript (ES6+), TypeScript, HTML5, CSS3/SCSS/SASS, Styled Components",
    "Angular Ecosystem: NgRx, RxJS, Angular Material, Angular CLI, Angular Universal (SSR), Jasmine, Karma",
    "Back-end: Node.js, Express.js, Python, .NET",
    "Mobile: React Native",
    "AI/ML: Facebook LLaMA, RAG (Retrieval-Augmented Generation), AI-powered chat systems",
    "Cloud: Azure, AWS",
    "Containerization: Docker",
    "Databases: MongoDB, PostgreSQL",
    "API: REST, GraphQL",
    "State Management: NgRx, Redux, RxJS",
    "Methodologies: Agile, Scrum",
    "Tools: Git, CI/CD (Jenkins, GitLab CI), JIRA",
    "E-commerce: Magento",
    "CMS: Wordpress",
  ],
  education: [
    {
      degree: "IT Technology, Master's studies",
      period: "2016-02 - 2017-06",
      institution: "University of Rzeszow, Rzeszow",
    },
    {
      degree: "Computer Science, Engineering studies",
      period: "2012-10 - 2016-02",
      institution: "University of Rzeszow, Rzeszow",
    },
  ],
  languages: [
    { language: "Polish", level: "native" },
    { language: "English", level: "fluent" },
  ],
};

export const alanUrbanCVVersions: CVVersion[] = [
  {
    id: 'default',
    name: 'Domyslna',
    label: 'Base',
    description: 'Pelne CV z wszystkimi doswiadczeniami',
    data: alanUrbanCV,
  },
  {
    id: 'v1-angular-node',
    name: 'v1 - Angular & Node.js',
    label: 'v1',
    description: 'Wersja kliencka z naciskiem na Angular i Node.js',
    data: alanUrbanCVV1Angular,
  },
];

export const waldemarWanatCVVersions: CVVersion[] = [
  {
    id: 'default',
    name: 'Domyslna',
    label: 'Base',
    description: 'Pelne CV',
    data: waldemarWanatCV,
  },
];

export const getVersionsForCVType = (cvType: string): CVVersion[] => {
  switch (cvType) {
    case 'alan-urban':
      return alanUrbanCVVersions;
    case 'waldemar-wanat':
      return waldemarWanatCVVersions;
    default:
      return [];
  }
};

export const getVersionById = (versions: CVVersion[], id: string): CVVersion | undefined => {
  return versions.find(v => v.id === id);
};
