import { motion } from 'motion/react';
import { ChevronLeft, ShieldCheck, Zap, User, Clock, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfoItem = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className="flex gap-6 p-8 category-card group"
  >
    <div className="bg-brand-orange/10 p-4 rounded-lg group-hover:bg-brand-orange/20 transition-colors h-fit border border-brand-orange/20">
      <Icon size={32} className="text-brand-orange" />
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
        <h3 className="text-xl font-bold uppercase tracking-tighter group-hover:text-brand-orange transition-colors">{title}</h3>
      </div>
      <p className="text-white/60 leading-relaxed text-sm">{description}</p>
    </div>
  </motion.div>
);

export default function Cursos() {
  const points = [
    {
      icon: Zap,
      title: "Diseño Personalizado",
      description: "Nuestros cursos están diseñados específicamente según tu nivel de experiencia actual y la cilindrada de la moto que quieras dominar."
    },
    {
      icon: User,
      title: "Flexibilidad Total",
      description: "Vos elegis como aprender. Ofrecemos clases individuales para reforzar puntos clave o paquetes completos para una formación integral."
    },
    {
      icon: Clock,
      title: "Duración a Medida",
      description: "Contamos con sesiones individuales de 1h o 2h, y packs de varias horas diseñados para maximizar el tiempo de práctica efectiva."
    },
    {
      icon: Calendar,
      title: "Alquiler para Examen",
      description: "No te preocupes por la moto para rendir. Te ofrecemos el alquiler de nuestras unidades para que rindas tu examen con total confianza."
    },
    {
      icon: ShieldCheck,
      title: "Progresión y Seguridad",
      description: "Nuestro método enfatiza el aprendizaje progresivo. Caminamos junto a vos desde la base hasta la práctica real en calle con máxima seguridad."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] opacity-40 hover:opacity-100 hover:text-brand-orange mb-12 transition-all">
        <ChevronLeft size={16} />
        <span>Regresar al Dashboard</span>
      </Link>

      <div className="flex flex-col mb-16">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-4 w-4 bg-brand-orange"></div>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase">Metodología</h1>
        </div>
        <p className="text-gray-500 font-medium tracking-tight text-lg ml-8">Descubrí por qué somos la mejor opción para aprender a dominar las dos ruedas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {points.map((point, idx) => (
          <div key={idx} className={idx === points.length - 1 ? "md:col-span-2" : ""}>
            <InfoItem {...point} index={idx} />
          </div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-brand-black border-2 border-brand-orange p-10 rounded-xl relative overflow-hidden group shadow-[0_0_50px_-12px_rgba(255,107,0,0.3)]"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-4 leading-none">
              ¿Estás listo para <br /> <span className="text-brand-orange">el examen?</span>
            </h2>
            <p className="text-white/60 font-medium max-w-sm">No pierdas más tiempo. Elegí tu curso hoy y obtené tu licencia con seguridad.</p>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <a 
              href="https://wa.me/5491121646353" 
              target="_blank" 
              className="bg-brand-orange text-black px-10 py-5 font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
            >
              <MessageCircle size={20} />
              Reservá por WhatsApp
            </a>
            <div className="text-center md:text-right px-4">
              <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.4em]">Cupos limitados por semana</span>
            </div>
          </div>
        </div>
        <Zap size={300} className="absolute -bottom-20 -left-20 opacity-5 text-brand-orange rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
      </motion.div>
    </div>
  );
}
