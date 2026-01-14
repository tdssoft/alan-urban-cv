import { Mail, Phone, MapPin } from "lucide-react";
import { ExperienceItem } from "@/components/resume/ExperienceItem";
import { CVData } from "@/data/cvData";

interface CVTemplateProps {
  data: CVData;
}

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

export const CVTemplate = ({ data }: CVTemplateProps) => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">{data.name}</h1>
          <h2 className="text-xl text-gray-700">{data.title}</h2>
          <div className="flex flex-col md:flex-row gap-3 text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{data.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{data.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{data.location}</span>
            </div>
          </div>
        </header>

        {/* Main content grid */}
        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          {/* Left column - Main content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-6">EXPERIENCE SUMMARY</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Core Technologies</h3>
                  <div className="space-y-2">
                    {data.experienceSummary.coreTechnologies.map((tech, index) => (
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
                    {data.experienceSummary.developmentAreas.map((area, index) => (
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
                    <h3 className="text-2xl font-bold text-purple-800">{data.experienceSummary.totalExperience}</h3>
                    <p className="text-purple-600 font-medium">{data.experienceSummary.totalExperienceLabel}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">PROFILE</h2>
              <p className="text-gray-700 leading-relaxed">{data.profile}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-6">PROFESSIONAL EXPERIENCE</h2>
              <div className="space-y-6">
                {data.experiences.map((exp, index) => (
                  <ExperienceItem
                    key={index}
                    title={exp.title}
                    company={exp.company}
                    date={exp.date}
                    responsibilities={exp.responsibilities}
                    technologies={exp.technologies}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Right column - Skills, Education, and Languages */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">KEY TECHNICAL SKILLS</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {data.technicalSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">EDUCATION</h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-semibold">{edu.degree}</h3>
                    {edu.period && <p className="text-gray-700">{edu.period}</p>}
                    {edu.institution && <p className="text-gray-700">{edu.institution}</p>}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">LANGUAGES</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {data.languages.map((lang, index) => (
                  <li key={index}>
                    {lang.language} ({lang.level})
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
