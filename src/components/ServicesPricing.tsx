import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield, ArrowRight, Star } from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';

interface ServicesPricingProps {
  onOpenBooking: () => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({ onOpenBooking }) => {
  const [billingCycle, setBillingCycle] = useState<'full' | 'monthly'>('full');

  const plans = [
    {
      id: 'audit',
      name: 'Metabolic Audit & Protocol',
      popular: false,
      tag: 'Initial Deep-Dive',
      priceFull: '$390',
      priceMonthly: '$145',
      duration: '4-Week Kickstart',
      description: 'Ideal for uncovering root-cause imbalances and receiving a clinical 30-day nutrition roadmap.',
      features: [
        'Comprehensive 75-minute Clinical Intake',
        'Review of current bloodwork & GP labs',
        'Personalized Macro & Micronutrient Roadmap',
        '30-day whole food anti-inflammatory meal guide',
        'Custom supplement & lifestyle protocol',
        'Post-session 30-minute check-in call',
      ],
      cta: 'Book Metabolic Audit'
    },
    {
      id: 'transformation',
      name: '12-Week Total Transformation',
      popular: true,
      tag: 'Clinical Favorite',
      priceFull: '$1,290',
      priceMonthly: '$450',
      duration: '12 Weeks Intensive',
      description: 'Our signature clinical program to reset metabolism, heal digestion, and cement permanent habits.',
      features: [
        'Everything in Metabolic Audit plus:',
        'Continuous Glucose Monitor (CGM) sensor review',
        'Weekly 45-min 1-on-1 clinical consultations',
        'Direct WhatsApp messaging with Dr. Elena',
        'Bi-weekly protocol adjustments based on bio-feedback',
        'Full custom recipe book tailored to your food sensitivities',
        'Dining out & travel survival blueprint',
        '100% Satisfaction & outcome commitment'
      ],
      cta: 'Start 12-Week Transformation'
    },
    {
      id: 'concierge',
      name: 'VIP Concierge Longevity',
      popular: false,
      tag: 'Executive & Athlete',
      priceFull: '$2,850',
      priceMonthly: '$980',
      duration: '6 Months Care',
      description: 'White-glove biological optimization, functional medicine lab sequencing, and personal chef alignment.',
      features: [
        'Everything in 12-Week Transformation plus:',
        'Comprehensive GI-MAP Stool Microbiome analysis',
        'DUTCH Complete hormone steroid testing',
        'Direct coordination with your personal chef or meal prep',
        'Priority same-day emergency support',
        'Custom peptide and nutraceutical protocol',
        'Quarterly repeat bloodwork comparison',
      ],
      cta: 'Apply for VIP Concierge'
    }
  ];

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#fafaf8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Consultation Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Structured Clinical Programs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-600">
              For Lasting Biological Change
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            All programs are FSA/HSA eligible and provide superbills for insurance reimbursement.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center gap-2 bg-slate-200/70 p-1 rounded-full mt-8">
            <button
              onClick={() => setBillingCycle('full')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'full' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pay Upfront (Save 15%)
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'monthly' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Installments
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
                    ? 'bg-white border-2 border-brand-500 shadow-3d lg:-translate-y-2'
                    : 'bg-white/80 border border-slate-200/90 shadow-soft'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-600 to-emerald-500 text-white text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
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
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{plan.description}</p>

                  {/* Pricing */}
                  <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
                        {billingCycle === 'full' ? plan.priceFull : plan.priceMonthly}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {billingCycle === 'full' ? '/ total package' : '/ month'}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-brand-700 block mt-1">
                      Program timeline: {plan.duration}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">What's Included:</p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={onOpenBooking}
                  className={`w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-brand-600 to-emerald-600 text-white shadow-md hover:shadow-lg hover:scale-101'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-emerald-50/80 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">30-Day Clinical Commitment Guarantee</h4>
              <p className="text-xs text-slate-600">If you follow the prescribed nutrition protocol and see zero bio-marker improvement, receive 100% refund.</p>
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-xl bg-white border border-emerald-300 text-brand-900 font-bold text-xs hover:bg-emerald-100 transition-colors whitespace-nowrap"
          >
            Schedule Discovery Call
          </button>
        </div>

      </div>
    </section>
  );
};
