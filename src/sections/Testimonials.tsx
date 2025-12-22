import { Star, Send } from "lucide-react";
import { motion } from "framer-motion";
// Nota: Puedes usar imágenes de prueba de internet o importar las tuyas
// Para este ejemplo usaré placeholders
const user1 = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80";
const user2 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80";
const user3 = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80";

const testimonials = [
  {
    name: "Gabriela M.",
    role: "FIEC – ESPOL",
    image: user1,
    quote: "Antes comía cualquier cosa entre clases, ahora tengo mis comidas listas sin estrés."
  },
  {
    name: "Carlos R.",
    role: "Facultad de Medicina",
    image: user2,
    quote: "Como estudiante de medicina, necesito energía constante. Vitalmente es perfecto para mí."
  },
  {
    name: "Ana S.",
    role: "Escuela de Diseño",
    image: user3,
    quote: "Los kits son prácticos, deliciosos y me ayudan a mantener mi presupuesto controlado."
  }
];

export function Testimonials() {
  return (
    <section id="opiniones" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Título de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-vital-green mb-4">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-gray-600">
            Miles de estudiantes ya están comiendo mejor con Vitalmente
          </p>
        </motion.div>

        {/* Grid de Tarjetas de Testimonios */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#F9F6E8] p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              {/* Estrellas */}
              <div className="flex gap-1 text-vital-green mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              
              {/* Cita */}
              <p className="text-gray-700 mb-6 italic min-h-[80px]">
                "{t.quote}"
              </p>

              {/* Usuario */}
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Formulario "Comparte tu experiencia" */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-vital-green text-center mb-8">
            Comparte tu experiencia
          </h3>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-vital-green focus:ring-1 focus:ring-vital-green outline-none transition-all bg-gray-50/50"
              />
              
              <input 
                type="text" 
                placeholder="Tu universidad (opcional)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-vital-green focus:ring-1 focus:ring-vital-green outline-none transition-all bg-gray-50/50"
              />
              
              <textarea 
                rows={4}
                placeholder="Cuéntanos tu experiencia con Vitalmente..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-vital-green focus:ring-1 focus:ring-vital-green outline-none transition-all bg-gray-50/50 resize-none"
              />
            </div>

            <button 
              className="w-full bg-vital-green hover:bg-vital-dark text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Enviar comentario
            </button>
            
            <p className="text-center text-xs text-gray-400 mt-4">
              * Los comentarios se mostrarán temporalmente y desaparecerán al refrescar la página
            </p>
          </form>
        </motion.div>

      </div>
    </section>
  );
}