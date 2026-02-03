import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { CVTemplate } from '@/components/CVTemplate';
import { CVEditProvider } from '@/contexts/CVEditContext';
import { alanUrbanCV, waldemarWanatCV } from '@/data/cvData';
import { getVersionsForCVType } from '@/data/cvVersions';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const getVersionStorageKey = (cvType: string) => `cv-version-selected-${cvType}`;

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const cvType = user?.cvType || 'alan-urban';
  const versions = getVersionsForCVType(cvType);

  const [selectedVersionId, setSelectedVersionId] = useState(() => {
    try {
      const stored = localStorage.getItem(getVersionStorageKey(cvType));
      if (stored && versions.find(v => v.id === stored)) {
        return stored;
      }
    } catch (e) {
      console.warn('Failed to load version from localStorage:', e);
    }
    return 'default';
  });

  useEffect(() => {
    try {
      localStorage.setItem(getVersionStorageKey(cvType), selectedVersionId);
    } catch (e) {
      console.warn('Failed to save version to localStorage:', e);
    }
  }, [selectedVersionId, cvType]);

  if (!user) {
    return null;
  }

  const currentVersion = versions.find(v => v.id === selectedVersionId) || versions[0];
  const cvData = currentVersion?.data || (cvType === 'alan-urban' ? alanUrbanCV : waldemarWanatCV);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleVersionChange = (versionId: string) => {
    setSelectedVersionId(versionId);
  };

  // Use version-specific storage key for edits
  const editStorageKey = `cv-edit-${cvType}-${selectedVersionId}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm font-medium text-gray-900">{user.email}</p>
                <p className="text-xs text-gray-500">Zalogowany</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Wyloguj
            </Button>
          </div>
        </div>
      </nav>

      {/* Welcome Message */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-2">Witaj, {cvData.name}!</h1>
          <p className="text-blue-100">
            Oto Twoje CV. Mozesz je przegladac i pobierac w dowolnym momencie.
          </p>
        </div>
      </div>

      {/* CV Content */}
      <div className="py-8">
        <CVEditProvider
          key={selectedVersionId}
          initialData={cvData}
          storageKey={editStorageKey}
          versions={versions}
          selectedVersionId={selectedVersionId}
          onVersionChange={handleVersionChange}
        >
          <CVTemplate />
        </CVEditProvider>
      </div>
    </div>
  );
}
