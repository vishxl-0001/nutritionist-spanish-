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
  'Lunes': [
    {
      id: 'lun-1',
      name: 'Tostada de Masa Madre con AOVE, Tomate Rallado y Huevos Poché',
      category: 'Desayuno Energético',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80',
      time: '10 min',
      servings: 1,
      calories: 410,
      protein: 24,
      carbs: 28,
      fats: 22,
      fiber: 6,
      description: 'Clásico desayuno mediterráneo optimizado: grasas cardiosaludables y proteína saciante.',
      benefits: ['Colina y luteína para la función cognitiva', 'Polifenoles del Aceite de Oliva Virgen Extra', 'Sin picos bruscos de glucosa'],
      ingredients: [
        '1 rebanada grande de pan artesano de masa madre 100% integral',
        '2 huevos de gallinas camperas (cocidos o poché)',
        '1 tomate de rama maduro rallado con su pulpa',
        '1 cucharada sopera de AOVE (Aceite de Oliva Virgen Extra picual)',
        'Unas hojas de brotes verdes o rúcula',
        'Pizca de sal marina virgen y orégano silvestre'
      ],
      instructions: [
        'Tuesta el pan de masa madre ligeramente hasta que quede crujiente por fuera.',
        'Escalda o pocha los huevos en agua caliente con un chorrito de vinagre durante 3-4 minutos.',
        'Unta generosamente el tomate rallado sobre la tostada y riega con el AOVE virgen extra.',
        'Coloca los huevos pochados y los brotes frescos encima.',
        'Finaliza con una pizca de sal marina y orégano.'
      ],
      micronutrients: [
        { label: 'Colina', amount: '280mg', dv: '51%' },
        { label: 'Vitamina D3', amount: '82 UI', dv: '21%' },
        { label: 'Licopeno', amount: '3.2mg', dv: 'Óptimo' },
        { label: 'Potasio', amount: '540mg', dv: '14%' },
      ]
    },
    {
      id: 'lun-2',
      name: 'Lomo de Salmón al Horno con Quinoa y Verduras Asadas de Huertana',
      category: 'Comida / Almuerzo Equilibrado',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop&q=80',
      time: '25 min',
      servings: 1,
      calories: 560,
      protein: 42,
      carbs: 38,
      fats: 24,
      fiber: 9,
      description: 'Excelente aporte de ácidos grasos Omega-3 EPA/DHA antiinflamatorios y fibra prebiótica.',
      benefits: ['Reduce marcadores inflamatorios celulares', 'Fibra saciante para la microbiota intestinal', 'Alta densidad de micronutrientes'],
      ingredients: [
        '160g de lomo de salmón fresco',
        '60g de quinoa en seco (cocida al punto con laurel)',
        '1 calabacín pequeño y 1 pimiento rojo en dados',
        '1 taza de espinacas tiernas',
        '1 cucharada de AOVE y zumo de medio limón',
        'Hierbas provenzales, sal y pimienta negra'
      ],
      instructions: [
        'Precalienta el horno a 190°C. Hornea los dados de verduras con un chorrito de AOVE durante 18 min.',
        'Cuece la quinoa con agua y una hoja de laurel durante 12-14 minutos.',
        'Cocina el salmón a la plancha o al horno con hierbas y limón hasta que esté jugoso.',
        'Mezcla la quinoa tibia con las verduras asadas y las espinacas frescas.',
        'Sirve con el salmón por encima y un toque de limón fresco.'
      ],
      micronutrients: [
        { label: 'Omega-3 EPA/DHA', amount: '2.2g', dv: '190%' },
        { label: 'Vitamina B12', amount: '4.6mcg', dv: '192%' },
        { label: 'Magnesio', amount: '120mg', dv: '30%' },
        { label: 'Selenio', amount: '46mcg', dv: '84%' },
      ]
    },
    {
      id: 'lun-3',
      name: 'Yogur Griego Natural con Arándanos Silvestres y Nueces del País',
      category: 'Merienda Saludable',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80',
      time: '4 min',
      servings: 1,
      calories: 220,
      protein: 18,
      carbs: 14,
      fats: 9,
      fiber: 4,
      description: 'Probióticos naturales vivos combinados con polifenoles antioxidantes.',
      benefits: ['Mejora la diversidad bacteriana intestinal', 'Control del apetito previo a la cena', 'Cero azúcar añadido'],
      ingredients: [
        '150g de yogur griego natural sin azúcar (o kéfir de leche)',
        '1 puñado generoso de arándanos frescos',
        '4-5 mitades de nueces picadas',
        '1 cucharadita de semillas de chía',
        'Pizca de canela de Ceilán'
      ],
      instructions: [
        'Vierte el yogur griego en un cuenco.',
        'Añade los arándanos y las nueces troceadas por encima.',
        'Espolvorea las semillas de chía y un toque de canela de Ceilán para regular la insulina.'
      ],
      micronutrients: [
        { label: 'Calcio', amount: '230mg', dv: '23%' },
        { label: 'Polifenoles', amount: '380mg', dv: 'Óptimo' },
        { label: 'Ácido Alfa-Linolénico', amount: '1.2g', dv: '75%' },
        { label: 'Zinc', amount: '1.8mg', dv: '16%' },
      ]
    },
    {
      id: 'lun-4',
      name: 'Crema Casera de Calabaza y Puerro con Merluza al Vapor y Semillas',
      category: 'Cena Reparadora y Ligera',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=80',
      time: '20 min',
      servings: 1,
      calories: 380,
      protein: 34,
      carbs: 26,
      fats: 11,
      fiber: 7,
      description: 'Cena digestiva y rica en triptófano para favorecer el descanso nocturno.',
      benefits: ['Fácil digestión nocturna sin reflujo', 'Favorece la síntesis de melatonina', 'Calma el sistema nervioso'],
      ingredients: [
        '180g de filete de merluza fresca del Cantábrico',
        '250g de crema de calabaza asada, puerro y cebolla con AOVE',
        '1 cucharada de pipas de calabaza tostadas',
        '1 cucharadita de AOVE crudo',
        'Pizca de sal marina virgen y pimienta blanca'
      ],
      instructions: [
        'Cocina la merluza al vapor o en papillote durante 6-8 minutos con una pizca de sal.',
        'Calienta suavemente la crema de calabaza y puerro.',
        'Sirve la crema en plato hondo con las lascas de merluza tierna en el centro.',
        'Corona con las pipas de calabaza crujientes y un hilo fino de AOVE virgen extra.'
      ],
      micronutrients: [
        { label: 'Triptófano', amount: '310mg', dv: '110%' },
        { label: 'Beta-caroteno', amount: '4800mcg', dv: '80%' },
        { label: 'Fósforo', amount: '290mg', dv: '41%' },
        { label: 'Yodo', amount: '72mcg', dv: '48%' },
      ]
    }
  ],
  'Martes': [
    {
      id: 'mar-1',
      name: 'Tortilla Francesa de Espinacas Frescas y Queso de Cabra con Aguacate',
      category: 'Desayuno Energético',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80',
      time: '10 min',
      servings: 1,
      calories: 420,
      protein: 26,
      carbs: 8,
      fats: 30,
      fiber: 5,
      description: 'Bajo impacto glucémico para mantener claridad mental y foco toda la mañana.',
      benefits: ['Estabilidad glucémica prolongada', 'Rico en magnesio y folatos', 'Sensación de saciedad duradera'],
      ingredients: [
        '2 huevos camperos',
        '1 taza de espinacas baby salteadas',
        '30g de queso de cabra de rulo o tierno',
        '1/3 de aguacate maduro en láminas',
        '1 cucharadita de AOVE'
      ],
      instructions: [
        'Bate los huevos con una pizca de sal.',
        'Saltea las espinacas en sartén con unas gotas de AOVE.',
        'Vierte los huevos, añade el queso desmenuzado y pliega la tortilla jugosa.',
        'Sirve acompañada de las láminas de aguacate fresco.'
      ],
      micronutrients: [
        { label: 'Magnesio', amount: '95mg', dv: '24%' },
        { label: 'Folato', amount: '160mcg', dv: '40%' },
        { label: 'Vitamina B6', amount: '0.4mg', dv: '25%' },
        { label: 'Hierro hemo', amount: '2.8mg', dv: '16%' }
      ]
    },
    {
      id: 'mar-2',
      name: 'Guiso Tradicional de Lentejas Pardinas con Verduras de Temporada',
      category: 'Comida / Almuerzo Equilibrado',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=80',
      time: '35 min',
      servings: 1,
      calories: 520,
      protein: 28,
      carbs: 64,
      fats: 12,
      fiber: 18,
      description: 'Plato de cuchara emblemático, reconfortante y lleno de hierro vegetal y fibra.',
      benefits: ['Microbiota alimentada con almidón resistente', 'Bajo índice glucémico', 'Sin embutidos ni grasas saturadas'],
      ingredients: [
        '80g de lentejas pardinas',
        '1 zanahoria, 1/2 puerro, 1/2 cebolla y 1 tomate triturado',
        '1 diente de ajo y 1 hoja de laurel',
        '1 cucharadita de pimentón dulce de la Vera y comino molido',
        '1 cucharada de AOVE'
      ],
      instructions: [
        'Haz un sofrito ligero con el ajo, puerro, cebolla y pimentón.',
        'Añade las lentejas, la zanahoria en rodajas, el laurel y cubre con agua o caldo vegetal.',
        'Cocina a fuego lento durante 30 minutos hasta que estén tiernas y melosas.',
        'Termina con un chorrito de AOVE crudo al servir.'
      ],
      micronutrients: [
        { label: 'Hierro', amount: '6.4mg', dv: '36%' },
        { label: 'Folato', amount: '320mcg', dv: '80%' },
        { label: 'Fibra dietética', amount: '18g', dv: '72%' },
        { label: 'Potasio', amount: '780mg', dv: '20%' }
      ]
    },
    {
      id: 'mar-3',
      name: 'Manzana Asada con Canela y Puñado de Almendras Tostadas',
      category: 'Merienda Saludable',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80',
      time: '8 min',
      servings: 1,
      calories: 195,
      protein: 6,
      carbs: 22,
      fats: 10,
      fiber: 5,
      description: 'Pectina prebiótica suave para reparar la mucosa digestiva.',
      benefits: ['Pectina protectora del estómago', 'Grasas monoinsaturadas de almendra', 'Efecto saciante natural'],
      ingredients: [
        '1 manzana reineta o golden',
        '1 cucharadita de canela de Ceilán',
        '20g de almendras tostadas sin sal',
        'Unas gotas de agua o zumo de limón'
      ],
      instructions: [
        'Corta la manzana en gajos finos con canela y calienta 3 minutos al microondas u horno.',
        'Sirve tibia acompañada de las almendras crujientes.'
      ],
      micronutrients: [
        { label: 'Pectina', amount: '2.8g', dv: 'Óptimo' },
        { label: 'Vitamina E', amount: '4.2mg', dv: '28%' },
        { label: 'Magnesio', amount: '55mg', dv: '14%' },
        { label: 'Calcio', amount: '65mg', dv: '7%' }
      ]
    },
    {
      id: 'mar-4',
      name: 'Revuelto Jugoso de Espárragos Trigueros, Champiñones y Gambas',
      category: 'Cena Reparadora y Ligera',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop&q=80',
      time: '15 min',
      servings: 1,
      calories: 340,
      protein: 36,
      carbs: 9,
      fats: 16,
      fiber: 5,
      description: 'Cena rápida, deliciosa y antiinflamatoria sin pesadez estomacal.',
      benefits: ['Proteína magra de alto valor biológico', 'Drenante y depurativo gracias al espárrago', 'Muy saciante'],
      ingredients: [
        '2 huevos camperos',
        '1 manojo de espárragos trigueros cortados en trozos',
        '100g de champiñones laminados',
        '80g de gambas peladas',
        '1 diente de ajo picado y perejil fresco',
        '1 cucharada de AOVE'
      ],
      instructions: [
        'Saltea el ajo picado con los espárragos y champiñones en AOVE durante 6-7 min.',
        'Añade las gambas 2 minutos hasta que cambien de color.',
        'Vierte los huevos ligeramente batidos y cuaja a fuego bajo para que quede cremoso y jugoso.',
        'Espolvorea perejil fresco picado.'
      ],
      micronutrients: [
        { label: 'Selenio', amount: '42mcg', dv: '76%' },
        { label: 'Vitamina C', amount: '18mg', dv: '20%' },
        { label: 'Yodo', amount: '65mcg', dv: '43%' },
        { label: 'Zinc', amount: '2.4mg', dv: '22%' }
      ]
    }
  ],
  'Miércoles': [
    {
      id: 'mie-1',
      name: 'Porridge Templado de Avena Integral con Chía, Frutos Rojos y AOVE',
      category: 'Desayuno Energético',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80',
      time: '8 min',
      servings: 1,
      calories: 390,
      protein: 16,
      carbs: 48,
      fats: 14,
      fiber: 11,
      description: 'Beta-glucanos para regular el colesterol y saciedad sin bajón de media mañana.',
      benefits: ['Control del colesterol LDL', 'Sensación de energía estable', 'Protección cardiovascular'],
      ingredients: [
        '50g de copos de avena integral suave',
        '200ml de bebida vegetal o leche entera fresca',
        '1 cucharadita de semillas de chía',
        '1 puñado de frambuesas y moras frescas',
        '1 cucharadita de crema 100% cacahuete o almendra',
        'Canela de Ceilán'
      ],
      instructions: [
        'Cuece los copos de avena con la leche y canela a fuego lento durante 4 minutos.',
        'Vierte en el bol y añade las semillas de chía y la crema de frutos secos.',
        'Corona con los frutos rojos frescos.'
      ],
      micronutrients: [
        { label: 'Beta-glucanos', amount: '2.5g', dv: '83%' },
        { label: 'Manganeso', amount: '2.1mg', dv: '90%' },
        { label: 'Magnesio', amount: '110mg', dv: '28%' },
        { label: 'Antocianinas', amount: '180mg', dv: 'Óptimo' }
      ]
    },
    {
      id: 'mie-2',
      name: 'Pechuga de Pollo de Corral Marinada al Limón con Arroz Integral y Pisto',
      category: 'Comida / Almuerzo Equilibrado',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=80',
      time: '25 min',
      servings: 1,
      calories: 540,
      protein: 44,
      carbs: 52,
      fats: 15,
      fiber: 8,
      description: 'Pisto andaluz tradicional acompañado de proteína limpia y grano entero.',
      benefits: ['Alta densidad de antioxidantes del sofrito de verduras', 'Proteína magra para la síntesis muscular', 'Digestión ligera'],
      ingredients: [
        '170g de pechuga de pollo campero en filetes',
        '60g de arroz integral cocido con laurel',
        '1 taza de pisto casero (calabacín, pimiento, tomate y cebolla con AOVE)',
        'Zumo de limón, romero fresco y sal marina'
      ],
      instructions: [
        'Marina el pollo con limón, romero y sal 15 minutos.',
        'Haz el pollo a la plancha hasta dorar sin secarlo.',
        'Acompaña con el arroz integral tibio y el pisto andaluz casero caliente.'
      ],
      micronutrients: [
        { label: 'Niacina (B3)', amount: '14.8mg', dv: '92%' },
        { label: 'Vitamina B6', amount: '0.9mg', dv: '53%' },
        { label: 'Licopeno', amount: '4.8mg', dv: 'Óptimo' },
        { label: 'Fósforo', amount: '340mg', dv: '48%' }
      ]
    },
    {
      id: 'mie-3',
      name: 'Hummus Tradicional con Bastoncitos de Zanahoria y Pepino',
      category: 'Merienda Saludable',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80',
      time: '5 min',
      servings: 1,
      calories: 210,
      protein: 8,
      carbs: 22,
      fats: 10,
      fiber: 6,
      description: 'Fibra crujiente e hidratación con grasas vegetales de sésamo y oliva.',
      benefits: ['Salud de la microbiota', 'Vitamina A en forma de carotenos', 'Aporte saciante entre horas'],
      ingredients: [
        '3 cucharadas soperas de hummus de garbanzo con tahini y AOVE',
        '1 zanahoria fresca pelada en bastones',
        '1/2 pepino crujiente en bastones',
        'Toque de pimentón de la Vera'
      ],
      instructions: [
        'Sirve el hummus con un chorrito de AOVE y pimentón.',
        'Acompaña con los bastoncitos de verduras para dipear.'
      ],
      micronutrients: [
        { label: 'Beta-caroteno', amount: '6200mcg', dv: '100%' },
        { label: 'Calcio', amount: '70mg', dv: '8%' },
        { label: 'Vitamina C', amount: '12mg', dv: '15%' },
        { label: 'Hierro', amount: '1.9mg', dv: '11%' }
      ]
    },
    {
      id: 'mie-4',
      name: 'Lubina a la Espalda con Patata Panadera al Horno y Pimientos Verdes',
      category: 'Cena Reparadora y Ligera',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop&q=80',
      time: '25 min',
      servings: 1,
      calories: 410,
      protein: 38,
      carbs: 24,
      fats: 15,
      fiber: 4,
      description: 'Pescado blanco salvaje al horno con ajitos dorados y patata asada.',
      benefits: ['Muy bajo en calorías y fácil digestión', 'Alto en yodo y fósforo', 'Ideal para conciliar el sueño'],
      ingredients: [
        '1 pieza de lubina abierta en libro para horno',
        '1 patata mediana en rodajas finas',
        '1 pimiento verde italiano',
        '2 dientes de ajo fileteados y una cayena',
        '1 cucharada de vinagre de manzana y AOVE'
      ],
      instructions: [
        'Hornea primero las patatas y el pimiento con unas gotas de AOVE 15 minutos.',
        'Coloca la lubina encima con la piel hacia abajo y hornea 10 minutos.',
        'Dora los ajitos en AOVE, añade el vinagre y vuelca sobre la lubina recién horneada.'
      ],
      micronutrients: [
        { label: 'Yodo', amount: '85mcg', dv: '56%' },
        { label: 'Potasio', amount: '820mg', dv: '21%' },
        { label: 'Vitamina D', amount: '65 UI', dv: '16%' },
        { label: 'Proteína neta', amount: '38g', dv: '76%' }
      ]
    }
  ]
};

export const MealPlanner: React.FC = () => {
  const days = ['Lunes', 'Martes', 'Miércoles'];
  const [selectedDay, setSelectedDay] = useState<string>('Lunes');
  const [activeRecipe, setActiveRecipe] = useState<RecipeData | null>(null);

  const currentMeals = weeklyMealData[selectedDay] || weeklyMealData['Lunes'];

  // Calculate day total kcal and macros
  const dailyTotals = currentMeals.reduce(
    (acc, m) => {
      acc.calories += m.calories;
      acc.protein += m.protein;
      acc.carbs += m.carbs;
      acc.fats += m.fats;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );

  return (
    <section id="meal-planner" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold mb-3 border border-brand-200">
            <Utensils className="w-3.5 h-3.5" />
            <span>Planificación y Recetas Semanales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-4">
            Comida Real Mediterránea. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-emerald-600 to-teal-600">
              Sin Pasar Hambre ni Pesar Gramos
            </span>
          </h2>
          <p className="text-slate-600 text-base">
            Ejemplo de cómo comemos en el método Punto Final: platos ricos, ingredientes de mercado local en Sevilla y equilibrio nutricional sin renunciar al sabor.
          </p>
        </div>

        {/* Day Selector Pills and Macro Summary Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
          
          {/* Day Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  selectedDay === day
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Daily Totals Bar */}
          <div className="flex items-center gap-4 bg-emerald-50/80 px-4 py-2.5 rounded-2xl border border-emerald-200/80 text-xs w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <Flame className="w-4 h-4 text-emerald-600" />
              <span>Total Día:</span>
              <span className="font-black text-brand-800 text-sm font-display">{dailyTotals.calories} kcal</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 font-semibold text-[11px]">
              <span>Prot: <strong className="text-slate-900">{dailyTotals.protein}g</strong></span>
              <span>Grasas: <strong className="text-slate-900">{dailyTotals.fats}g</strong></span>
              <span>Hidratos: <strong className="text-slate-900">{dailyTotals.carbs}g</strong></span>
            </div>
          </div>

        </div>

        {/* Meals Cards Grid */}
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
                    <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-black text-slate-900 shadow-xs uppercase tracking-wider">
                      {meal.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-slate-950/75 backdrop-blur-md text-white px-2 py-0.5 rounded-lg text-xs font-semibold">
                    <Clock className="w-3 h-3" />
                    <span>{meal.time}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-700 transition-colors line-clamp-2 mb-2 font-display">
                      {meal.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                      {meal.description}
                    </p>
                  </div>

                  {/* Micro Nutrients Tag */}
                  <div>
                    <div className="grid grid-cols-3 gap-1.5 py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-100 text-center mb-4">
                      <div>
                        <span className="text-[10px] text-slate-500 block font-medium">Kcal</span>
                        <span className="text-xs font-black text-slate-900 font-display">{meal.calories}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block font-medium">Proteína</span>
                        <span className="text-xs font-black text-brand-700 font-display">{meal.protein}g</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block font-medium">Grasas</span>
                        <span className="text-xs font-black text-amber-700 font-display">{meal.fats}g</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveRecipe(meal)}
                      className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Ver Ingredientes y Paso a Paso</span>
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
