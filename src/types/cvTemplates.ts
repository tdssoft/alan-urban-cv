export interface CVTemplate {
  id: string;
  name: string;
  description: string;
  preview: string;
  styles: {
    // Container styles
    container: string;
    // Header styles
    header: {
      container: string;
      name: string;
      title: string;
      contactInfo: string;
    };
    // Sidebar styles (for templates with sidebars)
    sidebar?: {
      container: string;
      sectionTitle: string;
      content: string;
    };
    // Main content area
    mainContent: {
      container: string;
      sectionTitle: string;
      sectionContent: string;
    };
    // Section styles
    section: {
      container: string;
      title: string;
      content: string;
    };
    // Badge/Tag styles
    badge: {
      container: string;
      text: string;
    };
    // Experience item styles
    experience: {
      container: string;
      title: string;
      company: string;
      date: string;
      description: string;
    };
  };
}

export const cvTemplates: CVTemplate[] = [
  {
    id: 'professional-blue',
    name: 'Professional Blue',
    description: 'Klasyczny szablon z niebieskim akcentem i eleganckim układem dwukolumnowym',
    preview: '🔵',
    styles: {
      container: 'bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen',
      header: {
        container: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 mb-8 rounded-lg shadow-lg',
        name: 'text-4xl font-bold mb-2',
        title: 'text-xl text-blue-100',
        contactInfo: 'text-blue-100 hover:text-white',
      },
      mainContent: {
        container: 'grid grid-cols-1 md:grid-cols-3 gap-8',
        sectionTitle: 'text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-300 pb-2',
        sectionContent: 'text-gray-700',
      },
      section: {
        container: 'bg-white rounded-lg shadow-md p-6 mb-6',
        title: 'text-xl font-semibold text-blue-800 mb-3',
        content: 'text-gray-700',
      },
      badge: {
        container: 'inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2',
        text: '',
      },
      experience: {
        container: 'mb-6 pb-6 border-b border-gray-200 last:border-b-0',
        title: 'text-lg font-semibold text-blue-900',
        company: 'text-blue-700 font-medium',
        date: 'text-gray-600 text-sm',
        description: 'text-gray-700',
      },
    },
  },
  {
    id: 'modern-orange',
    name: 'Modern Orange',
    description: 'Nowoczesny szablon z pomarańczowym nagłówkiem i przejrzystym układem',
    preview: '🟠',
    styles: {
      container: 'bg-gray-50 min-h-screen',
      header: {
        container: 'bg-gradient-to-r from-orange-400 to-orange-500 text-white p-8 rounded-2xl shadow-xl mb-8',
        name: 'text-5xl font-extrabold mb-2 tracking-tight',
        title: 'text-xl text-orange-50 font-light',
        contactInfo: 'text-orange-100 hover:text-white',
      },
      mainContent: {
        container: 'grid grid-cols-1 md:grid-cols-3 gap-6',
        sectionTitle: 'text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-orange-400',
        sectionContent: 'text-gray-600',
      },
      section: {
        container: 'bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100',
        title: 'text-xl font-bold text-orange-600 mb-4',
        content: 'text-gray-600',
      },
      badge: {
        container: 'inline-block px-3 py-1.5 rounded-lg text-sm font-medium mr-2 mb-2',
        text: '',
      },
      experience: {
        container: 'mb-6 pb-6 border-b border-gray-200 last:border-b-0',
        title: 'text-lg font-bold text-gray-800',
        company: 'text-orange-600 font-semibold',
        date: 'text-gray-500 text-sm',
        description: 'text-gray-600',
      },
    },
  },
  {
    id: 'elegant-dark',
    name: 'Elegant Dark',
    description: 'Elegancki szablon z ciemnym panelem bocznym i jasną treścią',
    preview: '⚫',
    styles: {
      container: 'bg-white min-h-screen',
      header: {
        container: 'bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-lg shadow-2xl mb-8',
        name: 'text-4xl font-bold mb-2',
        title: 'text-lg text-gray-300 font-light tracking-wide',
        contactInfo: 'text-gray-400 hover:text-white',
      },
      sidebar: {
        container: 'bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6 rounded-lg',
        sectionTitle: 'text-lg font-bold text-white mb-4 pb-2 border-b border-gray-600',
        content: 'text-gray-300',
      },
      mainContent: {
        container: 'grid grid-cols-1 md:grid-cols-3 gap-8',
        sectionTitle: 'text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-800 pb-2',
        sectionContent: 'text-gray-700',
      },
      section: {
        container: 'bg-gray-50 rounded-lg shadow-sm p-6 mb-6',
        title: 'text-xl font-semibold text-gray-900 mb-3',
        content: 'text-gray-700',
      },
      badge: {
        container: 'inline-block px-3 py-1 rounded text-sm font-medium mr-2 mb-2',
        text: '',
      },
      experience: {
        container: 'mb-6 pb-6 border-b border-gray-300 last:border-b-0',
        title: 'text-lg font-semibold text-gray-900',
        company: 'text-gray-700 font-medium',
        date: 'text-gray-600 text-sm',
        description: 'text-gray-700',
      },
    },
  },
  {
    id: 'minimal-green',
    name: 'Minimal Green',
    description: 'Minimalistyczny szablon z zielonymi akcentami',
    preview: '🟢',
    styles: {
      container: 'bg-gradient-to-br from-green-50 via-white to-emerald-50 min-h-screen',
      header: {
        container: 'bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 mb-8 rounded-xl shadow-lg',
        name: 'text-4xl font-bold mb-2',
        title: 'text-xl text-green-100',
        contactInfo: 'text-green-100 hover:text-white',
      },
      mainContent: {
        container: 'grid grid-cols-1 md:grid-cols-3 gap-8',
        sectionTitle: 'text-2xl font-bold text-green-900 mb-4 border-b-2 border-green-400 pb-2',
        sectionContent: 'text-gray-700',
      },
      section: {
        container: 'bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-green-500',
        title: 'text-xl font-semibold text-green-800 mb-3',
        content: 'text-gray-700',
      },
      badge: {
        container: 'inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2',
        text: '',
      },
      experience: {
        container: 'mb-6 pb-6 border-b border-gray-200 last:border-b-0',
        title: 'text-lg font-semibold text-green-900',
        company: 'text-green-700 font-medium',
        date: 'text-gray-600 text-sm',
        description: 'text-gray-700',
      },
    },
  },
  {
    id: 'creative-purple',
    name: 'Creative Purple',
    description: 'Kreatywny szablon z fioletowymi akcentami',
    preview: '🟣',
    styles: {
      container: 'bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-screen',
      header: {
        container: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 mb-8 rounded-2xl shadow-xl',
        name: 'text-4xl font-bold mb-2',
        title: 'text-xl text-purple-100',
        contactInfo: 'text-purple-100 hover:text-white',
      },
      mainContent: {
        container: 'grid grid-cols-1 md:grid-cols-3 gap-8',
        sectionTitle: 'text-2xl font-bold text-purple-900 mb-4 border-b-2 border-purple-400 pb-2',
        sectionContent: 'text-gray-700',
      },
      section: {
        container: 'bg-white rounded-xl shadow-md p-6 mb-6',
        title: 'text-xl font-semibold text-purple-800 mb-3',
        content: 'text-gray-700',
      },
      badge: {
        container: 'inline-block px-3 py-1.5 rounded-lg text-sm font-medium mr-2 mb-2',
        text: '',
      },
      experience: {
        container: 'mb-6 pb-6 border-b border-gray-200 last:border-b-0',
        title: 'text-lg font-semibold text-purple-900',
        company: 'text-purple-700 font-medium',
        date: 'text-gray-600 text-sm',
        description: 'text-gray-700',
      },
    },
  },
];

export const getTemplateById = (id: string): CVTemplate | undefined => {
  return cvTemplates.find(template => template.id === id);
};

export const getDefaultTemplate = (): CVTemplate => {
  return cvTemplates[0]; // Professional Blue as default
};
