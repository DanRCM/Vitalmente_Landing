import { motion } from "framer-motion";
import { ChefHat } from "lucide-react"; // Icono de sombrero de chef
import plato1 from "../assets/lentejas.png"; 
import plato2 from "../assets/pollo.png"; 

export function MenuSection() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Header de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
           {/* Icono del Chef */}
           <div className="bg-vital-green text-white p-3 rounded-full mb-6">
             <ChefHat size={32} />
           </div>
           <h2 className="text-4xl font-bold text-vital-green mb-4">Nuestro Menú</h2>
           <p className="text-gray-600 max-w-2xl">Recetas nutritivas, fáciles de preparar y perfectas para tu estilo de vida universitario</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Tarjeta 1: Lentejas */}
          <MenuCard 
            title="Lentejas guisadas con verduras"
            image={plato1}
            ingredients={[
              "1 taza de lentejas cocidas", 
              "½ cebolla picada", 
              "½ tomate", 
              "Zanahoria, pimiento y ajo al gusto", 
              "1 cda de aceite de oliva, comino y sal"
            ]}
            prepSteps={[
              "Sofríe las verduras y agrega las lentejas cocidas.", 
              "Cocina 10 minutos y guarda en porciones."
            ]}
            finalNote="Solo calentar y servir con arroz o pan integral."
            aporte="proteínas vegetales, hierro y fibra"
            delay={0.1}
          />
          
          {/* Tarjeta 2: Pollo */}
          <MenuCard 
            title="Salteado de pollo con vegetales"
            image={plato2}
            ingredients={[
              "1 pechuga de pollo en tiras", 
              "½ taza de zanahoria en tiras", 
              "½ taza de brócoli o vainitas",
              "1 cda de aceite de oliva o de ajonjolí",
              "Salsa de soya baja en sodio y limón al gusto"
            ]}
            prepSteps={[
              "Cocina el pollo en sartén hasta que esté dorado.",
              "Agrega las verduras y saltea 5–7 minutos.",
              "Añade salsa de soya y limón.",
              "Deja enfriar y guarda en recipientes."
            ]}
            finalNote="Recalienta en sartén o microondas."
            aporte="alto en proteína, vitaminas y fibra"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

// Interfaz para definir las props (opcional, pero buena práctica en TS)
interface MenuCardProps {
    title: string;
    image: string;
    ingredients: string[];
    prepSteps: string[];
    finalNote?: string;
    aporte: string;
    delay: number;
}

// Componente de Tarjeta Individual actualizado
function MenuCard({ title, image, ingredients, prepSteps, finalNote, aporte, delay }: MenuCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      // Se añade 'group' para efectos hover y un borde sutil
      className="border border-gray-200 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group flex flex-col"
    >
       {/* Usamos un fondo gris claro sutil y padding para que la caja respire. 
           'object-contain' asegura que se vea TODA la imagen sin recortes. */}
       <div className="w-full bg-[#F9F6E8]/50 p-6 overflow-hidden flex justify-center items-center">
         <img 
            src={image} 
            alt={title} 
            // Quitamos h-56 y object-cover. Usamos w-full h-auto.
            className="w-full h-auto max-h-[250px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
         />
       </div>

       <div className="p-8 flex flex-col flex-grow text-left">
         <h3 className="text-2xl font-bold text-vital-green mb-6">{title}</h3>
         
         <div className="space-y-6 text-gray-700 flex-grow">
            {/* Sección Ingredientes */}
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800">Ingredientes:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 marker:text-gray-400">
                {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
              </ul>
            </div>

            {/* Sección Preparación */}
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800">Preparación:</h4>
              {/* Lista ordenada con números en verde y negrita */}
              <ol className="list-decimal list-inside space-y-2 text-gray-600 marker:font-bold marker:text-vital-green">
                {prepSteps.map((step, i) => <li key={i} className="pl-1">{step}</li>)}
              </ol>
              {/* Nota final sin número */}
              {finalNote && (
                  <p className="mt-3 text-gray-600 pl-1">{finalNote}</p>
              )}
            </div>
         </div>

         {/* Sección Aporte (Footer de la tarjeta) */}
         <div className="mt-8 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-700">
                <span className="font-bold text-vital-green">Aporte: </span>
                {aporte}
            </p>
         </div>
       </div>
    </motion.div>
  );
}