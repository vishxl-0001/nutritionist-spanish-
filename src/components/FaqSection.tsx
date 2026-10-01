import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FaqItem[] = [
  {
    category: 'Método y Comida',
    question: '¿Tendré que pesar la comida o contar calorías toda la vida?',
    answer: 'Rotundamente no. En Punto Final nuestro propósito es la reeducación alimentaria. Al principio utilizamos referencias visuales sencillas y prácticas (como el método del plato y las porciones con la mano), pero jamás te encadenaremos a una báscula de cocina. Te enseñamos a conectar con tus señales naturales de hambre y saciedad.'
  },
  {
    category: 'Ubicación y Citas',
    question: '¿Dónde está la consulta en Sevilla y cómo funciona la modalidad online?',
    answer: 'Nuestra clínica física está ubicada en Sevilla, en la Avenida de Finlandia 1, Edificio Bermejales Center, Módulo 20 (41012). Disponemos de fácil acceso y aparcamiento. Si vives fuera de Sevilla o tus horarios no te permiten desplazarte, atendemos a pacientes de toda España mediante videoconsulta online con el mismo protocolo, cercanía y seguimiento continuo.'
  },
  {
    category: 'Seguros y Tarifas',
    question: '¿Aceptáis seguros médicos privados (Adeslas, Sanitas, Asisa, etc.)?',
    answer: 'Somos un centro sanitario privado e independiente para poder dedicarte entre 45 y 70 minutos por sesión sin prisas. Como somos Dietistas-Nutricionistas Colegiadas, emitimos factura sanitaria oficial válida para deducir o presentar ante pólizas de seguro con opción de reembolso de gastos médicos (donde te reintegran habitualmente entre el 80% y el 100%).'
  },
  {
    category: 'Método y Comida',
    question: '¿Me vais a vender pastillas, batidos o productos para adelgazar?',
    answer: 'Nunca. Nuestro lema es poner PUNTO FINAL a las dietas milagro. No vendemos batidos sustitutivos, sobres ni pastillas quemagrasas. Todo tu plan se elabora con comida real de mercado, frutas, verduras, legumbres, pescados, carnes y aceite de oliva virgen extra.'
  },
  {
    category: 'Acompañamiento',
    question: '¿Cómo funciona la resolución de dudas por WhatsApp entre consultas?',
    answer: 'En nuestros planes de acompañamiento cuentas con un canal directo de WhatsApp con tu nutricionista. Si estás en el supermercado y dudas con una etiqueta, o si vas a comer fuera el fin de semana y no sabes qué pedir de la carta, te asesoramos para que aprendas a tomar las mejores decisiones en tiempo real.'
  },
  {
    category: 'Salud Digestiva',
    question: 'Tengo hinchazón continua, gases o sospecha de SIBO. ¿Cómo me ayudáis?',
    answer: 'Gran parte de nuestras pacientes acuden por problemas digestivos. Realizamos una valoración profunda de síntomas, revisamos analíticas o pruebas de aliento, y aplicamos protocolos por fases (retirada temporal de fermentables, reparación de mucosa intestinal y reintroducción paulatina) para eliminar la distensión abdominal de raíz.'
  }
];

export const FaqSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['Todas', 'Método y Comida', 'Ubicación y Citas', 'Acompañamiento', 'Salud Digestiva', 'Seguros y Tarifas'];

  const filtered = selectedCategory === 'Todas' 
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold mb-3 border border-brand-200">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respuestas Claras</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Todo lo que necesitas saber antes de dar el paso y empezar tu camino en Punto Final.
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
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
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
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-3 animate-fadeIn font-medium">
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
