export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-4 text-center border-t border-zinc-800">
      <p className="text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} - Sistema de Gestão Dinâmica. Desenvolvido pela Equipe.
      </p>
    </footer>
  );
}