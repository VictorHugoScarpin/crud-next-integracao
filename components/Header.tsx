import { FiCpu } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="h-16 bg-zinc-950 border-b border-cyan-500/20 flex items-center px-6 justify-between">
      <div className="flex items-center gap-3 text-cyan-400">
        <FiCpu size={26} className="drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
        <span className="font-bold text-xl tracking-widest uppercase">Sistema Base</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-zinc-400">v1.0.0</span>
        <div className="h-8 w-8 rounded-full bg-cyan-900/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
          AD
        </div>
      </div>
    </header>
  );
}