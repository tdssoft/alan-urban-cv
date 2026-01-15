import React, { ReactNode } from 'react';
import { Pencil, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCVEdit } from '@/contexts/CVEditContext';

interface EditableSectionProps {
  children: ReactNode;
  onEdit?: () => void;
  onAdd?: () => void;
  addLabel?: string;
  className?: string;
  editButtonPosition?: 'top-right' | 'inline';
}

export const EditableSection: React.FC<EditableSectionProps> = ({
  children,
  onEdit,
  onAdd,
  addLabel = 'Dodaj',
  className = '',
  editButtonPosition = 'top-right'
}) => {
  const { isEditMode } = useCVEdit();

  if (!isEditMode) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`group relative ${className}`}>
      {editButtonPosition === 'top-right' && onEdit && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-2 -right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-md hover:bg-blue-50 z-10"
          onClick={onEdit}
        >
          <Pencil className="h-4 w-4 text-blue-600" />
        </Button>
      )}

      <div className={`${isEditMode ? 'ring-1 ring-transparent hover:ring-blue-200 rounded-lg transition-all cursor-pointer' : ''}`}>
        {children}
      </div>

      {onAdd && (
        <Button
          variant="outline"
          size="sm"
          className="mt-3 w-full border-dashed border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-gray-500 hover:text-blue-600"
          onClick={onAdd}
        >
          <Plus className="h-4 w-4 mr-2" />
          {addLabel}
        </Button>
      )}
    </div>
  );
};

interface EditableItemProps {
  children: ReactNode;
  onEdit?: () => void;
  onDelete?: () => void;
  className?: string;
}

export const EditableItem: React.FC<EditableItemProps> = ({
  children,
  onEdit,
  onDelete,
  className = ''
}) => {
  const { isEditMode } = useCVEdit();

  if (!isEditMode) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`group relative ${className}`}>
      <div className="absolute -top-1 -right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        {onEdit && (
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 bg-white shadow-sm hover:bg-blue-50"
            onClick={onEdit}
          >
            <Pencil className="h-3 w-3 text-blue-600" />
          </Button>
        )}
        {onDelete && (
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 bg-white shadow-sm hover:bg-red-50"
            onClick={onDelete}
          >
            <span className="text-red-500 text-xs font-bold">×</span>
          </Button>
        )}
      </div>
      <div className="hover:bg-gray-50 rounded p-1 -m-1 transition-colors">
        {children}
      </div>
    </div>
  );
};
