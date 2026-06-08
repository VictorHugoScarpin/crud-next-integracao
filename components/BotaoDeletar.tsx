"use client";

import axios from "axios";
import { FiTrash2 } from "react-icons/fi";

const API_URL = "http://localhost:3001/usuarios";

interface BotaoDeletarProps {
  id: number | string;
}

export default function BotaoDeletar({ id }: BotaoDeletarProps) {
  const deletarRegistro = async () => {
    const confirmacao = window.confirm("Tem certeza que deseja excluir este registro?");
    
    if (confirmacao) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        alert("Registro excluído com sucesso! Atualize a página.");
        // Como o botão está separado, forçamos um reload simples na tela
        window.location.reload(); 
      } catch (error) {
        console.error("Erro ao deletar", error);
        alert("Erro ao excluir registro.");
      }
    }
  };

  return (
    <button 
      onClick={deletarRegistro}
      className="text-zinc-500 hover:text-red-500 transition-colors"
      title="Deletar"
    >
      <FiTrash2 size={18} />
    </button>
  );
}
