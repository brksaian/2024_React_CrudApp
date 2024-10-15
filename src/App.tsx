import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

const App: React.FC = () => {

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return <div>Erro: Contexto não encontrado!</div>;
  }

  const { isDark, toggleTheme } = themeContext;

  return (
    <div className={`${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'} min-h-screen`}>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gerenciador de Itens</h1>
          <button onClick={toggleTheme} className="p-2 bg-blue-500 text-white rounded">
            {isDark ? 'Tema Claro' : 'Tema Escuro'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
