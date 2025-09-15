import { Mail, Phone, MapPin } from "lucide-react";
import { ExperienceSection } from "@/components/resume/ExperienceSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Alan Urban</h1>
          <h2 className="text-xl text-gray-700">Fullstack Developer</h2>
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
              <h2 className="text-2xl font-semibold text-primary mb-6">EXPERIENCE SUMMARY</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Core Technologies</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">React</span>
                      <span className="text-gray-700 font-medium">7y 3m</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">Angular</span>
                      <span className="text-gray-700 font-medium">6y</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">Node.js</span>
                      <span className="text-gray-700 font-medium">5y</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-medium">React Native</span>
                      <span className="text-gray-700 font-medium">5y</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Development Areas</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="bg-emerald-500 text-white px-2 py-1 rounded text-sm font-medium">Fullstack</span>
                      <span className="text-gray-700 font-medium">7y 6m</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="bg-emerald-500 text-white px-2 py-1 rounded text-sm font-medium">Frontend</span>
                      <span className="text-gray-700 font-medium">6y 2m</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm font-medium">Python</span>
                      <span className="text-gray-700 font-medium">2y</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="bg-indigo-500 text-white px-2 py-1 rounded text-sm font-medium">.NET</span>
                      <span className="text-gray-700 font-medium">1y</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-purple-800">10+ Years</h3>
                    <p className="text-purple-600 font-medium">Total Experience</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">SUMMARY</h2>
              <p className="text-gray-700 leading-relaxed">
                Experienced React, React Native and Node developer with a wide range of skills in front-end, back-end, and full-stack development. 
                Specializing in building responsive web applications, performance optimization, and collaboration in international teams. 
                Proficient in AI-powered chat systems using Facebook LLaMA and RAG technology for behavioral analysis and personalized recommendations. 
                Expert in containerization with Docker and cloud deployment on Azure and AWS platforms. 
                Founder of an educational platform, mentor with a passion for sharing knowledge in web application development. 
                My career path includes progression from intern to senior full-stack developer over 10 years, with experience in diverse 
                projects and work environments.
              </p>
            </section>

            <ExperienceSection />
          </div>

          {/* Right column - Skills, Education, and Languages */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">KEY TECHNICAL SKILLS</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Front-end: React, JavaScript (ES6+), TypeScript, HTML5, CSS3/SCSS/SASS, Styled Components</li>
                <li>Mobile: React Native</li>
                <li>Back-end: Node.js, Express.js, .NET, Python</li>
                <li>AI/ML: Facebook LLaMA, RAG (Retrieval-Augmented Generation), AI-powered chat systems</li>
                <li>Fullstack: Experience in developing complex applications</li>
                <li>Cloud: Azure, AWS</li>
                <li>Containerization: Docker</li>
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
