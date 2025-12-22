import { CheckCircle, Truck, Flame } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { 
    num: 1, 
    icon: CheckCircle, // Icono de validación
    title: "Elige tu plan semanal o diario", 
    desc: "Selecciona el plan que mejor se adapte a tu estilo de vida." 
  },
  { 
    num: 2, 
    icon: Truck, // Icono de camión
    title: "Recibe tu caja Vitalmente", 
    desc: "Entrega rápida con ingredientes frescos y sellados." 
  },
  { 
    num: 3, 
    icon: Flame, // Icono de fuego/cocina
    title: "Calienta, mezcla y disfruta", 
    desc: "Cocinar sin complicaciones para tener una comida nutritiva." 
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-[#F9F6E8]/30">
      <div className="container mx-auto px-4 text-center">
        {/* Header de la sección */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
            <h2 className="text-4xl font-bold text-vital-green mb-4">¿Cómo funciona?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tres pasos simples para comenzar tu viaje hacia una alimentación más saludable
            </p>
        </motion.div>
        
        {/* Contenedor relativo para posicionar la línea de fondo */}
        <div className="relative max-w-6xl mx-auto">
            {/* LÍNEA CONECTORA (Visible solo en desktop) */}
            {/* Se posiciona a 'top-20' para alinearse con el centro de los iconos */}
            <div className="hidden md:block absolute top-[5rem] left-[10%] right-[10%] h-[2px] bg-gray-200 -z-10" />

            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, i) => (
                    <motion.div 
                        key={step.num} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        // 'h-full' asegura que todas las tarjetas midan lo mismo
                        className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center relative"
                    >
                        {/* Contenedor del Icono + Badge numérico */}
                        <div className="relative mb-8">
                            {/* Círculo Principal Verde */}
                            <div className="w-24 h-24 bg-vital-green rounded-full flex items-center justify-center text-white shadow-md">
                                <step.icon size={40} strokeWidth={1.5} />
                            </div>
                            
                            {/* Badge del Número (Esquina superior derecha) */}
                            <div className="absolute top-0 right-0 w-8 h-8 bg-[#F3EAD0] text-vital-green font-bold text-sm rounded-full flex items-center justify-center shadow-sm border-2 border-white">
                                {step.num}
                            </div>
                        </div>

                        {/* Textos */}
                        <h3 className="font-bold text-xl mb-4 text-gray-800">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                            {step.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}