import React from 'react';
import { Calculator, Utensils, Calendar, Sparkles, MessageCircle } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenBooking,
  onNavigate,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 px-3 py-2 shadow-lg">
      <div className="flex items-center justify-around">
        <button
          onClick={() => onNavigate('calculator')}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-brand-700"
        >
          <div className="p-1 rounded-lg hover:bg-slate-100">
            <Calculator className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">Macros</span>
        </button>

        <button
          onClick={() => onNavigate('meal-planner')}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-brand-700"
        >
          <div className="p-1 rounded-lg hover:bg-slate-100">
            <Utensils className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">Menús</span>
        </button>

        {/* Center Booking Action */}
        <button
          onClick={onOpenBooking}
          className="relative -top-4 flex flex-col items-center group"
          aria-label="Pedir Cita"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-700 via-brand-600 to-emerald-500 text-white flex items-center justify-center shadow-lg shadow-brand-600/30 group-active:scale-95 transition-transform">
            <Calendar className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-extrabold text-brand-800 mt-0.5">Pedir Cita</span>
        </button>

        <button
          onClick={() => onNavigate('quiz')}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-brand-700"
        >
          <div className="p-1 rounded-lg hover:bg-slate-100">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">Test</span>
        </button>

        <a
          href="https://wa.me/34682602256?text=Hola,%20quisiera%20pedir%20cita%20o%20informaci%C3%B3n%20en%20Punto%20Final"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-emerald-700"
        >
          <div className="p-1 rounded-lg hover:bg-emerald-50">
            <MessageCircle className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="text-[10px] font-bold text-emerald-700">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
