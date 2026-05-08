import { Link } from 'react-router-dom';
import { Bike } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-white/10 flex items-center justify-between px-6 md:px-12 backdrop-blur-md sticky top-0 z-50 bg-brand-black/40">
      <Link to="/" className="flex items-center gap-3 group">
        <div className="w-9 h-9 bg-brand-orange rounded-sm flex items-center justify-center group-hover:rotate-6 transition-transform">
          <Bike size={20} className="text-white" />
        </div>
        <h1 className="text-xl font-black tracking-tighter uppercase">
          MOTOESCUELA <span className="text-brand-orange">BIKER</span>
        </h1>
      </Link>
      
      <div className="flex gap-4 md:gap-8 uppercase text-[10px] font-bold tracking-[0.2em] opacity-60">
        <span className="hidden sm:inline">Aprendé desde 0</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">Seguridad</span>
        <span className="hidden sm:inline">•</span>
        <Link to="/motos" className="hover:text-brand-orange transition-colors">Motos</Link>
        <Link to="/cursos" className="hover:text-brand-orange transition-colors">Cursos</Link>
      </div>
    </nav>
  );
}
