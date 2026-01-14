import { Link } from "react-router-dom";
import { User, Code } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">CV Portfolio</h1>
          <p className="text-xl text-gray-600">Select a CV to view</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Alan Urban CV Card */}
          <Link
            to="/alan-urban"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-blue-500"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                <Code className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Alan Urban</h2>
                <p className="text-lg text-blue-600 font-semibold mb-3">Fullstack Developer</p>
                <p className="text-gray-600 text-sm">
                  10+ years experience in React, Node.js, Python and full-stack development
                </p>
              </div>
              <div className="pt-4">
                <span className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  View CV
                </span>
              </div>
            </div>
          </Link>

          {/* Waldemar Wanat CV Card */}
          <Link
            to="/waldemar-wanat"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-orange-500"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                <User className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Waldemar Wanat</h2>
                <p className="text-lg text-orange-600 font-semibold mb-3">iOS Developer</p>
                <p className="text-gray-600 text-sm">
                  7 years experience in Swift, SwiftUI, UIKit and iOS development
                </p>
              </div>
              <div className="pt-4">
                <span className="inline-block px-6 py-2 bg-orange-500 text-white rounded-lg group-hover:bg-orange-600 transition-colors duration-300">
                  View CV
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
