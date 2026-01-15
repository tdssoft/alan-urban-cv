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
import { useCVEdit } from '@/contexts/CVEditContext';

interface PersonalInfoEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PersonalInfoEditDialog: React.FC<PersonalInfoEditDialogProps> = ({
  open,
  onOpenChange
}) => {
  const { cvData, updatePersonalInfo } = useCVEdit();

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: ''
  });

  useEffect(() => {
    if (open) {
      setFormData({
        name: cvData.name,
        title: cvData.title,
        email: cvData.email,
        phone: cvData.phone,
        location: cvData.location
      });
    }
  }, [open, cvData]);

  const handleSave = () => {
    updatePersonalInfo(formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edytuj dane osobowe</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Imię i nazwisko</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Jan Kowalski"
            />
          </div>

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
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="email@example.com"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Telefon</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="+48 123 456 789"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="location">Lokalizacja</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              placeholder="Warszawa, Polska"
            />
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
