import React from 'react';
import { ExperienceItem } from './ExperienceItem';

export const ExperienceSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-primary mb-6">PROFESSIONAL EXPERIENCE</h2>
      
      <div className="space-y-6">
        <ExperienceItem
          title="React Developer"
          company="GSD - Samplefest"
          date="Present"
          responsibilities={[
            "Implemented redesign of the APP following new design specifications",
            "Refactored authentication system, profile page and other components",
            "Developed layouts from Figma designs",
            "Utilized React, Prisma, TypeScript, StyledComponents, and GraphQL"
          ]}
        />

        <ExperienceItem
          title="React Developer / Node Developer"
          company="Live Engage"
          date="June 2022 - Present"
          responsibilities={[
            "Developed React-based communication widget, increasing user engagement by 30%",
            "Created Node.js administrative panel, optimizing management processes by 50%",
            "Built RESTful API using Express.js for customer dashboard, improving data visibility by 40%",
            "Implemented responsive design principles and ensured cross-browser compatibility",
            "Utilized Git for version control and participated in Agile development processes"
          ]}
        />

        <div>
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <h3 className="text-xl font-semibold">Founder & Mentor</h3>
            <p className="text-gray-600 italic">January 2022 - Present</p>
          </div>
          <p className="text-gray-600 mb-2">Jak Na Frontend</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Established and managed educational platform for aspiring front-end developers</li>
            <li>Mentored over 25 students in React, Next.js, Node.js, and React Native technologies</li>
            <li>Developed curriculum covering modern JavaScript, React hooks, and state management</li>
            <li>Conducted code reviews and provided feedback to improve students' coding practices</li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <h3 className="text-xl font-semibold">Fullstack Developer</h3>
            <p className="text-gray-600 italic">January 2021 - June 2022</p>
          </div>
          <p className="text-gray-600 mb-2">Polcode</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Developed mobile and web applications using React, React Native, and Node.js</li>
            <li>Implemented e-commerce solutions, increasing conversion rates by 25%</li>
            <li>Utilized Redux for state management in complex React applications</li>
            <li>Integrated RESTful APIs and GraphQL endpoints for efficient data fetching</li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <h3 className="text-xl font-semibold">Frontend Developer</h3>
            <p className="text-gray-600 italic">July 2019 - December 2020</p>
          </div>
          <p className="text-gray-600 mb-2">Transition Technology Software</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Created web applications using React and Angular frameworks</li>
            <li>Optimized application performance, reducing loading time by 40%</li>
            <li>Implemented responsive designs using CSS3, SASS, and Styled Components</li>
            <li>Conducted unit testing using Jest and React Testing Library</li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <h3 className="text-xl font-semibold">Previous Experience</h3>
            <p className="text-gray-600 italic">July 2015 - August 2019</p>
          </div>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li>
              <strong>Fullstack Developer at iCOMP Business (March 2018 - August 2019)</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Developed full-stack solutions using JavaScript, React, and Node.js</li>
                <li>Implemented database designs using MongoDB and PostgreSQL</li>
              </ul>
            </li>
            <li>
              <strong>Full Stack Developer at JustPremium (August 2017 - December 2017)</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Created rich media advertisements using JavaScript and HTML5</li>
                <li>Optimized ad performance for various platforms and browsers</li>
              </ul>
            </li>
            <li>
              <strong>Full Stack Developer at TDS SOFT ALAN URBAN (August 2016 - June 2017)</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Developed custom web applications for clients using JavaScript and PHP</li>
                <li>Managed project timelines and client communications</li>
              </ul>
            </li>
            <li>
              <strong>Fullstack Developer at Websin (July 2015 - August 2016)</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Co-created GFG project, focusing on front-end development</li>
                <li>Implemented responsive designs and ensured cross-browser compatibility</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
