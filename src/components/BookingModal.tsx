import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Video, 
  MapPin, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [format, setFormat] = useState<string>('virtual');
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, Oct 14');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Weight Loss & Energy',
    notes: ''
  });

  if (!isOpen) return null;

  const dates = [
    { label: 'Today', day: 'Oct 13', slots: '1 Slot Left' },
    { label: 'Tomorrow', day: 'Oct 14', slots: '3 Slots Left' },
    { label: 'Wednesday', day: 'Oct 15', slots: '4 Slots Left' },
    { label: 'Thursday', day: 'Oct 16', slots: '2 Slots Left' },
    { label: 'Friday', day: 'Oct 17', slots: '5 Slots Left' },
  ];

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '01:00 PM',
    '03:30 PM',
    '05:00 PM'
  ];

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.5 }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">Schedule Your Consultation</h3>
              <p className="text-xs text-slate-600">With Dr. Elena Vance, RD, IFMCP</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          
          {/* Step 1: Format */}
          {step === 1 && (
            <div className="animate-fadeIn">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                Step 1: Select Consultation Format
              </h4>
              <div className="space-y-3 mb-6">
                {[
                  {
                    id: 'virtual',
                    title: 'HD Telehealth Video Call',
                    sub: 'Available worldwide from your home (Zoom/Google Meet)',
                    icon: Video,
                    badge: 'Most Popular'
                  },
                  {
                    id: 'in_person',
                    title: 'In-Clinic In-Person Consultation',
                    sub: 'Fifth Avenue Wellness Clinic, New York, NY',
                    icon: MapPin,
                    badge: 'Limited Availability'
                  },
                  {
                    id: 'kitchen_audit',
                    title: 'Virtual Kitchen & Pantry Audit',
                    sub: 'Live video walkthrough of your fridge, pantry, and cookware',
                    icon: ShoppingBag,
                    badge: 'Hands-on'
                  }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setFormat(item.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${
                        format === item.id
                          ? 'border-brand-500 bg-brand-50/60 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-xl mt-0.5 ${
                          format === item.id ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</p>
                          <p className="text-[11px] text-slate-600">{item.sub}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Continue to Date & Time</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 2: Date & Time Picker */}
          {step === 2 && (
            <div className="animate-fadeIn">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Step 2: Choose Available Day
              </h4>
              
              {/* Dates */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                {dates.map((d, i) => {
                  const fullStr = `${d.label}, ${d.day}`;
                  const isSelected = selectedDate === fullStr;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedDate(fullStr)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'border-brand-500 bg-brand-50/70 text-brand-900 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <p className="text-xs font-bold">{d.label}</p>
                      <p className="text-sm font-black font-display">{d.day}</p>
                      <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">{d.slots}</p>
                    </button>
                  );
                })}
              </div>

              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Select Time Slot (EST)
              </h4>
              <div className="grid grid-cols-3 gap-2 mb-6">
                {timeSlots.map((time, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      selectedTime === time
                        ? 'border-brand-600 bg-brand-600 text-white shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 rounded-2xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-2/3 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Enter Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Client Details */}
          {step === 3 && (
            <form onSubmit={handleComplete} className="animate-fadeIn space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                Step 3: Patient Intake Info
              </h4>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Jordan Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-brand-500 bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="jordan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-brand-500 bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-brand-500 bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Primary Health Goal</label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-brand-500 bg-white"
                >
                  <option>Metabolic Reset & Fat Loss</option>
                  <option>Severe Bloating & Gut Dysbiosis</option>
                  <option>PCOS & Hormonal Irregularities</option>
                  <option>High Cholesterol / Insulin Resistance</option>
                  <option>Endurance Athletic Performance</option>
                </select>
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-1/3 py-3 rounded-2xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 rounded-2xl bg-gradient-to-r from-brand-600 to-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <span>Confirm Appointment</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="animate-fadeIn text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-600 flex items-center justify-center mx-auto mb-4">
                <CalendarCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-slate-900 font-display mb-1">
                Consultation Reserved!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-sm mx-auto">
                A calendar invite and pre-consultation metabolic intake questionnaire have been dispatched to <strong>{formData.email || 'your email'}</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-left max-w-sm mx-auto text-xs space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-600">Date:</span>
                  <span className="font-bold text-slate-900">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Time:</span>
                  <span className="font-bold text-slate-900">{selectedTime} EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Specialist:</span>
                  <span className="font-bold text-brand-800">Dr. Elena Vance, RD</span>
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-8 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm"
              >
                Back to Website
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
