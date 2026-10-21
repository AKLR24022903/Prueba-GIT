import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Shield, Award, Network, Lock, BadgeCheck, ExternalLink } from 'lucide-react';

const certifications = [
  {
    icon: Network,
    title: 'Cisco CCST',
    subtitle: 'Networking',
    issuer: 'Cisco',
    year: '2024',
    description: 'Certificación enfocada en fundamentos de redes: configuración de dispositivos, protocolos de enrutamiento, troubleshooting y arquitectura de redes modernas.',
    skills: ['Redes LAN/WAN', 'Protocolos TCP/IP', 'Diagnóstico de red', 'Cisco IOS'],
    gradient: 'from-blue-600 to-cyan-500',
    badge: 'CCST',
  },
  {
    icon: Shield,
    title: 'Cisco CCST',
    subtitle: 'Ciberseguridad',
    issuer: 'Cisco',
    year: '2024',
    description: 'Certificación en principios de ciberseguridad: amenazas y vulnerabilidades, monitoreo de seguridad, respuesta a incidentes y protección de infraestructura.',
    skills: ['Análisis de amenazas', 'Respuesta a incidentes', 'Monitoreo SIEM', 'Hardening'],
    gradient: 'from-cyan-500 to-teal-500',
    badge: 'SEC',
  },
  {
    icon: Award,
    title: 'Ciencia de Datos Jr.',
    subtitle: 'Tecnolochicas',
    issuer: 'Tecnolochicas PRO',
    year: '2024',
    description: 'Programa de formación en ciencia de datos: análisis exploratorio, visualización, estadística aplicada e introducción al machine learning con Python.',
    skills: ['Python para datos', 'Pandas & NumPy', 'Visualización', 'Estadística'],
    gradient: 'from-teal-500 to-green-500',
    badge: 'DS',
  },
];

export default function Certifications() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="certificaciones" className="relative py-24 sm:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-primary-700/10 blur-3xl rounded-full" />

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-5 sm:px-6 reveal ${isVisible ? 'active' : ''}`}
      >
        <div className="text-center mb-16">
          <span className="text-accent-400 font-mono text-sm tracking-wider uppercase">// Certificaciones</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 mb-4">
            Formación <span className="text-gradient-cyan">Certificada</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Certificaciones que respaldan mi conocimiento técnico y compromiso con el aprendizaje continuo.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-transparent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div
                key={`${cert.title}-${cert.subtitle}`}
                className="group relative glass-card p-7 hover:border-accent-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full`} />

                {/* Badge corner */}
                <div className="absolute top-5 right-5">
                  <div className={`px-3 py-1 rounded-lg bg-gradient-to-r ${cert.gradient} text-white text-xs font-mono font-bold tracking-wider shadow-lg`}>
                    {cert.badge}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-sm text-accent-400 font-medium mb-3">{cert.subtitle}</p>

                {/* Issuer + year */}
                <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    {cert.issuer}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span className="font-mono">{cert.year}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{cert.description}</p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-500">
          <Lock className="w-4 h-4 text-accent-400" />
          <span>Certificaciones verificables bajo solicitud</span>
        </div>
      </div>
    </section>
  );
}
