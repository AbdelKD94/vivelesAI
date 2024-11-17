import React from 'react';
import { Network, Shield, Server, Code, Database, Cloud, Terminal, Cpu } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Réseaux",
      icon: <Network className="w-6 h-6 text-cyan-400" />,
      items: [
        { name: "Cisco IOS", level: 90 },
        { name: "TCP/IP", level: 85 },
        { name: "VLANs", level: 80 },
        { name: "Routage & Switching", level: 85 }
      ]
    },
    {
      category: "Sécurité",
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      items: [
        { name: "Pare-feu", level: 85 },
        { name: "IDS/IPS", level: 75 },
        { name: "VPN", level: 80 },
        { name: "Cryptographie", level: 70 }
      ]
    },
    {
      category: "Systèmes",
      icon: <Server className="w-6 h-6 text-cyan-400" />,
      items: [
        { name: "Linux", level: 85 },
        { name: "Windows Server", level: 80 },
        { name: "Active Directory", level: 75 },
        { name: "PowerShell", level: 70 }
      ]
    },
    {
      category: "Virtualisation",
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      items: [
        { name: "VMware", level: 80 },
        { name: "Proxmox", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Kubernetes", level: 60 }
      ]
    },
    {
      category: "Développement",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      items: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "Python", level: 70 },
        { name: "SQL", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="relative bg-gradient-to-br from-black via-blue-950 to-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">Compétences</h2>
        <p className="text-center text-blue-200 mb-12">Mes domaines d'expertise technique</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div key={index} className="backdrop-blur-sm bg-blue-950/30 p-6 rounded-2xl border border-blue-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-900/50 rounded-lg border border-blue-500/30">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold text-cyan-400">{skillGroup.category}</h3>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-100">{skill.name}</span>
                      <span className="text-blue-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-blue-900/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;