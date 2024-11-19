import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Minimize2, X } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  image: string;
  content?: ProjectContent;
  downloadLink?: string;
  index?: number;
}

interface ProjectContent {
  sections: {
    title: string;
    objective: string;
    tasks: string[];
    skills: string[];
  }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  icon,
  tags = [],
  image,
  content,
  downloadLink,
  index = 0
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (!isExpanded) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setIsFlipped(true);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
    setIsFlipped(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
        setIsFlipped(false);
      }
    };

    if (isExpanded) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isExpanded]);

  const initialAnimationVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    initial: {
      rotateY: 0,
      scale: isHovered ? 1.05 : 1,
      transition: { 
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    },
    flipped: {
      rotateY: 180,
      scale: isHovered ? 1.05 : 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const tagVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  // Handle empty or undefined content
  const sections = content?.sections || [];

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${
        isExpanded 
          ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-auto'
          : 'h-[400px]'
      }`}
      onClick={handleClick}
      initial="hidden"
      animate="visible"
      variants={initialAnimationVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className={`relative preserve-3d ${
            isExpanded 
              ? 'w-full max-w-4xl h-[90vh] mx-auto'
              : 'w-full h-full'
          } rounded-xl shadow-xl transition-shadow duration-300 ${
            isHovered && !isExpanded ? 'shadow-2xl' : ''
          }`}
          variants={cardVariants}
          animate={isFlipped ? 'flipped' : 'initial'}
        >
          {/* Front Face */}
          <motion.div
            className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end"
              animate={{ 
                background: isHovered 
                  ? 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.6), transparent)'
                  : 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)'
              }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                variants={contentVariants}
              >
                <motion.div 
                  className="p-2 bg-blue-600 rounded-lg"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
              </motion.div>
              <motion.p 
                className="text-gray-200 mb-4 line-clamp-2"
                variants={contentVariants}
              >
                {description}
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={contentVariants}
              >
                {tags.map((tag, index) => (
                  <motion.span 
                    key={index} 
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white font-medium"
                    variants={tagVariants}
                    whileHover="hover"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Back Face */}
          <motion.div
            className="absolute w-full h-full backface-hidden rounded-xl bg-white overflow-auto"
            style={{ rotateY: 180 }}
          >
            <motion.div 
              className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b p-4 flex justify-between items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
              <div className="flex items-center gap-2">
                <motion.button 
                  onClick={handleExpand}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title={isExpanded ? "Réduire" : "Agrandir"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isExpanded ? (
                    <Minimize2 className="w-5 h-5" />
                  ) : (
                    <Maximize2 className="w-5 h-5" />
                  )}
                </motion.button>
                {isExpanded && (
                  <motion.button 
                    onClick={handleClose}
                    className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                    title="Fermer"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                )}
              </div>
            </motion.div>

            <motion.div 
              className="p-6"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              {downloadLink ? (
                <>
                  <p className="text-gray-600 mb-6">{description}</p>
                  <motion.a 
                    href={downloadLink}
                    download
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Télécharger le Tableau
                  </motion.a>
                </>
              ) : sections.length > 0 ? (
                <div className="space-y-8">
                  {sections.map((section, index) => (
                    <motion.div 
                      key={index} 
                      className="pb-6 border-b last:border-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">
                        {section.title}
                      </h4>
                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 * index }}
                        >
                          <h5 className="font-medium text-gray-700 mb-2">Objectif</h5>
                          <p className="text-gray-600">{section.objective}</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 * index }}
                        >
                          <h5 className="font-medium text-gray-700 mb-2">Tâches</h5>
                          <ul className="list-disc pl-5 space-y-2">
                            {section.tasks.map((task, taskIndex) => (
                              <motion.li 
                                key={taskIndex} 
                                className="text-gray-600"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * taskIndex }}
                              >
                                {task}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 * index }}
                        >
                          <h5 className="font-medium text-gray-700 mb-2">
                            Compétences développées
                          </h5>
                          <ul className="list-disc pl-5 space-y-2">
                            {section.skills.map((skill, skillIndex) => (
                              <motion.li 
                                key={skillIndex} 
                                className="text-gray-600"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * skillIndex }}
                              >
                                {skill}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">{description}</p>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;