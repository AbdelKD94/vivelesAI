import React from 'react';
import { motion } from 'framer-motion';
import { Rss, Cloud, Brain, Shield, Server, Globe, Building2, Calendar, TrendingUp, Code, Database, ExternalLink, Network } from 'lucide-react';

const WatchPage = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text">
            Veille Technologique
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            L'Intelligence Artificielle dans le Cloud : Tendances et Innovations en 2025
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://mixolydian-guavaberry-a35.notion.site/L-IA-dans-le-CLOUD-1aedc19b6cc280c89356f6dd88629cca?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
            >
              <span className="font-medium">Voir ma veille complète</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href="/markmap (1).html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl hover:from-purple-700 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
            >
              <span className="font-medium">Voir ma mindmap</span>
              <Network className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Sommaire */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-teal-300">Sommaire</h2>
          <ul className="space-y-2 text-blue-200">
            <li>• Salons et conférences Cloud 2025</li>
            <li>• Tendances majeures du Cloud en 2025</li>
            <li>• Croissance et prévisions du marché</li>
            <li>• Focus technologiques</li>
            <li>• Actualités récentes</li>
            <li>• Entreprises françaises du Cloud</li>
            <li>• L'Intelligence Artificielle dans le Cloud</li>
          </ul>
        </motion.div>

        {/* Salons et conférences */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="w-8 h-8 text-teal-300" />
            <h2 className="text-2xl font-semibold text-teal-300">Salons et conférences Cloud 2025</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">AWS re:Invent</h3>
              <p className="text-blue-300">Fin nov./déc. 2025 - Las Vegas, États-Unis</p>
              <p className="text-blue-200 mt-2">Conférence annuelle d'AWS sur les dernières innovations cloud.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">Google Cloud Next '25</h3>
              <p className="text-blue-300">Avril 2025 - San Francisco, États-Unis</p>
              <p className="text-blue-200 mt-2">Présentation des nouveautés et bonnes pratiques sur Google Cloud.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">KubeCon + CloudNativeCon Europe 2025</h3>
              <p className="text-blue-300">20-23 mai 2025 - Berlin, Allemagne</p>
              <p className="text-blue-200 mt-2">Focalisé sur Kubernetes et les technologies cloud natives.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">Data Cloud Global Congress</h3>
              <p className="text-blue-300">18-20 mars 2025 - Cannes, France</p>
              <p className="text-blue-200 mt-2">Réunit décideurs du Cloud, du Big Data et de l'IA.</p>
            </div>
          </div>
        </motion.div>

        {/* Tendances majeures */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <TrendingUp className="w-8 h-8 text-teal-300" />
            <h2 className="text-2xl font-semibold text-teal-300">Tendances majeures du Cloud en 2025</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">Cloud de confiance</h3>
              <p className="text-blue-200">Émergence d'environnements garantissant sécurité et transparence pour les données sensibles.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">Hybridation</h3>
              <p className="text-blue-200">Généralisation des architectures combinant cloud public et privé pour plus de flexibilité.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">Edge computing</h3>
              <p className="text-blue-200">Croissance du traitement des données en périphérie pour réduire la latence.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">Serverless computing</h3>
              <p className="text-blue-200">Adoption accrue des architectures sans serveur pour optimiser les coûts.</p>
            </div>
          </div>
        </motion.div>

        {/* Marché et prévisions */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <Database className="w-8 h-8 text-teal-300" />
            <h2 className="text-2xl font-semibold text-teal-300">Croissance et prévisions du marché</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">Dépenses mondiales</h3>
              <p className="text-3xl font-bold text-teal-300">678,8 milliards $</p>
              <p className="text-blue-200 mt-2">Hausse de 20,4% par rapport à 2023</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">IaaS</h3>
              <p className="text-3xl font-bold text-teal-300">26,6%</p>
              <p className="text-blue-200 mt-2">182,2 milliards $</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">PaaS</h3>
              <p className="text-3xl font-bold text-teal-300">21,4%</p>
              <p className="text-blue-200 mt-2">176,5 milliards $</p>
            </div>
          </div>
        </motion.div>

        {/* Actualités récentes */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <Globe className="w-8 h-8 text-teal-300" />
            <h2 className="text-2xl font-semibold text-teal-300">Actualités récentes</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">Amazon s'investit dans la formation au numérique en France</h3>
              <p className="text-blue-200">AWS prévoit de former 600 000 Français aux compétences numériques d'ici 2030.</p>
              <p className="text-blue-300 mt-2">Source : LEMONDE.FR • Octobre 2024</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">Mistral AI : Une start-up française prometteuse dans l'IA</h3>
              <p className="text-blue-200">Développement d'un modèle d'IA de classe mondiale malgré des ressources limitées.</p>
              <p className="text-blue-300 mt-2">Source : FT.COM • Février 2024</p>
            </div>
          </div>
        </motion.div>

        {/* Entreprises françaises */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30"
        >
          <div className="flex items-center gap-4 mb-6">
            <Building2 className="w-8 h-8 text-teal-300" />
            <h2 className="text-2xl font-semibold text-teal-300">Entreprises françaises du Cloud</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-200">Fournisseurs de services Cloud</h3>
              <ul className="space-y-2 text-blue-200">
                <li>• OVHcloud - Leader européen</li>
                <li>• Scaleway - Filiale d'Iliad</li>
                <li>• Outscale - Filiale de Dassault Systèmes</li>
              </ul>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-200">Entreprises innovantes</h3>
              <ul className="space-y-2 text-blue-200">
                <li>• BlaBlaCar</li>
                <li>• Deezer</li>
                <li>• Airbus</li>
                <li>• SNCF</li>
                <li>• L'Oréal</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WatchPage; 