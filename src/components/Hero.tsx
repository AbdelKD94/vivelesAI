import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-[#0a0a0a] text-white overflow-hidden flex items-center">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-purple-900/10" />
      
      {/* Animated dots grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center space-y-16"
        >
          {/* Name and title with refined animation */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
              Kechad Abdelhafid
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-200/80 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Étudiant en BTS SIO option SISR
            </motion.p>
          </motion.div>

          {/* Description with fade-in animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg text-gray-400/90 leading-relaxed">
              Passionné d'informatique, je me spécialise dans les infrastructures réseau et la sécurité informatique. 
              J'ai acquis une solide expertise technique et mené des projets concrets alliant théorie et pratique.
            </p>
          </motion.div>

          {/* Buttons with stagger animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link
              to="/contact"
              className="group px-8 py-3 bg-blue-600/90 text-white font-medium rounded-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Me Contacter
              </motion.span>
            </Link>
            <a
              href="/cv_stage.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 bg-white/5 text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mon CV
              </motion.span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;