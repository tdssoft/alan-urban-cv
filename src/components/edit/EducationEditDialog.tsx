import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2 } from 'lucide-react';
import { useCVEdit } from '@/contexts/CVEditContext';
import { CVData } from '@/data/cvData';

interface EducationEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EducationEditDialog: React.FC<EducationEditDialogProps> = ({
  open,
  onOpenChange
}) => {
  const { cvData, updateEducation } = useCVEdit();
  const [education, setEducation] = useState<CVData['education']>([]);

  useEffect(() => {
    if (open) {
      setEducation(cvData.education.map(e => ({ ...e })));
    }
  }, [open, cvData.education]);

  const handleSave = () => {
    // Filter out empty entries
    const cleanedEducation = education.filter(e => e.degree.trim() !== '');
    updateEducation(cleanedEducation);
    onOpenChange(false);
  };

  const addEducation = () => {
    setEducation([...education, { degree: '', period: '', institution: '' }]);
  };

  const updateEducationItem = (index: number, field: keyof CVData['education'][0], value: string) => {
    setEducation(education.map((e, i) =>
      i === index ? { ...e, [field]: value } : e
    ));
  };

  const removeEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edytuj wykształcenie</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex justify-between items-center">
            <Label className="text-base font-semibold">Wykształcenie</Label>
            <Button variant="outline" size="sm" onClick={addEducation}>
              <Plus className="h-4 w-4 mr-1" /> Dodaj
            </Button>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-medium text-gray-500">Pozycja {index + 1}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeEducation(index)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid gap-3">
                  <div className="grid gap-2">
                    <Label htmlFor={`degree-${index}`}>Kierunek / Stopień</Label>
                    <Input
                      id={`degree-${index}`}
                      value={edu.degree}
                      onChange={(e) => updateEducationItem(index, 'degree', e.target.value)}
                      placeholder="Computer Science, Master's degree"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="grid gap-2">
                      <Label htmlFor={`period-${index}`}>Okres (opcjonalnie)</Label>
                      <Input
                        id={`period-${index}`}
                        value={edu.period || ''}
                        onChange={(e) => updateEducationItem(index, 'period', e.target.value)}
                        placeholder="2016-02 - 2017-06"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor={`institution-${index}`}>Uczelnia (opcjonalnie)</Label>
                      <Input
                        id={`institution-${index}`}
                        value={edu.institution || ''}
                        onChange={(e) => updateEducationItem(index, 'institution', e.target.value)}
                        placeholder="University Name, City"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {education.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              Brak wpisów. Kliknij "Dodaj" aby dodać wykształcenie.
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Anuluj
          </Button>
          <Button onClick={handleSave}>
            Zapisz zmiany
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
