import { ArrowDown, Mail, Github, Linkedin, Terminal, Headphones } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 text-center pt-20 pb-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-accent-500/30 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-300">Disponible para trabajo remoto</span>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold mb-4 animate-fade-in-up">
          Karen <span className="text-gradient-cyan">Leyva</span>
        </h1>

        {/* Title */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-fade-in-up animate-delay-200">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <Terminal className="w-4 h-4 text-accent-400" />
            <span className="text-sm sm:text-base text-gray-200">Ingeniería en Desarrollo de Software</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <Headphones className="w-4 h-4 text-accent-400" />
            <span className="text-sm sm:text-base text-gray-200">Especialista en Soporte Técnico</span>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed mb-10 animate-fade-in-up animate-delay-300">
          Combinando el mundo del soporte técnico con la pasión por el código.
          Resolviendo incidencias con eficiencia y construyendo soluciones con tecnología.
        </p>

        {/* Contact buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animate-delay-500">
          <button
            onClick={() => scrollTo('contacto')}
            className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-500 to-primary-600 text-white font-medium flex items-center gap-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Contáctame
          </button>
          <button
            onClick={() => scrollTo('sobre-mi')}
            className="px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-accent-500/40 transition-all duration-300"
          >
            Conóceme más
          </button>

          {/* Social icons */}
          <div className="flex items-center gap-3 ml-2">
            {[
              { icon: Github, label: 'GitHub' },
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Mail, label: 'Email' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                aria-label={label}
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-500/20 hover:border-accent-500/50 hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-gray-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block animate-bounce-slow">
          <button
            onClick={() => scrollTo('sobre-mi')}
            className="flex flex-col items-center gap-1 text-gray-500 hover:text-accent-400 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs">Desliza</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
