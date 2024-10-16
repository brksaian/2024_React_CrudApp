import React from 'react';
import { ItemListProps } from '../shared/interfaces';

const ItemList: React.FC<ItemListProps> = ({ items, onDeleteItem, onEdit }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex justify-between items-center p-4 border">
          <div>
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p>{item.description}</p>
          </div>
          <div className="flex space-x-2">
            <button onClick={() => onEdit(item)} className="bg-yellow-500 p-2 rounded text-white">
              Editar
            </button>
            <button onClick={() => onDeleteItem(item.id)} className="bg-red-500 p-2 rounded text-white">
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
