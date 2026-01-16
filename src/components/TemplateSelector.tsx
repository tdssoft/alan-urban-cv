import { useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cvTemplates, CVTemplate } from '@/types/cvTemplates';
import { useCVEdit } from '@/contexts/CVEditContext';

export function TemplateSelector() {
  const [open, setOpen] = useState(false);
  const { selectedTemplateId, setSelectedTemplate } = useCVEdit();

  const handleTemplateSelect = (template: CVTemplate) => {
    setSelectedTemplate(template.id);
    setOpen(false);
  };

  const currentTemplate = cvTemplates.find(t => t.id === selectedTemplateId) || cvTemplates[0];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 print:hidden"
        >
          <Palette className="h-4 w-4" />
          Szablon
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Wybierz szablon CV</DialogTitle>
          <DialogDescription>
            Wybierz jeden z dostępnych szablonów, aby zmienić wygląd swojego CV
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {cvTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleTemplateSelect(template)}
              className={`
                relative p-4 rounded-lg border-2 transition-all text-left
                hover:shadow-lg hover:scale-[1.02]
                ${
                  selectedTemplateId === template.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }
              `}
            >
              {selectedTemplateId === template.id && (
                <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
              )}
              <div className="flex items-start gap-3">
                <div className="text-4xl">{template.preview}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
                  <p className="text-sm text-gray-600">{template.description}</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="text-xs text-gray-500">
                  {selectedTemplateId === template.id ? (
                    <span className="text-blue-600 font-medium">Aktualnie wybrany</span>
                  ) : (
                    <span>Kliknij, aby wybrać</span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>Aktualny szablon:</strong> {currentTemplate.name}
          </p>
          <p className="text-xs text-blue-700 mt-1">
            Zmiany szablonu są zapisywane automatycznie w przeglądarce
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
