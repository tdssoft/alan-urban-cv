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
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, X } from 'lucide-react';
import { ExperienceData } from '@/data/cvData';

interface ExperienceEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  experience: ExperienceData | null;
  onSave: (experience: ExperienceData) => void;
  mode: 'add' | 'edit';
}

export const ExperienceEditDialog: React.FC<ExperienceEditDialogProps> = ({
  open,
  onOpenChange,
  experience,
  onSave,
  mode
}) => {
  const [formData, setFormData] = useState<ExperienceData>({
    title: '',
    company: '',
    date: '',
    responsibilities: [''],
    technologies: []
  });

  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    if (open) {
      if (mode === 'edit' && experience) {
        setFormData({
          ...experience,
          responsibilities: [...experience.responsibilities],
          technologies: [...experience.technologies]
        });
      } else {
        setFormData({
          title: '',
          company: '',
          date: '',
          responsibilities: [''],
          technologies: []
        });
      }
      setNewTech('');
    }
  }, [open, experience, mode]);

  const handleSave = () => {
    // Filter out empty responsibilities
    const cleanedData = {
      ...formData,
      responsibilities: formData.responsibilities.filter(r => r.trim() !== '')
    };
    onSave(cleanedData);
    onOpenChange(false);
  };

  const addResponsibility = () => {
    setFormData(prev => ({
      ...prev,
      responsibilities: [...prev.responsibilities, '']
    }));
  };

  const updateResponsibility = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      responsibilities: prev.responsibilities.map((r, i) => i === index ? value : r)
    }));
  };

  const removeResponsibility = (index: number) => {
    if (formData.responsibilities.length > 1) {
      setFormData(prev => ({
        ...prev,
        responsibilities: prev.responsibilities.filter((_, i) => i !== index)
      }));
    }
  };

  const addTechnology = () => {
    if (newTech.trim()) {
      setFormData(prev => ({
        ...prev,
        technologies: [...prev.technologies, newTech.trim()]
      }));
      setNewTech('');
    }
  };

  const removeTechnology = (index: number) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index)
    }));
  };

  const handleTechKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTechnology();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {mode === 'add' ? 'Dodaj doświadczenie' : 'Edytuj doświadczenie'}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Stanowisko</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Fullstack Developer"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">Okres</Label>
              <Input
                id="date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                placeholder="June 2022 - Present"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="company">Firma</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              placeholder="Company Name (Industry), Location"
            />
          </div>

          {/* Responsibilities */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-base font-semibold">Obowiązki</Label>
              <Button variant="outline" size="sm" onClick={addResponsibility}>
                <Plus className="h-4 w-4 mr-1" /> Dodaj
              </Button>
            </div>

            <div className="space-y-2">
              {formData.responsibilities.map((resp, index) => (
                <div key={index} className="flex gap-2 items-start">
                  <Textarea
                    value={resp}
                    onChange={(e) => updateResponsibility(index, e.target.value)}
                    placeholder="Opisz swoje obowiązki i osiągnięcia..."
                    className="flex-1 min-h-[60px]"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeResponsibility(index)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 shrink-0"
                    disabled={formData.responsibilities.length <= 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Technologie</Label>

            <div className="flex gap-2">
              <Input
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                onKeyPress={handleTechKeyPress}
                placeholder="Dodaj technologię..."
                className="flex-1"
              />
              <Button variant="outline" onClick={addTechnology}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {formData.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tech}
                  <button
                    onClick={() => removeTechnology(index)}
                    className="hover:bg-blue-200 rounded-full p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Anuluj
          </Button>
          <Button onClick={handleSave}>
            {mode === 'add' ? 'Dodaj' : 'Zapisz zmiany'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
