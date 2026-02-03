import { useState, useEffect } from 'react';
import { CVTemplate } from "@/components/CVTemplate";
import { CVEditProvider } from "@/contexts/CVEditContext";
import { alanUrbanCV } from "@/data/cvData";
import { alanUrbanCVVersions } from "@/data/cvVersions";

const STORAGE_KEY = 'cv-version-selected-alan-urban';

const AlanUrbanCV = () => {
  const [selectedVersionId, setSelectedVersionId] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && alanUrbanCVVersions.find(v => v.id === stored)) {
        return stored;
      }
    } catch (e) {
      console.warn('Failed to load version from localStorage:', e);
    }
    return 'default';
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, selectedVersionId);
    } catch (e) {
      console.warn('Failed to save version to localStorage:', e);
    }
  }, [selectedVersionId]);

  const currentVersion = alanUrbanCVVersions.find(v => v.id === selectedVersionId) || alanUrbanCVVersions[0];
  const cvData = currentVersion?.data || alanUrbanCV;
  const editStorageKey = `cv-edit-alan-urban-${selectedVersionId}`;

  return (
    <CVEditProvider
      key={selectedVersionId}
      initialData={cvData}
      storageKey={editStorageKey}
      versions={alanUrbanCVVersions}
      selectedVersionId={selectedVersionId}
      onVersionChange={setSelectedVersionId}
    >
      <CVTemplate />
    </CVEditProvider>
  );
};

export default AlanUrbanCV;
