import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
  technologies?: string[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  date,
  responsibilities,
  technologies
}) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 italic">{date}</p>
      </div>
      <p className="text-gray-600 mb-2">{company}</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      {technologies && technologies.length > 0 && (
        <div className="mt-3">
          <p className="text-sm font-semibold text-gray-600 mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};