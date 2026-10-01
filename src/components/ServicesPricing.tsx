import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield, ArrowRight, Star, MessageCircle } from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';

interface ServicesPricingProps {
  onOpenBooking: () => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({ onOpenBooking }) => {
  const [billingCycle, setBillingCycle] = useState<'full' | 'monthly'>('full');

  const plans = [
    {
      id: 'inicial',
      name: 'Consulta Inicial de Valoración',
      popular: false,
      tag: 'Para Empezar',
      priceFull: '65 €',
      priceMonthly: '65 €',
      duration: 'Sesión Clínica 70 min',
      description: 'Ideal para hacer un diagnóstico clínico inicial, analizar analíticas médicas y recibir tus primeras pautas personalizadas.',
      features: [
        'Consulta de 70 minutos (Presencial en Bermejales u Online)',
        'Estudio de composición corporal por bioimpedancia (en clínica)',
        'Revisión clínica de tus analíticas sanguíneas recientes',
        'Primer plan de alimentación realista para tu día a día',
        'Guía de compra inteligente y lectura de etiquetas',
        'Factura sanitaria oficial para seguros de reembolso',
      ],
      cta: 'Pedir Consulta Inicial'
    },
    {
      id: 'reeducacion12',
      name: 'Plan Reeducación 12 Semanas',
      popular: true,
      tag: 'Plan Estrella',
      priceFull: '290 €',
      priceMonthly: '105 €/mes',
      duration: '3 Meses (6 Sesiones)',
      description: 'Nuestro programa más recomendado para transformar tu alimentación, perder grasa sin efecto rebote y fijar hábitos para siempre.',
      features: [
        'Incluye Consulta Inicial completa de 70 min',
        '5 Consultas de seguimiento y evolución quincenal',
        'Acompañamiento y resolución de dudas por WhatsApp directo',
        'Adaptación continua a tu vida social, horarios y vacaciones',
        'Menús semanales variados con recetas mediterráneas',
        'Estrategias de psiconutrición contra el hambre emocional',
        'Pauta final de mantenimiento para no recuperar el peso',
      ],
      cta: 'Empezar Plan 12 Semanas'
    },
    {
      id: 'digestivo_hormonal',
      name: 'Digestivo & Salud Hormonal',
      popular: false,
      tag: 'Casos Complejos',
      priceFull: '480 €',
      priceMonthly: '165 €/mes',
      duration: '4 Meses de Tratamiento',
      description: 'Enfoque clínico intensivo para patologías digestivas (SIBO, colon irritable, disbiosis) o desajustes hormonales (SOP, amenorrea, tiroides).',
      features: [
        'Todo lo del Plan de Reeducación 12 Semanas',
        'Protocolo clínico por fases (retirada, reparación y reintroducción)',
        'Interpretación de test de SIBO, celiaquía o perfiles hormonales',
        'Pauta de suplementación y fitoterapia basada en evidencia',
        'Contacto prioritario por WhatsApp para resolver molestias',
        'Coordinación con los informes de tus médicos especialistas',
      ],
      cta: 'Consultar Caso Clínico'
    }
  ];

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#fafaf8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold mb-3 border border-brand-200">
            <Zap className="w-3.5 h-3.5" />
            <span>Tarifas Claras y Transparentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-4">
            Planes de Nutrición y Acompañamiento <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-emerald-600 to-teal-600">
              Adaptados a tus Necesidades
            </span>
          </h2>
          <p className="text-slate-600 text-base">
            Sin permanencias ni productos milagro obligatorios. Emitimos factura sanitaria oficial válida para desgravación o seguros médicos con póliza de reembolso.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center gap-2 bg-slate-200/70 p-1 rounded-full mt-8">
            <button
              onClick={() => setBillingCycle('full')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'full' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pago Único (Con Descuento)
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'monthly' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pago Fraccionado Mes a Mes
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <Card3DTilt key={plan.id} maxTilt={6} className="h-full">
              <div
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white border-2 border-brand-600 shadow-3d lg:-translate-y-2'
                    : 'bg-white/90 border border-slate-200/90 shadow-soft'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-700 to-emerald-600 text-white text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>{plan.tag}</span>
                  </div>
                )}

                <div>
                  {!plan.popular && (
                    <span className="inline-block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      {plan.tag}
                    </span>
                  )}

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-brand-700 font-bold mb-4">
                    {plan.duration}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-4 pb-4 border-b border-slate-100">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900 font-display tracking-tight">
                      {billingCycle === 'full' ? plan.priceFull : plan.priceMonthly}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      {billingCycle === 'monthly' && plan.id !== 'inicial' ? ' / mes' : ' IVA incl.'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={onOpenBooking}
                    className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-sm ${
                      plan.popular
                        ? 'bg-gradient-to-r from-brand-700 to-emerald-600 text-white hover:shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/34682602256?text=Hola,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20plan:%20${encodeURIComponent(plan.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Preguntar dudas por WhatsApp</span>
                  </a>
                </div>

              </div>
            </Card3DTilt>
          ))}
        </div>

      </div>
    </section>
  );
};
