import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Edit2, Save } from 'lucide-react';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

interface WatchCardProps {
  title: string;
  date: string;
  icon: React.ReactNode;
  description: string;
  image: string;
  link: string;
  content: string;
  onUpdate?: (newContent: string) => void;
}

const WatchCard: React.FC<WatchCardProps> = ({
  title,
  date,
  icon,
  description,
  image,
  link,
  content,
  onUpdate,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleSave = () => {
    if (onUpdate) {
      onUpdate(editedContent);
    }
    setIsEditing(false);
  };

  const handleEditorChange = ({ text }: { text: string }) => {
    setEditedContent(text);
  };

  return (
    <>
      <motion.div
        className="relative h-96 w-full cursor-pointer"
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="w-full h-full rounded-xl shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20">
            <div className="absolute bottom-0 p-6 w-full">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-purple-600 rounded-lg mr-3">
                  {icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="text-sm text-white/80">{date}</p>
                </div>
              </div>
              <p className="text-white/70 mb-4">{description}</p>
            </div>
          </div>
        </div>
      </motion.div>

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
                    <h3 className="text-xl font-semibold mb-4">Description</h3>
                    <p className="text-gray-600 mb-6">{description}</p>

                    <h3 className="text-xl font-semibold mb-4">Mindmap</h3>
                    <div className="flex justify-end mb-4">
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        {isEditing ? <Save className="w-5 h-5" /> : <Edit2 className="w-5 h-5" />}
                      </button>
                    </div>
                    {isEditing ? (
                      <div className="w-full h-[500px]">
                        <MdEditor
                          value={editedContent}
                          onChange={handleEditorChange}
                          renderHTML={(text) => text}
                          config={{
                            view: {
                              menu: true,
                              md: true,
                              html: true,
                            },
                            canView: {
                              menu: true,
                              md: true,
                              html: true,
                              fullScreen: true,
                            },
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-full overflow-x-auto">
                        <div 
                          className="min-w-full"
                          dangerouslySetInnerHTML={{ 
                            __html: editedContent.replace(/class="w-screen h-screen/g, 'class="w-full h-full')
                          }} 
                        />
                      </div>
                    )}

                    <h3 className="text-xl font-semibold mt-6 mb-4">Lire l'article</h3>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Cliquez ici pour lire ma veille
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Outils de Veille */}
      <div className="mt-12 p-8 bg-gray-50 rounded-xl shadow-sm">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Outils de Veille Technologique</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
            <img 
              src="https://s.feedly.com/images/fx/logos/favicon-32x32.png" 
              alt="Feedly" 
              className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" 
            />
            <span className="text-gray-800 font-medium">Feedly</span>
            <span className="text-sm text-gray-500 mt-1 text-center">Agrégateur RSS</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
            <img 
              src="https://www.inoreader.com/images/icons/favicon-32x32.png" 
              alt="Inoreader" 
              className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" 
            />
            <span className="text-gray-800 font-medium">Inoreader</span>
            <span className="text-sm text-gray-500 mt-1 text-center">Flux d'actualités</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
            <img 
              src="https://www.gstatic.com/images/branding/product/2x/google_alerts_64dp.png" 
              alt="Google Alerts" 
              className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" 
            />
            <span className="text-gray-800 font-medium">Google Alerts</span>
            <span className="text-sm text-gray-500 mt-1 text-center">Alertes personnalisées</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
            <img 
              src="https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png" 
              alt="Reddit" 
              className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" 
            />
            <span className="text-gray-800 font-medium">Reddit</span>
            <span className="text-sm text-gray-500 mt-1 text-center">Forums techniques</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
            <img 
              src="https://www.perplexity.ai/favicon.ico" 
              alt="Perplexity Pro" 
              className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" 
            />
            <span className="text-gray-800 font-medium">Perplexity Pro</span>
            <span className="text-sm text-gray-500 mt-1 text-center">IA de recherche</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchCard;