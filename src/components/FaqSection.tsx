import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FaqItem[] = [
  {
    category: 'Consultations',
    question: 'How do virtual telehealth consultations work?',
    answer: 'Consultations take place via our secure, HIPAA-compliant HD video platform. Before our first session, you will complete an in-depth metabolic questionnaire and upload any recent medical bloodwork. During the 75-minute intake, we analyze your bio-markers, symptoms, and lifestyle before crafting your custom 30-day intervention.'
  },
  {
    category: 'Testing & Labs',
    question: 'Can Dr. Elena order functional lab panels and bloodwork?',
    answer: 'Yes! We order comprehensive functional diagnostics through LabCorp, Quest, and specialty laboratories including GI-MAP (DNA stool microbiome sequencing), DUTCH Complete (urine steroid hormone testing), and Continuous Glucose Monitors (CGM). If you already have existing lab work from your primary doctor, we review it thoroughly at no extra fee.'
  },
  {
    category: 'Insurance & Pricing',
    question: 'Is your care covered by insurance or HSA/FSA funds?',
    answer: 'While we operate as an out-of-network clinical practice to provide unhurried, evidence-based care, all consultations and functional testing are 100% eligible for HSA (Health Savings Account) and FSA (Flexible Spending Account) payments. We provide comprehensive Superbills with clinical CPT diagnosis codes for direct reimbursement from your private insurer.'
  },
  {
    category: 'Meal Plans',
    question: 'Will I be forced to follow an extreme or restrictive diet?',
    answer: 'Never. Extreme restriction triggers metabolic down-regulation, thyroid slowing, and psychological binge-restrict cycles. We focus on nutrient-density, anti-inflammatory food sequencing, and balancing blood glucose curves. You will eat delicious, satiating whole foods that include seasonal carbohydrates and healthy fats.'
  },
  {
    category: 'Meal Plans',
    question: 'What if I have severe allergies, IBS, or follow a plant-based diet?',
    answer: 'Every single meal blueprint and recipe collection is built from the ground up for your biology. Whether you require a low-FODMAP, histamine-conscious, autoimmune paleo (AIP), kosher, or vegetarian protocol, your plan will be customized with precision substitutes.'
  },
  {
    category: 'Consultations',
    question: 'How quickly do patients typically see biological improvements?',
    answer: 'Most patients notice immediate reductions in post-meal bloating and afternoon energy crashes within 7 to 10 days. Measurable biomarker changes—such as reductions in fasting insulin, triglycerides, and inflammatory hs-CRP—are typically documented on follow-up lab panels at the 8 to 12-week mark.'
  }
];

export const FaqSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['All', 'Consultations', 'Testing & Labs', 'Insurance & Pricing', 'Meal Plans'];

  const filtered = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(f => f.category === selectedCategory);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#fafaf8] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about our clinical method, lab panels, and personalized care.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filtered.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 font-display">
                    {item.question}
                  </span>
                  <div className={`p-1 rounded-full bg-slate-100 text-slate-600 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-brand-100 text-brand-700' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-3 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
