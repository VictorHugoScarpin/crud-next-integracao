"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FiEdit, FiTrash2 } from "react-icons/fi";

// Substitua pela URL correta do backend do professor
const API_URL = "http://localhost:3001/usuarios"; 

export default function Listar() {
  const [dados, setDados] = useState<any[]>([]);

  useEffect(() => {
    buscarDados();
  }, []);

  const buscarDados = async () => {
    try {
      const response = await axios.get(API_URL);
      setDados(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados", error);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-cyan-400 tracking-wider uppercase">Listagem de Registros</h2>
      
      <div className="overflow-x-auto bg-zinc-950 border border-zinc-800 rounded-xl">
        <table className="w-full text-left text-sm text-zinc-400">
          <thead className="bg-zinc-900 text-cyan-500 uppercase border-b border-zinc-800">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Nome</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4 text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item) => (
              <tr key={item.id} className="border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors">
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4 text-zinc-100">{item.nome}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4 flex justify-center gap-4">
                  <Link href={`/editar/${item.id}`} className="text-zinc-500 hover:text-cyan-400 transition-colors">
                    <FiEdit size={18} />
                  </Link>
                  {/* O botão de deletar será injetado aqui pelo Valdemarques depois */}
                  <button className="text-zinc-500 hover:text-red-500 transition-colors">
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {dados.length === 0 && (
          <div className="p-6 text-center text-zinc-500">Nenhum dado encontrado.</div>
        )}
      </div>
    </div>
  );
}
