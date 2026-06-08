import Link from 'next/link';
import { FiHome, FiList, FiPlusSquare, FiSettings } from 'react-icons/fi';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-950 min-h-[calc(100vh-4rem)] border-r border-zinc-800 p-4 flex flex-col gap-2">
      <nav className="flex-1 flex flex-col gap-2 mt-4">
        <Link href="/" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-cyan-400 hover:bg-cyan-950/30 rounded-lg transition-colors">
          <FiHome size={20} />
          <span className="font-medium">Início</span>
        </Link>
        <Link href="/listar" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-cyan-400 hover:bg-cyan-950/30 rounded-lg transition-colors">
          <FiList size={20} />
          <span className="font-medium">Listar Dados</span>
        </Link>
        <Link href="/cadastrar" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-cyan-400 hover:bg-cyan-950/30 rounded-lg transition-colors">
          <FiPlusSquare size={20} />
          <span className="font-medium">Cadastrar</span>
        </Link>
      </nav>
      <div className="mt-auto">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-300 transition-colors">
          <FiSettings size={20} />
          <span className="font-medium">Configurações</span>
        </button>
      </div>
    </aside>
  );
}