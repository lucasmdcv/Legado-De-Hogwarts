import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Search, Sparkles, Zap } from 'lucide-react';

const DATA_FEITICOS = [
  { id: 1, nome: "Expecto Patronum", categoria: "Defesa", descricao: "Conjura um guardião de energia positiva.", dificuldade: "Avançado" },
  { id: 2, nome: "Expelliarmus", categoria: "Duelo", descricao: "Desarma o oponente forçando a varinha a saltar da mão.", dificuldade: "Médio" },
  { id: 3, nome: "Wingardium Leviosa", categoria: "Encantamento", descricao: "Faz objetos levitarem suavemente.", dificuldade: "Básico" },
  { id: 4, nome: "Lumos Maxima", categoria: "Utilitário", descricao: "Gera um flash de luz branca cegante.", dificuldade: "Básico" },
  { id: 5, nome: "Alohomora", categoria: "Encantamento", descricao: "Destranca portas e fechaduras mecânicas.", dificuldade: "Básico" },
  { id: 6, nome: "Protego", categoria: "Defesa", descricao: "Cria um escudo invisível que reflete feitiços.", dificuldade: "Médio" },
];

export default function Feiticos() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("Todos");

  // Lógica de Filtro e Busca
  const feiticosFiltrados = DATA_FEITICOS.filter(f => {
    const matchesBusca = f.nome.toLowerCase().includes(busca.toLowerCase());
    const matchesFiltro = filtro === "Todos" || f.categoria === filtro;
    return matchesBusca && matchesFiltro;
  });

  const categorias = ["Todos", "Defesa", "Duelo", "Encantamento", "Utilitário"];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#2c1e0f] font-serif p-4 md:p-10">
      
      {/* Botão Voltar */}
      <Link to="/" className="inline-flex items-center text-gold mb-8 hover:brightness-125 transition-all">
        <ChevronLeft size={24} /> <span className="ml-2 uppercase tracking-tighter">Voltar ao Castelo</span>
      </Link>

      <div className="max-w-5xl mx-auto">
        {/* Painel de Controle (Filtros e Busca) */}
        <div className="bg-[#f4e4bc] p-6 rounded-t-lg border-x-4 border-t-4 border-[#d2b48c] flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 opacity-40" size={20} />
            <input 
              type="text"
              placeholder="Buscar feitiço..."
              className="w-full bg-transparent border-b-2 border-[#2c1e0f]/20 pl-10 pr-4 py-2 focus:outline-none focus:border-gold transition-colors"
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categorias.map(cat => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`px-4 py-1 rounded-full text-xs font-bold uppercase transition-all ${
                  filtro === cat ? 'bg-[#2c1e0f] text-[#f4e4bc]' : 'bg-[#2c1e0f]/10 text-[#2c1e0f] hover:bg-[#2c1e0f]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Corpo do Grimório */}
        <div className="bg-[#f4e4bc] min-h-[600px] p-8 md:p-16 border-4 border-[#d2b48c] shadow-2xl relative overflow-hidden">
          {/* Efeito Visual de Papel Velho */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-10">
              <Sparkles className="text-gold mr-3" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold border-b-4 border-[#2c1e0f] pb-2 uppercase tracking-tighter">
                O Livro de Feitiços
              </h1>
              <Sparkles className="text-gold ml-3" size={32} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence>
                {feiticosFiltrados.length > 0 ? (
                  feiticosFiltrados.map((f) => (
                    <motion.div
                      key={f.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="p-6 border-l-4 border-gold bg-[#2c1e0f]/5 hover:bg-[#2c1e0f]/10 transition-colors rounded-r-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-2xl font-bold leading-none">{f.nome}</h2>
                        <Zap size={16} className="text-gold" />
                      </div>
                      <p className="text-xs font-bold text-[#5a3e2b] mb-3 uppercase tracking-widest">{f.categoria} • {f.dificuldade}</p>
                      <p className="text-sm leading-relaxed text-[#2c1e0f]/80 italic">"{f.descricao}"</p>
                    </motion.div>
                  ))
                ) : (
                  <p className="col-span-2 text-center py-20 opacity-40 italic">Nenhum feitiço encontrado no arquivo...</p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}