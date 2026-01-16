export type TemplateLayout =
  | 'sidebar-left'      // Dark sidebar on left with contact/skills
  | 'sidebar-right'     // Dark sidebar on right
  | 'header-classic'    // Large header, two columns below
  | 'modern-single'     // Single column, modern cards
  | 'traditional';      // Traditional professional layout

export interface CVTemplate {
  id: string;
  name: string;
  description: string;
  preview: string;
  layout: TemplateLayout;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    textLight: string;
  };
  // Layout-specific configurations
  sidebarConfig?: {
    backgroundColor: string;
    textColor: string;
    width: string;
  };
  headerConfig?: {
    backgroundColor: string;
    textColor: string;
    style: 'gradient' | 'solid' | 'outlined';
  };
}

export const cvTemplates: CVTemplate[] = [
  {
    id: 'sidebar-dark-blue',
    name: 'Professional Sidebar',
    description: 'Klasyczny układ z ciemnym panelem bocznym - idealny dla profesjonalistów',
    preview: '🔵',
    layout: 'sidebar-left',
    colors: {
      primary: '#1e40af',
      secondary: '#3b82f6',
      accent: '#60a5fa',
      background: '#ffffff',
      text: '#1f2937',
      textLight: '#6b7280',
    },
    sidebarConfig: {
      backgroundColor: 'from-gray-800 to-gray-900',
      textColor: 'text-white',
      width: 'w-80',
    },
  },
  {
    id: 'header-orange-modern',
    name: 'Modern Orange',
    description: 'Nowoczesny układ z kolorowym nagłówkiem i kartami',
    preview: '🟠',
    layout: 'header-classic',
    colors: {
      primary: '#f97316',
      secondary: '#fb923c',
      accent: '#fdba74',
      background: '#f9fafb',
      text: '#111827',
      textLight: '#6b7280',
    },
    headerConfig: {
      backgroundColor: 'from-orange-400 to-orange-500',
      textColor: 'text-white',
      style: 'gradient',
    },
  },
  {
    id: 'sidebar-elegant-purple',
    name: 'Elegant Purple',
    description: 'Elegancki układ z fioletowym panelem bocznym',
    preview: '🟣',
    layout: 'sidebar-left',
    colors: {
      primary: '#7c3aed',
      secondary: '#8b5cf6',
      accent: '#a78bfa',
      background: '#ffffff',
      text: '#1f2937',
      textLight: '#6b7280',
    },
    sidebarConfig: {
      backgroundColor: 'from-purple-700 to-purple-900',
      textColor: 'text-white',
      width: 'w-80',
    },
  },
  {
    id: 'modern-green-cards',
    name: 'Modern Green',
    description: 'Nowoczesny układ z zielonymi kartami i jedną kolumną',
    preview: '🟢',
    layout: 'modern-single',
    colors: {
      primary: '#059669',
      secondary: '#10b981',
      accent: '#34d399',
      background: '#f0fdf4',
      text: '#064e3b',
      textLight: '#047857',
    },
  },
  {
    id: 'traditional-blue',
    name: 'Traditional Blue',
    description: 'Tradycyjny profesjonalny układ w klasycznym stylu',
    preview: '📘',
    layout: 'traditional',
    colors: {
      primary: '#1e3a8a',
      secondary: '#2563eb',
      accent: '#3b82f6',
      background: '#ffffff',
      text: '#1f2937',
      textLight: '#4b5563',
    },
  },
  {
    id: 'header-pink-creative',
    name: 'Creative Pink',
    description: 'Kreatywny układ z różowym nagłówkiem',
    preview: '🌸',
    layout: 'header-classic',
    colors: {
      primary: '#db2777',
      secondary: '#ec4899',
      accent: '#f472b6',
      background: '#fdf2f8',
      text: '#831843',
      textLight: '#9d174d',
    },
    headerConfig: {
      backgroundColor: 'from-pink-500 to-rose-500',
      textColor: 'text-white',
      style: 'gradient',
    },
  },
];

export const getTemplateById = (id: string): CVTemplate | undefined => {
  return cvTemplates.find(template => template.id === id);
};

export const getDefaultTemplate = (): CVTemplate => {
  return cvTemplates[0];
};
