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
  TrendingDown
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
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-emerald-200/80 shadow-xs mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-ping" />
              <span className="text-xs font-semibold text-brand-900 tracking-wide">
                Harvard Medical Affiliate • Functional Medicine Certified
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6 font-display">
              Clinical Nutrition <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600">
                Engineered For Your
              </span>{' '}
              Unique Biology.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              No generic restrictive calorie counting. We integrate advanced metabolic bloodwork, gut microbiome mapping, and whole-food nutritional science to give you limitless energy, sustainable weight loss, and hormone balance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-emerald-600 text-white font-semibold text-base shadow-3d hover:shadow-float transition-all duration-300 hover:scale-102 flex items-center justify-center gap-3 group"
              >
                <span>Book 1-on-1 Discovery Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('calculator')}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/90 hover:bg-white text-slate-800 border border-slate-200/90 font-semibold text-base shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 text-amber-500" />
                <span>Calculate Your Target Macros</span>
              </button>
            </div>

            {/* Micro Benefits & Social Proof */}
            <div className="pt-6 border-t border-slate-200/60 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Star Rating & Avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Client" />
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Client" />
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Client" />
                  <div className="h-9 w-9 rounded-full ring-2 ring-white bg-brand-100 text-brand-800 flex items-center justify-center text-xs font-bold">
                    +2k
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-800 ml-1">4.96 / 5</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">From 2,400+ verified health journeys</p>
                </div>
              </div>

              {/* Guaranteed Science tag */}
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-white/70 px-3 py-1.5 rounded-xl border border-slate-200/60">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Science-Backed Protocols</span>
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

              {/* Floating 3D Badge 1: Metabolic Efficiency (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:top-4 sm:-left-8 z-20">
                <Card3DTilt maxTilt={14} className="glass-card shadow-float p-3.5 rounded-2xl border border-white/90 w-48 sm:w-56">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                        <Activity className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-800">Metabolic Score</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">+18%</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-slate-900 font-display">96.4</span>
                    <span className="text-xs text-slate-600 font-medium">Optimal Zone</span>
                  </div>
                  {/* Mini visual wave */}
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-2">
                    <div className="bg-gradient-to-r from-brand-500 to-emerald-400 h-full rounded-full w-[96%]" />
                  </div>
                </Card3DTilt>
              </div>

              {/* Floating 3D Badge 2: Glucose & Gut Stability (Bottom Right) */}
              <div className="absolute -bottom-6 -right-2 sm:bottom-2 sm:-right-6 z-20">
                <Card3DTilt maxTilt={14} className="glass-card shadow-float p-3.5 rounded-2xl border border-white/90 w-52 sm:w-60">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Post-Meal Glucose</p>
                      <p className="text-[10px] text-slate-600">Zero Afternoon Crash</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
                    <span className="text-slate-600">Blood Sugar Curve</span>
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5" /> Stable 92 mg/dL
                    </span>
                  </div>
                </Card3DTilt>
              </div>

              {/* Floating 3D Badge 3: Daily Micronutrient Density (Center Right) */}
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 hidden sm:block">
                <Card3DTilt maxTilt={12} className="glass-card shadow-soft p-3 rounded-2xl border border-white/80">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-teal-100 flex items-center justify-center text-teal-700">
                      <Apple className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-800">100% Bio-Individual</p>
                      <p className="text-[9px] text-slate-600">Tailored to DNA & Labs</p>
                    </div>
                  </div>
                </Card3DTilt>
              </div>

            </div>

          </div>

        </div>

        {/* Trust Badges Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200/60">
          <p className="text-center text-xs font-semibold text-slate-600 uppercase tracking-widest mb-6">
            Recognized by Leading Health Institutions & Functional Medicine Boards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {['American College of Nutrition', 'Institute for Functional Medicine', 'Harvard Health Publishing', 'Precision Nutrition Level 2', 'Registered Dietitian Board'].map((brand, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
