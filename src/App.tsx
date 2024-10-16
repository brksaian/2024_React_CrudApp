import React, { useContext, useEffect, useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import { ThemeContext } from './context/ThemeContext';
import { Item } from './shared/interfaces';

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState<'name' | 'description'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const itemsPerPage = 10;

  const themeContext = useContext(ThemeContext);
  const { isDark, toggleTheme } = themeContext || { isDark: false, toggleTheme: () => {} };

  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('items', JSON.stringify(items));
    }
  }, [items]);

  const handleAddItem = (item: Item) => {
    setItems([...items, item]);
    setIsModalOpen(false);
  };

  const handleEditItem = (updatedItem: Item | null) => {
    if (updatedItem) {
      setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    }
    setEditingItem(null);
    setIsModalOpen(false);
  };

  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEdit = (item: Item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleSort = (key: 'name' | 'description') => {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(order);
    const sortedItems = [...items].sort((a, b) => {
      const comparison = a[key].localeCompare(b[key]);
      return order === 'asc' ? comparison : -comparison;
    });
    setItems(sortedItems);
  };

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className={`${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'} min-h-screen`}>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gerenciador de Itens</h1>
          <button onClick={toggleTheme} className="p-2 bg-blue-500 text-white rounded">
            {isDark ? 'Tema Claro' : 'Tema Escuro'}
          </button>
        </div>

        <input
          type="text"
          placeholder="Pesquisar por nome ou descrição"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`p-2 border rounded my-4 ${isDark ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
        />

        <div className="flex justify-between my-4">
          <button
            onClick={() => handleSort('name')}
            className={`p-2 rounded ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
          >
            Ordenar por Nome ({sortOrder === 'asc' && sortKey === 'name' ? 'Asc' : 'Desc'})
          </button>
          <button
            onClick={() => handleSort('description')}
            className={`p-2 rounded ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
          >
            Ordenar por Descrição ({sortOrder === 'asc' && sortKey === 'description' ? 'Asc' : 'Desc'})
          </button>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="p-2 bg-green-500 text-white rounded my-4"
        >
          Adicionar Item
        </button>

        <ItemList items={paginatedItems} onDeleteItem={handleDeleteItem} onEdit={handleEdit} />

        <div className="flex justify-center space-x-4 mt-4">
          {Array(Math.ceil(filteredItems.length / itemsPerPage))
            .fill(null)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`p-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {index + 1}
              </button>
            ))}
        </div>

        {isModalOpen && (
          <ItemForm
            onAddItem={handleAddItem}
            onEditItem={handleEditItem}
            editingItem={editingItem}
          />
        )}
      </div>
    </div>
  );
};

export default App;
