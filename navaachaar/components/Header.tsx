
import React from 'react';

interface HeaderProps {
  setView: (view: 'home' | 'add' | 'query') => void;
  currentView: 'home' | 'add' | 'query';
}

const NavLink: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-300 ${
      isActive
        ? 'bg-orange-500 text-white shadow-md'
        : 'text-gray-700 hover:bg-orange-100'
    }`}
  >
    {label}
  </button>
);

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setView('home')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">Navaachaar</h1>
        </div>
        <nav className="flex items-center space-x-2 sm:space-x-4">
          <NavLink label="Home" isActive={currentView === 'home'} onClick={() => setView('home')} />
          <NavLink label="Add Service" isActive={currentView === 'add'} onClick={() => setView('add')} />
          <NavLink label="Query" isActive={currentView === 'query'} onClick={() => setView('query')} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
