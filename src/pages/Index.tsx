import { Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Alan Urban</h1>
          <h2 className="text-xl text-gray-700">React / Node Developer</h2>
          <div className="flex flex-col md:flex-row gap-3 text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>alan.urban23@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+48 784 202 512</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Rzeszow, Poland</span>
            </div>
          </div>
        </header>

        {/* Main content grid */}
        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          {/* Left column - Main content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">EXPERIENCE SUMMARY</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Total experience: 9 years and 2 months</li>
                <li>React: 5 years and 6 months</li>
                <li>Node: 3 years and 6 months</li>
                <li>Angular: 4 year and 6 months</li>
                <li>Frontend: 7 years and 8 months</li>
                <li>Fullstack: 5 years and 10 months</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">SUMMARY</h2>
              <p className="text-gray-700 leading-relaxed">
                Experienced React and Node developer with a wide range of skills in front-end, back-end, and full-stack development. 
                Specializing in building responsive web applications, performance optimization, and collaboration in international teams. 
                Founder of an educational platform, mentor with a passion for sharing knowledge in web application development. 
                My career path includes progression from intern to senior full-stack developer over 9 years, with experience in diverse 
                projects and work environments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-6">PROFESSIONAL EXPERIENCE</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-semibold">React Developer / Node Developer</h3>
                    <p className="text-gray-600 italic">June 2022 - Present</p>
                  </div>
                  <p className="text-gray-600 mb-2">Live Engage</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Developed React-based communication widget, increasing user engagement by 30%</li>
                    <li>Created Node.js administrative panel, optimizing management processes by 50%</li>
                    <li>Built RESTful API using Express.js for customer dashboard, improving data visibility by 40%</li>
                    <li>Implemented responsive design principles and ensured cross-browser compatibility</li>
                    <li>Utilized Git for version control and participated in Agile development processes</li>
                  </ul>
                </div>

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
          </div>

          {/* Right column - Skills, Education, and Languages */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">KEY TECHNICAL SKILLS</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Front-end: React, JavaScript (ES6+), TypeScript, HTML5, CSS3/SCSS/SASS, Styled Components</li>
                <li>Mobile: React Native</li>
                <li>Back-end: Node.js, Express.js</li>
                <li>Fullstack: Experience in developing complex applications</li>
                <li>Cloud: Azure</li>
                <li>Databases: MongoDB, PostgreSQL</li>
                <li>API: REST, GraphQL</li>
                <li>State Management: Redux</li>
                <li>Methodologies: Agile, Scrum</li>
                <li>Tools: Git, CI/CD (Jenkins, GitLab CI), JIRA</li>
                <li>E-commerce: Magento</li>
                <li>CMS: Wordpress</li>
                <li>Advertising: Creation of rich media ads</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">SOFT SKILLS</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Team management and leadership</li>
                <li>Collaboration with international project teams</li>
                <li>Independently serving as the frontend developer in project teams</li>
                <li>Collaboration within interdisciplinary teams</li>
                <li>Experience working with startups</li>
                <li>Direct collaboration with the client</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">EDUCATION</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">IT Technology, Master's studies</h3>
                  <p className="text-gray-700">2016-02 - 2017-06</p>
                  <p className="text-gray-700">University of Rzeszow, Rzeszow</p>
                </div>
                <div>
                  <h3 className="font-semibold">Computer Science, Engineering studies</h3>
                  <p className="text-gray-700">2012-10 - 2016-02</p>
                  <p className="text-gray-700">University of Rzeszow, Rzeszow</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">LANGUAGES</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Polish (native)</li>
                <li>English (fluent)</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;