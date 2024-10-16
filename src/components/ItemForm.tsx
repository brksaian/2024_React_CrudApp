import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Item, ItemFormProps } from '../shared/interfaces';

const ItemForm: React.FC<ItemFormProps> = ({ onAddItem, onEditItem, editingItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const themeContext = useContext(ThemeContext);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const isDark = themeContext ? themeContext.isDark : false;

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setDescription(editingItem.description);
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    }
  }, [editingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description) return alert('Preencha todos os campos!');

    const newItem: Item = {
      id: editingItem ? editingItem.id : Date.now(),
      name,
      description,
    };

    if (editingItem) {
      onEditItem(newItem);
    } else {
      onAddItem(newItem);
    }

    setName('');
    setDescription('');

    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  };

  const closeForm = () => {
    onEditItem(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className={`p-6 rounded-lg shadow-lg w-96 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'} mb-4`}>
          {editingItem ? 'Editar Item' : 'Adicionar Item'}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            ref={nameInputRef}
            type="text"
            placeholder="Nome do item"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`p-2 border focus:outline-none ${isDark ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
          />
          <input
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`p-2 border focus:outline-none ${isDark ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className={`p-2 rounded ${isDark ? 'bg-blue-800 text-white' : 'bg-blue-500 text-white'}`}
            >
              {editingItem ? 'Editar' : 'Adicionar'}
            </button>
            <button
              onClick={closeForm}
              type="button"
              className="p-2 rounded bg-red-500 text-white"
            >
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemForm;
