import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Monitor, Code2, Heart, Zap } from 'lucide-react';

const highlights = [
  { icon: Monitor, title: 'Soporte Remoto', desc: 'Gestión de incidencias a distancia con herramientas profesionales' },
  { icon: Code2, title: 'Desarrollo de Software', desc: 'Estudiante de ingeniería con sólida base en programación' },
  { icon: Zap, title: 'Resolución Rápida', desc: 'Diagnóstico eficiente y solución de problemas técnicos' },
  { icon: Heart, title: 'Pasión por Aprender', desc: 'Formación continua en tecnología e innovación' },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="sobre-mi" className="relative py-24 sm:py-32 bg-navy-900">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-500/5 blur-3xl rounded-full" />

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-5 sm:px-6 reveal ${isVisible ? 'active' : ''}`}
      >
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="text-accent-400 font-mono text-sm tracking-wider uppercase">// Sobre Mí</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 mb-4">
            Carta de <span className="text-gradient-cyan">Presentación</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-transparent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Letter */}
          <div className="md:col-span-3 glass-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-primary-700 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">Hola, soy Karen</h3>
                <p className="text-sm text-gray-400">Soporte técnico &amp; futura ingeniera</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Soy estudiante de <span className="text-accent-400 font-medium">Ingeniería en Desarrollo de Software</span> y
                especialista en soporte técnico con un año de experiencia resolviendo incidencias
                de forma remota. Mi día a día consiste en diagnosticar problemas, dar seguimiento
                a tickets y garantizar que cada usuario vuelva a trabajar lo antes posible.
              </p>
              <p>
                Lo que más me apasiona es el punto donde el soporte se encuentra con el código.
                No solo resuelvo incidencias, sino que busco entender su origen y construir
                soluciones que las prevengan. Trabajo con herramientas como <span className="text-accent-400 font-medium">Remedy</span>,
                escritorio remoto y líneas de comando, mientras afianzo mis conocimientos en
                <span className="text-accent-400 font-medium"> Python, Java y SQL</span>.
              </p>
              <p>
                Mi meta es seguir creciendo como profesional, combinando la empatía y la técnica
                del soporte con la lógica y la creatividad del desarrollo. Busco oportunidades
                remotas donde pueda aportar valor desde el primer día y seguir aprendiendo
                cada paso del camino.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="font-display text-lg text-gradient-cyan italic">Karen Leyva</p>
              <p className="text-sm text-gray-500">Soporte Técnico &amp; Desarrollo de Software</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="glass-card p-5 hover:border-accent-500/40 hover:bg-white/10 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:bg-accent-500/20 group-hover:scale-110 transition-all">
                    <Icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{title}</h4>
                    <p className="text-sm text-gray-400 leading-snug">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
