import React, { useState } from 'react';
import { 
  HeartPulse, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Globe,
  Share2,
  MessageCircle,
  Check, 
  ArrowRight 
} from 'lucide-react';

export const Footer: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-28 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Card */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-800 to-emerald-900 rounded-3xl p-8 sm:p-12 mb-16 border border-emerald-500/20 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-700/50 inline-block mb-3">
              Weekly Metabolic Letter
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white mb-3">
              Get Evidence-Based Biohacking & Whole Food Recipes
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Join 18,000+ readers who receive Dr. Elena's weekly breakdown of new nutritional research, glucose stabilization tips, and seasonal nutrient-dense menus.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm bg-emerald-900/40 p-3 rounded-xl border border-emerald-700/50">
                <Check className="w-5 h-5" />
                <span>You're subscribed! Check your inbox for the 7-Day Anti-Inflammatory Guide.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-500 flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-500 hover:from-brand-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Subscribe Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14 text-xs sm:text-sm">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-white">
                <HeartPulse className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-white">
                Aura<span className="text-brand-400">Nutri</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-6 text-xs">
              Functional medicine and clinical nutrition designed to heal your metabolic engine from the inside out. Combining laboratory biomarkers with the healing power of real gastronomy.
            </p>

            <div className="flex items-center gap-3 text-slate-400">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">Clinical Features</h4>
            <ul className="space-y-2.5 text-slate-400 text-xs">
              <li>
                <button onClick={() => onNavigate('calculator')} className="hover:text-emerald-400 transition-colors">
                  Macro & Calorie Target Engine
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('meal-planner')} className="hover:text-emerald-400 transition-colors">
                  Weekly Whole-Food Meal Plans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quiz')} className="hover:text-emerald-400 transition-colors">
                  Metabolic Archetype Quiz
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('transformations')} className="hover:text-emerald-400 transition-colors">
                  Documented Lab Transformations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-emerald-400 transition-colors">
                  12-Week Intensive Program
                </button>
              </li>
            </ul>
          </div>

          {/* Diagnostic Panels */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">Functional Panels</h4>
            <ul className="space-y-2.5 text-slate-400 text-xs">
              <li>Continuous Glucose Monitoring (CGM)</li>
              <li>GI-MAP DNA Microbiome Stool Test</li>
              <li>DUTCH Complete Steroid Hormones</li>
              <li>Fasting Insulin & Advanced Lipids</li>
              <li>Comprehensive Micronutrient Matrix</li>
            </ul>
          </div>

          {/* Practice Location */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">Practice Location</h4>
            <div className="space-y-3 text-slate-400 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>645 Fifth Avenue, Suite 1200<br />New York, NY 10022</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>+1 (212) 555-0198</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>care@auranutri.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="max-w-2xl text-center md:text-left">
            <strong>Medical Disclaimer:</strong> The clinical dietary information provided on this website is for educational and lifestyle guidance purposes only. It is not intended to substitute for individualized medical diagnoses or pharmacological treatment. Always consult your licensed healthcare provider.
          </p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-4 h-4" /> HIPAA Compliant Practice
            </span>
            <span>•</span>
            <span>© {new Date().getFullYear()} AuraNutri LLC.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
