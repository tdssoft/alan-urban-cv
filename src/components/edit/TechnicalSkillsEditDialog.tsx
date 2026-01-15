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
import { Plus, Trash2, GripVertical } from 'lucide-react';
import { useCVEdit } from '@/contexts/CVEditContext';

interface TechnicalSkillsEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TechnicalSkillsEditDialog: React.FC<TechnicalSkillsEditDialogProps> = ({
  open,
  onOpenChange
}) => {
  const { cvData, updateTechnicalSkills } = useCVEdit();
  const [skills, setSkills] = useState<string[]>([]);

  useEffect(() => {
    if (open) {
      setSkills([...cvData.technicalSkills]);
    }
  }, [open, cvData.technicalSkills]);

  const handleSave = () => {
    // Filter out empty skills
    const cleanedSkills = skills.filter(s => s.trim() !== '');
    updateTechnicalSkills(cleanedSkills);
    onOpenChange(false);
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const updateSkill = (index: number, value: string) => {
    setSkills(skills.map((s, i) => i === index ? value : s));
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const moveSkill = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= skills.length) return;
    const newSkills = [...skills];
    const [removed] = newSkills.splice(fromIndex, 1);
    newSkills.splice(toIndex, 0, removed);
    setSkills(newSkills);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edytuj umiejętności techniczne</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex justify-between items-center">
            <Label className="text-base font-semibold">Lista umiejętności</Label>
            <Button variant="outline" size="sm" onClick={addSkill}>
              <Plus className="h-4 w-4 mr-1" /> Dodaj
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            Użyj formatu "Kategoria: umiejętność1, umiejętność2" dla lepszej czytelności
          </p>

          <div className="space-y-2">
            {skills.map((skill, index) => (
              <div key={index} className="flex gap-2 items-center group">
                <div className="flex flex-col gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-5 w-5 opacity-50 hover:opacity-100"
                    onClick={() => moveSkill(index, index - 1)}
                    disabled={index === 0}
                  >
                    <span className="text-xs">▲</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-5 w-5 opacity-50 hover:opacity-100"
                    onClick={() => moveSkill(index, index + 1)}
                    disabled={index === skills.length - 1}
                  >
                    <span className="text-xs">▼</span>
                  </Button>
                </div>
                <Input
                  value={skill}
                  onChange={(e) => updateSkill(index, e.target.value)}
                  placeholder="Front-end: React, JavaScript, TypeScript"
                  className="flex-1"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeSkill(index)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {skills.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              Brak umiejętności. Kliknij "Dodaj" aby dodać pierwszą.
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
