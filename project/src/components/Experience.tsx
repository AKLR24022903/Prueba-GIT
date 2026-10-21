import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, GraduationCap, Calendar, CheckCircle2, TrendingUp, BookOpen } from 'lucide-react';

const timeline = [
  {
    icon: Briefcase,
    title: 'Especialista en Soporte Técnico',
    period: '1 año de experiencia',
    type: 'Experiencia Profesional',
    points: [
      'Atención de incidencias remotas mediante tickets en Remedy',
      'Conexión por escritorio remoto para diagnóstico y resolución',
      'Uso de CMD para troubleshooting de red y sistema',
      'Seguimiento de SLA y documentación de soluciones',
    ],
    gradient: 'from-accent-500 to-primary-600',
  },
  {
    icon: GraduationCap,
    title: 'Ingeniería en Desarrollo de Software',
    period: 'En curso',
    type: 'Formación Académica',
    points: [
      'Fundamentos de programación en Python y Java',
      'Bases de datos y consultas SQL',
      'Ingeniería de software y buenas prácticas',
      'Proyectos prácticos y trabajo colaborativo',
    ],
    gradient: 'from-primary-500 to-blue-700',
  },
  {
    icon: BookOpen,
    title: 'Formación Continua',
    period: 'Permanente',
    type: 'Desarrollo Profesional',
    points: [
      'Cisco CCST en Networking y Ciberseguridad',
      'Ciencia de Datos Jr. con Tecnolochicas PRO',
      'Exploración de nuevas tecnologías y herramientas',
      'Comunidad tech y aprendizaje colaborativo',
    ],
    gradient: 'from-teal-500 to-green-600',
  },
];

export default function Experience() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experiencia" className="relative py-24 sm:py-32 bg-navy-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent-500/5 blur-3xl rounded-full" />

      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto px-5 sm:px-6 reveal ${isVisible ? 'active' : ''}`}
      >
        <div className="text-center mb-16">
          <span className="text-accent-400 font-mono text-sm tracking-wider uppercase">// Experiencia</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 mb-4">
            Mi <span className="text-gradient-cyan">Trayectoria</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Un año de experiencia práctica en soporte técnico, complementado con formación académica continua.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-transparent mx-auto rounded-full mt-4" />
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {[
            { icon: Briefcase, value: '1+', label: 'Año de experiencia' },
            { icon: TrendingUp, value: '6', label: 'Herramientas dominadas' },
            { icon: GraduationCap, value: '3', label: 'Certificaciones' },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="glass-card p-5 text-center hover:border-accent-500/30 transition-colors">
              <Icon className="w-6 h-6 text-accent-400 mx-auto mb-2" />
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">{value}</div>
              <div className="text-xs text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-accent-500 via-primary-600 to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative pl-16 sm:pl-20"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Node */}
                  <div className={`absolute left-0 top-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-xl ring-4 ring-navy-800 z-10`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>

                  {/* Card */}
                  <div className="glass-card p-6 sm:p-7 hover:border-accent-500/40 transition-all duration-300 hover:bg-white/[0.08]">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-accent-400 px-2 py-1 rounded-md bg-accent-500/10">
                        {item.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-4">{item.title}</h3>

                    <ul className="space-y-2.5">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
