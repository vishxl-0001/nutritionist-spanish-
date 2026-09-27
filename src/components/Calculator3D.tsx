import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Flame, 
  Droplets, 
  Sparkles, 
  Check, 
  ArrowRight,
  Download
} from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';

type Goal = 'fat_loss' | 'lean_muscle' | 'gut_health' | 'hormone_balance' | 'longevity';

export const Calculator3D: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [gender, setGender] = useState<'female' | 'male'>('female');
  const [age, setAge] = useState<number>(32);
  const [weightKg, setWeightKg] = useState<number>(68);
  const [heightCm, setHeightCm] = useState<number>(168);
  const [activity, setActivity] = useState<number>(1.375); // moderate
  const [goal, setGoal] = useState<Goal>('fat_loss');
  const [copied, setCopied] = useState<boolean>(false);

  // Mifflin-St Jeor BMR calculation
  const calculations = useMemo(() => {
    let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
    bmr += gender === 'female' ? -161 : 5;

    const tdee = Math.round(bmr * activity);

    let targetCalories = tdee;
    let proteinRatio = 0.3;
    let fatRatio = 0.3;
    let carbRatio = 0.4;

    if (goal === 'fat_loss') {
      targetCalories = Math.round(tdee * 0.8); // 20% deficit
      proteinRatio = 0.35;
      fatRatio = 0.3;
      carbRatio = 0.35;
    } else if (goal === 'lean_muscle') {
      targetCalories = Math.round(tdee * 1.12); // 12% surplus
      proteinRatio = 0.3;
      fatRatio = 0.25;
      carbRatio = 0.45;
    } else if (goal === 'gut_health') {
      targetCalories = tdee;
      proteinRatio = 0.28;
      fatRatio = 0.35;
      carbRatio = 0.37;
    } else if (goal === 'hormone_balance') {
      targetCalories = Math.round(tdee * 0.95);
      proteinRatio = 0.28;
      fatRatio = 0.38; // healthy fats essential for steroid hormones
      carbRatio = 0.34;
    } else if (goal === 'longevity') {
      targetCalories = Math.round(tdee * 0.9);
      proteinRatio = 0.25;
      fatRatio = 0.35;
      carbRatio = 0.4;
    }

    const proteinGrams = Math.round((targetCalories * proteinRatio) / 4);
    const fatGrams = Math.round((targetCalories * fatRatio) / 9);
    const carbGrams = Math.round((targetCalories * carbRatio) / 4);
    const waterLiters = (weightKg * 0.035).toFixed(1);

    return {
      tdee,
      targetCalories,
      proteinGrams,
      fatGrams,
      carbGrams,
      proteinPct: Math.round(proteinRatio * 100),
      fatPct: Math.round(fatRatio * 100),
      carbPct: Math.round(carbRatio * 100),
      waterLiters,
    };
  }, [gender, age, weightKg, heightCm, activity, goal]);

  const handleCopyTarget = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[#fafaf8] relative overflow-hidden">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0fdf4_1px,transparent_1px),linear-gradient(to_bottom,#f0fdf4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-brand-800 text-xs font-semibold mb-4 border border-brand-200">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Metabolic Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Calculate Your Precision Daily <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-600">
              Calories & Macro Targets
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Every cell in your body needs exact fuel ratios. Tailor your calories and macro distribution according to clinical metabolic science.
          </p>
        </div>

        {/* 3D Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Parameters (7 cols) */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft">
            
            {/* Goal Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                1. Select Primary Wellness Goal
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'fat_loss', label: 'Metabolic Fat Loss', emoji: '🔥' },
                  { id: 'lean_muscle', label: 'Lean Muscle & Tone', emoji: '💪' },
                  { id: 'gut_health', label: 'Gut Microbiome Health', emoji: '🥑' },
                  { id: 'hormone_balance', label: 'Hormone & Thyroid', emoji: '🌸' },
                  { id: 'longevity', label: 'Longevity & Fasting', emoji: '🌿' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setGoal(item.id as Goal)}
                    className={`p-3 rounded-2xl text-left border transition-all text-xs font-semibold flex flex-col gap-1.5 ${
                      goal === item.id
                        ? 'border-brand-500 bg-brand-50/80 text-brand-900 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <span className="text-base">{item.emoji}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Gender & Age */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Gender
                </label>
                <div className="grid grid-cols-2 gap-2 bg-slate-100/80 p-1 rounded-2xl">
                  <button
                    onClick={() => setGender('female')}
                    className={`py-2 rounded-xl text-xs font-semibold transition-all ${
                      gender === 'female' ? 'bg-white shadow-xs text-brand-800' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Female
                  </button>
                  <button
                    onClick={() => setGender('male')}
                    className={`py-2 rounded-xl text-xs font-semibold transition-all ${
                      gender === 'male' ? 'bg-white shadow-xs text-brand-800' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Male
                  </button>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Age
                  </label>
                  <span className="text-sm font-extrabold text-brand-700">{age} yrs</span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-brand-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
              </div>
            </div>

            {/* Weight and Height Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Current Weight</span>
                  <span className="text-base font-black text-slate-900 font-display">{weightKg} kg</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="150"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full accent-brand-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-600 mt-1">
                  <span>40 kg</span>
                  <span>150 kg</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Height</span>
                  <span className="text-base font-black text-slate-900 font-display">{heightCm} cm</span>
                </div>
                <input
                  type="range"
                  min="140"
                  max="210"
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="w-full accent-brand-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-600 mt-1">
                  <span>140 cm</span>
                  <span>210 cm</span>
                </div>
              </div>
            </div>

            {/* Activity Level Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Daily Physical Activity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { value: 1.2, label: 'Light / Desk Job', sub: '< 2k steps/day' },
                  { value: 1.375, label: 'Moderate Active', sub: '3-4 workouts/wk' },
                  { value: 1.55, label: 'High Intensity', sub: 'Athlete / Daily training' },
                ].map((act, i) => (
                  <button
                    key={i}
                    onClick={() => setActivity(act.value)}
                    className={`p-3 rounded-2xl text-left border transition-all text-xs ${
                      activity === act.value
                        ? 'border-brand-500 bg-brand-50/80 text-brand-900 font-bold'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600 font-medium'
                    }`}
                  >
                    <p>{act.label}</p>
                    <p className="text-[10px] text-slate-600 font-normal">{act.sub}</p>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right: 3D Interactive Target Results Card (5 cols) */}
          <div className="lg:col-span-5">
            <Card3DTilt maxTilt={10} className="w-full">
              <div className="bg-gradient-to-br from-white via-white to-emerald-50/60 rounded-3xl p-6 sm:p-8 border border-white/90 shadow-3d relative overflow-hidden">
                
                {/* Top Glowing Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                    <span>Your Clinical Target</span>
                  </div>
                  <span className="text-xs text-slate-600 font-semibold">TDEE: {calculations.tdee} kcal</span>
                </div>

                {/* Big Calorie Display */}
                <div className="mb-6 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-200/60 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Target Energy Intake
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 font-display tracking-tight">
                        {calculations.targetCalories}
                      </span>
                      <span className="text-sm font-bold text-brand-700">kcal / day</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center shadow-md shadow-brand-500/30">
                    <Flame className="w-6 h-6 animate-pulse" />
                  </div>
                </div>

                {/* Macro Progress Bar Split */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                    <span>Macro Distribution</span>
                    <span>100% Caloric Balance</span>
                  </div>
                  <div className="h-3.5 w-full bg-slate-100 rounded-full overflow-hidden flex shadow-inner-soft">
                    <div
                      style={{ width: `${calculations.proteinPct}%` }}
                      className="bg-emerald-500 h-full transition-all duration-500"
                      title={`Protein: ${calculations.proteinPct}%`}
                    />
                    <div
                      style={{ width: `${calculations.fatPct}%` }}
                      className="bg-amber-400 h-full transition-all duration-500"
                      title={`Fats: ${calculations.fatPct}%`}
                    />
                    <div
                      style={{ width: `${calculations.carbPct}%` }}
                      className="bg-teal-400 h-full transition-all duration-500"
                      title={`Carbs: ${calculations.carbPct}%`}
                    />
                  </div>
                </div>

                {/* Macro Cards Breakdown */}
                <div className="grid grid-cols-3 gap-2.5 mb-6">
                  
                  {/* Protein */}
                  <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 text-center">
                    <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-emerald-800 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Protein</span>
                    </div>
                    <p className="text-xl font-black text-slate-900 font-display">{calculations.proteinGrams}g</p>
                    <p className="text-[10px] text-slate-600 font-medium">{calculations.proteinPct}% total</p>
                  </div>

                  {/* Healthy Fats */}
                  <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-center">
                    <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-amber-800 mb-1">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span>Fats</span>
                    </div>
                    <p className="text-xl font-black text-slate-900 font-display">{calculations.fatGrams}g</p>
                    <p className="text-[10px] text-slate-600 font-medium">{calculations.fatPct}% total</p>
                  </div>

                  {/* Net Carbs */}
                  <div className="p-3 rounded-2xl bg-teal-50/60 border border-teal-200/80 text-center">
                    <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-teal-800 mb-1">
                      <span className="w-2 h-2 rounded-full bg-teal-400" />
                      <span>Carbs</span>
                    </div>
                    <p className="text-xl font-black text-slate-900 font-display">{calculations.carbGrams}g</p>
                    <p className="text-[10px] text-slate-600 font-medium">{calculations.carbPct}% total</p>
                  </div>

                </div>

                {/* Hydration Banner */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-sky-50 border border-sky-200/70 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center">
                      <Droplets className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-sky-900">Cellular Hydration Goal</p>
                      <p className="text-[11px] text-sky-700">Filtered spring water + electrolytes</p>
                    </div>
                  </div>
                  <span className="text-base font-extrabold text-sky-900 font-display">{calculations.waterLiters} L / day</span>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={handleCopyTarget}
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Saved to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Save Targets & Copy Summary</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-900 font-semibold text-xs border border-brand-200 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Turn This Into a Customized 7-Day Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </Card3DTilt>
          </div>

        </div>

      </div>
    </section>
  );
};
