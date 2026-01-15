import React, { useState } from 'react';
import { Mail, Phone, MapPin, Pencil, Plus, Trash2, RotateCcw, Eye, EyeOff, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCVEdit } from "@/contexts/CVEditContext";
import { ExperienceData } from "@/data/cvData";
import {
  PersonalInfoEditDialog,
  ProfileEditDialog,
  ExperienceSummaryEditDialog,
  ExperienceEditDialog,
  TechnicalSkillsEditDialog,
  EducationEditDialog,
  LanguagesEditDialog,
} from "@/components/edit";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const getColorClass = (color: string, type: 'bg' | 'text' = 'bg') => {
  const colorMap: Record<string, { bg: string; text: string }> = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-800' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-800' },
    green: { bg: 'bg-green-500', text: 'text-green-800' },
    emerald: { bg: 'bg-emerald-500', text: 'text-emerald-800' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-800' },
    indigo: { bg: 'bg-indigo-500', text: 'text-indigo-800' },
    yellow: { bg: 'bg-yellow-500', text: 'text-yellow-800' },
  };
  return colorMap[color]?.[type] || colorMap.blue[type];
};

export const CVTemplate = () => {
  const {
    cvData,
    isEditMode,
    setEditMode,
    hasUnsavedChanges,
    removeExperience,
    reorderExperiences,
    updateExperience,
    addExperience,
    resetToOriginal
  } = useCVEdit();

  // Dialog states
  const [personalInfoOpen, setPersonalInfoOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [experienceSummaryOpen, setExperienceSummaryOpen] = useState(false);
  const [technicalSkillsOpen, setTechnicalSkillsOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);

  // Experience edit state
  const [experienceDialogOpen, setExperienceDialogOpen] = useState(false);
  const [experienceDialogMode, setExperienceDialogMode] = useState<'add' | 'edit'>('add');
  const [editingExperienceIndex, setEditingExperienceIndex] = useState<number | null>(null);
  const [editingExperience, setEditingExperience] = useState<ExperienceData | null>(null);

  // Delete confirmation
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteExperienceIndex, setDeleteExperienceIndex] = useState<number | null>(null);

  // Reset confirmation
  const [resetDialogOpen, setResetDialogOpen] = useState(false);

  const handleAddExperience = () => {
    setExperienceDialogMode('add');
    setEditingExperience(null);
    setEditingExperienceIndex(null);
    setExperienceDialogOpen(true);
  };

  const handleEditExperience = (index: number) => {
    setExperienceDialogMode('edit');
    setEditingExperience(cvData.experiences[index]);
    setEditingExperienceIndex(index);
    setExperienceDialogOpen(true);
  };

  const handleSaveExperience = (experience: ExperienceData) => {
    if (experienceDialogMode === 'add') {
      addExperience(experience);
    } else if (editingExperienceIndex !== null) {
      updateExperience(editingExperienceIndex, experience);
    }
    setExperienceDialogOpen(false);
  };

  const handleDeleteExperience = (index: number) => {
    setDeleteExperienceIndex(index);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteExperience = () => {
    if (deleteExperienceIndex !== null) {
      removeExperience(deleteExperienceIndex);
    }
    setDeleteDialogOpen(false);
    setDeleteExperienceIndex(null);
  };

  const handleReset = () => {
    setResetDialogOpen(true);
  };

  const confirmReset = () => {
    resetToOriginal();
    setResetDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Edit Mode Toggle */}
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
          {hasUnsavedChanges && (
            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-200 shadow-sm">
              Zmiany zapisane lokalnie
            </span>
          )}
          {isEditMode && hasUnsavedChanges && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="bg-white shadow-lg hover:bg-red-50 hover:text-red-600 hover:border-red-200"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Resetuj
            </Button>
          )}
          <Button
            variant={isEditMode ? "default" : "outline"}
            size="sm"
            onClick={() => setEditMode(!isEditMode)}
            className={`shadow-lg ${isEditMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white'}`}
          >
            {isEditMode ? (
              <>
                <EyeOff className="h-4 w-4 mr-2" />
                Zakończ edycję
              </>
            ) : (
              <>
                <Pencil className="h-4 w-4 mr-2" />
                Edytuj CV
              </>
            )}
          </Button>
        </div>

        {/* Header */}
        <header className={`space-y-4 mb-8 relative group ${isEditMode ? 'cursor-pointer hover:bg-gray-50 p-4 -m-4 rounded-lg transition-colors' : ''}`}>
          {isEditMode && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-0 right-0 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-md hover:bg-blue-50"
              onClick={() => setPersonalInfoOpen(true)}
            >
              <Pencil className="h-4 w-4 text-blue-600" />
            </Button>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-primary">{cvData.name}</h1>
          <h2 className="text-xl text-gray-700">{cvData.title}</h2>
          <div className="flex flex-col md:flex-row gap-3 text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{cvData.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{cvData.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{cvData.location}</span>
            </div>
          </div>
        </header>

        {/* Main content grid */}
        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          {/* Left column - Main content */}
          <div className="space-y-8">
            {/* Experience Summary */}
            <section className={`relative group ${isEditMode ? 'cursor-pointer hover:bg-gray-50 p-4 -m-4 rounded-lg transition-colors' : ''}`}>
              {isEditMode && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-0 right-0 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-md hover:bg-blue-50 z-10"
                  onClick={() => setExperienceSummaryOpen(true)}
                >
                  <Pencil className="h-4 w-4 text-blue-600" />
                </Button>
              )}
              <h2 className="text-2xl font-semibold text-primary mb-6">EXPERIENCE SUMMARY</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Core Technologies</h3>
                  <div className="space-y-2">
                    {cvData.experienceSummary.coreTechnologies.map((tech, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className={`${getColorClass(tech.color)} text-white px-2 py-1 rounded text-sm font-medium`}>
                          {tech.name}
                        </span>
                        <span className="text-gray-700 font-medium">{tech.years}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Development Areas</h3>
                  <div className="space-y-2">
                    {cvData.experienceSummary.developmentAreas.map((area, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className={`${getColorClass(area.color)} text-white px-2 py-1 rounded text-sm font-medium`}>
                          {area.name}
                        </span>
                        <span className="text-gray-700 font-medium">{area.years}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-purple-800">{cvData.experienceSummary.totalExperience}</h3>
                    <p className="text-purple-600 font-medium">{cvData.experienceSummary.totalExperienceLabel}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Profile */}
            <section className={`relative group ${isEditMode ? 'cursor-pointer hover:bg-gray-50 p-4 -m-4 rounded-lg transition-colors' : ''}`}>
              {isEditMode && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-0 right-0 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-md hover:bg-blue-50 z-10"
                  onClick={() => setProfileOpen(true)}
                >
                  <Pencil className="h-4 w-4 text-blue-600" />
                </Button>
              )}
              <h2 className="text-2xl font-semibold text-primary mb-4">PROFILE</h2>
              <p className="text-gray-700 leading-relaxed">{cvData.profile}</p>
            </section>

            {/* Professional Experience */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-primary">PROFESSIONAL EXPERIENCE</h2>
                {isEditMode && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleAddExperience}
                    className="border-dashed border-2"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Dodaj doświadczenie
                  </Button>
                )}
              </div>
              <div className="space-y-6">
                {cvData.experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative group ${isEditMode ? 'hover:bg-gray-50 p-4 -m-4 rounded-lg transition-colors' : ''}`}
                  >
                    {isEditMode && (
                      <div className="absolute top-0 right-0 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        {index > 0 && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 bg-white shadow-sm hover:bg-gray-100"
                            onClick={() => reorderExperiences(index, index - 1)}
                          >
                            <ChevronUp className="h-4 w-4" />
                          </Button>
                        )}
                        {index < cvData.experiences.length - 1 && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 bg-white shadow-sm hover:bg-gray-100"
                            onClick={() => reorderExperiences(index, index + 1)}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 bg-white shadow-sm hover:bg-blue-50"
                          onClick={() => handleEditExperience(index)}
                        >
                          <Pencil className="h-4 w-4 text-blue-600" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 bg-white shadow-sm hover:bg-red-50"
                          onClick={() => handleDeleteExperience(index)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    )}

                    <div>
                      <div className="flex flex-col md:flex-row md:justify-between mb-2">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-gray-600 italic">{exp.date}</p>
                      </div>
                      <p className="text-gray-600 mb-2">{exp.company}</p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {exp.responsibilities.map((responsibility, rIndex) => (
                          <li key={rIndex}>{responsibility}</li>
                        ))}
                      </ul>
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="mt-3">
                          <p className="text-sm font-semibold text-gray-600 mb-2">Technologies:</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, tIndex) => (
                              <span
                                key={tIndex}
                                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right column - Skills, Education, and Languages */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <section className={`relative group ${isEditMode ? 'cursor-pointer hover:bg-gray-50 p-4 -m-4 rounded-lg transition-colors' : ''}`}>
              {isEditMode && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-0 right-0 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-md hover:bg-blue-50 z-10"
                  onClick={() => setTechnicalSkillsOpen(true)}
                >
                  <Pencil className="h-4 w-4 text-blue-600" />
                </Button>
              )}
              <h2 className="text-2xl font-semibold text-primary mb-4">KEY TECHNICAL SKILLS</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {cvData.technicalSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </section>

            {/* Education */}
            <section className={`relative group ${isEditMode ? 'cursor-pointer hover:bg-gray-50 p-4 -m-4 rounded-lg transition-colors' : ''}`}>
              {isEditMode && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-0 right-0 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-md hover:bg-blue-50 z-10"
                  onClick={() => setEducationOpen(true)}
                >
                  <Pencil className="h-4 w-4 text-blue-600" />
                </Button>
              )}
              <h2 className="text-2xl font-semibold text-primary mb-4">EDUCATION</h2>
              <div className="space-y-4">
                {cvData.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-semibold">{edu.degree}</h3>
                    {edu.period && <p className="text-gray-700">{edu.period}</p>}
                    {edu.institution && <p className="text-gray-700">{edu.institution}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className={`relative group ${isEditMode ? 'cursor-pointer hover:bg-gray-50 p-4 -m-4 rounded-lg transition-colors' : ''}`}>
              {isEditMode && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-0 right-0 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-md hover:bg-blue-50 z-10"
                  onClick={() => setLanguagesOpen(true)}
                >
                  <Pencil className="h-4 w-4 text-blue-600" />
                </Button>
              )}
              <h2 className="text-2xl font-semibold text-primary mb-4">LANGUAGES</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {cvData.languages.map((lang, index) => (
                  <li key={index}>
                    {lang.language} ({lang.level})
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Dialogs */}
      <PersonalInfoEditDialog open={personalInfoOpen} onOpenChange={setPersonalInfoOpen} />
      <ProfileEditDialog open={profileOpen} onOpenChange={setProfileOpen} />
      <ExperienceSummaryEditDialog open={experienceSummaryOpen} onOpenChange={setExperienceSummaryOpen} />
      <ExperienceEditDialog
        open={experienceDialogOpen}
        onOpenChange={setExperienceDialogOpen}
        experience={editingExperience}
        onSave={handleSaveExperience}
        mode={experienceDialogMode}
      />
      <TechnicalSkillsEditDialog open={technicalSkillsOpen} onOpenChange={setTechnicalSkillsOpen} />
      <EducationEditDialog open={educationOpen} onOpenChange={setEducationOpen} />
      <LanguagesEditDialog open={languagesOpen} onOpenChange={setLanguagesOpen} />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Czy na pewno chcesz usunąć to doświadczenie?</AlertDialogTitle>
            <AlertDialogDescription>
              Ta akcja jest nieodwracalna. Doświadczenie zostanie trwale usunięte.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Anuluj</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDeleteExperience} className="bg-red-600 hover:bg-red-700">
              Usuń
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Reset Confirmation Dialog */}
      <AlertDialog open={resetDialogOpen} onOpenChange={setResetDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Czy na pewno chcesz zresetować CV?</AlertDialogTitle>
            <AlertDialogDescription>
              Wszystkie wprowadzone zmiany zostaną utracone. CV zostanie przywrócone do stanu początkowego.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Anuluj</AlertDialogCancel>
            <AlertDialogAction onClick={confirmReset} className="bg-red-600 hover:bg-red-700">
              Resetuj
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
