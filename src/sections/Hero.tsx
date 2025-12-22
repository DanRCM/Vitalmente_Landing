import { Button } from "../components/Button";
import { motion } from "framer-motion";
import heroImage from "../assets/cajas.png";

export function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 bg-vital-cream px-4 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texto animado */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-vital-green leading-tight">
            Comidas saludable listas para cocinar
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            Kits nutritivos y prácticos pensados para estudiantes con poco tiempo.
          </p>
          <p className="text-sm font-medium text-gray-500">
            Desde $2.50 por comida – sin complicaciones.
          </p>
          <div className="flex gap-4">
             <Button>Ver Planes</Button>
          </div>
        </motion.div>

        {/* Imagen animada y ajustada */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* TRUCO: max-h limita la altura para que no sea gigante, object-contain evita que se recorte */}
          <img 
            src={heroImage} 
            alt="Cajas Vitalmente" 
            className="w-full max-w-[500px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}