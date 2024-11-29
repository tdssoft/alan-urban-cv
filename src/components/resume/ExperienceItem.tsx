import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  date,
  responsibilities
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
    </div>
  );
};