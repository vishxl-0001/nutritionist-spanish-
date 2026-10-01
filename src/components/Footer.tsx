import React, { useState } from 'react';
import { 
  HeartPulse, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Globe, 
  Share2, 
  MessageCircle, 
  Check, 
  ArrowRight,
  Clock,
  Star,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-28 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Card */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-800 to-emerald-900 rounded-3xl p-8 sm:p-12 mb-16 border border-emerald-500/25 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-700/50 inline-block mb-3">
              Newsletter Semanal Gratuita
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white mb-3">
              Recibe Menús de Temporada, Recetas Reales y Consejos Sin Filtros
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Únete a nuestra comunidad de pacientes y personas interesadas en reeducación nutricional. Sin spam ni dietas milagro: sólo ciencia, salud digestiva y platos ricos.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm bg-emerald-900/40 p-3.5 rounded-xl border border-emerald-700/50">
                <Check className="w-5 h-5" />
                <span>¡Te has suscrito con éxito! Revisa tu bandeja de entrada para recibir la Guía de Compras Saludables.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Escribe tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-500 flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-500 hover:from-brand-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Suscribirme Gratis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14 text-xs sm:text-sm">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white font-black text-sm">
                PF
              </div>
              <span className="text-2xl font-black font-display tracking-tight text-white">
                PUNTOFINAL<span className="text-brand-400">.</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-6 text-xs">
              Consulta de Nutrición y Dietética en Sevilla. Reeducación alimentaria, psiconutrición y abordaje de la salud digestiva y hormonal. Ponemos punto final a las dietas milagro para siempre.
            </p>

            {/* Google Rating mini banner */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700 mb-6 max-w-sm">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-200">5.0 en Google</span>
              <span className="text-slate-400 text-[11px]">• +203 reseñas</span>
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="https://wa.me/34682602256"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                title="WhatsApp Directo"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+34682602256"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors"
                title="Llamar por teléfono"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://maps.google.com/?q=Avenida+de+Finlandia+1+Bermejales+Center+Sevilla"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors"
                title="Ver en Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contacto & Ubicación Sevilla */}
          <div>
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs mb-4">Dónde Estamos</h4>
            <ul className="space-y-3 text-slate-400 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  Av. de Finlandia, 1 <br />
                  Edif. Bermejales Center, Mód. 20 <br />
                  41012 Sevilla, España
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:+34682602256" className="hover:text-white transition-colors">
                  +34 682 60 22 56
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/34682602256" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors font-bold text-emerald-400"
                >
                  WhatsApp Citas
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 border-t border-slate-800">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  Lunes a Viernes: <br />
                  <strong>9:00 a 21:00</strong> <br />
                  <span className="text-[11px] text-slate-500">Sábados y Domingos: Cerrado</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs mb-4">Navegación</h4>
            <ul className="space-y-2.5 text-slate-400 text-xs">
              <li>
                <button onClick={() => onNavigate('calculator')} className="hover:text-emerald-400 transition-colors">
                  Calculadora de Calorías y Macros
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('meal-planner')} className="hover:text-emerald-400 transition-colors">
                  Menús Semanales Mediterráneos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quiz')} className="hover:text-emerald-400 transition-colors">
                  Test de Diagnóstico de Hábitos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('transformations')} className="hover:text-emerald-400 transition-colors">
                  Casos de Éxito en Sevilla
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-emerald-400 transition-colors">
                  Tarifas y Programas 12 Semanas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-emerald-400 transition-colors">
                  Mi Filosofía y Método
                </button>
              </li>
            </ul>
          </div>

          {/* Especialidades Clínicas */}
          <div>
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs mb-4">Especialidades</h4>
            <ul className="space-y-2.5 text-slate-400 text-xs">
              <li>Pérdida de Grasa sin Efecto Rebote</li>
              <li>Psiconutrición y Ansiedad por la Comida</li>
              <li>Salud Digestiva: Hinchazón, Gases y SIBO</li>
              <li>Salud Hormonal Femenina: SOP y Tiroides</li>
              <li>Composición Corporal por Bioimpedancia</li>
              <li>Videoconsulta Online en Toda España</li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-500" />
            <span>© {new Date().getFullYear()} PUNTOFINAL. Nutrición Sevilla • Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad (RGPD)</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
