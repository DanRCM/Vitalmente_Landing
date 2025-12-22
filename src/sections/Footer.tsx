import { Button } from "../components/Button";
import { Facebook, Instagram, Twitter, Mail} from "lucide-react";

export function Footer() {
  return (
    <>
      {/* 1. SECCIÓN CTA VERDE */}
      <section className="py-20 bg-vital-green text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Empieza hoy a comer mejor sin perder tiempo
        </h2>
        <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Únete a cientos de estudiantes que ya transformaron su alimentación
        </p>
        
        {/* Botón Blanco */}
        <div className="inline-block bg-white p-1 rounded-lg">
             <Button className="bg-white text-vital-green hover:bg-gray-50 shadow-none border border-transparent font-bold text-lg px-8">
                Reservar mi kit ahora
             </Button>
        </div>
      </section>

      {/* 2. FOOTER (Beige) */}
      <footer className="bg-[#F9F6E8] pt-16 pb-8 border-t border-green-100">
        <div className="container mx-auto px-4">
            
            {/* Grid de 3 columnas */}
            <div className="grid md:grid-cols-3 gap-12 mb-12 items-start">
                
                {/* Columna 1: Logo y Descripción */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-vital-green font-bold text-2xl">
                        <img src="/src/assets/logo.png" alt="Vitalmente Logo" className="h-10" />
                        <span>Vitalmente</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
                        Alimentación práctica y saludable para estudiantes universitarios.
                    </p>
                </div>

                {/* Columna 2: Contacto */}
                <div>
                    <h3 className="text-vital-green font-bold text-lg mb-6">Contacto</h3>
                    <div className="flex items-center gap-3 text-gray-700">
                        <Mail size={20} className="text-gray-600" />
                        <span className="text-sm">info@vitalmente.com</span>
                    </div>
                </div>

                {/* Columna 3: Síguenos */}
                <div>
                    <h3 className="text-vital-green font-bold text-lg mb-6">Síguenos</h3>
                    <div className="flex gap-4">
                        {[Facebook, Instagram, Twitter].map((Icon, i) => (
                            <a 
                                key={i} 
                                href="#"
                                className="bg-vital-green text-white p-3 rounded-full hover:bg-vital-dark transition-colors shadow-sm"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Barra Inferior (Copyright) */}
            <div className="border-t border-gray-300/50 pt-8 text-center">
                <p className="text-gray-500 text-sm">
                    Vitalmente © 2025 – Alimentación práctica y saludable para estudiantes universitarios.
                </p>
            </div>
        </div>
      </footer>
    </>
  );
}