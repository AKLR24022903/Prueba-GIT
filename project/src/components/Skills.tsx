import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Terminal, Database, Code2, Monitor, Command, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Skill {
  icon: LucideIcon;
  name: string;
  level: number;
  category: string;
  description: string;
  color: string;
}

const skills: Skill[] = [
  {
    icon: Command,
    name: 'Remedy',
    level: 85,
    category: 'Gestión de Incidencias',
    description: 'Administración de tickets, seguimiento de incidencias y gestión de flujos de trabajo en BMC Remedy.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Monitor,
    name: 'Escritorio Remoto',
    level: 90,
    category: 'Soporte Remoto',
    description: 'Conexión remota para diagnóstico y resolución de problemas en equipos de usuarios a distancia.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Terminal,
    name: 'CMD',
    level: 80,
    category: 'Línea de Comandos',
    description: 'Diagnóstico de red, gestión de archivos y ejecución de comandos en sistemas Windows.',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: Database,
    name: 'SQL',
    level: 75,
    category: 'Bases de Datos',
    description: 'Consultas, inserciones y análisis de datos con SQL para gestión de información.',
    color: 'from-sky-500 to-blue-700',
  },
  {
    icon: Code2,
    name: 'Python',
    level: 78,
    category: 'Programación',
    description: 'Automatización de tareas, scripts y desarrollo de soluciones con Python.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Cpu,
    name: 'Java',
    level: 72,
    category: 'Programación',
    description: 'Desarrollo de aplicaciones orientadas a objetos con Java y principios de ingeniería de software.',
    color: 'from-red-500 to-rose-600',
  },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <div
      className="glass-card p-6 cursor-default group hover:border-accent-500/50 hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2"
      style={{ transitionDelay: `${index * 60}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Name & category */}
      <div className="mb-4">
        <h3 className="font-display text-xl font-bold text-white mb-1">{skill.name}</h3>
        <p className="text-xs text-accent-400 font-mono uppercase tracking-wider">{skill.category}</p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed mb-5 min-h-[60px]">{skill.description}</p>

      {/* Progress bar */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500 font-medium">Nivel</span>
          <span className="text-xs text-accent-400 font-mono font-semibold">{skill.level}%</span>
        </div>
        <div className="h-2 rounded-full bg-white/5 overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
            style={{ width: hovered ? `${skill.level}%` : `${skill.level * 0.6}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="habilidades" className="relative py-24 sm:py-32 bg-navy-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-accent-500/5 blur-3xl rounded-full" />

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-5 sm:px-6 reveal ${isVisible ? 'active' : ''}`}
      >
        <div className="text-center mb-16">
          <span className="text-accent-400 font-mono text-sm tracking-wider uppercase">// Habilidades</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 mb-4">
            Stack <span className="text-gradient-cyan">Tecnológico</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Herramientas y tecnologías que utilizo para resolver incidencias y desarrollar soluciones.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-transparent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
