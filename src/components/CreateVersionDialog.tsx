import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CreateVersionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateVersion: (name: string) => void;
}

export const CreateVersionDialog: React.FC<CreateVersionDialogProps> = ({
  open,
  onOpenChange,
  onCreateVersion,
}) => {
  const [versionName, setVersionName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = versionName.trim();
    if (!trimmed) return;
    onCreateVersion(trimmed);
    setVersionName('');
    onOpenChange(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setVersionName('');
    }
    onOpenChange(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Utwórz nową wersję CV</DialogTitle>
            <DialogDescription>
              Podaj nazwę nowej wersji. Zostanie utworzona kopia bieżącego CV, którą będziesz mógł edytować.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Label htmlFor="version-name">Nazwa wersji</Label>
            <Input
              id="version-name"
              value={versionName}
              onChange={(e) => setVersionName(e.target.value)}
              placeholder="np. Wersja dla klienta X"
              className="mt-2"
              autoFocus
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>
              Anuluj
            </Button>
            <Button type="submit" disabled={!versionName.trim()}>
              Utwórz wersję
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
