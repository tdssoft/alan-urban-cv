import { useState } from 'react';
import { FileText, Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useCVEdit } from '@/contexts/CVEditContext';

export function VersionSelector() {
  const [open, setOpen] = useState(false);
  const { availableVersions, selectedVersionId, setSelectedVersion } = useCVEdit();

  if (!availableVersions || availableVersions.length <= 1) {
    return null;
  }

  const currentVersion = availableVersions.find(v => v.id === selectedVersionId) || availableVersions[0];

  const handleVersionSelect = (versionId: string) => {
    setSelectedVersion(versionId);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 print:hidden"
        >
          <FileText className="h-4 w-4" />
          {currentVersion.label}
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Wersja CV</DialogTitle>
          <DialogDescription>
            Wybierz wersje CV dopasowana do klienta
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-4">
          {availableVersions.map((version) => (
            <button
              key={version.id}
              onClick={() => handleVersionSelect(version.id)}
              className={`
                relative p-4 rounded-lg border-2 transition-all text-left
                hover:shadow-md hover:scale-[1.01]
                ${
                  selectedVersionId === version.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }
              `}
            >
              {selectedVersionId === version.id && (
                <div className="absolute top-3 right-3 bg-blue-500 text-white rounded-full p-1">
                  <Check className="h-3 w-3" />
                </div>
              )}
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold bg-gray-100 px-2 py-1 rounded">
                  {version.label}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{version.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{version.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-xs text-amber-800">
            Zmiana wersji zresetuje lokalne edycje. Kazda wersja ma wlasny zapis.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
