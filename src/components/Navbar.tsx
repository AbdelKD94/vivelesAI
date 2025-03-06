import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#' },
    { name: 'Parcours', href: '#education' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Veille', href: '#watch' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-slate-900/95 via-indigo-900/95 to-slate-900/95 shadow-lg shadow-indigo-500/10 border-b border-indigo-200/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-xl font-semibold bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 text-transparent bg-clip-text">
              Portfolio
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className={`relative px-3 py-2 text-sm font-medium text-indigo-100 hover:text-white transition-colors duration-300 rounded-md group`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute inset-0 rounded-md bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
              </motion.a>
            ))}
            
            {/* Tableau de Synthèse */}
            <motion.a
              href="https://docs.google.com/spreadsheets/d/xxx"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: navItems.length * 0.1 }}
              className="relative px-3 py-2 text-sm font-medium text-indigo-100 hover:text-white transition-colors duration-300 rounded-md group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Tableau de Synthèse</span>
              <motion.div
                className="absolute inset-0 rounded-md bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              />
            </motion.a>

            {/* CV Button */}
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (navItems.length + 1) * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-md shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">CV</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-indigo-100 hover:text-white hover:bg-indigo-500/20 transition-colors duration-300"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: isOpen ? 90 : 0, opacity: 1 }}
                exit={{ rotate: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                className="px-2 py-4 mt-2 space-y-1 bg-gradient-to-b from-slate-900/95 to-indigo-900/95 backdrop-blur-xl rounded-xl border border-indigo-200/10 shadow-lg shadow-indigo-500/10"
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-indigo-100 hover:text-white hover:bg-indigo-500/20 rounded-md transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                <motion.a
                  href="https://docs.google.com/spreadsheets/d/xxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="block px-4 py-2 text-sm font-medium text-indigo-100 hover:text-white hover:bg-indigo-500/20 rounded-md transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  Tableau de Synthèse
                </motion.a>

                <motion.a
                  href="#"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navItems.length + 1) * 0.05 }}
                  className="block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md shadow-md hover:shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  Télécharger CV
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;