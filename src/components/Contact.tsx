import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const title = 'Prenons  Contact';
  const subtitle =
    'Je suis toujours ouvert à de nouvelles opportunités et collaborations';

  return (
    <div
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden py-20 text-white"
      style={{
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Titre animé */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text"
          >
            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{
                  display: 'inline-block',
                  marginRight: char === ' ' ? '0.5rem' : '0.2rem',
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-blue-200 text-xl"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Panel d'informations */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-blue-500/30 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-teal-300 mb-6">
                  Coordonnées
                </h3>
                <div className="space-y-6">
                  <motion.a
                    whileHover={{ x: 10 }}
                    href="mailto:abdelhafid.kechadpro@gmail.com"
                    className="flex items-center space-x-4 group"
                  >
                    <div className="p-3 bg-blue-900/50 rounded-lg border border-blue-500/30 group-hover:bg-blue-800/50 transition-colors">
                      <Mail className="w-5 h-5 text-teal-300" />
                    </div>
                    <span className="text-blue-200 group-hover:text-teal-300 transition-colors">
                      abdelhafid.kechadpro@gmail.com
                    </span>
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 10 }}
                    href="tel:+33612345678"
                    className="flex items-center space-x-4 group"
                  >
                    <div className="p-3 bg-blue-900/50 rounded-lg border border-blue-500/30 group-hover:bg-blue-800/50 transition-colors">
                      <Phone className="w-5 h-5 text-teal-300" />
                    </div>
                    <span className="text-blue-200 group-hover:text-teal-300 transition-colors">
                      +33 6 12 34 56 78
                    </span>
                  </motion.a>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 bg-blue-900/50 rounded-lg border border-blue-500/30">
                      <MapPin className="w-5 h-5 text-teal-300" />
                    </div>
                    <span className="text-blue-200">Paris, France</span>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-teal-300 mb-6">
                  Réseaux sociaux
                </h3>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="p-3 bg-blue-900/50 rounded-lg border border-blue-500/30 hover:bg-blue-800/50 transition-colors"
                  >
                    <Github className="w-5 h-5 text-teal-300" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="p-3 bg-blue-900/50 rounded-lg border border-blue-500/30 hover:bg-blue-800/50 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-teal-300" />
                  </motion.a>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/AbdelKD94"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-teal-500/25 transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Télécharger mon CV</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.form
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-blue-500/30 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-blue-200 mb-2"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-blue-900/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-teal-500/50 focus:border-transparent text-blue-100 placeholder-blue-300/50"
                required
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-200 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-blue-900/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-teal-500/50 focus:border-transparent text-blue-100 placeholder-blue-300/50"
                required
                placeholder="Votre email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-blue-200 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-blue-900/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-teal-500/50 focus:border-transparent text-blue-100 placeholder-blue-300/50"
                required
                placeholder="Votre message"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-teal-500/25 transition-all"
            >
              Envoyer
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
