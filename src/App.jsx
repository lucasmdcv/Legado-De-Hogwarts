import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Garanta que o motion está importado
import { Wand2, ShieldCheck, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';
import { Routes, Route, Link } from 'react-router-dom';

// Importação das páginas
import Feiticos from './pages/Feiticos';
import Defesa from './pages/Defesa';
import Historia from './pages/Historia';

// --- COMPONENTE DE CARD DE DISCIPLINAS ---
function FeatureCard({ icon, title, desc, linkTo }) {
  return (
    <Link to={linkTo} className="h-full">
      <motion.div 
        whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(212, 175, 55, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        className="p-8 border border-white/10 bg-white/5 rounded-xl hover:border-gold/50 transition-all cursor-pointer h-full flex flex-col items-center text-center group"
      >
        <div className="mb-4 transition-transform group-hover:scale-110 duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gold">{title}</h3>
        <p className="text-gray-400 leading-relaxed flex-grow">{desc}</p>
        <div className="mt-6 text-gold text-sm font-bold italic border-b border-gold/30 flex items-center gap-2">
          Abrir Grimório <ChevronRight size={14} />
        </div>
      </motion.div>
    </Link>
  );
}

// --- PÁGINA: HOME ---
function Home() {
  const [casaSorteada, setCasaSorteada] = useState(null);

  const sortearCasa = () => {
    const casas = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
    const sorteio = casas[Math.floor(Math.random() * casas.length)];
    setCasaSorteada(sorteio);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-serif selection:bg-gold selection:text-black">
      
      {/* SEÇÃO HERO */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full -z-10" />
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-bold text-gold mb-6 tracking-tighter uppercase italic"
        >
          Hogwarts Legacy 
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A tua carta de aceitação chegou. Explora os segredos do castelo, 
          domina artes arcanas e molda o teu próprio legado.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(212, 175, 55, 0.4)" }} 
          whileTap={{ scale: 0.95 }}
          onClick={sortearCasa}
          className="bg-transparent border-2 border-gold text-gold px-12 py-4 rounded-full font-bold text-lg transition-all uppercase tracking-widest"
        >
          {casaSorteada ? `ÉS UM ${casaSorteada.toUpperCase()}!` : "Ser Selecionado pelo Chapéu"}
        </motion.button>


    <div className="flex justify-center mb-4"  >
  <img  
    src="https://img.icons8.com/?size=100&id=SXkKV51KK7rl&format=png&color=000000" 
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(212, 175, 55, 0.4)" }} 
    alt="Chapéu Seletor" 
    onClick={sortearCasa}
    className="w-32 h-32 mt-6 object-contain animate-pulse" // Adicionei um efeito de pulso místico
    />
</div>

    </header>
















      {/* SEÇÃO DE DISCIPLINAS */}
      <section className="py-24 bg-black/40 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gold mb-4 uppercase tracking-widest">Disciplinas de Magia</h2>
            <div className="h-1 w-24 bg-gold mx-auto opacity-50"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Wand2 className="text-gold" size={40} />}
              title="Feitiços e Encantamentos"
              desc="Desde o básico 'Lumos' até ao domínio de encantamentos complexos de levitação e combate."
              linkTo="/feiticos"
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-gold" size={40} />}
              title="Defesa Contra as Trevas"
              desc="Aprende a proteger-te contra criaturas das sombras e feitiços proibidos."
              linkTo="/defesa"
            />
            <FeatureCard 
              icon={<BookOpen className="text-gold" size={40} />}
              title="História da Magia"
              desc="Mergulha nos arquivos das linhagens bruxas e nas revoltas dos duendes."
              linkTo="/historia"
            />
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-12 text-center text-gray-500 border-t border-white/5">
        <GraduationCap className="mx-auto mb-4 opacity-20" size={40} />
        <p className="text-sm tracking-widest uppercase">
          © 2026 Hogwarts Digital - 
          <a 
            href="https://www.linkedin.com/in/lucas-mendes-631691232/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-2 text-gold hover:text-white transition-colors duration-300 underline decoration-gold/30 underline-offset-4"
          >
            Projeto Lucas Mendes
          </a>
        </p>
      </footer>
    </div>
  );
}

// --- EXPORTAÇÃO PRINCIPAL ---
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feiticos" element={<Feiticos />} />
      <Route path="/defesa" element={<Defesa />} />
      <Route path="/historia" element={<Historia />} />
    </Routes>
  );
}