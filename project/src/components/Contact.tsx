import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Github, Linkedin, MapPin, Send, Heart, ArrowUp } from 'lucide-react';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const contactLinks = [
    { icon: Mail, label: 'Correo', value: 'karen.leyva@example.com', href: 'mailto:karen.leyva@example.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/karenleyva', href: '#linkedin' },
    { icon: Github, label: 'GitHub', value: 'github.com/karenleyva', href: '#github' },
  ];

  return (
    <footer id="contacto" className="relative bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-500/8 blur-3xl rounded-full" />

      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto px-5 sm:px-6 py-24 sm:py-28 reveal ${isVisible ? 'active' : ''}`}
      >
        <div className="text-center mb-14">
          <span className="text-accent-400 font-mono text-sm tracking-wider uppercase">// Contacto</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 mb-4">
            ¿Trabajamos <span className="text-gradient-cyan">Juntos?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Estoy abierta a oportunidades remotas en soporte técnico y desarrollo.
            No dudes en escribirme.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-transparent mx-auto rounded-full mt-4" />
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="glass-card p-6 flex flex-col items-center text-center hover:border-accent-500/50 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-3 group-hover:bg-accent-500/20 group-hover:scale-110 transition-all">
                <Icon className="w-6 h-6 text-accent-400" />
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">{label}</span>
              <span className="text-sm text-gray-300 break-all">{value}</span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:karen.leyva@example.com"
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-accent-500 to-primary-600 text-white font-medium flex items-center gap-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-105 transition-all duration-300"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Enviar mensaje
          </a>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin className="w-4 h-4 text-accent-400" />
            <span>Disponible para trabajo remoto</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>© 2026 Karen Leyva</span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span className="flex items-center gap-1">
              Hecho con <Heart className="w-3.5 h-3.5 text-accent-400 fill-accent-400" /> y código
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent-400 transition-colors group"
          >
            Volver arriba
            <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-500/20 group-hover:border-accent-500/40 transition-all">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
