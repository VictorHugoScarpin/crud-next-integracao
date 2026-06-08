export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard Central</h1>
      <p className="text-zinc-400 max-w-2xl">
        Bem-vindo ao painel de integração. Utilize o menu lateral para navegar entre as funções de Cadastro e Listagem do sistema.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl shadow-lg border-t-cyan-500 border-t-2">
          <h3 className="text-zinc-400 font-medium mb-2">Status da API</h3>
          <p className="text-2xl font-bold text-cyan-400">Aguardando Conexão</p>
        </div>
        {/* Espaços para futuros cards */}
      </div>
    </div>
  );
}