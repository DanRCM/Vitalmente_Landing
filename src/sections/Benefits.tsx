import { Clock, Salad, PackageCheck, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { icon: Clock, title: "Ahorra tiempo", desc: "Ingredientes listos para cocinar en minutos." },
  { icon: Salad, title: "Comidas equilibradas", desc: "Diseñadas por nutricionistas." },
  { icon: PackageCheck, title: "Prácticas y seguras", desc: "Empaque sellado al vacío." },
  { icon: DollarSign, title: "Asequibles", desc: "Desde $2.50 por comida." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-vital-green mb-16"
        >
          ¿Por qué elegir Vitalmente?
        </motion.h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              // Me explico las clases usadas:
              // 1. 'p-6 rounded-2xl': Da espacio interno y bordes redondeados a la tarjeta
              // 2. 'hover:bg-[#F9F6E8]': Cambia el fondo al color crema al pasar el mouse
              // 3. 'transition-colors duration-300': Suaviza el cambio de color
              className="flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:bg-[#F9F6E8] group cursor-default"
            >
              {/* El icono crece un poco al hacer hover gracias a 'group-hover' */}
              <div className="bg-vital-green text-white p-4 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-md">
                <b.icon size={32} />
              </div>
              <h3 className="font-bold text-xl text-gray-800">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}