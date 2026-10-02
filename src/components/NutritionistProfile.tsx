import React, { useState } from 'react';
import { 
  HeartPulse, 
  Award, 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Stethoscope,
  MapPin,
  MessageCircle,
  ShieldCheck
} from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';

export const NutritionistProfile: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      title: 'Cero Productos Milagro ni Batidos',
      desc: 'No vendemos pastillas, sustitutivos ni suplementos innecesarios. Aprendes a comer con comida real que encuentras en el mercado de tu barrio.',
      icon: '🥑'
    },
    {
      title: 'Psiconutrición y Relación con la Comida',
      desc: 'Trabajamos el hambre emocional, la ansiedad y la culpa. Comer tiene que ser un acto de salud y disfrute, no una fuente de estrés continuo.',
      icon: '🧠'
    },
    {
      title: 'Salud Digestiva y Microbiota',
      desc: 'El 70% de tu sistema inmune reside en tu intestino. Identificamos las causas de la hinchazón, gases o digestiones pesadas para desinflamar tu cuerpo.',
      icon: '🧬'
    },
    {
      title: 'Adaptado a tu Vida Social Real',
      desc: 'Tu plan se adapta a salir a tapear por Sevilla, tus viajes y tus cenas familiares. Si un plan no te permite tener vida social, no es para ti.',
      icon: '🍷'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & 3D Interactive Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <Card3DTilt maxTilt={8} className="w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-float border border-slate-200/80 bg-slate-50 group">
                
                {/* Clinic / Dietitian Photo */}
                <div className="relative h-96 sm:h-[460px] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1594824813596-f08966c4c0f2?w=800&auto=format&fit=crop&q=80"
                    alt="Dietista-Nutricionista en Sevilla - Punto Final"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  {/* Bottom details */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-600/95 backdrop-blur-sm text-xs font-bold mb-2">
                      <Stethoscope className="w-3.5 h-3.5" />
                      <span>Dietista-Nutricionista Colegiada</span>
                    </div>
                    <h3 className="text-2xl font-black font-display">Rocío Jiménez López de Lemus</h3>
                    <p className="text-xs text-slate-200 font-medium">Dietista-Nutricionista • PUNTOFINAL. Nutrición a tu medida</p>
                  </div>
                </div>

                {/* Floating Credential Badge */}
                <div className="p-4 bg-white/95 backdrop-blur-md border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-600" />
                    <span className="font-bold text-slate-800">Los Bermejales, Sevilla</span>
                  </div>
                  <span className="text-brand-700 font-black">+200 Reseñas 5.0 ★</span>
                </div>

              </div>
            </Card3DTilt>
          </div>

          {/* Right Column: Narrative, Philosophy, and Credentials (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold mb-4 border border-brand-200">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Mi Filosofía de Consulta</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-6">
              "No te pongo a dieta. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-emerald-600 to-teal-600">
                Ponemos PUNTO FINAL al efecto rebote."
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              En mi consulta en <strong>Avenida de Finlandia (Edificio Bermejales Center, Sevilla)</strong>, entiendo que cada persona tiene una historia única con la báscula y la alimentación. Muchas de mis pacientes llegan cansadas de pasar hambre y de sentirse culpables tras cada comida social.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Mi compromiso es escucharte, entender tu contexto y enseñarte a comer con base científica y platos apetitosos. Combino la nutrición personalizada con la psiconutrición para que alcances tu peso saludable y lo mantengas con naturalidad el resto de tu vida.
            </p>

            {/* Philosophy Interactive Pillars */}
            <div className="mb-8">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-3">
                Los 4 Pilares de Mi Método
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActivePillar(idx)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      activePillar === idx
                        ? 'border-brand-500 bg-brand-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-lg">{pillar.icon}</span>
                      <h5 className="text-xs font-bold text-slate-900">{pillar.title}</h5>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials Row */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm"
              >
                <span>Pedir Cita en Consulta</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>

              <a
                href="https://wa.me/34682602256?text=Hola,%20quisiera%20conocer%20m%C3%A1s%20sobre%20tu%20m%C3%A9todo%20de%20nutrici%C3%B3n%20en%20Punto%20Final"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Escríbeme al 682 60 22 56</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
