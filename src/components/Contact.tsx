import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

const Contact = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-black via-blue-950 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M30 30l30-30M0 60L60 0M0 0l60 60M30 30l-30 30M30 30l30 30M30 30l-30-30' stroke='%23304050' stroke-width='1' fill='none' opacity='0.1'/%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
      }}></div>
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">Contact</h2>
          <p className="text-center text-blue-200 mb-12">N'hésitez pas à me contacter pour discuter de vos projets</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 backdrop-blur-sm bg-blue-950/30 p-8 rounded-2xl border border-blue-500/30">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Informations</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group">
                    <div className="p-3 bg-blue-900/50 rounded-lg group-hover:bg-blue-800/50 transition-colors border border-blue-500/30">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-blue-100">abdelhafid@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="p-3 bg-blue-900/50 rounded-lg group-hover:bg-blue-800/50 transition-colors border border-blue-500/30">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-blue-100">+33 6 12 34 56 78</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="p-3 bg-blue-900/50 rounded-lg group-hover:bg-blue-800/50 transition-colors border border-blue-500/30">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-blue-100">Paris, France</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Réseaux Sociaux</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-blue-900/50 rounded-lg hover:bg-blue-800/50 transition-all transform hover:scale-110 border border-blue-500/30">
                    <Github className="w-5 h-5 text-cyan-400" />
                  </a>
                  <a href="#" className="p-3 bg-blue-900/50 rounded-lg hover:bg-blue-800/50 transition-all transform hover:scale-110 border border-blue-500/30">
                    <Linkedin className="w-5 h-5 text-cyan-400" />
                  </a>
                </div>
              </div>

              <div>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  <Download className="w-5 h-5" />
                  <span>Télécharger mon CV</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="backdrop-blur-sm bg-blue-950/30 p-8 rounded-2xl border border-blue-500/30 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-blue-200">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-blue-900/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent placeholder-blue-300/50 text-blue-100"
                  required
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-blue-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-blue-900/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent placeholder-blue-300/50 text-blue-100"
                  required
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-blue-200">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-blue-900/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent placeholder-blue-300/50 text-blue-100"
                  required
                  placeholder="Votre message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;