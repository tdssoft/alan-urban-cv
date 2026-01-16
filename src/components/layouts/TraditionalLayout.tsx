import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CVData } from '@/data/cvData';
import { CVTemplate } from '@/types/cvTemplates';

interface TraditionalLayoutProps {
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

export const TraditionalLayout: React.FC<TraditionalLayoutProps> = ({
  cvData,
  template,
}) => {
  return (
    <div className="min-h-screen bg-white p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-10 pb-6 border-b-4" style={{ borderColor: template.colors.primary }}>
          <h1 className="text-5xl font-bold mb-2" style={{ color: template.colors.primary }}>
            {cvData.name}
          </h1>
          <h2 className="text-2xl mb-4" style={{ color: template.colors.textLight }}>
            {cvData.title}
          </h2>
          <div className="flex flex-wrap gap-6 text-sm" style={{ color: template.colors.text }}>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" style={{ color: template.colors.secondary }} />
              <span>{cvData.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" style={{ color: template.colors.secondary }} />
              <span>{cvData.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: template.colors.secondary }} />
              <span>{cvData.location}</span>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Column - Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Experience Summary */}
            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase" style={{ color: template.colors.primary }}>
                Experience Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="border-l-4 pl-4" style={{ borderColor: template.colors.secondary }}>
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
                <div className="border-l-4 pl-4" style={{ borderColor: template.colors.accent }}>
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
              <div className="border-2 p-4 text-center" style={{ borderColor: template.colors.primary }}>
                <div className="text-3xl font-bold" style={{ color: template.colors.primary }}>
                  {cvData.experienceSummary.totalExperience}
                </div>
                <div className="text-sm" style={{ color: template.colors.textLight }}>
                  {cvData.experienceSummary.totalExperienceLabel}
                </div>
              </div>
            </section>

            {/* Profile */}
            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase" style={{ color: template.colors.primary }}>
                Profile
              </h2>
              <p className="leading-relaxed" style={{ color: template.colors.text }}>
                {cvData.profile}
              </p>
            </section>

            {/* Professional Experience */}
            <section>
              <h2 className="text-2xl font-bold mb-6 uppercase" style={{ color: template.colors.primary }}>
                Professional Experience
              </h2>
              <div className="space-y-6">
                {cvData.experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 pl-6 pb-6" style={{ borderColor: template.colors.secondary }}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold" style={{ color: template.colors.primary }}>
                        {exp.title}
                      </h3>
                      <span className="text-sm italic" style={{ color: template.colors.textLight }}>
                        {exp.date}
                      </span>
                    </div>
                    <p className="font-semibold mb-3" style={{ color: template.colors.secondary }}>
                      {exp.company}
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 mb-3" style={{ color: template.colors.text }}>
                      {exp.responsibilities.map((resp, rIndex) => (
                        <li key={rIndex}>{resp}</li>
                      ))}
                    </ul>
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mt-3">
                        <p className="text-xs font-semibold mb-2" style={{ color: template.colors.textLight }}>
                          Technologies:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, tIndex) => (
                            <span
                              key={tIndex}
                              className="px-2 py-1 text-xs border"
                              style={{
                                borderColor: template.colors.secondary,
                                color: template.colors.primary
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <section>
              <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 uppercase" style={{
                color: template.colors.primary,
                borderColor: template.colors.secondary
              }}>
                Skills
              </h2>
              <ul className="space-y-2 text-sm" style={{ color: template.colors.text }}>
                {cvData.technicalSkills.map((skill, index) => (
                  <li key={index} className="pl-4 border-l-2" style={{ borderColor: template.colors.accent }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 uppercase" style={{
                color: template.colors.primary,
                borderColor: template.colors.secondary
              }}>
                Education
              </h2>
              <div className="space-y-4">
                {cvData.education.map((edu, index) => (
                  <div key={index} className="pl-4 border-l-2" style={{ borderColor: template.colors.accent }}>
                    <h3 className="font-semibold text-sm" style={{ color: template.colors.text }}>
                      {edu.degree}
                    </h3>
                    {edu.institution && (
                      <p className="text-xs mt-1" style={{ color: template.colors.textLight }}>
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
            <section>
              <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 uppercase" style={{
                color: template.colors.primary,
                borderColor: template.colors.secondary
              }}>
                Languages
              </h2>
              <div className="space-y-3">
                {cvData.languages.map((lang, index) => (
                  <div key={index} className="pl-4 border-l-2" style={{ borderColor: template.colors.accent }}>
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
