import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Network, Shield, Server, Code, Award, Rss, Home, GraduationCap, Briefcase, Layout, Phone, ChevronLeft, ChevronRight, CalendarDays, Globe } from 'lucide-react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import CertificationCard from './components/CertificationCard';
import WatchCard from './components/WatchCard';
import AddWatchCard from './components/AddWatchCard';
import Contact from './components/Contact';
import WatchPage from './components/WatchPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const pages = [
    { id: 'home', label: 'Accueil', icon: <Home className="w-5 h-5" /> },
    { id: 'education', label: 'Parcours', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'skills', label: 'Compétences', icon: <Code className="w-5 h-5" /> },
    { id: 'projects', label: 'Projets', icon: <Layout className="w-5 h-5" /> },
    { id: 'certifications', label: 'Certifications', icon: <Award className="w-5 h-5" /> },
    { id: 'watchpage', label: 'Mes Veilles', icon: <Rss className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <Phone className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: "Documentations",
      description: "Accès à toutes mes documentations et ressources via Google Drive.",
      icon: <Briefcase className="w-6 h-6" />,
      tags: ["Documentation", "Ressources", "Google Drive"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      content: {
        sections: [
          {
            title: "Organisation des Ressources",
            objective: "Centraliser et organiser toutes les documentations et ressources dans un espace accessible.",
            tasks: [
              "Mise en place d'une structure de dossiers claire",
              "Organisation des documents par catégorie",
              "Maintenance et mise à jour régulière",
              "Partage et collaboration facilités"
            ],
            skills: [
              "Gestion documentaire",
              "Organisation",
              "Collaboration",
              "Google Workspace"
            ]
          }
        ]
      },
      downloadLink: "https://drive.google.com/drive/folders/1JqtCMf059yGub-k64nJiSObVJWQ-gywx?usp=sharing"
    },
    {
      title: "Rapport de Stage",
      description: "Documentation détaillée de mon stage et des compétences acquises.",
      icon: <GraduationCap className="w-6 h-6" />,
      tags: ["Stage", "Documentation", "BTS SIO"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2671",
      content: {
        sections: [
          {
            title: "Stage en Entreprise",
            objective: "Rédiger un rapport de stage complet et professionnel.",
            tasks: [
              "Documenter les missions réalisées",
              "Décrire l'environnement technique",
              "Analyser les compétences acquises",
              "Rédiger les conclusions et perspectives"
            ],
            skills: [
              "Rédaction technique",
              "Analyse de compétences",
              "Documentation professionnelle",
              "Communication écrite"
            ]
          }
        ]
      },
      downloadLink: "/rapport2stage2.pdf"
    },
    {
      title: "Tableau de Synthèse",
      description: "Documentation détaillée de mes compétences acquises et situations professionnelles.",
      icon: <Layout className="w-6 h-6" />,
      tags: ["Documentation", "Compétences", "BTS SIO"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2670",
      content: {
        sections: [
          {
            title: "Résumé",
            objective: "Créer un tableau synthétique.",
            tasks: ["Collecter les informations", "Créer le tableau", "Documenter chaque projet"],
            skills: ["Gestion", "Documentation"]
          }
        ]
      },
      downloadLink: "/tableau.pdf"
    },
    {
      title: "Développement Web",
      description: "Création d'un portfolio personnel moderne, d'un site vitrine pour Julie, et d'un site professionnel pour une entreprise de BTP avec WordPress.",
      icon: <Globe className="w-6 h-6" />,
      tags: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "Bootstrap", "WordPress", "GitHub Pages"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2672",
      content: {
        sections: [
          {
            title: "Développement d'un Portfolio",
            objective: "Créer un portfolio personnel moderne et interactif pour présenter mes compétences, projets et parcours.",
            tasks: [
              "Développer une interface utilisateur responsive avec React et Tailwind CSS",
              "Implémenter des animations fluides avec Framer Motion",
              "Créer une navigation intuitive et un design soigné",
              "Optimiser les performances et l'accessibilité"
            ],
            skills: [
              "Développement frontend avec React et TypeScript",
              "Styling avec Tailwind CSS",
              "Animation avec Framer Motion",
              "Gestion d'état et routage"
            ]
          },
          {
            title: "Développement d'un Site Vitrine pour Julie",
            objective: "Créer un site vitrine professionnel et élégant pour présenter l'activité de Julie en utilisant HTML/CSS et Bootstrap.",
            tasks: [
              "Développement en équipe de trois personnes",
              "Création d'une interface responsive avec HTML/CSS et Bootstrap",
              "Mise en place d'une navigation intuitive",
              "Déploiement sur GitHub Pages"
            ],
            skills: [
              "HTML/CSS",
              "Bootstrap",
              "GitHub Pages",
              "Travail d'équipe"
            ]
          },
          {
            title: "Site Web pour Talents Constructions",
            objective: "Développer un site professionnel pour une entreprise de BTP avec WordPress.",
            tasks: [
              "Configuration et personnalisation du thème WordPress",
              "Création de pages et de contenus adaptés au secteur du BTP",
              "Mise en place d'une section Formation Continue",
              "Intégration des mentions légales et RGPD",
              "Design d'une interface moderne avec bannière dynamique"
            ],
            skills: [
              "WordPress",
              "Personnalisation de thème",
              "Design d'interface",
              "Gestion de contenu",
              "Conformité RGPD"
            ]
          }
        ]
      },
      downloadLink: [
        { label: "Voir le Site de Julie", url: "https://multi-taches.github.io/SIO1_GRP1_LPG/a_LPG1/" },
        { label: "Voir les Ressources", url: "https://drive.google.com/drive/folders/1GHfa0nBACpXgJekSiSgcJ8S-8IE6aSv0?usp=drive_link" },
        { label: "Voir le Projet", url: "/Capture d'écran 2024-05-21 094306.png", type: "image" }
      ]
    },
    {
      title: "Infrastructure Réseau",
      description: "Mise en place d'une infrastructure réseau pour un site de football, incluant la configuration des équipements et l'optimisation des connexions pour assurer des performances fiables et sécurisées.",
      icon: <Network className="w-6 h-6" />,
      tags: ["HTTPS", "DHCP", "DNS", "VLAN", "Windows Server", "Sécurité"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2574",
      content: {
        sections: [
          {
            title: "Configuration DHCP sur Windows Server",
            objective: "Installer et configurer un serveur DHCP sous Windows Server pour automatiser l'attribution des adresses IP.",
            tasks: [
              "Installation du rôle DHCP sur Windows Server",
              "Configuration des plages d'adresses IP et des options DHCP",
              "Mise en place des réservations d'adresses pour les équipements critiques",
              "Tests de fonctionnement et validation de l'attribution automatique des adresses"
            ],
            skills: [
              "Administration Windows Server",
              "Configuration DHCP",
              "Gestion des adresses IP",
              "Dépannage réseau"
            ]
          },
          {
            title: "Serveur DNS sur Windows Server",
            objective: "Déployer un serveur DNS pour assurer la résolution des noms de domaine et améliorer la gestion des requêtes réseau.",
            tasks: [
              "Installation et configuration du rôle DNS sur Windows Server",
              "Création et gestion des zones de recherche directe et inverse",
              "Configuration des enregistrements DNS pour les services critiques",
              "Mise en place de la réplication DNS pour la redondance"
            ],
            skills: [
              "Administration DNS",
              "Gestion des zones DNS",
              "Configuration des enregistrements",
              "Résolution de noms"
            ]
          },
          {
            title: "Configuration des VLANs",
            objective: "Segmenter le réseau en VLANs pour optimiser la sécurité et le contrôle du trafic.",
            tasks: [
              "Analyse des besoins en segmentation réseau",
              "Configuration des VLANs sur les commutateurs",
              "Mise en place du routage inter-VLAN",
              "Implémentation des politiques de sécurité par VLAN"
            ],
            skills: [
              "Configuration de VLANs",
              "Routage inter-VLAN",
              "Sécurisation réseau",
              "Optimisation du trafic"
            ]
          }
        ]
      }
    },
    {
      title: "Virtualisation Réseau",
      description: "Déploiement et configuration d'un hyperviseur Proxmox pour la gestion de machines virtuelles et conteneurs, ainsi que la mise en place de services Docker pour une infrastructure virtualisée optimisée.",
      icon: <Server className="w-6 h-6" />,
      tags: ["Proxmox", "Docker", "Virtualisation", "Conteneurs", "Docker Compose"],
      image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=2670",
      content: {
        sections: [
          {
            title: "Environnement de Virtualisation Proxmox",
            objective: "Déployer et configurer un hyperviseur Proxmox pour gérer efficacement les machines virtuelles et les conteneurs.",
            tasks: [
              "Installation et configuration de l'hyperviseur Proxmox",
              "Mise en place de la gestion des ressources et des snapshots",
              "Configuration de la haute disponibilité",
              "Optimisation des performances de l'infrastructure virtualisée"
            ],
            skills: [
              "Administration Proxmox",
              "Gestion des ressources virtualisées",
              "Configuration de la haute disponibilité",
              "Optimisation des performances"
            ]
          },
          {
            title: "Services Docker",
            objective: "Mettre en place une infrastructure de conteneurs avec Docker pour optimiser le déploiement et la gestion des services.",
            tasks: [
              "Installation et configuration de Docker",
              "Création et orchestration de conteneurs",
              "Mise en place de Docker Compose pour l'automatisation",
              "Gestion de la portabilité des applications"
            ],
            skills: [
              "Docker et conteneurisation",
              "Docker Compose",
              "Orchestration de conteneurs",
              "Automatisation du déploiement"
            ]
          }
        ]
      }
    },
    {
      title: "Cybersécurité",
      description: "Exploration et mise en pratique de différents aspects de la cybersécurité : conformité RGPD, participation à des CTF, chiffrement GPG et techniques de stéganographie.",
      icon: <Shield className="w-6 h-6" />,
      tags: ["RGPD", "CTF", "SSH", "GPG", "Stéganographie", "Sécurité"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2670",
      content: {
        sections: [
          {
            title: "Conformité au RGPD",
            objective: "Étudier et mettre en application les principes du Règlement Général sur la Protection des Données.",
            tasks: [
              "Analyse des exigences du RGPD",
              "Mise en place des bonnes pratiques de protection des données",
              "Gestion des droits des utilisateurs",
              "Documentation des processus de conformité"
            ],
            skills: [
              "Conformité réglementaire",
              "Protection des données personnelles",
              "Gestion des droits utilisateurs",
              "Documentation de sécurité"
            ]
          },
          {
            title: "CTF - Exploitation SSH",
            objective: "Participer à un CTF axé sur la compromission d'un accès SSH.",
            tasks: [
              "Reconnaissance avec Nmap pour identifier les services",
              "Attaque par force brute avec Hydra",
              "Exploitation du système après obtention de l'accès",
              "Documentation des techniques utilisées"
            ],
            skills: [
              "Scan de ports",
              "Tests d'intrusion",
              "Exploitation SSH",
              "Analyse de vulnérabilités"
            ]
          },
          {
            title: "Chiffrement GPG",
            objective: "Mettre en place le chiffrement de fichiers avec GNU Privacy Guard.",
            tasks: [
              "Génération des paires de clés GPG",
              "Chiffrement de messages et fichiers",
              "Déchiffrement et vérification",
              "Gestion sécurisée des clés"
            ],
            skills: [
              "Cryptographie asymétrique",
              "Gestion des clés GPG",
              "Sécurisation des échanges",
              "Protection des données"
            ]
          },
          {
            title: "Stéganographie",
            objective: "Explorer et appliquer les techniques de dissimulation d'informations dans des fichiers multimédias.",
            tasks: [
              "Étude des différentes techniques de stéganographie",
              "Utilisation d'outils de camouflage de données",
              "Extraction d'informations cachées",
              "Analyse des limites et possibilités"
            ],
            skills: [
              "Techniques de stéganographie",
              "Manipulation de fichiers multimédias",
              "Outils de dissimulation",
              "Analyse forensique"
            ]
          }
        ]
      }
    }
  ];

  const certifications = [
    {
      title: "Secnum",
      date: "2024",
      icon: <Award className="w-6 h-6" />,
      description: "Certification en cybersécurité",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2670"
    },
    {
      title: "Atelier RGPD",
      date: "2024",
      icon: <Shield className="w-6 h-6" />,
      description: "Certification en cybersécurité",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2670"
    },
    {
      title: "PIX",
      date: "2024",
      icon: <Award className="w-6 h-6" />,
      description: "Certification des compétences numériques",
      image: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&q=80&w=2670"
    },
    {
      title: "Cisco",
      date: "2024",
      icon: <Network className="w-6 h-6" />,
      description: "Certification Cisco Networking Academy",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2670"
    }
  ];

  const cloudContent = ` Veille sur le Cloud Computing 2024

 

Dernière mise à jour : Novembre 2024.`;

  const [watches, setWatches] = useState([
    {
      title: "Le Cloud",
      date: "2024",
      icon: <Rss className="w-6 h-6" />,
      description: "Veille sur le CLOUD et son avancée.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2670",
      link: "https://github.com/AbdelKD94/Cloud-Veille",
      content: cloudContent
    }
  ]);

  const handleAddWatch = (newWatch: any) => {
    setWatches([...watches, newWatch]);
  };

  const handleUpdateWatch = (index: number, newContent: string) => {
    const updatedWatches = [...watches];
    updatedWatches[index] = {
      ...updatedWatches[index],
      content: newContent
    };
    setWatches(updatedWatches);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 p-6 w-full">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        );
      case 'certifications':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 p-6 w-full">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        );
      case 'watchpage':
        return <WatchPage />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        <motion.div
          initial={false}
          animate={{
            width: isSidebarOpen ? 'auto' : '20px',
            transition: { duration: 0.3 }
          }}
          className="relative bg-gray-900 text-white border-r border-gray-800 shadow-xl"
        >
          <motion.div
            animate={{
              x: isSidebarOpen ? 0 : -200,
              opacity: isSidebarOpen ? 1 : 0,
              transition: { duration: 0.3 }
            }}
            className="w-72"
          >
            <div className="p-6 text-center border-b border-gray-800 bg-gradient-to-r from-blue-600 to-blue-800">
              <h1 className="text-2xl font-bold">Portfolio</h1>
            </div>
            <nav className="flex-1 py-6">
              <ul className="space-y-1 px-3">
                {pages.map((page) => (
                  <li key={page.id}>
                    <button
                      onClick={() => setCurrentPage(page.id)}
                      className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                        currentPage === page.id
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25'
                          : 'hover:bg-gray-800/50 text-gray-300 hover:text-white'
                      }`}
                    >
                      <div className="flex-shrink-0">{page.icon}</div>
                      <span className="font-medium">{page.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-6 border-t border-gray-800 bg-gray-900/50">
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/AbdelKD94" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/abdelhafid-kechad-b957b9220/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
                  <Mail className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </motion.div>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-lg shadow-blue-500/50 hover:bg-blue-700 transition-colors z-50"
          >
            {isSidebarOpen ? (
              <ChevronLeft className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        </motion.div>

        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 overflow-auto"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
}

export default App;