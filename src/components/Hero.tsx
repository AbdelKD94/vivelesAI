import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Abdelhafid
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl mb-8 text-blue-200"
        >
          Expert en Cybersécurité & Réseaux
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 mb-12 text-lg sm:text-xl text-blue-100"
        >
          <p>Passionné d'informatique, je me spécialise dans les infrastructures réseau et la sécurité informatique. Grâce à mon BTS SIO, option SISR, j’ai acquis une solide expertise technique et mené des projets concrets alliant théorie et pratique</p>
          <p>Toujours curieux, j’explore les nouvelles technologies pour optimiser les systèmes et relever les défis de la cybersécurité.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href="#contact" 
            className="px-8 py-3 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition-colors duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            Me Contacter
          </a>
          <a 
            href="/cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            Voir mon CV
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;