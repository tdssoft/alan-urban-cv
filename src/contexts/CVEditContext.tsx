import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { CVData, ExperienceData } from '@/data/cvData';

interface CVEditContextType {
  cvData: CVData;
  isEditMode: boolean;
  setEditMode: (mode: boolean) => void;
  hasUnsavedChanges: boolean;

  // Template
  selectedTemplateId: string;
  setSelectedTemplate: (templateId: string) => void;

  // Personal Info
  updatePersonalInfo: (data: Partial<Pick<CVData, 'name' | 'title' | 'email' | 'phone' | 'location'>>) => void;

  // Profile
  updateProfile: (profile: string) => void;

  // Experience Summary
  updateExperienceSummary: (summary: CVData['experienceSummary']) => void;
  addCoreTechnology: (tech: { name: string; years: string; color: string }) => void;
  updateCoreTechnology: (index: number, tech: { name: string; years: string; color: string }) => void;
  removeCoreTechnology: (index: number) => void;
  addDevelopmentArea: (area: { name: string; years: string; color: string }) => void;
  updateDevelopmentArea: (index: number, area: { name: string; years: string; color: string }) => void;
  removeDevelopmentArea: (index: number) => void;

  // Experiences
  addExperience: (experience: ExperienceData) => void;
  updateExperience: (index: number, experience: ExperienceData) => void;
  removeExperience: (index: number) => void;
  reorderExperiences: (fromIndex: number, toIndex: number) => void;

  // Technical Skills
  updateTechnicalSkills: (skills: string[]) => void;
  addTechnicalSkill: (skill: string) => void;
  updateTechnicalSkill: (index: number, skill: string) => void;
  removeTechnicalSkill: (index: number) => void;

  // Education
  updateEducation: (education: CVData['education']) => void;
  addEducation: (edu: CVData['education'][0]) => void;
  updateEducationItem: (index: number, edu: CVData['education'][0]) => void;
  removeEducation: (index: number) => void;

  // Languages
  updateLanguages: (languages: CVData['languages']) => void;
  addLanguage: (lang: CVData['languages'][0]) => void;
  updateLanguage: (index: number, lang: CVData['languages'][0]) => void;
  removeLanguage: (index: number) => void;

  // Reset
  resetToOriginal: () => void;
}

const CVEditContext = createContext<CVEditContextType | undefined>(undefined);

interface CVEditProviderProps {
  children: ReactNode;
  initialData: CVData;
  storageKey?: string;
}

const getStorageKey = (name: string) => `cv-edit-${name.toLowerCase().replace(/\s+/g, '-')}`;
const getTemplateStorageKey = (name: string) => `cv-template-${name.toLowerCase().replace(/\s+/g, '-')}`;

export const CVEditProvider: React.FC<CVEditProviderProps> = ({ children, initialData, storageKey }) => {
  const effectiveStorageKey = storageKey || getStorageKey(initialData.name);
  const templateStorageKey = getTemplateStorageKey(initialData.name);

  // Load from localStorage on init
  const loadFromStorage = (): CVData => {
    try {
      const stored = localStorage.getItem(effectiveStorageKey);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Failed to load CV data from localStorage:', e);
    }
    return initialData;
  };

  // Load template from localStorage
  const loadTemplateFromStorage = (): string => {
    try {
      const stored = localStorage.getItem(templateStorageKey);
      if (stored) {
        return stored;
      }
    } catch (e) {
      console.warn('Failed to load template from localStorage:', e);
    }
    return 'professional-blue'; // Default template
  };

  const [cvData, setCvData] = useState<CVData>(loadFromStorage);
  const [originalData] = useState<CVData>(initialData);
  const [isEditMode, setEditMode] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(loadTemplateFromStorage);

  // Save to localStorage whenever cvData changes
  useEffect(() => {
    try {
      localStorage.setItem(effectiveStorageKey, JSON.stringify(cvData));
      // Check if different from original
      setHasUnsavedChanges(JSON.stringify(cvData) !== JSON.stringify(originalData));
    } catch (e) {
      console.warn('Failed to save CV data to localStorage:', e);
    }
  }, [cvData, effectiveStorageKey, originalData]);

  // Save template to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(templateStorageKey, selectedTemplateId);
    } catch (e) {
      console.warn('Failed to save template to localStorage:', e);
    }
  }, [selectedTemplateId, templateStorageKey]);

  // Template management
  const setSelectedTemplate = useCallback((templateId: string) => {
    setSelectedTemplateId(templateId);
  }, []);

  // Personal Info
  const updatePersonalInfo = useCallback((data: Partial<Pick<CVData, 'name' | 'title' | 'email' | 'phone' | 'location'>>) => {
    setCvData(prev => ({ ...prev, ...data }));
  }, []);

  // Profile
  const updateProfile = useCallback((profile: string) => {
    setCvData(prev => ({ ...prev, profile }));
  }, []);

  // Experience Summary
  const updateExperienceSummary = useCallback((summary: CVData['experienceSummary']) => {
    setCvData(prev => ({ ...prev, experienceSummary: summary }));
  }, []);

  const addCoreTechnology = useCallback((tech: { name: string; years: string; color: string }) => {
    setCvData(prev => ({
      ...prev,
      experienceSummary: {
        ...prev.experienceSummary,
        coreTechnologies: [...prev.experienceSummary.coreTechnologies, tech]
      }
    }));
  }, []);

  const updateCoreTechnology = useCallback((index: number, tech: { name: string; years: string; color: string }) => {
    setCvData(prev => ({
      ...prev,
      experienceSummary: {
        ...prev.experienceSummary,
        coreTechnologies: prev.experienceSummary.coreTechnologies.map((t, i) => i === index ? tech : t)
      }
    }));
  }, []);

  const removeCoreTechnology = useCallback((index: number) => {
    setCvData(prev => ({
      ...prev,
      experienceSummary: {
        ...prev.experienceSummary,
        coreTechnologies: prev.experienceSummary.coreTechnologies.filter((_, i) => i !== index)
      }
    }));
  }, []);

  const addDevelopmentArea = useCallback((area: { name: string; years: string; color: string }) => {
    setCvData(prev => ({
      ...prev,
      experienceSummary: {
        ...prev.experienceSummary,
        developmentAreas: [...prev.experienceSummary.developmentAreas, area]
      }
    }));
  }, []);

  const updateDevelopmentArea = useCallback((index: number, area: { name: string; years: string; color: string }) => {
    setCvData(prev => ({
      ...prev,
      experienceSummary: {
        ...prev.experienceSummary,
        developmentAreas: prev.experienceSummary.developmentAreas.map((a, i) => i === index ? area : a)
      }
    }));
  }, []);

  const removeDevelopmentArea = useCallback((index: number) => {
    setCvData(prev => ({
      ...prev,
      experienceSummary: {
        ...prev.experienceSummary,
        developmentAreas: prev.experienceSummary.developmentAreas.filter((_, i) => i !== index)
      }
    }));
  }, []);

  // Experiences
  const addExperience = useCallback((experience: ExperienceData) => {
    setCvData(prev => ({
      ...prev,
      experiences: [experience, ...prev.experiences]
    }));
  }, []);

  const updateExperience = useCallback((index: number, experience: ExperienceData) => {
    setCvData(prev => ({
      ...prev,
      experiences: prev.experiences.map((e, i) => i === index ? experience : e)
    }));
  }, []);

  const removeExperience = useCallback((index: number) => {
    setCvData(prev => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index)
    }));
  }, []);

  const reorderExperiences = useCallback((fromIndex: number, toIndex: number) => {
    setCvData(prev => {
      const newExperiences = [...prev.experiences];
      const [removed] = newExperiences.splice(fromIndex, 1);
      newExperiences.splice(toIndex, 0, removed);
      return { ...prev, experiences: newExperiences };
    });
  }, []);

  // Technical Skills
  const updateTechnicalSkills = useCallback((skills: string[]) => {
    setCvData(prev => ({ ...prev, technicalSkills: skills }));
  }, []);

  const addTechnicalSkill = useCallback((skill: string) => {
    setCvData(prev => ({
      ...prev,
      technicalSkills: [...prev.technicalSkills, skill]
    }));
  }, []);

  const updateTechnicalSkill = useCallback((index: number, skill: string) => {
    setCvData(prev => ({
      ...prev,
      technicalSkills: prev.technicalSkills.map((s, i) => i === index ? skill : s)
    }));
  }, []);

  const removeTechnicalSkill = useCallback((index: number) => {
    setCvData(prev => ({
      ...prev,
      technicalSkills: prev.technicalSkills.filter((_, i) => i !== index)
    }));
  }, []);

  // Education
  const updateEducation = useCallback((education: CVData['education']) => {
    setCvData(prev => ({ ...prev, education }));
  }, []);

  const addEducation = useCallback((edu: CVData['education'][0]) => {
    setCvData(prev => ({
      ...prev,
      education: [...prev.education, edu]
    }));
  }, []);

  const updateEducationItem = useCallback((index: number, edu: CVData['education'][0]) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.map((e, i) => i === index ? edu : e)
    }));
  }, []);

  const removeEducation = useCallback((index: number) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  }, []);

  // Languages
  const updateLanguages = useCallback((languages: CVData['languages']) => {
    setCvData(prev => ({ ...prev, languages }));
  }, []);

  const addLanguage = useCallback((lang: CVData['languages'][0]) => {
    setCvData(prev => ({
      ...prev,
      languages: [...prev.languages, lang]
    }));
  }, []);

  const updateLanguage = useCallback((index: number, lang: CVData['languages'][0]) => {
    setCvData(prev => ({
      ...prev,
      languages: prev.languages.map((l, i) => i === index ? lang : l)
    }));
  }, []);

  const removeLanguage = useCallback((index: number) => {
    setCvData(prev => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index)
    }));
  }, []);

  // Reset
  const resetToOriginal = useCallback(() => {
    setCvData(originalData);
    localStorage.removeItem(effectiveStorageKey);
  }, [originalData, effectiveStorageKey]);

  return (
    <CVEditContext.Provider
      value={{
        cvData,
        isEditMode,
        setEditMode,
        hasUnsavedChanges,
        selectedTemplateId,
        setSelectedTemplate,
        updatePersonalInfo,
        updateProfile,
        updateExperienceSummary,
        addCoreTechnology,
        updateCoreTechnology,
        removeCoreTechnology,
        addDevelopmentArea,
        updateDevelopmentArea,
        removeDevelopmentArea,
        addExperience,
        updateExperience,
        removeExperience,
        reorderExperiences,
        updateTechnicalSkills,
        addTechnicalSkill,
        updateTechnicalSkill,
        removeTechnicalSkill,
        updateEducation,
        addEducation,
        updateEducationItem,
        removeEducation,
        updateLanguages,
        addLanguage,
        updateLanguage,
        removeLanguage,
        resetToOriginal
      }}
    >
      {children}
    </CVEditContext.Provider>
  );
};

export const useCVEdit = () => {
  const context = useContext(CVEditContext);
  if (context === undefined) {
    throw new Error('useCVEdit must be used within a CVEditProvider');
  }
  return context;
};
