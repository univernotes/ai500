import React, { useState } from 'react';
import { Menu, X, Sprout } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navs = [
    { name: 'Проблема', href: '#about' },
    { name: 'Демо', href: '#demo' },
    { name: 'Технологии', href: '#tech' },
    { name: 'Команда', href: '#team' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-agro-600 p-1.5 rounded-lg">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">AgroScore AI</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navs.map((nav) => (
              <a 
                key={nav.name} 
                href={nav.href} 
                className="text-gray-600 hover:text-agro-600 font-medium text-sm transition-colors"
              >
                {nav.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navs.map((nav) => (
              <a
                key={nav.name}
                href={nav.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-agro-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {nav.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};