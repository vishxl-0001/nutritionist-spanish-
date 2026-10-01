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
  Heart
} from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy, Badges, and Action Triggers */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Top Verified Clinic Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-emerald-200/80 shadow-xs mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-ping" />
              <span className="text-xs font-bold text-slate-800 tracking-wide flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-600" />
                <span>Sevilla (Los Bermejales)</span>
                <span className="text-slate-300">•</span>
                <span className="text-brand-800">Presencial y Online</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12] mb-6 font-display">
              Pon <span className="text-brand-600 underline decoration-amber-400 decoration-wavy underline-offset-4">PUNTO FINAL</span> <br className="hidden sm:inline" />
              a las dietas milagro.{' '}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-emerald-600 to-teal-600">
                Aprende a comer para siempre.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              Sin batidos sustitutivos, sin pastillas ni restricciones imposibles. Te enseño reeducación nutricional, psiconutrición y salud digestiva y hormonal adaptada a tu vida real, tus gustos y tu ritmo.
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
                href="https://wa.me/34682602256?text=Hola,%20he%20visto%20tu%20web%20y%20me%20gustar%C3%ADa%20informaci%C3%B3n%20para%20empezar%20en%20Punto%20Final"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/95 hover:bg-emerald-50/80 text-slate-800 hover:text-emerald-800 border border-slate-200/90 font-bold text-base shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: 682 60 22 56</span>
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
                <span>Consulta de Nutrición • Los Bermejales</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Hero Canvas & Floating 3D Tilt Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Main Interactive 3D Canvas Box */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Soft decorative glow base */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-300/30 to-amber-200/30 rounded-full blur-2xl transform scale-90" />
              
              {/* 3D Canvas */}
              <div className="relative z-10 bg-white/40 backdrop-blur-md rounded-3xl border border-white/80 p-2 shadow-soft">
                <Hero3DCanvas />
              </div>

              {/* Floating 3D Badge 1: Reeducación Nutricional (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:top-4 sm:-left-8 z-20">
                <Card3DTilt maxTilt={14} className="glass-card shadow-float p-3.5 rounded-2xl border border-white/90 w-52 sm:w-60">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                        <Activity className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-900">Reeducación Real</span>
                    </div>
                    <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                      0% Rebote
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 font-display">Hábitos</span>
                    <span className="text-xs text-slate-600 font-semibold">para toda la vida</span>
                  </div>
                  {/* Mini visual wave */}
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-2">
                    <div className="bg-gradient-to-r from-brand-600 to-emerald-400 h-full rounded-full w-[100%]" />
                  </div>
                </Card3DTilt>
              </div>

              {/* Floating 3D Badge 2: Sin Hinchazón ni Ansiedad (Bottom Right) */}
              <div className="absolute -bottom-6 -right-2 sm:bottom-2 sm:-right-6 z-20">
                <Card3DTilt maxTilt={14} className="glass-card shadow-float p-3.5 rounded-2xl border border-white/90 w-56 sm:w-64">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Energía y Digestión</p>
                      <p className="text-[10px] text-slate-500 font-medium">Cero hinchazón tras comer</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
                    <span className="text-slate-500 font-medium">Relación con la comida</span>
                    <span className="font-bold text-emerald-700 flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5" /> Sin culpa ni ansiedad
                    </span>
                  </div>
                </Card3DTilt>
              </div>

              {/* Floating 3D Badge 3: Ubicación Sevilla (Center Right) */}
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 hidden sm:block">
                <Card3DTilt maxTilt={12} className="glass-card shadow-soft p-3 rounded-2xl border border-white/90">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-extrabold text-slate-900">Bermejales Center</p>
                      <p className="text-[9px] text-slate-500 font-medium">Módulo 20 • 41012 Sevilla</p>
                    </div>
                  </div>
                </Card3DTilt>
              </div>

            </div>

          </div>

        </div>

        {/* Trust Badges Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200/70">
          <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
            Especialistas Sanitarias Colegiadas en Sevilla
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-slate-700 font-bold text-xs sm:text-sm">
            {[
              'Dietistas-Nutricionistas Colegiadas',
              'Psiconutrición y Hambre Emocional',
              'Salud Hormonal, Tiroides y SOP',
              'Salud Digestiva, Microbiota y SIBO',
              'Composición Corporal por Bioimpedancia',
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
