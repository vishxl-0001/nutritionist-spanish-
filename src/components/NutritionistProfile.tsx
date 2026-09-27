import React, { useState } from 'react';
import { 
  HeartPulse, 
  Award, 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Stethoscope
} from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';

export const NutritionistProfile: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      title: 'Nutrigenomics & Food as Data',
      desc: 'Food is not just gasoline for the body; every phytonutrient, peptide, and lipid sends epigenetic instructions to your DNA and mitochondria.',
      icon: '🧬'
    },
    {
      title: 'Microbiome-Centric Healing',
      desc: '70% of your immune system and 90% of serotonin reside in the intestinal mucosa. We re-diversify bacterial colonies to resolve mood and inflammation.',
      icon: '🥑'
    },
    {
      title: 'Metabolic Flexibility Over Restriction',
      desc: 'True health is the cellular ability to seamlessly burn both fatty acids and glucose without crashes, brain fog, or persistent ravenous hunger.',
      icon: '⚡'
    },
    {
      title: 'Zero Dogma or Fad Diets',
      desc: 'Whether Paleo, Mediterranean, or Plant-Rich, we calibrate your protocol based exclusively on your biological blood chemistry and tolerance.',
      icon: '🎯'
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
                
                {/* Doctor Photo */}
                <div className="relative h-96 sm:h-[450px] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1594824813596-f08966c4c0f2?w=800&auto=format&fit=crop&q=80"
                    alt="Dr. Elena Vance, Lead Clinical Nutritionist"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Bottom details */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/90 backdrop-blur-sm text-xs font-bold mb-2">
                      <Stethoscope className="w-3.5 h-3.5" />
                      <span>Lead Clinical Nutritionist</span>
                    </div>
                    <h3 className="text-2xl font-black font-display">Dr. Elena Vance, MS, RD, IFMCP</h3>
                    <p className="text-xs text-slate-200">Registered Dietitian & Functional Medicine Practitioner</p>
                  </div>
                </div>

                {/* Floating Credential Badge */}
                <div className="p-4 bg-white/90 backdrop-blur-md border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-brand-600" />
                    <span className="font-semibold text-slate-800">Columbia University & Harvard Fellowship</span>
                  </div>
                  <span className="text-brand-700 font-bold">12+ Yrs Exp</span>
                </div>

              </div>
            </Card3DTilt>
          </div>

          {/* Right Column: Narrative, Philosophy, and Credentials (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-semibold mb-4">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Meet Your Clinical Partner</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-6">
              "We Don't Treat Numbers on a Scale. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-600">
                We Restore Human Vitality."
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              After spending over a decade in hospital clinical nutrition and observing thousands of patients suffering from the cycle of chronic metabolic stagnation, Dr. Elena founded AuraNutri to bring root-cause medicine directly to everyday individuals.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Her protocols combine gold-standard functional laboratory diagnostics with delicious, seasonal whole food recipes that respect your heritage, family lifestyle, and palate.
            </p>

            {/* Philosophy Interactive Pillars */}
            <div className="mb-8">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                Core Clinical Philosophy
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
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm"
              >
                <span>Book 1-on-1 with Dr. Elena</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Accepting 6 new private patients this month</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
