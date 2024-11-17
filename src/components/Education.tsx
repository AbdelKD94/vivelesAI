import React from 'react';
import { GraduationCap, Briefcase, ChevronRight } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="relative bg-gradient-to-br from-black via-blue-950 to-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">Mon Parcours</h2>
        <p className="text-center text-blue-200 mb-12">Formation académique et expérience professionnelle</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Parcours Scolaire */}
          <div className="backdrop-blur-sm bg-blue-950/30 p-6 rounded-2xl border border-blue-500/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-900/50 rounded-lg border border-blue-500/30">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-400">Parcours Scolaire</h3>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-500/30">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-400"></div>
                <div className="mb-1 flex items-center">
                  <span className="text-lg font-semibold text-blue-100">BTS SIO option SISR</span>
                  <ChevronRight className="w-4 h-4 mx-2 text-blue-400" />
                  <span className="text-blue-300">2023-2025</span>
                </div>
                <p className="text-blue-200">Formation en cours - Spécialisation en infrastructure réseau et sécurité</p>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-500/30">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-400"></div>
                <div className="mb-1 flex items-center">
                  <span className="text-lg font-semibold text-blue-100">Baccalauréat Général</span>
                  <ChevronRight className="w-4 h-4 mx-2 text-blue-400" />
                  <span className="text-blue-300">2023</span>
                </div>
                <p className="text-blue-200">Diplôme obtenu avec succès</p>
              </div>
            </div>
          </div>

          {/* Parcours Professionnel */}
          <div className="backdrop-blur-sm bg-blue-950/30 p-6 rounded-2xl border border-blue-500/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-900/50 rounded-lg border border-blue-500/30">
                <Briefcase className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-400">Parcours Professionnel</h3>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-500/30">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-400"></div>
                <div className="mb-1 flex items-center">
                  <span className="text-lg font-semibold text-blue-100">Technicien Informatique</span>
                  <ChevronRight className="w-4 h-4 mx-2 text-blue-400" />
                  <span className="text-blue-300">2024</span>
                </div>
                <p className="text-blue-200">CEFISI</p>
                <ul className="mt-2 space-y-1 text-blue-200">
                  <li>• Maintenance et support technique</li>
                  <li>• Gestion de l'infrastructure réseau</li>
                  <li>• Support utilisateur</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;