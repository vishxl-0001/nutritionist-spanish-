import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  Activity, 
  ShieldAlert, 
  Award,
  Zap
} from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';

interface AssessmentQuizProps {
  onOpenBooking: () => void;
}

export const AssessmentQuiz: React.FC<AssessmentQuizProps> = ({ onOpenBooking }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const handleSelectOption = (step: number, option: string) => {
    const updated = { ...answers, [step]: option };
    setAnswers(updated);

    if (step < 3) {
      setCurrentStep(step + 1);
    } else {
      setIsFinished(true);
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#22c55e', '#16a34a', '#fbbf24', '#38bdf8']
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const restartQuiz = () => {
    setAnswers({});
    setCurrentStep(1);
    setIsFinished(false);
  };

  return (
    <section id="quiz" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Interactive 60-Second Clinical Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            Discover Your Cellular <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-600">
              Metabolic Archetype
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Answer 3 quick biological questions to unlock your custom clinical nutrition recommendations.
          </p>
        </div>

        {/* Quiz Container with 3D feel */}
        <Card3DTilt maxTilt={6} className="w-full">
          <div className="bg-gradient-to-b from-white to-slate-50/60 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-3d">
            
            {!isFinished ? (
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">
                    Question {currentStep} of 3
                  </span>
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentStep === step ? 'w-8 bg-brand-600' : currentStep > step ? 'w-4 bg-emerald-400' : 'w-4 bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Question 1 */}
                {currentStep === 1 && (
                  <div className="animate-fadeIn">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 font-display">
                      What is the primary biological obstacle you currently face?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { title: 'Stubborn Midsection Fat & Slow Metabolism', desc: 'Dieting harder stops working, weight sticks', icon: '🔥' },
                        { title: 'Severe Brain Fog & Afternoon Energy Crash', desc: 'Need caffeine & sugar to survive 3 PM', icon: '⚡' },
                        { title: 'Chronic Bloating & Unpredictable Digestion', desc: 'Food sensitivities, stomach tightness', icon: '🥑' },
                        { title: 'Hormonal Imbalance & Mood Swings', desc: 'PCOS symptoms, erratic sleep, irregular cycles', icon: '🌸' },
                      ].map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelectOption(1, opt.title)}
                          className="p-4 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 bg-white text-left transition-all duration-200 group flex items-start gap-3.5 shadow-2xs"
                        >
                          <span className="text-2xl p-2 rounded-xl bg-slate-50 group-hover:bg-brand-100 transition-colors">
                            {opt.icon}
                          </span>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-900 mb-1">
                              {opt.title}
                            </p>
                            <p className="text-[11px] text-slate-600 leading-tight">
                              {opt.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Question 2 */}
                {currentStep === 2 && (
                  <div className="animate-fadeIn">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 font-display">
                      How does your body typically respond 90 minutes after eating lunch?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { title: 'Intense sleepiness and sudden carbohydrate cravings', desc: 'Indicator of rapid reactive hypoglycemia', icon: '🥱' },
                        { title: 'Abdominal distension, gas, or mild nausea', desc: 'Sign of low stomach acid or enzyme deficiency', icon: '🫧' },
                        { title: 'Hungry again as if you haven’t eaten', desc: 'Impaired leptin signaling and high insulin', icon: '🍽️' },
                        { title: 'Stable, light, and mentally alert', desc: 'High metabolic flexibility and balanced macros', icon: '✨' },
                      ].map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelectOption(2, opt.title)}
                          className="p-4 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 bg-white text-left transition-all duration-200 group flex items-start gap-3.5 shadow-2xs"
                        >
                          <span className="text-2xl p-2 rounded-xl bg-slate-50 group-hover:bg-brand-100 transition-colors">
                            {opt.icon}
                          </span>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-900 mb-1">
                              {opt.title}
                            </p>
                            <p className="text-[11px] text-slate-600 leading-tight">
                              {opt.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Question 3 */}
                {currentStep === 3 && (
                  <div className="animate-fadeIn">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 font-display">
                      Which best describes your current nutrition pattern?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { title: 'High Stress & Skipping Meals, Binging Late Night', desc: 'Disrupted cortisol rhythm & circadian mismatch', icon: '🌙' },
                        { title: 'Strict Calorie Restriction / Low-Fat Fad Diets', desc: 'Suppressed thyroid conversion and metabolic rate', icon: '📉' },
                        { title: 'Eating "Clean" But Still Stuck with Symptoms', desc: 'Hidden food intolerances or gut dysbiosis', icon: '🥗' },
                        { title: 'Frequent Dining Out & Processed On-The-Go Foods', desc: 'Inflammatory seed oils and mineral depletion', icon: '🥡' },
                      ].map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelectOption(3, opt.title)}
                          className="p-4 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 bg-white text-left transition-all duration-200 group flex items-start gap-3.5 shadow-2xs"
                        >
                          <span className="text-2xl p-2 rounded-xl bg-slate-50 group-hover:bg-brand-100 transition-colors">
                            {opt.icon}
                          </span>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-900 mb-1">
                              {opt.title}
                            </p>
                            <p className="text-[11px] text-slate-600 leading-tight">
                              {opt.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ) : (
              /* Instant Result Card */
              <div className="animate-fadeIn text-center sm:text-left">
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 to-emerald-400 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-500/30">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Analysis Complete</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 font-display">
                      Archetype: Metabolic & Cortisol Dysregulation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Your answers indicate a combination of glycemic rollercoaster spikes and elevated adrenal cortisol.
                    </p>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 text-left">
                    <span className="text-[11px] font-bold text-brand-800 uppercase block mb-1">Priority #1</span>
                    <p className="text-xs font-bold text-slate-800 mb-1">Glucose Level Flattening</p>
                    <p className="text-[11px] text-slate-600">Frontload 30g protein at breakfast to blunt afternoon cortisol surges.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-100 text-left">
                    <span className="text-[11px] font-bold text-amber-800 uppercase block mb-1">Priority #2</span>
                    <p className="text-xs font-bold text-slate-800 mb-1">Gut Mucosa Repair</p>
                    <p className="text-[11px] text-slate-600">Incorporate bioactive polyphenols and collagen peptides to seal junctions.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-100 text-left">
                    <span className="text-[11px] font-bold text-teal-800 uppercase block mb-1">Priority #3</span>
                    <p className="text-xs font-bold text-slate-800 mb-1">Circadian Alignment</p>
                    <p className="text-[11px] text-slate-600">Stop eating 3 hours prior to sleep to enable cellular autophagy.</p>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Discuss Results in Free 1-on-1 Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={restartQuiz}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Quiz</span>
                  </button>
                </div>

              </div>
            )}

          </div>
        </Card3DTilt>

      </div>
    </section>
  );
};
