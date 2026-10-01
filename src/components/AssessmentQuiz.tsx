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
  Zap,
  MessageCircle
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold mb-3 border border-brand-200">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Test Diagnóstico Rápido (60 Segundos)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display mb-3">
            Descubre tu Perfil <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-emerald-600 to-teal-600">
              Metabólico y Digestivo
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Responde 3 preguntas clave para identificar qué está bloqueando tu bienestar y recibir una orientación personalizada.
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
                    Pregunta {currentStep} de 3
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

                {/* Pregunta 1 */}
                {currentStep === 1 && (
                  <div className="animate-fadeIn">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 font-display">
                      ¿Cuál es el principal motivo u obstáculo que deseas solucionar?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { title: 'Grasa Rebelde y Efecto Rebote', desc: 'Dietas restrictivas que dejé y recuperé el peso con creces', icon: '🔥' },
                        { title: 'Hinchazón Abdominal y Malestar Digestivo', desc: 'Gases continuos, vientre abultado y digestiones pesadas', icon: '🥑' },
                        { title: 'Bajones de Energía y Ansiedad por Dulce', desc: 'Cansancio a media tarde y picoteo descontrolado', icon: '⚡' },
                        { title: 'Salud Hormonal, SOP o Tiroides', desc: 'Ciclos irregulares, retención de líquidos o estancamiento', icon: '🌸' },
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
                            <p className="text-[11px] text-slate-500 leading-tight">
                              {opt.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pregunta 2 */}
                {currentStep === 2 && (
                  <div className="animate-fadeIn">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 font-display">
                      ¿Cómo responde tu cuerpo normalmente 1 o 2 horas después de comer?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { title: 'Somnolencia intensa y ganas urgentes de dulce o café', desc: 'Indicio de pico y caída brusca de glucosa en sangre', icon: '🥱' },
                        { title: 'Distensión en el abdomen, gases o pesadez', desc: 'Señal de fermentación bacteriana o disbiosis intestinal', icon: '🫧' },
                        { title: 'Hambre de nuevo como si no hubiera comido nada', desc: 'Señales de saciedad desreguladas por falta de nutrientes clave', icon: '🍽️' },
                        { title: 'Ligera/o, satisfecha/o y con mente despierta', desc: 'Buena adaptación digestiva y balance de platos', icon: '✨' },
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
                            <p className="text-[11px] text-slate-500 leading-tight">
                              {opt.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pregunta 3 */}
                {currentStep === 3 && (
                  <div className="animate-fadeIn">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 font-display">
                      ¿Cómo describirías tu relación actual con la comida?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { title: 'Ciclos de culpa: paso de control estricto a comer por ansiedad', desc: 'Cansancio emocional tras años de dietas restrictivas', icon: '🌙' },
                        { title: 'Miedo a ciertos alimentos (pan, fruta por la noche, etc.)', desc: 'Mitos nutricionales que limitan tu vida social', icon: '📉' },
                        { title: 'Como sano habitualmente pero mi cuerpo sigue sin responder', desc: 'Necesitas analizar qué nutrientes o digestión fallan', icon: '🥗' },
                        { title: 'Falta total de tiempo y mala organización de menús', desc: 'Como fuera o recurro a ultraprocesados por prisa', icon: '🥡' },
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
                            <p className="text-[11px] text-slate-500 leading-tight">
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-700 to-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-500/30">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Diagnóstico Preliminar Completado</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 font-display">
                      Perfil: Fatiga Metabólica y Relación Restrictiva con la Comida
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Tus respuestas reflejan un metabolismo ralentizado por dietas previas junto a fluctuaciones de glucosa e inflamación digestiva.
                    </p>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 text-left">
                    <span className="text-[11px] font-bold text-brand-800 uppercase block mb-1">Prioridad 1</span>
                    <p className="text-xs font-bold text-slate-800 mb-1">Punto Final a la Culpa</p>
                    <p className="text-[11px] text-slate-600">Comer comida real en cantidad suficiente para reactivar tu tasa metabólica basal.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-100 text-left">
                    <span className="text-[11px] font-bold text-amber-800 uppercase block mb-1">Prioridad 2</span>
                    <p className="text-xs font-bold text-slate-800 mb-1">Desinflamación Digestiva</p>
                    <p className="text-[11px] text-slate-600">Introducir alimentos amigables con tu microbiota para eliminar gases e hinchazón.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-100 text-left">
                    <span className="text-[11px] font-bold text-teal-800 uppercase block mb-1">Prioridad 3</span>
                    <p className="text-xs font-bold text-slate-800 mb-1">Estabilidad Glucémica</p>
                    <p className="text-[11px] text-slate-600">Secuenciar comidas con fibra y proteína para evitar los bajones de la tarde.</p>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-700 via-brand-600 to-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Comentar mi Caso en Consulta</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/34682602256?text=Hola,%20acabo%20de%20hacer%20el%20test%20nutricional%20en%20vuestra%20web%20y%20me%20gustar%C3%ADa%20pedir%20cita%20o%20informaci%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Preguntar por WhatsApp</span>
                  </a>

                  <button
                    onClick={restartQuiz}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Repetir Test</span>
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
