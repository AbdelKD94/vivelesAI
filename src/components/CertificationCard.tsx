import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  date: string;
  icon: React.ReactNode;
  description: string;
  image: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  date,
  icon,
  description,
  image,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showCertification, setShowCertification] = useState(false);

  const handleShowCertification = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowCertification(true);
  };

  return (
    <>
      <motion.div
        className="relative h-96 w-full perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
        initial={{ opacity: 0, scale: 0.8 }} // Initial state for entrance animation
        animate={{ opacity: 1, scale: 1 }} // Final state for entrance animation
        transition={{ duration: 0.5 }} // Transition settings
        whileHover={{ scale: 1.05 }} // Scale up on hover
      >
        <motion.div
          className="w-full h-full relative preserve-3d cursor-pointer"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Front */}
          <div
            className="absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20">
              <div className="absolute bottom-0 p-6 text-white">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-green-600 rounded-lg mr-3">
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

          {/* Back */}
          <div
            className="absolute w-full h-full backface-hidden rounded-xl shadow-lg bg-white p-6 rotate-y-180"
          >
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 mb-4">{date}</p>
              <p className="text-gray-600 flex-grow">{description}</p>
              <button 
                onClick={handleShowCertification}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Voir le certificat
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal de certification */}
      <AnimatePresence>
        {showCertification && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setShowCertification(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCertification(false)}
                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              {title === "Secnum" && (
                <div className="bg-white p-8">
                  <div className="max-w-4xl mx-auto relative border-8 border-blue-600 rounded-lg p-8">
                    <div className="absolute top-0 right-0 m-4">
                      <div className="flex items-center gap-2">
                        <img
                          src="/secnum-logo.png"
                          alt="SecNum académie"
                          className="h-12"
                        />
                        <div className="text-right">
                          <div className="text-blue-900 font-semibold">SecNum</div>
                          <div className="text-gray-500 text-sm">académie</div>
                          <div className="text-gray-500 text-xs">ANSSI</div>
                        </div>
                      </div>
                    </div>

                    <h1 className="text-3xl font-bold text-blue-900 text-center mt-16 mb-8">ATTESTATION DE SUIVI</h1>
                    
                    <p className="text-center mb-8">
                      L'équipe SecNumacadémie atteste que <span className="font-semibold">Kechad Abdelhafid</span> a suivi avec succès les<br />
                      cours des quatre modules de MOOC et obtenu les scores suivants aux évaluations
                    </p>

                    <table className="w-full mb-12">
                      <thead>
                        <tr className="border-b-2 border-blue-900">
                          <th className="py-4 text-left text-blue-900">MODULES</th>
                          <th className="py-4 text-left text-blue-900">DATE DE L'ÉVALUATION</th>
                          <th className="py-4 text-right text-blue-900">SCORE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3">PANORAMA DE LA SSI</td>
                          <td className="py-3">22/11/2024</td>
                          <td className="py-3 text-right">88.0%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3">SÉCURITÉ DE L'AUTHENTIFICATION</td>
                          <td className="py-3">22/11/2024</td>
                          <td className="py-3 text-right">84.0%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3">SÉCURITÉ SUR INTERNET</td>
                          <td className="py-3">22/11/2024</td>
                          <td className="py-3 text-right">92.0%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3">SÉCURITÉ DU POSTE DE TRAVAIL ET NOMADISME</td>
                          <td className="py-3">22/11/2024</td>
                          <td className="py-3 text-right">88.0%</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="flex justify-between items-end mt-8">
                      <a href="www.secnumacademie.gouv.fr" className="text-blue-900 hover:underline">www.secnumacademie.gouv.fr</a>
                      <div className="flex items-center gap-4">
                        <img src="/secnum-badge.png" alt="Badge SecNum" className="h-16" />
                        <div className="text-right">
                          <div>Fait le 22 Novembre 2024</div>
                          <div className="italic">L'équipe SecNumacadémie</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {title === "Atelier RGPD" && (
                <div className="bg-white p-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Cours</th>
                        <th className="text-left py-2">Attribué le</th>
                        <th className="text-left py-2">Code de contrôle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">MODULE 5 : LES COLLECTIVITÉS TERRITORIALES</td>
                        <td className="py-2">mercredi 18 septembre 2024, 01:07</td>
                        <td className="py-2">yBb8a8D1nd</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">MODULE 4 : LE DPO ET LES OUTILS DE LA CONFORMITÉ</td>
                        <td className="py-2">mardi 17 septembre 2024, 16:57</td>
                        <td className="py-2">EnCndihHRb</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">MODULE 3 : LES RESPONSABILITÉS DES ACTEURS</td>
                        <td className="py-2">mardi 17 septembre 2024, 16:26</td>
                        <td className="py-2">mGtX7pJupR</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">MODULE 2 : LES PRINCIPES DE LA PROTECTION DES DONNÉES</td>
                        <td className="py-2">mardi 17 septembre 2024, 15:45</td>
                        <td className="py-2">VKSMKrw0iO</td>
                      </tr>
                      <tr>
                        <td className="py-2">MODULE 1 : LE RGPD ET SES NOTIONS CLÉS</td>
                        <td className="py-2">vendredi 5 avril 2024, 12:18</td>
                        <td className="py-2">tInL5KrUqC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {title === "PIX" && (
                <div className="bg-white p-8">
                  <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <img
                        src="https://pix.fr/images/pix-logo.svg"
                        alt="Logo PIX"
                        className="h-8"
                      />
                      <span className="text-3xl font-semibold">Attestation</span>
                    </div>
                    
                    <p className="text-center mb-8">Ce document atteste l'obtention d'une certification Pix</p>
                    
                    <div className="bg-white rounded-lg p-8 shadow-sm border">
                      <div className="flex gap-8">
                        <div className="flex-shrink-0">
                          <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center relative">
                            <div className="absolute inset-2 bg-white rounded-full flex flex-col items-center justify-center">
                              <span className="text-4xl font-bold">380</span>
                              <span className="text-sm">896*</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <p><span className="text-gray-600">Prénom et nom : </span><span className="font-semibold text-blue-900">Abdelhafid KECHAD</span></p>
                          <p><span className="text-gray-600">Date et lieu de naissance : </span><span className="font-semibold text-blue-900">3 mars 2003</span></p>
                          <p><span className="text-gray-600">Centre de certification : </span><span className="font-semibold text-blue-900">Lycée Turgot</span></p>
                          <p><span className="text-gray-600">Délivrée le : </span><span className="font-semibold text-blue-900">13 février 2025</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {title === "Cisco" && (
                <div className="bg-white p-8">
                  <img
                    src="/cisco.png"
                    alt="Certification Cisco"
                    className="w-full h-auto"
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificationCard;