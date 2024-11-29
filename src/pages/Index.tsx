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
            {/* Experience Summary */}
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

            {/* Summary */}
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

            {/* Professional Experience */}
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
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right column - Skills and Achievements */}
          <div className="space-y-8">
            {/* Key Technical Skills */}
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

            {/* Key Achievements */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">KEY ACHIEVEMENTS</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Increased user engagement by 30% (communication widget)</li>
                <li>Optimized management processes by 50% (administrative panel)</li>
                <li>Improved data visibility by 40% (customer dashboard)</li>
                <li>Mentoring for 25+ students in front-end technologies</li>
                <li>Increased e-commerce conversion by 25%</li>
                <li>Reduced React application loading time by 40%</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;