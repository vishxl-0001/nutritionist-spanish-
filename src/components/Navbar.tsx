import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Menu, 
  X, 
  Phone, 
  ChevronRight, 
  Utensils, 
  Calculator, 
  Award,
  HeartPulse
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/85 backdrop-blur-md shadow-sm border-b border-emerald-100/60'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              onClick={() => handleLinkClick('hero')} 
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
                <HeartPulse className="w-5 h-5 text-white" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-slate-900 font-display flex items-center gap-1">
                  Aura<span className="text-brand-600">Nutri</span>
                </span>
                <span className="block text-[10px] tracking-wider uppercase font-semibold text-slate-600 -mt-1">
                  Clinical & Functional
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/70 backdrop-blur-md border border-slate-200/80 px-3 py-1.5 rounded-full shadow-xs">
              <button
                onClick={() => handleLinkClick('calculator')}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-brand-600 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Macro Calculator
              </button>
              <button
                onClick={() => handleLinkClick('meal-planner')}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-brand-600 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Meal Plans
              </button>
              <button
                onClick={() => handleLinkClick('quiz')}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-brand-600 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Metabolic Quiz
              </button>
              <button
                onClick={() => handleLinkClick('transformations')}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-brand-600 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Success Stories
              </button>
              <button
                onClick={() => handleLinkClick('programs')}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-brand-600 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Programs
              </button>
              <button
                onClick={() => handleLinkClick('about')}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-brand-600 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                About Doctor
              </button>
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 pr-2 border-r border-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>3 Consultations Open Today</span>
              </div>

              <button
                onClick={onOpenBooking}
                className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-slate-900 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102 flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>Book Consultation</span>
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 rounded-full bg-brand-600 text-white font-medium text-xs shadow-xs"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 bg-white/80 border border-slate-200 shadow-xs focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
          <div className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-white">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-900 font-display">AuraNutri</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-2">
                {[
                  { id: 'calculator', label: 'Macro & Calorie Target Calculator', icon: Calculator },
                  { id: 'meal-planner', label: 'Weekly Meal Plan & Recipes', icon: Utensils },
                  { id: 'quiz', label: 'Metabolic Type Assessment', icon: Sparkles },
                  { id: 'transformations', label: 'Patient Transformations', icon: Award },
                  { id: 'programs', label: 'Consultation Programs', icon: Calendar },
                  { id: 'about', label: 'About Dr. Elena Vance', icon: HeartPulse },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      className="flex items-center justify-between p-3.5 rounded-xl hover:bg-emerald-50/80 text-left font-medium text-slate-700 hover:text-brand-700 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100/70 flex items-center justify-center text-brand-700">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm">{item.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-500 text-white font-semibold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 1-on-1 Consultation</span>
              </button>
              <div className="text-center">
                <span className="text-xs text-slate-600">Available Mon-Sat • Virtual & In-Clinic</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
