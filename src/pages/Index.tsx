import { Mail, Phone, MapPin } from "lucide-react";
import { ExperienceSection } from "@/components/resume/ExperienceSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Waldemar Wanat</h1>
          <h2 className="text-xl text-gray-700">iOS Developer</h2>
          <div className="flex flex-col md:flex-row gap-3 text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>waldemar.wanat@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+48 889 220 166</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Rzeszów, Poland</span>
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
                      <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">Swift</span>
                      <span className="text-gray-700 font-medium">7y</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">SwiftUI</span>
                      <span className="text-gray-700 font-medium">4y</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="bg-indigo-500 text-white px-2 py-1 rounded text-sm font-medium">UIKit</span>
                      <span className="text-gray-700 font-medium">7y</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">Xcode</span>
                      <span className="text-gray-700 font-medium">7y</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Development Areas</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="bg-emerald-500 text-white px-2 py-1 rounded text-sm font-medium">E-commerce</span>
                      <span className="text-gray-700 font-medium">2y</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">Food Delivery</span>
                      <span className="text-gray-700 font-medium">2y</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">Social Media</span>
                      <span className="text-gray-700 font-medium">2y</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-medium">Communication</span>
                      <span className="text-gray-700 font-medium">1y</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-purple-800">7 Years</h3>
                    <p className="text-purple-600 font-medium">iOS Development Experience</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">PROFILE</h2>
              <p className="text-gray-700 leading-relaxed">
                iOS Developer with 7 years of experience in mobile application development. I specialize in Swift, SwiftUI, Combine, async/await and work in Xcode environment. I have worked on projects across various business domains including e-commerce, food delivery, social media, productivity, communication, lifestyle, health and fitness, focusing on performance, stability and intuitive UX/UI. I emphasize clean code, thorough problem analysis and effective teamwork, which translates into high-quality implementations and error reduction. I advocate for clean, organized code and I'm characterized by great care and precision.
              </p>
            </section>

            <ExperienceSection />
          </div>

          {/* Right column - Skills, Education, and Languages */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">KEY TECHNICAL SKILLS</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Languages: Swift</li>
                <li>Frameworks: UIKit, SwiftUI, Combine, RxSwift, RxCocoa, Composable Architecture (TCA), Alamofire, URLSession, PayU_SDK_Lite, Swinject, Storyteller SDK, Kingfisher, Zendesk Messaging SDK, Firebase, GoogleMaps, MapKit, Core Location, AVFoundation, Notification Center</li>
                <li>Dependency managers: CocoaPods, Swift Package Manager</li>
                <li>Concurrency: async/await</li>
                <li>Databases: CoreData, Realm</li>
                <li>Design patterns: MVC, MVP, MVVM-C</li>
                <li>CI/CD: Bitrise, App Store Connect, Xcode Cloud, Test Flight</li>
                <li>API: REST</li>
                <li>Methodologies: Agile, Scrum, Kanban</li>
                <li>Tools: Fork, SourceTree, GitHub, Bitbucket, Firebase (Analytics, Crashlytics, Performance, Push Notifications), Jira, Figma</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">EDUCATION</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Computer Science</h3>
                  <p className="text-gray-700">Higher Education</p>
                  <p className="text-gray-700">Poland</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">LANGUAGES</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Polish (native)</li>
                <li>English (communicative B2)</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
