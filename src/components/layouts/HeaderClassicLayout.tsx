import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CVData } from '@/data/cvData';
import { CVTemplate } from '@/types/cvTemplates';

interface HeaderClassicLayoutProps {
  cvData: CVData;
  template: CVTemplate;
  isEditMode: boolean;
  editHandlers: any;
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

export const HeaderClassicLayout: React.FC<HeaderClassicLayoutProps> = ({
  cvData,
  template,
}) => {
  const headerBg = template.headerConfig?.backgroundColor || 'from-blue-600 to-blue-700';

  return (
    <div className="min-h-screen" style={{ backgroundColor: template.colors.background }}>
      {/* Header */}
      <header className={`bg-gradient-to-r ${headerBg} ${template.headerConfig?.textColor || 'text-white'} p-12 mb-8`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-3">{cvData.name}</h1>
          <h2 className="text-2xl mb-6 opacity-90">{cvData.title}</h2>
          <div className="flex flex-wrap gap-6 text-sm opacity-90">
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
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-12 pb-12">
        {/* Profile Section - Full Width */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2" style={{
            color: template.colors.primary,
            borderColor: template.colors.secondary
          }}>
            PROFILE
          </h2>
          <p className="leading-relaxed text-lg" style={{ color: template.colors.text }}>
            {cvData.profile}
          </p>
        </section>

        {/* Experience Summary */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2" style={{
            color: template.colors.primary,
            borderColor: template.colors.secondary
          }}>
            EXPERIENCE SUMMARY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'white' }}>
              <h3 className="font-bold mb-4 text-lg" style={{ color: template.colors.primary }}>
                Core Technologies
              </h3>
              <div className="space-y-3">
                {cvData.experienceSummary.coreTechnologies.map((tech, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className={`${getColorClass(tech.color)} text-white px-3 py-1 rounded-lg text-sm font-medium`}>
                      {tech.name}
                    </span>
                    <span className="text-sm font-semibold" style={{ color: template.colors.text }}>
                      {tech.years}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'white' }}>
              <h3 className="font-bold mb-4 text-lg" style={{ color: template.colors.primary }}>
                Development Areas
              </h3>
              <div className="space-y-3">
                {cvData.experienceSummary.developmentAreas.map((area, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className={`${getColorClass(area.color)} text-white px-3 py-1 rounded-lg text-sm font-medium`}>
                      {area.name}
                    </span>
                    <span className="text-sm font-semibold" style={{ color: template.colors.text }}>
                      {area.years}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl shadow-lg flex flex-col justify-center items-center" style={{
              background: `linear-gradient(135deg, ${template.colors.primary}, ${template.colors.secondary})`
            }}>
              <div className="text-4xl font-bold text-white mb-2">
                {cvData.experienceSummary.totalExperience}
              </div>
              <div className="text-white text-center opacity-90">
                {cvData.experienceSummary.totalExperienceLabel}
              </div>
            </div>
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Professional Experience */}
          <div className="md:col-span-2">
            <section>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2" style={{
                color: template.colors.primary,
                borderColor: template.colors.secondary
              }}>
                PROFESSIONAL EXPERIENCE
              </h2>
              <div className="space-y-6">
                {cvData.experiences.map((exp, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold" style={{ color: template.colors.primary }}>
                        {exp.title}
                      </h3>
                      <span className="text-sm whitespace-nowrap ml-4" style={{ color: template.colors.textLight }}>
                        {exp.date}
                      </span>
                    </div>
                    <p className="font-semibold mb-4" style={{ color: template.colors.secondary }}>
                      {exp.company}
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4" style={{ color: template.colors.text }}>
                      {exp.responsibilities.map((resp, rIndex) => (
                        <li key={rIndex}>{resp}</li>
                      ))}
                    </ul>
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-3 border-t" style={{ borderColor: `${template.colors.textLight}20` }}>
                        {exp.technologies.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: `${template.colors.secondary}15`,
                              color: template.colors.primary
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Skills, Education, Languages */}
          <div className="space-y-6">
            {/* Technical Skills */}
            <section className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{
                color: template.colors.primary,
                borderColor: template.colors.secondary
              }}>
                SKILLS
              </h2>
              <ul className="space-y-2 text-sm" style={{ color: template.colors.text }}>
                {cvData.technicalSkills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2" style={{ color: template.colors.secondary }}>•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Education */}
            <section className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{
                color: template.colors.primary,
                borderColor: template.colors.secondary
              }}>
                EDUCATION
              </h2>
              <div className="space-y-4">
                {cvData.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-sm" style={{ color: template.colors.text }}>
                      {edu.degree}
                    </h3>
                    {edu.institution && (
                      <p className="text-xs" style={{ color: template.colors.textLight }}>
                        {edu.institution}
                      </p>
                    )}
                    {edu.period && (
                      <p className="text-xs" style={{ color: template.colors.textLight }}>
                        {edu.period}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{
                color: template.colors.primary,
                borderColor: template.colors.secondary
              }}>
                LANGUAGES
              </h2>
              <div className="space-y-3">
                {cvData.languages.map((lang, index) => (
                  <div key={index}>
                    <div className="font-semibold text-sm" style={{ color: template.colors.text }}>
                      {lang.language}
                    </div>
                    <div className="text-xs" style={{ color: template.colors.textLight }}>
                      {lang.level}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
