import React from 'react';
import { Network, Shield, Server, Code, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation pour faire apparaître le texte de manière fluide (fade-in-up)
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const Skills = () => {
  const skills = [
    {
      category: "Réseaux",
      icon: <Network className="w-6 h-6" />,
      items: [
        { name: "Cisco IOS", level: 90 },
        { name: "TCP/IP", level: 85 },
        { name: "VLANs", level: 80 },
        { name: "Routage & Switching", level: 85 }
      ]
    },
    {
      category: "Sécurité",
      icon: <Shield className="w-6 h-6" />,
      items: [
        { name: "Pare-feu", level: 85 },
        { name: "IDS/IPS", level: 75 },
        { name: "VPN", level: 80 },
        { name: "Cryptographie", level: 70 }
      ]
    },
    {
      category: "Systèmes",
      icon: <Server className="w-6 h-6" />,
      items: [
        { name: "Linux", level: 85 },
        { name: "Windows Server", level: 80 },
        { name: "Active Directory", level: 75 },
        { name: "PowerShell", level: 70 }
      ]
    },
    {
      category: "Virtualisation",
      icon: <Cpu className="w-6 h-6" />,
      items: [
        { name: "VMware", level: 80 },
        { name: "Proxmox", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Kubernetes", level: 60 }
      ]
    },
    {
      category: "Développement",
      icon: <Code className="w-6 h-6" />,
      items: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "Python", level: 70 },
        { name: "SQL", level: 80 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        delay: 0.3
      }
    })
  };

  return (
    <section className="relative min-h-screen py-20 text-neutral-100">
      {/* Background with reduced opacity overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-95" />
      
      <div className="container relative z-10 px-4 mx-auto">
        {/* Titre animé "Mes compétences" */}
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="mb-4 text-6xl font-bold text-center bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text"
        >
          Mes Compétences
        </motion.h2>

        {/* Sous-titre animé */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="text-center text-blue-200 mb-16 text-xl"
        >
          Mes domaines d'expertise technique
        </motion.p>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="overflow-hidden backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10">
                  <div className="text-cyan-300 transition-colors duration-300 group-hover:text-cyan-200">
                    {skillGroup.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-neutral-200">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="space-y-5">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-neutral-300">{skill.name}</span>
                      <span className="text-sm text-neutral-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        variants={progressVariants}
                        initial="initial"
                        animate="animate"
                        custom={skill.level}
                        className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
