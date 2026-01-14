import { Link } from "react-router-dom";
import { Lock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <FileText className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">CV Portfolio</h1>
          <p className="text-xl text-gray-600 mb-2">
            System zarządzania CV
          </p>
          <p className="text-gray-500">
            Zaloguj się, aby uzyskać dostęp do swojego CV
          </p>
        </div>

        {/* Login/Register Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Lock className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Dostęp do systemu
            </h2>
          </div>

          <div className="space-y-4 mb-6">
            <Link to="/login" className="block">
              <Button size="lg" className="w-full text-lg py-6">
                Logowanie
              </Button>
            </Link>
            <Link to="/register" className="block">
              <Button size="lg" variant="outline" className="w-full text-lg py-6">
                Rejestracja
              </Button>
            </Link>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm font-medium text-gray-700 mb-3 text-center">
              Konta testowe:
            </p>
            <div className="space-y-2">
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-sm font-mono text-blue-800">
                  alan.urban23@gmail.com
                </p>
                <p className="text-xs text-blue-600 mt-1">Alan Urban - Fullstack Developer</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-center">
                <p className="text-sm font-mono text-orange-800">
                  wwanat01@gmail.com
                </p>
                <p className="text-xs text-orange-600 mt-1">Waldemar Wanat - iOS Developer</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Pierwsze logowanie nie wymaga hasła
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
