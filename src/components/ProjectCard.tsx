import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Minimize2 } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  image: string;
  content?: ProjectContent;
  downloadLink?: string; // Added prop for download link
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
  tags,
  image,
  content,
  downloadLink // Retrieve download link
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleClick = () => {
    if (!isExpanded) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className={`relative ${isExpanded ? 'fixed inset-0 z-50' : 'h-[400px]'}`}
      onClick={handleClick}
      whileHover={{ scale: isExpanded ? 1 : 1.05 }} // Zoom on hover
      initial={{ opacity: 0, scale: 0.8 }} // Initial state for entrance animation
      animate={{ opacity: 1, scale: 1 }} // Final state for entrance animation
      transition={{ duration: 0.5 }} // Transition settings
    >
      <motion.div
        className={`w-full h-full relative preserve-3d cursor-pointer ${isExpanded ? 'overflow-auto max-h-[50vh]' : ''} rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Face */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 p-6 flex flex-col justify-end">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-blue-600 rounded-lg mr-3">{icon}</div>
              <h3 className="text-2xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-xl shadow-lg bg-white p-6 rotate-y-180 ${isExpanded ? 'overflow-auto' : 'overflow-hidden'}`}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            <button onClick={handleExpand} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              {isExpanded ? (
                <Minimize2 className="w-5 h-5" />
              ) : (
                <Maximize2 className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Specific display for "Tableau de Synthèse" */}
          {title === "Tableau de Synthèse" ? (
            <>
              <p className="text-gray-600 mb-4">Ce tableau synthétique présente mes compétences acquises et mes expériences professionnelles. Vous pouvez le télécharger en cliquant sur le bouton ci-dessous.</p>
              <a href={downloadLink} download>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Télécharger le Tableau
                </button>
              </a>
            </>
          ) : (
            content?.sections.map((section, index) => (
              <div key={index} className="space-y-4 mb-4">
                <h4 className="text-xl font-semibold text-gray-800">{section.title}</h4>
                <p className="text-gray-600"><strong>Objectif:</strong> {section.objective}</p>
                <h5 className="font-medium text-gray-700 mb-2">Tâches:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  {section.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="text-gray-600">{task}</li>
                  ))}
                </ul>
                <h5 className="font-medium text-gray-700 mb-2">Compétences développées:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  {section.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600">{skill}</li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;