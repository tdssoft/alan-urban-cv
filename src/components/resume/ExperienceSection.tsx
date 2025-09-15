import React from 'react';
import { ExperienceItem } from './ExperienceItem';

export const ExperienceSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-primary mb-6">PROFESSIONAL EXPERIENCE</h2>

      <div className="space-y-6">
        <ExperienceItem
          title="Fullstack Developer"
          company="YUBU (Education Technology)"
          date="June 2025 - August 2025"
          responsibilities={[
            "Built educational MVP from scratch for children's development startup using React, Node.js, and Python",
            "Created nearly 30 interactive educational games using plain JavaScript and React, enhancing learning engagement by 45%",
            "Developed AI-powered chat system using Facebook's LLaMA and RAG technology in Python to analyze player behavior and learning progress",
            "Implemented real-time communication pattern analysis using Python machine learning algorithms, improving personalized learning recommendations by 35%",
            "Built backend data processing pipelines in Python for handling educational content and user analytics",
            "Designed and deployed scalable architecture combining educational technology with AI-driven insights using Docker and AWS"
          ]}
          technologies={["React", "Node.js", "Python", "JavaScript", "TypeScript", "Facebook LLaMA", "RAG", "AI/ML", "Real-time Analytics", "MVP Development", "Docker", "AWS"]}
        />

        <ExperienceItem
          title="Fullstack Developer"
          company="Live Engage (Communication Technology)"
          date="June 2022 - Now"
          responsibilities={[
            "Developed React-based communication widget with AI-powered user behavior analysis, increasing user engagement by 30%",
            "Created Node.js administrative panel with AI integration for management processes optimization by 50%",
            "Built RESTful API using Express.js for customer dashboard, improving data visibility by 40%",
            "Implemented AI-driven analytics for widget performance monitoring and user interaction patterns",
            "Implemented responsive design principles and ensured cross-browser compatibility",
            "Utilized Git for version control and participated in Agile development processes",
            "Deployed applications using Docker containers and Azure cloud infrastructure"
          ]}
          technologies={["React", "Node.js", "Express.js", "JavaScript", "TypeScript", "AI Analytics", "Docker", "Azure", "RESTful API", "Git", "Agile", "CSS3", "HTML5"]}
        />

        <ExperienceItem
          title="Fullstack Developer"
          company="Sii (Healthcare Technology)"
          date="June 2022 - Apri 2024"
          responsibilities={[
            "Developed patient management application and treatment scheduling system for neurosurgery specialists using React, TypeScript, and Next.js, enhancing operational efficiency and patient care by 40%",
            "Built backend data processing services in Python for medical data analytics and patient record management",
            "Created progressive web applications and mobile applications, improving accessibility and user engagement by 30%",
            "Worked on GraphQL integration, optimizing data fetching and reducing load times by 25%",
            "Implemented Python-based automated scheduling algorithms for optimizing treatment schedules and resource allocation",
            "Implemented containerization using Docker and deployed applications on AWS infrastructure"
          ]}
          technologies={["React", "TypeScript", "Next.js", "Python", "GraphQL", "PWA", "Mobile Development", "Docker", "AWS", "Healthcare Systems", "Patient Management"]}
        />

        <div>
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <h3 className="text-xl font-semibold">Founder & Mentor</h3>
            <p className="text-gray-600 italic">January 2022 - Present</p>
          </div>
          <p className="text-gray-600 mb-2">Jak Na Frontend (Education Technology)</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Established and managed educational platform for aspiring front-end developers</li>
            <li>Mentored over 25 students in React, Next.js, Node.js, and React Native technologies</li>
            <li>Developed curriculum covering modern JavaScript, React hooks, and state management</li>
            <li>Conducted code reviews and provided feedback to improve students' coding practices</li>
          </ul>
          <div className="mt-3">
            <p className="text-sm font-semibold text-gray-600 mb-2">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "React Native", "JavaScript", "TypeScript", "Redux", "State Management", "Code Review", "Mentoring"].map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <h3 className="text-xl font-semibold">Fullstack Developer</h3>
            <p className="text-gray-600 italic">January 2021 - June 2022</p>
          </div>
          <p className="text-gray-600 mb-2">Polcode (E-commerce & Web Development)</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Developed mobile and web applications using React, React Native, and Node.js</li>
            <li>Implemented e-commerce solutions, increasing conversion rates by 25%</li>
            <li>Utilized Redux for state management in complex React applications</li>
            <li>Integrated RESTful APIs and GraphQL endpoints for efficient data fetching</li>
          </ul>
          <div className="mt-3">
            <p className="text-sm font-semibold text-gray-600 mb-2">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              {["React", "React Native", "Node.js", "Redux", "RESTful API", "GraphQL", "E-commerce", "JavaScript", "TypeScript", "Mobile Development", "Azure", "Docker"].map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <h3 className="text-xl font-semibold">Frontend Developer</h3>
            <p className="text-gray-600 italic">July 2019 - December 2020</p>
          </div>
          <p className="text-gray-600 mb-2">Transition Technology Software (Enterprise Software)</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Created web applications using React and Angular frameworks</li>
            <li>Optimized application performance, reducing loading time by 40%</li>
            <li>Implemented responsive designs using CSS3, SASS, and Styled Components</li>
            <li>Conducted unit testing using Jest and React Testing Library</li>
          </ul>
          <div className="mt-3">
            <p className="text-sm font-semibold text-gray-600 mb-2">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              {["React", "Angular", "JavaScript", "TypeScript", "CSS3", "SASS", "Styled Components", "Jest", "React Testing Library", "Performance Optimization", "AWS"].map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <h3 className="text-xl font-semibold">Previous Experience</h3>
            <p className="text-gray-600 italic">July 2015 - August 2019</p>
          </div>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li>
              <strong>Fullstack Developer at iCOMP Business - Business Solutions (March 2018 - August 2019)</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Developed full-stack solutions using JavaScript, React, and Node.js</li>
                <li>Implemented database designs using MongoDB and PostgreSQL</li>
              </ul>
              <div className="mt-2">
                <p className="text-xs font-semibold text-gray-600 mb-1">Technologies:</p>
                <div className="flex flex-wrap gap-1">
                  {["JavaScript", "React", "Node.js", "MongoDB", "PostgreSQL", "Full-stack Development"].map((tech, index) => (
                    <span key={index} className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <strong>Full Stack Developer at JustPremium - Digital Advertising (August 2017 - December 2017)</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Created rich media advertisements using JavaScript and HTML5</li>
                <li>Optimized ad performance for various platforms and browsers</li>
              </ul>
              <div className="mt-2">
                <p className="text-xs font-semibold text-gray-600 mb-1">Technologies:</p>
                <div className="flex flex-wrap gap-1">
                  {["JavaScript", "HTML5", "CSS3", "Rich Media", "Digital Advertising", "Cross-browser Development"].map((tech, index) => (
                    <span key={index} className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <strong>Full Stack Developer at TDS SOFT ALAN URBAN - Custom Software Development (August 2016 - June 2017)</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Developed custom web applications for clients using JavaScript and PHP, .NET</li>
                <li>Managed project timelines and client communications</li>
              </ul>
              <div className="mt-2">
                <p className="text-xs font-semibold text-gray-600 mb-1">Technologies:</p>
                <div className="flex flex-wrap gap-1">
                  {["JavaScript", "PHP", ".NET", "Web Applications", "Project Management", "Client Communication"].map((tech, index) => (
                    <span key={index} className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <strong>Fullstack Developer at Websin - Web Development Agency (July 2015 - August 2016)</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Co-created GFG project, focusing on front-end development</li>
                <li>Implemented responsive designs and ensured cross-browser compatibility</li>
              </ul>
              <div className="mt-2">
                <p className="text-xs font-semibold text-gray-600 mb-1">Technologies:</p>
                <div className="flex flex-wrap gap-1">
                  {["JavaScript", "HTML5", "CSS3", "Responsive Design", "Cross-browser Development", "Frontend Development"].map((tech, index) => (
                    <span key={index} className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
