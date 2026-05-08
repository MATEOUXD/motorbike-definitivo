import { motion } from 'motion/react';
import { Bike, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import background image 
import heroBg from '../assets/images/oo.png';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4 relative overflow-hidden w-full max-w-[1216px] mx-auto">
      {/* Background Hero Image - oo.png */}
      <div className="absolute top-0 left-0 w-full h-[85vh] z-0 pointer-events-none overflow-hidden">
        {/* Multistage progressive gradient fade to black */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/40 to-brand-black"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>
        </div>
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-25 brightness-[0.7]"
          onError={(e) => {
            // Fallback to a high quality motorcycle image if oo.png fails
            e.currentTarget.src = "https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=2070";
          }}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-24 mt-12 relative z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-4 opacity-40 uppercase text-[12px] font-black tracking-[0.2em] text-brand-orange">
          <span>Seguro</span>
          <span className="opacity-30 text-white">•</span>
          <span>Desde 0</span>
        </div>
        <h1 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter uppercase italic">
          MOTOESCUELA <span className="text-brand-orange">BIKER</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-medium tracking-tight max-w-lg mx-auto mb-10">
          Dominá cualquier cilindrada con nuestro método de enseñanza profesional.
        </p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="inline-block"
        >
          <a 
            href="https://forms.gle/hYm8Zz5pE8iV2tJNA" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-xl italic uppercase tracking-tighter text-white transition-all duration-300"
          >
            <span className="absolute inset-0 border-2 border-brand-orange rounded-sm transition-all duration-300 group-hover:bg-brand-orange group-hover:scale-110 group-hover:rotate-1 group-hover:shadow-[0_0_50px_rgba(255,107,0,0.4)]"></span>
            <span className="relative z-10 group-hover:text-black">Quiero Inscribirme</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-orange rounded-full animate-ping"></div>
          </a>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mb-24">
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <Link 
            to="/motos" 
            className="flex flex-col items-center justify-center h-48 md:h-64 bg-brand-orange text-black group hover:brightness-110 transition-all relative overflow-hidden"
          >
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Explorar Tarifas</span>
            <span className="text-4xl md:text-6xl font-black italic uppercase">MOTOS</span>
            <Bike size={120} className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <Link 
            to="/cursos" 
            className="flex flex-col items-center justify-center h-48 md:h-64 bg-white text-brand-black group hover:bg-gray-200 transition-all relative overflow-hidden"
          >
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Nuestra Modalidad</span>
            <span className="text-4xl md:text-6xl font-black italic uppercase">CURSOS</span>
            <GraduationCap size={120} className="absolute -bottom-10 -right-10 opacity-5 group-hover:scale-110 transition-transform text-black" />
          </Link>
        </motion.div>
      </div>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mb-24 bg-white/3 border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 pt-24 pb-24 h-full bg-brand-orange"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange">Nuestra Misión</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8">
            SOBRE <span className="text-brand-orange">NOSOTROS</span>
          </h2>
          <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
            <p>
              Somos una motoescuela enfocada en enseñar a manejar de forma práctica, segura y accesible. Acompañamos a cada alumno desde su primer contacto con la moto hasta que logra confianza real para moverse por la ciudad.
            </p>
            <p>
              Creemos que aprender a manejar no debería ser un proceso estresante ni rígido. Por eso ofrecemos clases personalizadas, adaptadas al ritmo de cada persona, con instructores que priorizan la paciencia, la claridad y la práctica real.
            </p>
            <p className="text-white">
              Nuestro objetivo es que cada alumno no solo aprenda a manejar, sino que gane independencia, seguridad y disfrute arriba de la moto.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
