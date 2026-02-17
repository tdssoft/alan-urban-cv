import React from 'react';
import { Mail, Phone, MapPin, Pencil, Plus, ChevronUp, ChevronDown, Trash2 } from 'lucide-react';
import { CVData } from '@/data/cvData';
import { CVTemplate } from '@/types/cvTemplates';
import { EditableSection, EditableItem } from '@/components/edit/EditableSection';
import { Button } from '@/components/ui/button';

interface SidebarLeftLayoutProps {
  cvData: CVData;
  template: CVTemplate;
  isEditMode: boolean;
  editHandlers: {
    onEditPersonalInfo: () => void;
    onEditProfile: () => void;
    onEditExperienceSummary: () => void;
    onEditTechnicalSkills: () => void;
    onEditEducation: () => void;
    onEditLanguages: () => void;
    onEditExperience: (index: number) => void;
    onDeleteExperience: (index: number) => void;
    onReorderExperiences: (from: number, to: number) => void;
    onAddExperience: () => void;
  };
}

const getColorClass = (color: string) => {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
    emerald: 'bg-emerald-500',
    purple: 'bg-purple-500',
    indigo: 'bg-indigo-500',
    yellow: 'bg-yellow-500',
  };
  return colorMap[color] || 'bg-blue-500';
};

export const SidebarLeftLayout: React.FC<SidebarLeftLayoutProps> = ({
  cvData,
  template,
  isEditMode,
  editHandlers,
}) => {
  const sidebarBg = template.sidebarConfig?.backgroundColor || 'from-gray-800 to-gray-900';
  const sidebarText = template.sidebarConfig?.textColor || 'text-white';

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: template.colors.background }}>
      {/* Left Sidebar */}
      <div className={`${template.sidebarConfig?.width || 'w-80'} bg-gradient-to-b ${sidebarBg} ${sidebarText} p-8 flex flex-col print:w-64`}>
        {/* Contact Info */}
        <EditableSection onEdit={editHandlers.onEditPersonalInfo}>
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 pb-2 border-b border-gray-600">CONTACT</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">{cvData.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{cvData.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{cvData.location}</span>
              </div>
            </div>
          </div>
        </EditableSection>

        {/* Technical Skills */}
        <EditableSection onEdit={editHandlers.onEditTechnicalSkills}>
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 pb-2 border-b border-gray-600">SKILLS</h2>
            <ul className="space-y-2 text-sm list-disc pl-5">
              {cvData.technicalSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </EditableSection>

        {/* Languages */}
        <EditableSection onEdit={editHandlers.onEditLanguages}>
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 pb-2 border-b border-gray-600">LANGUAGES</h2>
            <div className="space-y-2 text-sm">
              {cvData.languages.map((lang, index) => (
                <div key={index}>
                  <div className="font-semibold">{lang.language}</div>
                  <div className="text-gray-300 text-xs">{lang.level}</div>
                </div>
              ))}
            </div>
          </div>
        </EditableSection>

        {/* Education */}
        <EditableSection onEdit={editHandlers.onEditEducation}>
          <div>
            <h2 className="text-lg font-bold mb-4 pb-2 border-b border-gray-600">EDUCATION</h2>
            <div className="space-y-4 text-sm">
              {cvData.education.map((edu, index) => (
                <div key={index}>
                  <div className="font-semibold">{edu.degree}</div>
                  {edu.institution && <div className="text-gray-300 text-xs">{edu.institution}</div>}
                  {edu.period && <div className="text-gray-400 text-xs">{edu.period}</div>}
                </div>
              ))}
            </div>
          </div>
        </EditableSection>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-12">
        {/* Header */}
        <EditableSection onEdit={editHandlers.onEditPersonalInfo}>
          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-2" style={{ color: template.colors.primary }}>
              {cvData.name}
            </h1>
            <h2 className="text-2xl" style={{ color: template.colors.textLight }}>
              {cvData.title}
            </h2>
          </header>
        </EditableSection>

        {/* Profile */}
        <EditableSection onEdit={editHandlers.onEditProfile}>
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2" style={{
              color: template.colors.primary,
              borderColor: template.colors.secondary
            }}>
              PROFILE
            </h2>
            <p className="leading-relaxed" style={{ color: template.colors.text }}>
              {cvData.profile}
            </p>
          </section>
        </EditableSection>

        {/* Experience Summary */}
        <EditableSection onEdit={editHandlers.onEditExperienceSummary}>
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2" style={{
              color: template.colors.primary,
              borderColor: template.colors.secondary
            }}>
              EXPERIENCE SUMMARY
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: `${template.colors.secondary}15` }}>
                <h3 className="font-semibold mb-3" style={{ color: template.colors.primary }}>
                  Core Technologies
                </h3>
                <div className="space-y-2">
                  {cvData.experienceSummary.coreTechnologies.map((tech, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className={`${getColorClass(tech.color)} text-white px-2 py-1 rounded font-medium`}>
                        {tech.name}
                      </span>
                      <span style={{ color: template.colors.text }}>{tech.years}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: `${template.colors.accent}15` }}>
                <h3 className="font-semibold mb-3" style={{ color: template.colors.primary }}>
                  Development Areas
                </h3>
                <div className="space-y-2">
                  {cvData.experienceSummary.developmentAreas.map((area, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className={`${getColorClass(area.color)} text-white px-2 py-1 rounded font-medium`}>
                        {area.name}
                      </span>
                      <span style={{ color: template.colors.text }}>{area.years}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg text-center" style={{ backgroundColor: `${template.colors.primary}10` }}>
              <div className="text-3xl font-bold" style={{ color: template.colors.primary }}>
                {cvData.experienceSummary.totalExperience}
              </div>
              <div style={{ color: template.colors.textLight }}>{cvData.experienceSummary.totalExperienceLabel}</div>
            </div>
          </section>
        </EditableSection>

        {/* Professional Experience */}
        <EditableSection onAdd={editHandlers.onAddExperience} addLabel="Dodaj doświadczenie">
          <section>
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2" style={{
              color: template.colors.primary,
              borderColor: template.colors.secondary
            }}>
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-6">
              {cvData.experiences.map((exp, index) => (
                <EditableItem
                  key={index}
                  onEdit={() => editHandlers.onEditExperience(index)}
                  onDelete={() => editHandlers.onDeleteExperience(index)}
                >
                  <div className="pb-6 border-b last:border-b-0" style={{ borderColor: `${template.colors.textLight}30` }}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold" style={{ color: template.colors.primary }}>
                        {exp.title}
                      </h3>
                      <span className="text-sm" style={{ color: template.colors.textLight }}>
                        {exp.date}
                      </span>
                    </div>
                    <p className="font-medium mb-3" style={{ color: template.colors.secondary }}>
                      {exp.company}
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-3" style={{ color: template.colors.text }}>
                      {exp.responsibilities.map((resp, rIndex) => (
                        <li key={rIndex}>{resp}</li>
                      ))}
                    </ul>
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-2 py-1 rounded text-xs"
                            style={{
                              backgroundColor: `${template.colors.secondary}20`,
                              color: template.colors.primary
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </EditableItem>
              ))}
            </div>
          </section>
        </EditableSection>
      </div>
    </div>
  );
};
