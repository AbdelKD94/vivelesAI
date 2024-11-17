import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <div
      className="relative h-96 w-full perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
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
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Voir le certificat
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CertificationCard;