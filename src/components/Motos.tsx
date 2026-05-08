import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Info, DollarSign, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import img110_1 from '../assets/images/regenerated_image_1778015159014.jpg';
import img110_2 from '../assets/images/regenerated_image_1778015160001.jpg';
import img150_1 from '../assets/images/regenerated_image_1778015160767.jpg';
import img150_2 from '../assets/images/regenerated_image_1778015161564.jpg';
import img300_1 from '../assets/images/regenerated_image_1778015162482.jpg';
import img300_2 from '../assets/images/regenerated_image_1778015163464.jpg';

interface CategoryCardProps {
  title: string;
  items: any[];
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, items, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="category-card p-6 flex flex-col"
  >
    <h3 className="text-brand-orange text-sm font-black uppercase mb-6 tracking-tighter flex items-center gap-2">
      <span className="w-2.5 h-2.5 bg-brand-orange"></span>
      {title}
    </h3>
    <div className="space-y-5">
      {items.map((item, idx) => (
        <div key={idx} className="border-l-2 border-brand-orange/30 hover:border-brand-orange pl-4 py-1 transition-colors">
          <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest mb-1">{item.type || 'Servicio'}</p>
          <div className="flex justify-between items-end gap-4">
            <span className="text-xs md:text-sm text-white/80 font-medium">{item.label}</span>
            <span className="price-tag text-lg">${item.price.toLocaleString('es-AR')}</span>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function Motos() {
  const sections = [
    {
      title: "110cc a 150cc",
      items: [
        { label: "Curso de 6 horas (3 clases)", price: 135000, type: 'Pack Pack' },
        { label: "Curso de 4 horas (2 clases)", price: 100000, type: 'Pack Pack' },
        { label: "Clase de 2 horas", price: 60000, type: 'Individual' },
        { label: "Clase de 1 hora", price: 35000, type: 'Individual' },
        { label: "Alquiler para examen", price: 40000, type: 'Gestión' },
      ]
    },
    {
      title: "160cc a 300cc",
      items: [
        { label: "Curso de 6 horas (3 clases)", price: 145000, type: 'Pack Pack' },
        { label: "Curso de 4 horas (2 clases)", price: 110000, type: 'Pack Pack' },
        { label: "Clase de 2 horas", price: 70000, type: 'Individual' },
        { label: "Clase de 1 hora", price: 45000, type: 'Individual' },
        { label: "Alquiler para examen", price: 45000, type: 'Gestión' },
      ]
    },
    {
      title: "Superior a 300cc",
      items: [
        { label: "Curso de 4 horas (2 clases)", price: 175000, type: 'Pack Pack' },
        { label: "Curso de 3 horas completos", price: 145000, type: 'Pack Pack' },
        { label: "Clase de 2 horas", price: 100000, type: 'Individual' },
        { label: "Clase de 1 hora", price: 55000, type: 'Individual' },
        { label: "Alquiler para examen", price: 55000, type: 'Gestión' },
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] opacity-40 hover:opacity-100 hover:text-brand-orange mb-12 transition-all">
        <ChevronLeft size={16} />
        <span>Regresar al Dashboard</span>
      </Link>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex items-center gap-4">
          <div className="h-16 w-3 bg-brand-orange"></div>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase">Tarifario</h1>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-[10px] font-bold opacity-30 uppercase tracking-[0.4em]">Actualizado Mayo 2026</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {sections.map((section, idx) => (
          <CategoryCard 
            key={idx} 
            title={section.title} 
            items={section.items} 
            index={idx} 
          />
        ))}
      </div>

      <div className="flex flex-col mb-12">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-10 w-2 bg-brand-orange"></div>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter">Oferta por cilindrada</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          {
            title: "Motos de 110 hasta 150 cc",
            price: 65000,
            desc: "40 mnt de clases + examen"
          },
          {
            title: "Motos de 160 hasta 300cc",
            price: 80000,
            desc: "40 mnt de clases + examen"
          },
          {
            title: "Motos de más de 300cc",
            price: 100000,
            desc: "40 mnt de clases + examen"
          }
        ].map((oferta, idx) => {
          const waMsg = `Hola! Me interesa la oferta por cilindrada: ${oferta.title} para el paquete de "${oferta.desc}" por $${oferta.price.toLocaleString('es-AR')}`;
          return (
            <motion.a 
              key={idx}
              href={`https://wa.me/5491121646353?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: idx * 0.1 }}
              className="category-card p-8 border-2 border-brand-orange/30 group hover:border-brand-orange transition-all block relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                <CheckCircle size={16} className="text-brand-orange" />
              </div>
              <h3 className="text-xl font-black italic uppercase mb-4 leading-tight group-hover:text-brand-orange transition-colors">
                {oferta.title}
              </h3>
              <p className="text-white/60 text-sm font-medium mb-6 uppercase tracking-widest">{oferta.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">Precio Final</span>
                <span className="text-3xl font-black italic text-brand-orange font-mono">${oferta.price.toLocaleString('es-AR')}</span>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Consultar por WhatsApp</span>
              </div>
            </motion.a>
          );
        })}
      </div>

      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-10 w-2 bg-brand-orange"></div>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter">Motos</h2>
        </div>
        
        <div className="category-card p-4 md:p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-black uppercase text-brand-orange">De 110 hasta 150cc</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Nuestra flota de entrada es ideal para quienes están dando sus primeros pasos o buscan renovar su licencia. Scooters y motos de calle livianas, fáciles de maniobrar y con tecnología moderna.
              </p>
              <div className="flex gap-4 pt-4">
                 <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest leading-none">Inyección Electrónica</div>
                 <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest leading-none">ABS Delantero</div>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 w-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-white/5 relative group"
              >
                <img 
                  src={img110_2} 
                  alt="Modelo Siam Qu" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded text-[9px] font-bold uppercase tracking-tighter">Modelo Siam Qu</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-white/5 relative group"
              >
                <img 
                  src={img110_1} 
                  alt="Modelo Wave 110" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded text-[9px] font-bold uppercase tracking-tighter">Modelo Wave 110</div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="category-card p-4 md:p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-black uppercase text-brand-orange">150cc con Embrague</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Dominá el arte del cambio manual. Motos diseñadas para aprender el control preciso del embrague y la potencia, fundamentales para avanzar a categorías superiores.
              </p>
              <div className="flex gap-4 pt-4">
                 <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest leading-none">Caja de 5 Velocidades</div>
                 <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest leading-none">Control Térmico</div>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 w-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-white/5 relative group"
              >
                <img 
                  src={img150_1} 
                  alt="Modelo Siam 150" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded text-[9px] font-bold uppercase tracking-tighter">Modelo Siam 150</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-white/5 relative group"
              >
                <img 
                  src={img150_2} 
                  alt="Modelo Suzuki AX100" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded text-[9px] font-bold uppercase tracking-tighter">Modelo Suzuki AX100</div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="category-card p-4 md:p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-black uppercase text-brand-orange">300cc y más...</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Potencia y control para el segmento más exigente. Motocicletas de alta cilindrada para quienes buscan perfeccionar su técnica avanzada en ruta y ciudad.
              </p>
              <div className="flex gap-4 pt-4">
                 <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest leading-none">Alta Cilindrada</div>
                 <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest leading-none">Frenado ABS</div>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 w-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-white/5 relative group"
              >
                <img 
                  src={img300_1} 
                  alt="Modelo XR Tornado 250" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded text-[9px] font-bold uppercase tracking-tighter">Modelo XR Tornado 250</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-white/5 relative group"
              >
                <img 
                  src={img300_2} 
                  alt="Modelo Rouser NS 400" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded text-[9px] font-bold uppercase tracking-tighter">Modelo Rouser NS 400</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="category-card p-10 relative overflow-hidden bg-brand-orange/5 border-brand-orange/20 mb-16"
      >
        <Info size={200} className="absolute -top-10 -right-10 opacity-5 text-brand-orange" />
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-1 bg-brand-orange"></span>
            <h4 className="text-xs font-black uppercase tracking-[0.5em] text-brand-orange">Aviso Importante</h4>
          </div>
          <p className="text-xl md:text-2xl font-light leading-relaxed italic text-white/90">
            "Para la categoría <span className="text-brand-orange font-bold uppercase">superior a 300cc</span> es indispensable tener experiencia previa comprobable en manejo de categorías menores."
          </p>
        </div>
      </motion.div>

      <section className="mt-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-1 bg-brand-orange"></span>
          <h2 className="text-2xl font-black uppercase tracking-widest italic">Planes de curso de manejo de motos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "110cc a 150cc", 
              msg: "Hola, me interesa recibir más información sobre el plan para motos de 110cc a 150cc." 
            },
            { 
              title: "160cc a 300cc", 
              msg: "Hola, me gustaría asesoramiento sobre el plan para el segmento de 160cc a 300cc." 
            },
            { 
              title: "Superior a 300cc", 
              msg: "Buen día, consulto por los beneficios del plan para motos de alta cilindrada (superior a 300cc)." 
            }
          ].map((plan, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              href={`https://wa.me/5491121646353?text=${encodeURIComponent(plan.msg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group category-card p-10 text-center flex flex-col items-center justify-center gap-6 hover:-translate-y-2 transition-all duration-300 border-2 border-white/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand-orange opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity">WhatsApp Directo</span>
              <span className="text-2xl md:text-3xl font-black italic uppercase leading-tight tracking-tighter">{plan.title}</span>
              <div className="w-12 h-1.5 bg-brand-orange group-hover:w-full transition-all duration-700"></div>
              <span className="text-brand-orange text-xs font-black tracking-[0.2em] uppercase">Consultar Plan</span>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
