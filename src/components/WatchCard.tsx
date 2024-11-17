import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface WatchCardProps {
  title: string;
  date: string;
  icon: React.ReactNode;
  description: string;
  image: string;
}

const WatchCard: React.FC<WatchCardProps> = ({
  title,
  date,
  icon,
  description,
  image,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="relative h-96 w-full cursor-pointer" onClick={handleClick}>
        <div
          className="w-full h-full rounded-xl shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20">
            <div className="absolute bottom-0 p-6 text-white">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-purple-600 rounded-lg mr-3">
                  {icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-sm opacity-80">{date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2 h-full">
                <div
                  className="h-64 md:h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      {icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                      <p className="text-gray-600">{date}</p>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold mb-4">Contexte</h3>
                    <p className="text-gray-600 mb-6">
                      Le Zero Trust est un modèle de sécurité qui exige une vérification stricte de chaque personne et appareil tentant d'accéder aux ressources d'un réseau, peu importe sa position (interne ou externe au réseau).
                    </p>

                    <h3 className="text-xl font-semibold mb-4">Problématique</h3>
                    <p className="text-gray-600 mb-6">
                      Comment implémenter efficacement une architecture Zero Trust dans un environnement d'entreprise moderne, tout en maintenant la productivité des utilisateurs ?
                    </p>

                    <h3 className="text-xl font-semibold mb-4">Sources de Veille</h3>
                    <ul className="list-disc pl-6 text-gray-600 mb-6">
                      <li>Publications ANSSI</li>
                      <li>Blog Cisco Security</li>
                      <li>Documentation Microsoft Zero Trust</li>
                      <li>Rapports Gartner sur la sécurité</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-4">Points Clés</h3>
                    <ul className="list-disc pl-6 text-gray-600 mb-6">
                      <li>Authentification multifacteur systématique</li>
                      <li>Principe du moindre privilège</li>
                      <li>Microsegmentation du réseau</li>
                      <li>Chiffrement de bout en bout</li>
                      <li>Surveillance continue des accès</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-4">Impact et Applications</h3>
                    <p className="text-gray-600">
                      L'adoption du Zero Trust permet de réduire significativement les risques de violations de données et améliore la posture de sécurité globale de l'organisation. Cette approche est particulièrement pertinente dans le contexte du travail à distance et des environnements cloud hybrides.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WatchCard;