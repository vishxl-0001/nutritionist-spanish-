import React, { useState } from 'react';
import { 
  Utensils, 
  Clock, 
  Flame, 
  ChevronRight, 
  Sparkles, 
  CalendarDays, 
  Layers, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';
import { RecipeModal, RecipeData } from './RecipeModal';

const weeklyMealData: Record<string, RecipeData[]> = {
  Monday: [
    {
      id: 'mon-1',
      name: 'Pasture-Raised Eggs with Avocado & Sprouted Microgreens',
      category: 'Power Breakfast',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80',
      time: '12 min',
      servings: 1,
      calories: 410,
      protein: 26,
      carbs: 14,
      fats: 28,
      fiber: 9,
      description: 'Sustained cognitive energy without blood sugar spikes.',
      benefits: ['Choline for brain plasticity', 'Healthy Omega-9 monounsaturated fats', 'Sulforaphane antioxidant boost'],
      ingredients: [
        '2 pasture-raised organic eggs (soft-boiled or sunny side up)',
        '1/2 ripe Hass avocado, sliced',
        '1 cup organic broccoli sprouts & radish microgreens',
        '1 slice fermented artisan sourdough or sprouted Ezekiel bread',
        '1 tsp cold-pressed extra virgin olive oil',
        'Pinch of Celtic sea salt & cracked black pepper'
      ],
      instructions: [
        'Toast the artisan sourdough until golden brown and fragrant.',
        'Pan-fry or soft-boil the organic eggs gently in avocado oil to preserve fragile yolk lipids.',
        'Fan avocado slices over toast, drizzle with cold-pressed olive oil.',
        'Top with eggs and generous mound of fresh broccoli sprouts.',
        'Season with mineral-rich Celtic salt and fresh pepper.'
      ],
      micronutrients: [
        { label: 'Choline', amount: '280mg', dv: '51%' },
        { label: 'Vitamin D3', amount: '82 IU', dv: '21%' },
        { label: 'Lutein', amount: '340mcg', dv: '34%' },
        { label: 'Potassium', amount: '680mg', dv: '15%' },
      ]
    },
    {
      id: 'mon-2',
      name: 'Wild Alaskan Salmon with Roasted Sweet Potato & Tahini Greens',
      category: 'Nutrient-Dense Lunch',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop&q=80',
      time: '25 min',
      servings: 1,
      calories: 580,
      protein: 44,
      carbs: 42,
      fats: 22,
      fiber: 11,
      description: 'Rich in EPA/DHA marine omega-3 fatty acids for anti-inflammatory cellular repair.',
      benefits: ['Lowers systemic hs-CRP', 'Optimizes mitochondrial ATP', 'High pre-biotic fiber'],
      ingredients: [
        '160g wild-caught sockeye salmon fillet',
        '1 medium purple or garnet sweet potato, cubed',
        '2 cups baby Tuscan kale & baby spinach',
        '1 tbsp raw stone-ground sesame tahini',
        '1 tbsp fresh lemon juice',
        '1 tsp grated fresh ginger root'
      ],
      instructions: [
        'Preheat oven to 200°C (400°F). Roast cubed sweet potatoes with avocado oil for 22 mins.',
        'Pan-sear the salmon skin-side down for 4 mins, flip for 3 mins until medium-rare.',
        'Whisk tahini, lemon juice, grated ginger, and 1 tbsp warm water to make dressing.',
        'Massage kale and greens lightly, assemble bowl with warm sweet potato and salmon.',
        'Drizzle ginger tahini dressing over top.'
      ],
      micronutrients: [
        { label: 'Omega-3 EPA/DHA', amount: '2.1g', dv: '180%' },
        { label: 'Vitamin B12', amount: '4.8mcg', dv: '200%' },
        { label: 'Vitamin A', amount: '1240mcg', dv: '138%' },
        { label: 'Selenium', amount: '48mcg', dv: '87%' },
      ]
    },
    {
      id: 'mon-3',
      name: 'Organic Greek Yogurt with Wild Blueberries & Cacao Nibs',
      category: 'Metabolic Snack',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80',
      time: '5 min',
      servings: 1,
      calories: 240,
      protein: 20,
      carbs: 18,
      fats: 8,
      fiber: 6,
      description: 'Probiotic bacterial cultures paired with polyphenol-rich wild berries.',
      benefits: ['Diversifies microbiome flora', 'Improves gut mucosal barrier', 'Zero refined sugar'],
      ingredients: [
        '1 cup 100% grass-fed plain Greek yogurt (or coconut kefir)',
        '1/2 cup organic wild frozen blueberries (thawed)',
        '1 tbsp raw crushed cacao nibs',
        '1 tbsp sprouted chia seeds',
        'Dash of Ceylon cinnamon'
      ],
      instructions: [
        'Spoon Greek yogurt into a chilled ceramic bowl.',
        'Top with wild blueberries and their antioxidant juice.',
        'Scatter crunchy cacao nibs and sprouted chia seeds.',
        'Dust with Ceylon cinnamon to enhance cellular insulin sensitivity.'
      ],
      micronutrients: [
        { label: 'Calcium', amount: '250mg', dv: '25%' },
        { label: 'Polyphenols', amount: '420mg', dv: 'Optimal' },
        { label: 'Magnesium', amount: '65mg', dv: '16%' },
        { label: 'Zinc', amount: '2.4mg', dv: '22%' },
      ]
    },
    {
      id: 'mon-4',
      name: 'Slow-Simmered Grass-fed Beef with Bone Broth & Bok Choy',
      category: 'Restorative Dinner',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
      time: '35 min',
      servings: 1,
      calories: 520,
      protein: 48,
      carbs: 24,
      fats: 22,
      fiber: 8,
      description: 'Collagen peptides, glycine, and glutamine for deep gut lining recovery during sleep.',
      benefits: ['Enhances slow-wave deep sleep', 'Heals leaky gut permeability', 'Highly bio-available heme iron'],
      ingredients: [
        '180g grass-fed chuck beef or sirloin strips',
        '1.5 cups artisanal beef bone broth',
        '2 heads Shanghai baby bok choy, halved',
        '1 cup sliced shiitake mushrooms',
        '2 cloves crushed garlic & fresh ginger slices',
        '1 tsp tamari or coconut aminos'
      ],
      instructions: [
        'Sear beef strips in a heavy pot until browned, remove.',
        'Add garlic, ginger, and shiitake mushrooms, sauté for 2 mins.',
        'Pour in bone broth and coconut aminos, return beef and simmer gently for 15 mins.',
        'Fold in baby bok choy in the last 3 mins until vibrant emerald green.',
        'Serve in a deep broth bowl steaming hot.'
      ],
      micronutrients: [
        { label: 'Glycine / Collagen', amount: '8.5g', dv: 'Target Met' },
        { label: 'Iron (Heme)', amount: '4.6mg', dv: '26%' },
        { label: 'Zinc', amount: '6.8mg', dv: '62%' },
        { label: 'Potassium', amount: '820mg', dv: '17%' },
      ]
    },
  ],
  Tuesday: [
    {
      id: 'tue-1',
      name: 'Golden Turmeric Chia Pudding with Hemp Hearts',
      category: 'Power Breakfast',
      image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&auto=format&fit=crop&q=80',
      time: '8 min',
      servings: 1,
      calories: 380,
      protein: 22,
      carbs: 20,
      fats: 24,
      fiber: 14,
      description: 'Potent anti-inflammatory curcumin infused with whole plant omega-3 fatty acids.',
      benefits: ['Curcumin joint health', 'High soluble prebiotic mucilage', 'Complete plant amino acid profile'],
      ingredients: ['3 tbsp black chia seeds', '1 cup almond-coconut milk', '1/2 tsp turmeric powder', '2 tbsp hemp hearts', '1/2 tsp ginger'],
      instructions: ['Whisk chia seeds with coconut milk and turmeric.', 'Refrigerate overnight.', 'Top with crunchy hemp hearts.'],
      micronutrients: [{ label: 'Iron', amount: '4.2mg', dv: '23%' }, { label: 'Magnesium', amount: '140mg', dv: '35%' }, { label: 'Fiber', amount: '14g', dv: '50%' }, { label: 'Manganese', amount: '1.8mg', dv: '78%' }]
    },
    {
      id: 'tue-2',
      name: 'Mediterranean Grilled Chicken Bowl with Tzatziki & Quinoa',
      category: 'Nutrient-Dense Lunch',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
      time: '20 min',
      servings: 1,
      calories: 560,
      protein: 46,
      carbs: 45,
      fats: 18,
      fiber: 9,
      description: 'Herb-marinated pasture chicken with organic cucumber tzatziki and sprouted quinoa.',
      benefits: ['Sustained steady glycogen', 'Gut friendly cultured kefir', 'Rich in sulfur amino acids'],
      ingredients: ['160g free-range chicken breast', '1/2 cup cooked quinoa', '1 Persian cucumber', '3 tbsp sheep milk yogurt tzatziki', '1 cup arugula'],
      instructions: ['Grill chicken with oregano and lemon.', 'Plate over warm quinoa and crisp arugula.', 'Dollop with tzatziki.'],
      micronutrients: [{ label: 'Protein', amount: '46g', dv: '92%' }, { label: 'Vitamin B6', amount: '1.2mg', dv: '70%' }, { label: 'Phosphorus', amount: '380mg', dv: '30%' }, { label: 'Potassium', amount: '720mg', dv: '15%' }]
    },
    {
      id: 'tue-3',
      name: 'Matcha Collagen Elixir with Raw Sprouted Almonds',
      category: 'Metabolic Snack',
      image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&auto=format&fit=crop&q=80',
      time: '3 min',
      servings: 1,
      calories: 190,
      protein: 16,
      carbs: 6,
      fats: 11,
      fiber: 4,
      description: 'Ceremonial grade Japanese Uji matcha with L-theanine for focused calm.',
      benefits: ['Alpha brain waves', 'Skin elastin synthesis', 'Zero caffeine jitters'],
      ingredients: ['1 tsp ceremonial matcha', '1 scoop grass-fed collagen peptides', '1 cup warm oat milk', '12 raw sprouted almonds'],
      instructions: ['Whisk matcha and collagen in warm milk until frothy.', 'Enjoy alongside sprouted almonds.'],
      micronutrients: [{ label: 'EGCG', amount: '180mg', dv: 'High' }, { label: 'L-Theanine', amount: '35mg', dv: 'Optimal' }, { label: 'Vitamin E', amount: '5mg', dv: '33%' }, { label: 'Collagen', amount: '10g', dv: 'Target' }]
    },
    {
      id: 'tue-4',
      name: 'Pan-Roasted Wild Halibut with Asparagus & Lemon Herb Ghee',
      category: 'Restorative Dinner',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80',
      time: '25 min',
      servings: 1,
      calories: 490,
      protein: 42,
      carbs: 16,
      fats: 24,
      fiber: 6,
      description: 'Delicate white fish rich in selenium and glutathione precursors.',
      benefits: ['Thyroid hormone conversion', 'Prebiotic inulin in asparagus', 'Butyrate from grass-fed ghee'],
      ingredients: ['180g wild halibut fillet', '1 bunch fresh pencil asparagus', '1 tbsp grass-fed organic ghee', '1 lemon', 'Fresh dill'],
      instructions: ['Sear halibut in ghee for 4 minutes each side.', 'Toss asparagus in pan until tender-crisp.', 'Finish with lemon zest and fresh dill.'],
      micronutrients: [{ label: 'Selenium', amount: '62mcg', dv: '112%' }, { label: 'Folate', amount: '160mcg', dv: '40%' }, { label: 'Vitamin K1', amount: '75mcg', dv: '62%' }, { label: 'Magnesium', amount: '70mg', dv: '17%' }]
    },
  ],
  Wednesday: [
    {
      id: 'wed-1',
      name: 'Pasture-Raised Eggs with Avocado & Sprouted Microgreens',
      category: 'Power Breakfast',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80',
      time: '12 min',
      servings: 1,
      calories: 410,
      protein: 26,
      carbs: 14,
      fats: 28,
      fiber: 9,
      description: 'Sustained cognitive energy without blood sugar spikes.',
      benefits: ['Choline for brain plasticity', 'Healthy Omega-9 monounsaturated fats'],
      ingredients: ['2 pasture-raised eggs', '1/2 avocado', 'Sprouted microgreens', 'Olive oil'],
      instructions: ['Poach eggs, layer over avocado mash and toast, garnish with microgreens.'],
      micronutrients: [{ label: 'Choline', amount: '280mg', dv: '51%' }, { label: 'Vitamin D', amount: '82 IU', dv: '21%' }, { label: 'Lutein', amount: '340mcg', dv: '34%' }, { label: 'Potassium', amount: '680mg', dv: '15%' }]
    },
    {
      id: 'wed-2',
      name: 'Wild Alaskan Salmon with Roasted Sweet Potato & Tahini Greens',
      category: 'Nutrient-Dense Lunch',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop&q=80',
      time: '25 min',
      servings: 1,
      calories: 580,
      protein: 44,
      carbs: 42,
      fats: 22,
      fiber: 11,
      description: 'Rich in EPA/DHA marine omega-3 fatty acids for anti-inflammatory cellular repair.',
      benefits: ['Lowers systemic hs-CRP', 'Optimizes mitochondrial ATP'],
      ingredients: ['Wild sockeye salmon', 'Sweet potato', 'Organic greens', 'Tahini'],
      instructions: ['Roast sweet potato, pan-sear salmon, serve over dressed baby greens.'],
      micronutrients: [{ label: 'Omega-3', amount: '2.1g', dv: '180%' }, { label: 'Vitamin B12', amount: '4.8mcg', dv: '200%' }, { label: 'Vitamin A', amount: '1240mcg', dv: '138%' }, { label: 'Selenium', amount: '48mcg', dv: '87%' }]
    },
    {
      id: 'wed-3',
      name: 'Organic Greek Yogurt with Wild Blueberries & Cacao Nibs',
      category: 'Metabolic Snack',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80',
      time: '5 min',
      servings: 1,
      calories: 240,
      protein: 20,
      carbs: 18,
      fats: 8,
      fiber: 6,
      description: 'Probiotic bacterial cultures paired with polyphenol-rich wild berries.',
      benefits: ['Diversifies microbiome flora', 'Zero refined sugar'],
      ingredients: ['Greek yogurt', 'Wild blueberries', 'Cacao nibs', 'Chia seeds'],
      instructions: ['Mix and enjoy chilled.'],
      micronutrients: [{ label: 'Calcium', amount: '250mg', dv: '25%' }, { label: 'Polyphenols', amount: '420mg', dv: 'High' }, { label: 'Magnesium', amount: '65mg', dv: '16%' }, { label: 'Zinc', amount: '2.4mg', dv: '22%' }]
    },
    {
      id: 'wed-4',
      name: 'Slow-Simmered Grass-fed Beef with Bone Broth & Bok Choy',
      category: 'Restorative Dinner',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
      time: '35 min',
      servings: 1,
      calories: 520,
      protein: 48,
      carbs: 24,
      fats: 22,
      fiber: 8,
      description: 'Collagen peptides, glycine, and glutamine for deep gut lining recovery during sleep.',
      benefits: ['Enhances slow-wave deep sleep', 'Heals gut permeability'],
      ingredients: ['Grass-fed beef', 'Bone broth', 'Bok choy', 'Shiitake'],
      instructions: ['Simmer beef in bone broth with mushrooms and greens until rich and tender.'],
      micronutrients: [{ label: 'Glycine', amount: '8.5g', dv: 'Met' }, { label: 'Iron', amount: '4.6mg', dv: '26%' }, { label: 'Zinc', amount: '6.8mg', dv: '62%' }, { label: 'Potassium', amount: '820mg', dv: '17%' }]
    },
  ]
};

export const MealPlanner: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [selectedDiet, setSelectedDiet] = useState<string>('All');
  const [activeRecipe, setActiveRecipe] = useState<RecipeData | null>(null);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const diets = ['All', 'High Protein', 'Anti-Inflammatory', 'Gut Reset', 'Keto / Low-Carb'];

  const currentMeals = weeklyMealData[selectedDay] || weeklyMealData['Monday'];

  // Day total stats
  const totalCalories = currentMeals.reduce((acc, m) => acc + m.calories, 0);
  const totalProtein = currentMeals.reduce((acc, m) => acc + m.protein, 0);
  const totalCarbs = currentMeals.reduce((acc, m) => acc + m.carbs, 0);
  const totalFats = currentMeals.reduce((acc, m) => acc + m.fats, 0);

  return (
    <section id="meal-planner" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold mb-3">
              <CalendarDays className="w-3.5 h-3.5" />
              <span>Clinical Meal Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              Weekly Whole-Food <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-600">
                Nutrient Protocols
              </span>
            </h2>
          </div>

          <p className="text-slate-600 max-w-md text-sm sm:text-base mt-4 md:mt-0">
            Every dish is chef-crafted with bio-available micronutrients, zero ultra-processed oils, and clean seasonal ingredients.
          </p>
        </div>

        {/* Days Navigation Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedDay === day
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Day Nutrition Summary Bar */}
        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-xs">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-600 font-semibold">{selectedDay}'s Daily Total</p>
              <p className="text-xl font-black text-slate-900 font-display">{totalCalories} kcal</p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <div>
              <span className="text-slate-600 block text-[11px]">Protein</span>
              <span className="font-extrabold text-emerald-800 font-display">{totalProtein}g</span>
            </div>
            <div className="h-6 w-[1px] bg-slate-200" />
            <div>
              <span className="text-slate-600 block text-[11px]">Healthy Fats</span>
              <span className="font-extrabold text-amber-800 font-display">{totalFats}g</span>
            </div>
            <div className="h-6 w-[1px] bg-slate-200" />
            <div>
              <span className="text-slate-600 block text-[11px]">Complex Carbs</span>
              <span className="font-extrabold text-teal-800 font-display">{totalCarbs}g</span>
            </div>
          </div>
        </div>

        {/* 4 Meal Slots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentMeals.map((meal) => (
            <Card3DTilt key={meal.id} maxTilt={8} className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-float transition-all duration-300 flex flex-col h-full group">
                
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 shadow-xs">
                      {meal.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-slate-950/70 backdrop-blur-md text-white px-2 py-0.5 rounded-lg text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{meal.time}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 mb-2 font-display">
                      {meal.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                      {meal.description}
                    </p>
                  </div>

                  {/* Micro Nutrients Tag */}
                  <div>
                    <div className="grid grid-cols-3 gap-1.5 py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-100 text-center mb-4">
                      <div>
                        <span className="text-[10px] text-slate-600 block">Kcal</span>
                        <span className="text-xs font-black text-slate-900 font-display">{meal.calories}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-600 block">Protein</span>
                        <span className="text-xs font-black text-brand-700 font-display">{meal.protein}g</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-600 block">Fats</span>
                        <span className="text-xs font-black text-amber-700 font-display">{meal.fats}g</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveRecipe(meal)}
                      className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-700 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>View Recipe & Nutrition Facts</span>
                    </button>
                  </div>

                </div>

              </div>
            </Card3DTilt>
          ))}
        </div>

      </div>

      {/* Recipe Modal Component */}
      <RecipeModal
        recipe={activeRecipe}
        onClose={() => setActiveRecipe(null)}
      />
    </section>
  );
};
