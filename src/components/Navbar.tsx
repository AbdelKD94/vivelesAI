import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-black">Portfolio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-black transition-colors">Accueil</a>
            <a href="#education" className="text-gray-700 hover:text-black transition-colors">Parcours</a>
            <a href="#skills" className="text-gray-700 hover:text-black transition-colors">Compétences</a>
            <a href="#projects" className="text-gray-700 hover:text-black transition-colors">Projets</a>
            <a href="#certifications" className="text-gray-700 hover:text-black transition-colors">Certifications</a>
            <a href="#watch" className="text-gray-700 hover:text-black transition-colors">Veille</a>
            <a href="https://docs.google.com/spreadsheets/d/xxx" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">Tableau de Synthèse</a>
            <a href="#contact" className="text-gray-700 hover:text-black transition-colors">Contact</a>
            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-50"
              >
                Accueil
              </a>
              <a
                href="#education"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-50"
              >
                Parcours
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-50"
              >
                Compétences
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-50"
              >
                Projets
              </a>
              <a
                href="#certifications"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-50"
              >
                Certifications
              </a>
              <a
                href="#watch"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-50"
              >
                Veille
              </a>
              <a
                href="https://docs.google.com/spreadsheets/d/xxx"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-50"
              >
                Tableau de Synthèse
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-50"
              >
                Contact
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md bg-black text-white hover:bg-gray-800"
              >
                Télécharger CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;