import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Flame, 
  Apple, 
  ShieldCheck, 
  Star, 
  Zap, 
  TrendingDown,
  MessageCircle,
  MapPin,
  Heart,
  Phone,
  Users
} from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden mesh-gradient-bg">
      {/* Background organic blur blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Copy, Badges, and Action Triggers */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Top Verified Clinic Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 shadow-xs mb-5 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-ping" />
              <span className="text-xs font-bold text-slate-800 tracking-wide flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-600" />
                <span>Sevilla (Los Bermejales)</span>
                <span className="text-slate-300">•</span>
                <span className="text-brand-800 font-extrabold">Rocío Jiménez López de Lemus</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12] mb-4 font-display">
              Pon <span className="text-brand-600 underline decoration-amber-400 decoration-wavy underline-offset-4">PUNTO FINAL</span> <br className="hidden sm:inline" />
              a las dietas milagro.{' '}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-emerald-600 to-teal-600">
                Nutrición a tu medida.
              </span>
            </h1>

            {/* Badge Charlas grupales & individual */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold mb-4 shadow-2xs">
              <Users className="w-3.5 h-3.5 text-amber-600" />
              <span>Consultas individuales y Charlas grupales para adelgazar</span>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              Sin batidos sustitutivos, sin pastillas ni restricciones imposibles. Te enseño reeducación alimentaria, psiconutrición y salud digestiva y hormonal adaptada a tu vida real, tus gustos y tu ritmo.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-brand-700 via-brand-600 to-emerald-600 text-white font-bold text-base shadow-3d hover:shadow-float transition-all duration-300 hover:scale-102 flex items-center justify-center gap-3 group"
              >
                <span>Pedir Primera Consulta</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/34682602256?text=Hola%20Roc%C3%ADo,%20he%20visto%20tu%20web%20de%20Punto%20Final%20y%20me%20gustar%C3%ADa%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/95 hover:bg-emerald-50/80 text-slate-800 hover:text-emerald-800 border border-slate-200/90 font-bold text-base shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: 682 602 256</span>
              </a>
            </div>

            {/* Micro Benefits & Social Proof from Google Maps */}
            <div className="pt-6 border-t border-slate-200/70 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Google Reviews rating */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-white flex items-center justify-center font-black text-sm shadow-sm">
                  G
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-black text-slate-900 ml-1">5.0 / 5.0</span>
                  </div>
                  <p className="text-xs text-slate-600 font-semibold">
                    Más de 203 reseñas reales en Google Maps
                  </p>
                </div>
              </div>

              {/* Tag consulta nutricional personalizada */}
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white/80 px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-xs">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Consulta en Bermejales • Sevilla</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean & Unobstructed Official Poster Presentation */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Poster Card with clean 3D perspective tilt (NO badges covering the text!) */}
            <Card3DTilt maxTilt={6} className="w-full max-w-md sm:max-w-lg">
              <div className="bg-white rounded-3xl border border-slate-200/90 p-4 sm:p-5 shadow-float hover:shadow-2xl transition-all duration-300 relative group overflow-hidden">
                
                {/* Subtle top indicator bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs">
                  <div className="flex items-center gap-2 font-bold text-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Cartel Oficial • PUNTOFINAL.</span>
                  </div>
                  <span className="text-[11px] font-extrabold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200">
                    Sevilla
                  </span>
                </div>

                {/* The Poster Image - Completely Clean and Uncovered */}
                <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center shadow-xs">
                  <img
                    src="/puntofinal-cartel.png"
                    alt="PUNTOFINAL. Nutrición a tu medida - Rocío Jiménez López de Lemus"
                    className="w-full h-auto object-contain rounded-xl select-none"
                    loading="eager"
                  />
                </div>

                {/* Clean Bottom Footer Bar */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1 text-slate-700 font-bold">
                    <Phone className="w-3.5 h-3.5 text-brand-600" />
                    <span>955 641 335 • 682 602 256</span>
                  </span>
                  <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-bold">
                    Cita previa disponible
                  </span>
                </div>

              </div>
            </Card3DTilt>

            {/* Clean Highlight Badges placed NEATLY BELOW the poster (Zero overlap, 100% human-readable!) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-5 w-full max-w-md sm:max-w-lg">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-slate-200/80 shadow-2xs text-center">
                <span className="text-[10px] font-bold text-slate-500 block uppercase">Método</span>
                <span className="text-xs font-extrabold text-brand-800">0% Efecto Rebote</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-slate-200/80 shadow-2xs text-center">
                <span className="text-[10px] font-bold text-slate-500 block uppercase">Modalidad</span>
                <span className="text-xs font-extrabold text-slate-800">Grupal & Individual</span>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-slate-200/80 shadow-2xs text-center">
                <span className="text-[10px] font-bold text-slate-500 block uppercase">Ubicación</span>
                <span className="text-xs font-extrabold text-slate-800">Bermejales Center</span>
              </div>
            </div>

          </div>

        </div>

        {/* Trust Badges Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200/70">
          <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
            Dietista-Nutricionista Colegiada en Sevilla • Rocío Jiménez López de Lemus
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-slate-700 font-bold text-xs sm:text-sm">
            {[
              'Dietista-Nutricionista Colegiada',
              'Charlas Grupales para Adelgazar',
              'Reeducación Nutricional Individual',
              'Psiconutrición y Hambre Emocional',
              'Salud Digestiva, Microbiota y SIBO',
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
