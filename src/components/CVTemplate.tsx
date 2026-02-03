import React, { useState, useMemo } from 'react';
import { Pencil, Plus, Trash2, RotateCcw, Eye, EyeOff, ChevronUp, ChevronDown, Printer } from "lucide-react";
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
import { TemplateSelector } from "@/components/TemplateSelector";
import { VersionSelector } from "@/components/VersionSelector";
import { getTemplateById, getDefaultTemplate } from "@/types/cvTemplates";
import {
  SidebarLeftLayout,
  HeaderClassicLayout,
  ModernSingleLayout,
  TraditionalLayout,
} from "@/components/layouts";

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
    resetToOriginal,
    selectedTemplateId
  } = useCVEdit();

  // Get the selected template
  const template = useMemo(() => {
    return getTemplateById(selectedTemplateId) || getDefaultTemplate();
  }, [selectedTemplateId]);

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

  const handlePrint = () => {
    window.print();
  };

  // Edit handlers to pass to layouts
  const editHandlers = {
    onEditPersonalInfo: () => setPersonalInfoOpen(true),
    onEditProfile: () => setProfileOpen(true),
    onEditExperienceSummary: () => setExperienceSummaryOpen(true),
    onEditTechnicalSkills: () => setTechnicalSkillsOpen(true),
    onEditEducation: () => setEducationOpen(true),
    onEditLanguages: () => setLanguagesOpen(true),
    onEditExperience: handleEditExperience,
    onDeleteExperience: handleDeleteExperience,
    onReorderExperiences: reorderExperiences,
    onAddExperience: handleAddExperience,
  };

  // Render the appropriate layout based on template
  const renderLayout = () => {
    const layoutProps = {
      cvData,
      template,
      isEditMode,
      editHandlers,
    };

    switch (template.layout) {
      case 'sidebar-left':
        return <SidebarLeftLayout {...layoutProps} />;
      case 'header-classic':
        return <HeaderClassicLayout {...layoutProps} />;
      case 'modern-single':
        return <ModernSingleLayout {...layoutProps} />;
      case 'traditional':
        return <TraditionalLayout {...layoutProps} />;
      default:
        return <TraditionalLayout {...layoutProps} />;
    }
  };

  return (
    <>
      {/* Fixed Toolbar */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 print:hidden">
        {hasUnsavedChanges && (
          <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-200 shadow-sm">
            Zmiany zapisane lokalnie
          </span>
        )}
        <VersionSelector />
        <TemplateSelector />
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
          variant="outline"
          size="sm"
          onClick={handlePrint}
          className="bg-white shadow-lg hover:bg-gray-50"
        >
          <Printer className="h-4 w-4 mr-2" />
          Drukuj
        </Button>
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

      {/* Render Selected Layout */}
      {renderLayout()}

      {/* Edit Dialogs */}
      <PersonalInfoEditDialog open={personalInfoOpen} onOpenChange={setPersonalInfoOpen} />
      <ProfileEditDialog open={profileOpen} onOpenChange={setProfileOpen} />
      <ExperienceSummaryEditDialog open={experienceSummaryOpen} onOpenChange={setExperienceSummaryOpen} />
      <TechnicalSkillsEditDialog open={technicalSkillsOpen} onOpenChange={setTechnicalSkillsOpen} />
      <EducationEditDialog open={educationOpen} onOpenChange={setEducationOpen} />
      <LanguagesEditDialog open={languagesOpen} onOpenChange={setLanguagesOpen} />

      <ExperienceEditDialog
        open={experienceDialogOpen}
        onOpenChange={setExperienceDialogOpen}
        mode={experienceDialogMode}
        experience={editingExperience}
        onSave={handleSaveExperience}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Czy na pewno chcesz usunąć to doświadczenie?</AlertDialogTitle>
            <AlertDialogDescription>
              Ta operacja jest nieodwracalna. Doświadczenie zostanie trwale usunięte.
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
            <AlertDialogTitle>Czy na pewno chcesz zresetować CV do wersji oryginalnej?</AlertDialogTitle>
            <AlertDialogDescription>
              Wszystkie zapisane lokalnie zmiany zostaną utracone. Ta operacja jest nieodwracalna.
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
    </>
  );
};
