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
  HeartPulse,
  MessageCircle,
  MapPin,
  Star
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
            ? 'py-2.5 bg-white/90 backdrop-blur-md shadow-sm border-b border-emerald-100/70'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Punto Final */}
            <div 
              onClick={() => handleLinkClick('hero')} 
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-700 via-brand-600 to-emerald-500 flex items-center justify-center shadow-md shadow-brand-600/25 group-hover:scale-105 transition-transform">
                <span className="text-white font-extrabold text-base tracking-tighter font-display">PF</span>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-display">
                    PUNTOFINAL<span className="text-brand-600">.</span>
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-bold text-slate-500 -mt-1 flex items-center gap-1">
                  <span>Nutrición Sevilla</span>
                  <span className="w-1 h-1 rounded-full bg-brand-500" />
                  <span className="text-amber-600 flex items-center gap-0.5 font-extrabold">
                    <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" /> 5.0
                  </span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md border border-slate-200/90 px-3 py-1.5 rounded-full shadow-xs">
              <button
                onClick={() => handleLinkClick('calculator')}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-brand-700 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Calculadora
              </button>
              <button
                onClick={() => handleLinkClick('meal-planner')}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-brand-700 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Menú Semanal
              </button>
              <button
                onClick={() => handleLinkClick('quiz')}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-brand-700 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Test Diagnóstico
              </button>
              <button
                onClick={() => handleLinkClick('transformations')}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-brand-700 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Casos Reales
              </button>
              <button
                onClick={() => handleLinkClick('programs')}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-brand-700 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Planes y Tarifas
              </button>
              <button
                onClick={() => handleLinkClick('about')}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-brand-700 rounded-full hover:bg-brand-50/80 transition-colors"
              >
                Método Punto Final
              </button>
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* WhatsApp Quick Direct Link */}
              <a
                href="https://wa.me/34682602256?text=Hola,%20me%20gustar%C3%ADa%20pedir%20cita%20o%20informaci%C3%B3n%20en%20Punto%20Final"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold text-slate-700 hover:text-emerald-700 bg-white/70 hover:bg-emerald-50 border border-slate-200 transition-colors"
                title="Contactar directamente por WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>682 60 22 56</span>
              </a>

              {/* Pedir Cita Modal Button */}
              <button
                onClick={onOpenBooking}
                className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102 flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>Pedir Cita Previa</span>
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 rounded-full bg-brand-600 text-white font-bold text-xs shadow-xs"
              >
                Pedir Cita
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 bg-white/90 border border-slate-200 shadow-xs focus:outline-none"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-white font-extrabold text-xs">
                    PF
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 font-display text-base">
                      PUNTOFINAL<span className="text-brand-600">.</span>
                    </span>
                    <span className="block text-[10px] text-slate-500 font-medium">Bermejales Center, Sevilla</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Info Pill */}
              <div className="mt-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-emerald-900 mb-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  <span>5.0 en Google (203 reseñas)</span>
                </div>
                <p className="text-[11px] text-emerald-800">
                  Presencial en Sevilla y Online en toda España.
                </p>
              </div>

              <div className="py-5 flex flex-col gap-1.5">
                {[
                  { id: 'calculator', label: 'Calculadora de Calorías y Macros', icon: Calculator },
                  { id: 'meal-planner', label: 'Menú Semanal y Recetas', icon: Utensils },
                  { id: 'quiz', label: 'Test de Diagnóstico (60 seg)', icon: Sparkles },
                  { id: 'transformations', label: 'Casos Reales y Resultados', icon: Award },
                  { id: 'programs', label: 'Planes y Tarifas', icon: Calendar },
                  { id: 'about', label: 'Método y Equipo', icon: HeartPulse },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50/80 text-left font-medium text-slate-700 hover:text-brand-700 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100/70 flex items-center justify-center text-brand-700">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="https://wa.me/34682602256?text=Hola,%20me%20gustar%C3%ADa%20pedir%20cita%20o%20informaci%C3%B3n%20en%20Punto%20Final"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hablar por WhatsApp (682 60 22 56)</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Pedir Cita Online o Presencial</span>
              </button>

              <div className="text-center text-[10px] text-slate-500 pt-1">
                Lunes a Viernes de 9:00 a 21:00 • Los Bermejales, Sevilla
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
