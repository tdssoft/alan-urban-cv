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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Trash2 } from 'lucide-react';
import { useCVEdit } from '@/contexts/CVEditContext';
import { CVData } from '@/data/cvData';

interface LanguagesEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LANGUAGE_LEVELS = [
  { value: 'native', label: 'Ojczysty (native)' },
  { value: 'fluent', label: 'Biegły (fluent)' },
  { value: 'C2', label: 'C2 - Biegły' },
  { value: 'C1', label: 'C1 - Zaawansowany' },
  { value: 'B2', label: 'B2 - Wyższy średniozaawansowany' },
  { value: 'B1', label: 'B1 - Średniozaawansowany' },
  { value: 'A2', label: 'A2 - Niższy średniozaawansowany' },
  { value: 'A1', label: 'A1 - Początkujący' },
];

export const LanguagesEditDialog: React.FC<LanguagesEditDialogProps> = ({
  open,
  onOpenChange
}) => {
  const { cvData, updateLanguages } = useCVEdit();
  const [languages, setLanguages] = useState<CVData['languages']>([]);

  useEffect(() => {
    if (open) {
      setLanguages(cvData.languages.map(l => ({ ...l })));
    }
  }, [open, cvData.languages]);

  const handleSave = () => {
    // Filter out empty entries
    const cleanedLanguages = languages.filter(l => l.language.trim() !== '');
    updateLanguages(cleanedLanguages);
    onOpenChange(false);
  };

  const addLanguage = () => {
    setLanguages([...languages, { language: '', level: 'B2' }]);
  };

  const updateLanguageItem = (index: number, field: keyof CVData['languages'][0], value: string) => {
    setLanguages(languages.map((l, i) =>
      i === index ? { ...l, [field]: value } : l
    ));
  };

  const removeLanguage = (index: number) => {
    setLanguages(languages.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edytuj języki</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex justify-between items-center">
            <Label className="text-base font-semibold">Znajomość języków</Label>
            <Button variant="outline" size="sm" onClick={addLanguage}>
              <Plus className="h-4 w-4 mr-1" /> Dodaj
            </Button>
          </div>

          <div className="space-y-3">
            {languages.map((lang, index) => (
              <div key={index} className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex-1 grid gap-2">
                  <Input
                    value={lang.language}
                    onChange={(e) => updateLanguageItem(index, 'language', e.target.value)}
                    placeholder="Język"
                  />
                </div>

                <Select
                  value={lang.level}
                  onValueChange={(value) => updateLanguageItem(index, 'level', value)}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Poziom" />
                  </SelectTrigger>
                  <SelectContent>
                    {LANGUAGE_LEVELS.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeLanguage(index)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {languages.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              Brak języków. Kliknij "Dodaj" aby dodać język.
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
