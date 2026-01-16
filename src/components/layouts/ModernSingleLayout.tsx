import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CVData } from '@/data/cvData';
import { CVTemplate } from '@/types/cvTemplates';

interface ModernSingleLayoutProps {
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
  return colorMap[color] || 'bg-green-500';
};

export const ModernSingleLayout: React.FC<ModernSingleLayoutProps> = ({
  cvData,
  template,
}) => {
  return (
    <div className="min-h-screen p-8 md:p-12" style={{ backgroundColor: template.colors.background }}>
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h1 className="text-5xl font-bold mb-3" style={{ color: template.colors.primary }}>
            {cvData.name}
          </h1>
          <h2 className="text-2xl mb-6" style={{ color: template.colors.textLight }}>
            {cvData.title}
          </h2>
          <div className="flex flex-wrap gap-4" style={{ color: template.colors.text }}>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${template.colors.primary}15` }}>
                <Mail className="w-4 h-4" style={{ color: template.colors.primary }} />
              </div>
              <span>{cvData.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${template.colors.primary}15` }}>
                <Phone className="w-4 h-4" style={{ color: template.colors.primary }} />
              </div>
              <span>{cvData.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${template.colors.primary}15` }}>
                <MapPin className="w-4 h-4" style={{ color: template.colors.primary }} />
              </div>
              <span>{cvData.location}</span>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center" style={{ color: template.colors.primary }}>
            <span className="w-1 h-8 rounded mr-3" style={{ backgroundColor: template.colors.secondary }}></span>
            PROFILE
          </h2>
          <p className="leading-relaxed text-lg" style={{ color: template.colors.text }}>
            {cvData.profile}
          </p>
        </div>

        {/* Experience Summary Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: template.colors.primary }}>
            <span className="w-1 h-8 rounded mr-3" style={{ backgroundColor: template.colors.secondary }}></span>
            EXPERIENCE SUMMARY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl border-2" style={{ borderColor: template.colors.secondary }}>
              <h3 className="font-bold mb-4" style={{ color: template.colors.primary }}>Core Technologies</h3>
              <div className="space-y-3">
                {cvData.experienceSummary.coreTechnologies.map((tech, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className={`${getColorClass(tech.color)} text-white px-3 py-1.5 rounded-lg text-sm font-medium`}>
                      {tech.name}
                    </span>
                    <span className="font-semibold" style={{ color: template.colors.text }}>{tech.years}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl border-2" style={{ borderColor: template.colors.accent }}>
              <h3 className="font-bold mb-4" style={{ color: template.colors.primary }}>Development Areas</h3>
              <div className="space-y-3">
                {cvData.experienceSummary.developmentAreas.map((area, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className={`${getColorClass(area.color)} text-white px-3 py-1.5 rounded-lg text-sm font-medium`}>
                      {area.name}
                    </span>
                    <span className="font-semibold" style={{ color: template.colors.text }}>{area.years}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl text-center" style={{
            background: `linear-gradient(135deg, ${template.colors.primary}, ${template.colors.secondary})`
          }}>
            <div className="text-4xl font-bold text-white mb-2">
              {cvData.experienceSummary.totalExperience}
            </div>
            <div className="text-white text-lg">
              {cvData.experienceSummary.totalExperienceLabel}
            </div>
          </div>
        </div>

        {/* Professional Experience Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: template.colors.primary }}>
            <span className="w-1 h-8 rounded mr-3" style={{ backgroundColor: template.colors.secondary }}></span>
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-6">
            {cvData.experiences.map((exp, index) => (
              <div key={index} className="pb-6 border-b last:border-b-0" style={{ borderColor: `${template.colors.textLight}20` }}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold" style={{ color: template.colors.primary }}>
                    {exp.title}
                  </h3>
                  <span className="text-sm px-3 py-1 rounded-full" style={{
                    backgroundColor: `${template.colors.secondary}20`,
                    color: template.colors.primary
                  }}>
                    {exp.date}
                  </span>
                </div>
                <p className="font-semibold mb-4" style={{ color: template.colors.secondary }}>
                  {exp.company}
                </p>
                <ul className="space-y-2 mb-4" style={{ color: template.colors.text }}>
                  {exp.responsibilities.map((resp, rIndex) => (
                    <li key={rIndex} className="flex items-start">
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: template.colors.secondary }}></span>
                      {resp}
                    </li>
                  ))}
                </ul>
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${template.colors.accent}30`,
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
        </div>

        {/* Bottom Grid - Skills, Education, Languages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Technical Skills */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center" style={{ color: template.colors.primary }}>
              <span className="w-1 h-6 rounded mr-2" style={{ backgroundColor: template.colors.secondary }}></span>
              SKILLS
            </h2>
            <div className="space-y-2">
              {cvData.technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-start text-sm" style={{ color: template.colors.text }}>
                  <span className="mr-2 mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: template.colors.secondary }}></span>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center" style={{ color: template.colors.primary }}>
              <span className="w-1 h-6 rounded mr-2" style={{ backgroundColor: template.colors.secondary }}></span>
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
          </div>

          {/* Languages */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center" style={{ color: template.colors.primary }}>
              <span className="w-1 h-6 rounded mr-2" style={{ backgroundColor: template.colors.secondary }}></span>
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
          </div>
        </div>
      </div>
    </div>
  );
};
