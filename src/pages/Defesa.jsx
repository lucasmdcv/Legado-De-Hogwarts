import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ShieldAlert, Skull } from 'lucide-react';
import { motion } from 'framer-motion';

const Defesa = () => {
  const maldicoes = [
    { nome: "Avada Kedavra", desc: "A Maldição da Morte. Causa morte instantânea e indolor.", perigo: "Extremo" },
    { nome: "Crucio", desc: "A Maldição Cruciatus. Infringe dor torturante à vítima.", perigo: "Alto" },
    { nome: "Imperio", desc: "A Maldição Imperius. Coloca a vítima sob o controle total do lançador.", perigo: "Alto" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-serif p-6 md:p-12">
      {/* Botão Voltar */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <Link
          to="/"
          className="inline-flex items-center text-gold mb-12 hover:text-white transition-all group"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          <span className="ml-2 uppercase tracking-widest text-sm">Voltar ao Castelo</span>
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 2, scale: 1 }}
        className="max-w-4xl mx-auto bg-red-900/5 border border-red-900/20 p-8 md:p-16 rounded-2xl backdrop-blur-sm shadow-2xl"
      >
        <div className="flex items-center gap-4 mb-8 border-b border-red-900/30 pb-6">
          <ShieldAlert className="text-red-700" size={40} />
          <h1 className="text-3xl md:text-5xl font-bold text-red-700 uppercase tracking-tighter">
            Artes das Trevas
          </h1>
        </div>
        
        <p className="text-lg mb-8 italic">
          "A Defesa Contra as Trevas não é apenas sobre feitiços, é sobre temperança e vigilância constante."
        </p>

        <div className="grid gap-6">
          {maldicoes.map((maldicao, index) => (
            <div key={index} className="p-6 bg-black/40 border-l-4 border-red-800 rounded-r-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-red-500">{maldicao.nome}</h3>
                <span className="text-xs bg-red-900/30 text-red-400 px-2 py-1 rounded uppercase tracking-widest">
                  {maldicao.perigo}
                </span>
              </div>
              <p className="text-gray-400">{maldicao.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 border border-dashed border-red-900/50 rounded-lg flex items-center gap-4">
          <Skull className="text-red-900 opacity-50" size={48} />
          <p className="text-sm text-gray-500">
            Aviso: O uso de Maldições Imperdoáveis em Hogwarts resulta em expulsão imediata e encaminhamento para Azkaban.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Defesa;