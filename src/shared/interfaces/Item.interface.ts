export interface Item {
    id: number;
    name: string;
    description: string;
}
  
export interface ItemFormProps {
    onAddItem: (item: Item) => void;
    onEditItem: (item: Item | null) => void;
    editingItem?: Item | null;
}

export interface ItemListProps {
  items: Item[];
  onDeleteItem: (id: number) => void;
  onEdit: (item: Item) => void;
}