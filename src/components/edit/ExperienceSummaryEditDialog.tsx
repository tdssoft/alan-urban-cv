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

interface ExperienceSummaryEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const COLORS = [
  { value: 'blue', label: 'Niebieski', class: 'bg-blue-500' },
  { value: 'orange', label: 'Pomarańczowy', class: 'bg-orange-500' },
  { value: 'green', label: 'Zielony', class: 'bg-green-500' },
  { value: 'emerald', label: 'Szmaragdowy', class: 'bg-emerald-500' },
  { value: 'purple', label: 'Fioletowy', class: 'bg-purple-500' },
  { value: 'indigo', label: 'Indygo', class: 'bg-indigo-500' },
  { value: 'yellow', label: 'Żółty', class: 'bg-yellow-500' },
];

export const ExperienceSummaryEditDialog: React.FC<ExperienceSummaryEditDialogProps> = ({
  open,
  onOpenChange
}) => {
  const { cvData, updateExperienceSummary } = useCVEdit();

  const [coreTechnologies, setCoreTechnologies] = useState<Array<{ name: string; years: string; color: string }>>([]);
  const [developmentAreas, setDevelopmentAreas] = useState<Array<{ name: string; years: string; color: string }>>([]);
  const [totalExperience, setTotalExperience] = useState('');
  const [totalExperienceLabel, setTotalExperienceLabel] = useState('');

  useEffect(() => {
    if (open) {
      setCoreTechnologies([...cvData.experienceSummary.coreTechnologies]);
      setDevelopmentAreas([...cvData.experienceSummary.developmentAreas]);
      setTotalExperience(cvData.experienceSummary.totalExperience);
      setTotalExperienceLabel(cvData.experienceSummary.totalExperienceLabel);
    }
  }, [open, cvData.experienceSummary]);

  const handleSave = () => {
    updateExperienceSummary({
      coreTechnologies,
      developmentAreas,
      totalExperience,
      totalExperienceLabel
    });
    onOpenChange(false);
  };

  const addCoreTech = () => {
    setCoreTechnologies([...coreTechnologies, { name: '', years: '', color: 'blue' }]);
  };

  const updateCoreTech = (index: number, field: string, value: string) => {
    const updated = coreTechnologies.map((tech, i) =>
      i === index ? { ...tech, [field]: value } : tech
    );
    setCoreTechnologies(updated);
  };

  const removeCoreTech = (index: number) => {
    setCoreTechnologies(coreTechnologies.filter((_, i) => i !== index));
  };

  const addDevArea = () => {
    setDevelopmentAreas([...developmentAreas, { name: '', years: '', color: 'emerald' }]);
  };

  const updateDevArea = (index: number, field: string, value: string) => {
    const updated = developmentAreas.map((area, i) =>
      i === index ? { ...area, [field]: value } : area
    );
    setDevelopmentAreas(updated);
  };

  const removeDevArea = (index: number) => {
    setDevelopmentAreas(developmentAreas.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edytuj podsumowanie doświadczenia</DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          {/* Total Experience */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-purple-50 rounded-lg">
            <div className="grid gap-2">
              <Label htmlFor="totalExperience">Całkowite doświadczenie</Label>
              <Input
                id="totalExperience"
                value={totalExperience}
                onChange={(e) => setTotalExperience(e.target.value)}
                placeholder="10+ Years"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="totalExperienceLabel">Etykieta</Label>
              <Input
                id="totalExperienceLabel"
                value={totalExperienceLabel}
                onChange={(e) => setTotalExperienceLabel(e.target.value)}
                placeholder="Total Experience"
              />
            </div>
          </div>

          {/* Core Technologies */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-lg font-semibold">Główne technologie</Label>
              <Button variant="outline" size="sm" onClick={addCoreTech}>
                <Plus className="h-4 w-4 mr-1" /> Dodaj
              </Button>
            </div>

            <div className="space-y-2">
              {coreTechnologies.map((tech, index) => (
                <div key={index} className="flex gap-2 items-center p-2 bg-blue-50 rounded-lg">
                  <Input
                    value={tech.name}
                    onChange={(e) => updateCoreTech(index, 'name', e.target.value)}
                    placeholder="React"
                    className="flex-1"
                  />
                  <Input
                    value={tech.years}
                    onChange={(e) => updateCoreTech(index, 'years', e.target.value)}
                    placeholder="5y"
                    className="w-24"
                  />
                  <Select
                    value={tech.color}
                    onValueChange={(value) => updateCoreTech(index, 'color', value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {COLORS.map((color) => (
                        <SelectItem key={color.value} value={color.value}>
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded ${color.class}`} />
                            {color.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeCoreTech(index)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Development Areas */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-lg font-semibold">Obszary rozwoju</Label>
              <Button variant="outline" size="sm" onClick={addDevArea}>
                <Plus className="h-4 w-4 mr-1" /> Dodaj
              </Button>
            </div>

            <div className="space-y-2">
              {developmentAreas.map((area, index) => (
                <div key={index} className="flex gap-2 items-center p-2 bg-green-50 rounded-lg">
                  <Input
                    value={area.name}
                    onChange={(e) => updateDevArea(index, 'name', e.target.value)}
                    placeholder="Fullstack"
                    className="flex-1"
                  />
                  <Input
                    value={area.years}
                    onChange={(e) => updateDevArea(index, 'years', e.target.value)}
                    placeholder="5y"
                    className="w-24"
                  />
                  <Select
                    value={area.color}
                    onValueChange={(value) => updateDevArea(index, 'color', value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {COLORS.map((color) => (
                        <SelectItem key={color.value} value={color.value}>
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded ${color.class}`} />
                            {color.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeDevArea(index)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
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
