import React from 'react';
import { Calculator, Utensils, Calendar, Sparkles, HeartPulse } from 'lucide-react';

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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-lg border-t border-slate-200/80 px-4 py-2 shadow-lg">
      <div className="flex items-center justify-around">
        <button
          onClick={() => onNavigate('calculator')}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-brand-600"
        >
          <div className="p-1 rounded-lg hover:bg-slate-100">
            <Calculator className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold">Macros</span>
        </button>

        <button
          onClick={() => onNavigate('meal-planner')}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-brand-600"
        >
          <div className="p-1 rounded-lg hover:bg-slate-100">
            <Utensils className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold">Meals</span>
        </button>

        {/* Center Booking Action */}
        <button
          onClick={onOpenBooking}
          className="relative -top-4 flex flex-col items-center group"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-600 to-emerald-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/30 group-active:scale-95 transition-transform">
            <Calendar className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold text-brand-700 mt-0.5">Book Now</span>
        </button>

        <button
          onClick={() => onNavigate('quiz')}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-brand-600"
        >
          <div className="p-1 rounded-lg hover:bg-slate-100">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold">Quiz</span>
        </button>

        <button
          onClick={() => onNavigate('about')}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-brand-600"
        >
          <div className="p-1 rounded-lg hover:bg-slate-100">
            <HeartPulse className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold">Doctor</span>
        </button>
      </div>
    </div>
  );
};
