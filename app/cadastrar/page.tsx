"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://localhost:3001/usuarios";

export default function Cadastrar() {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await axios.post(API_URL, data);
      alert("Cadastro realizado com sucesso!");
      reset();
      router.push("/listar");
    } catch (error) {
      console.error("Erro ao cadastrar", error);
      alert("Erro ao realizar cadastro.");
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <h2 className="text-2xl font-bold text-cyan-400 tracking-wider uppercase">Novo Cadastro</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-400">Nome Completo</label>
          <input 
            {...register("nome", { required: true })}
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-zinc-100 focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="Digite o nome"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-400">E-mail</label>
          <input 
            type="email"
            {...register("email", { required: true })}
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-zinc-100 focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="Digite o e-mail"
          />
        </div>

        <button 
          type="submit" 
          className="mt-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-lg transition-colors drop-shadow-[0_0_8px_rgba(8,145,178,0.5)]"
        >
          Salvar Registro
        </button>
      </form>
    </div>
  );
}
