import React, { useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationItem {
  title: string;
  date: string;
  description: string;
  details?: string[]; // Optional field for extra details
}

interface EducationSectionProps {
  title: string;
  icon: React.ReactNode;
  items: EducationItem[];
}

const Education = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative text-white py-20 min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="text-6xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text"
        >
          Mon Parcours
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="text-center text-blue-200 mb-16 text-xl"
        >
          Formation académique et expérience professionnelle
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <EducationSection
            title="Parcours Scolaire"
            icon={<GraduationCap className="w-8 h-8 text-teal-300" />}
            items={[
              {
                title: "BTS SIO option SISR",
                date: "2023 - 2025",
                description: "Formation en cours - Spécialisation en infrastructure réseau et sécurité"
              },
              {
                title: "Baccalauréat Général",
                date: "2022",
                description: "Spécialités: Sciences économiques et sociales, histoire-géographie, géopolitique et sciences politiques, option Mathématiques."
              }
            ]}
          />

          <EducationSection
            title="Parcours Professionnel"
            icon={<Briefcase className="w-8 h-8 text-teal-300" />}
            items={[
              {
                title: "Technicien Informatique",
                date: "2024",
                description: "CEFISI",
                details: [
                  "Maintenance et support technique",
                  "Sauvegarde et restauration",
                  "Support utilisateur"
                ]
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const EducationSection: React.FC<EducationSectionProps> = ({ title, icon, items }) => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariants}
      className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-blue-500/30 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-900/50 rounded-lg border border-blue-500/30">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-teal-300">{title}</h3>
      </div>

      <div className="space-y-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="relative pl-8 border-l-2 border-blue-500/30"
          >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-teal-300"></div>
            <div className="mb-2 flex items-center">
              <span className="text-lg font-semibold text-blue-100">{item.title}</span>
              <ChevronRight className="w-4 h-4 mx-2 text-blue-400" />
              <span className="text-blue-300">{item.date}</span>
            </div>
            <p className="text-blue-200">{item.description}</p>
            {item.details && (
              <ul className="mt-2 space-y-1 text-blue-200">
                {item.details.map((detail, idx) => (
                  <li key={idx}>• {detail}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
