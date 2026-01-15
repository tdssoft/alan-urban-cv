import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useCVEdit } from '@/contexts/CVEditContext';

interface ProfileEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProfileEditDialog: React.FC<ProfileEditDialogProps> = ({
  open,
  onOpenChange
}) => {
  const { cvData, updateProfile } = useCVEdit();
  const [profile, setProfile] = useState('');

  useEffect(() => {
    if (open) {
      setProfile(cvData.profile);
    }
  }, [open, cvData.profile]);

  const handleSave = () => {
    updateProfile(profile);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edytuj profil zawodowy</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="profile">Opis profilu</Label>
            <Textarea
              id="profile"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              placeholder="Opisz swoje doświadczenie i umiejętności..."
              className="min-h-[200px]"
            />
            <p className="text-sm text-gray-500">
              {profile.length} znaków
            </p>
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
