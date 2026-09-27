import React, { useState } from 'react';
import { 
  Award, 
  ArrowLeftRight, 
  TrendingDown, 
  CheckCircle, 
  ChevronRight, 
  Activity, 
  Sparkles,
  Quote
} from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';

interface CaseStudy {
  id: string;
  name: string;
  age: number;
  condition: string;
  duration: string;
  beforeImg: string;
  afterImg: string;
  metrics: { label: string; before: string; after: string; delta: string }[];
  quote: string;
  protocol: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'sarah',
    name: 'Sarah Mitchell',
    age: 38,
    condition: 'Insulin Resistance & Hormonal Weight',
    duration: '14 Weeks',
    beforeImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    metrics: [
      { label: 'Body Mass', before: '84.2 kg', after: '68.5 kg', delta: '-15.7 kg' },
      { label: 'Fasting Insulin', before: '18.4 uIU/mL', after: '5.1 uIU/mL', delta: '-72%' },
      { label: 'HbA1c', before: '6.4%', after: '5.1%', delta: 'Optimal' },
    ],
    quote: "I tried calorie restriction for 7 years without lasting results. Dr. Elena looked at my hormone panels and healed my metabolism through real food. I have never felt more vibrant.",
    protocol: 'Low-glycemic Mediterranean, circadian intermittent fasting, myo-inositol supplementation.'
  },
  {
    id: 'michael',
    name: 'Michael Chen',
    age: 46,
    condition: 'Chronic Fatigue & Elevated Triglycerides',
    duration: '12 Weeks',
    beforeImg: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80',
    metrics: [
      { label: 'Visceral Fat', before: 'Level 14', after: 'Level 7', delta: '-50%' },
      { label: 'Triglycerides', before: '240 mg/dL', after: '98 mg/dL', delta: '-59%' },
      { label: 'Resting Heart Rate', before: '76 bpm', after: '58 bpm', delta: '-18 bpm' },
    ],
    quote: "As a tech executive, afternoon brain fog was crippling my focus. Changing the nutrient density and gut microbiome transformed my cognitive clarity within 3 weeks.",
    protocol: 'Polyphenol-dense whole foods, mitochondrial co-factors, seed-oil elimination protocol.'
  },
  {
    id: 'priya',
    name: 'Priya Patel',
    age: 31,
    condition: 'Severe IBS, Gut Dysbiosis & Eczema',
    duration: '10 Weeks',
    beforeImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80',
    metrics: [
      { label: 'Bloating Severity', before: '9 / 10', after: '0 / 10', delta: 'Resolved' },
      { label: 'Zonulin (Leaky Gut)', before: '78 ng/mL', after: '24 ng/mL', delta: '-69%' },
      { label: 'Skin Clarity Score', before: 'Inflamed', after: 'Clear & Radiant', delta: '+100%' },
    ],
    quote: "I had visited 4 different gastroenterologists. Dr. Elena actually mapped my stool microbiome and gave me a step-by-step reintroduction plan. My skin cleared completely!",
    protocol: '4R Gut Restoration protocol (Remove, Replace, Reinoculate, Repair) + L-Glutamine.'
  }
];

export const TransformationSlider: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [activeStudyIndex, setActiveStudyIndex] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50); // 0 to 100%

  const current = caseStudies[activeStudyIndex];

  return (
    <section id="transformations" className="py-20 lg:py-28 bg-[#fafaf8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Documented Clinical Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Real People. Real Biomarkers. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-600">
              Lasting Transformations.
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We track cellular markers: fasting insulin, lipid particle sizes, microbiome diversity, and inflammatory cytokines.
          </p>
        </div>

        {/* Case Study Selection Pills */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {caseStudies.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => {
                setActiveStudyIndex(idx);
                setSliderPos(50);
              }}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeStudyIndex === idx
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {cs.name} ({cs.duration})
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft">
          
          {/* Left Column: Interactive Before/After Split Image (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            <div className="relative w-full max-w-md h-80 sm:h-96 rounded-2xl overflow-hidden select-none shadow-md border border-slate-200">
              
              {/* After Image (Full background) */}
              <img
                src={current.afterImg}
                alt="After transformation"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before Image (Clipped overlay) */}
              <div
                style={{ width: `${sliderPos}%` }}
                className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-lg z-10"
              >
                <img
                  src={current.beforeImg}
                  alt="Before transformation"
                  className="absolute inset-y-0 left-0 max-w-none h-full object-cover"
                  style={{ width: '100%', minWidth: '400px' }}
                />
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                  Before
                </span>
              </div>

              {/* After label */}
              <span className="absolute top-3 right-3 bg-brand-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full z-0">
                After ({current.duration})
              </span>

              {/* Slider Thumb Handle */}
              <div
                style={{ left: `${sliderPos}%` }}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none w-8 h-8 rounded-full bg-white text-slate-800 shadow-xl border-2 border-brand-500 flex items-center justify-center"
              >
                <ArrowLeftRight className="w-4 h-4 text-brand-600" />
              </div>

              {/* Range input invisible overlay for smooth touch/drag */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />
            </div>

            <p className="text-xs text-slate-600 mt-3 flex items-center gap-1.5">
              <ArrowLeftRight className="w-3.5 h-3.5 text-brand-600" />
              <span>Drag slider or swipe left & right to compare</span>
            </p>

          </div>

          {/* Right Column: Biometric Stats & Patient Story (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                  {current.condition}
                </span>
                <span className="text-xs font-semibold text-slate-600">Protocol length: {current.duration}</span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 font-display mb-2">{current.name}, {current.age}</h3>

              {/* Quote */}
              <div className="relative p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                <Quote className="w-6 h-6 text-brand-300 absolute -top-3 -left-2 fill-brand-100" />
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed pl-2">
                  "{current.quote}"
                </p>
              </div>

              {/* Biomarker Stats Grid */}
              <div className="space-y-3 mb-6">
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Clinical Blood & Metabolic Markers
                </p>
                <div className="grid grid-cols-3 gap-2.5">
                  {current.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 text-center">
                      <span className="text-[10px] text-slate-600 block mb-0.5">{m.label}</span>
                      <div className="text-xs line-through text-slate-600">{m.before}</div>
                      <div className="text-sm sm:text-base font-black text-emerald-800 font-display">{m.after}</div>
                      <span className="inline-block mt-1 text-[10px] font-bold text-brand-700 bg-emerald-100 px-1.5 py-0.2 rounded">
                        {m.delta}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Protocol used */}
              <div className="text-xs text-slate-600 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <strong className="text-slate-800">Protocol Prescribed: </strong>
                {current.protocol}
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Get Your Own Tailored Protocol</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
