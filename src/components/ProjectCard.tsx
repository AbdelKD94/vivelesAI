import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  image: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, tags, image, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    } else {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className="relative h-96 w-full perspective-1000"
      onClick={handleClick}
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
                <div className="p-2 bg-blue-600 rounded-lg mr-3">
                  {icon}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl shadow-lg bg-white p-6 rotate-y-180"
        >
          <div className="h-full flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-600 flex-grow">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            {link && (
              <button 
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(link, '_blank');
                }}
              >
                Voir le tableau
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;