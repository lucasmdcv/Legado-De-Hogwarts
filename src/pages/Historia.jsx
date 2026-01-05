import React from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de ter o react-router-dom instalado
import { ChevronLeft } from 'lucide-react'; // Certifique-se de ter o lucide-react instalado

const Historia = () => {
  const styles = {
    container: {
      marginTop: '40px', // Ajustado para não colidir com o botão voltar
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: '1.6',
      color: '#333',
      maxWidth: '800px',
      margin: '20px auto',
      fontSize: '18px', // Corrigido de fontsize para fontSize (camelCase)
    },
    h1: {
      color: '#2c3e50',
      borderBottom: '2px solid #d4af37',
      paddingBottom: '10px',
      fontSize: '28px',
      fontWeight: 'bold',
    },
    h2: {
      color: '#8e44ad',
      marginTop: '20px',
      fontSize: '22px',
      fontWeight: '600',
    },
    p: {
      marginBottom: '15px',
      textAlign: 'justify',
    },
    highlight: {
      fontWeight: 'bold',
      color: '#d4af37',
    },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-serif p-6 md:p-12">
      {/* Botão Voltar */}
      <Link
        to="/"
        className="inline-flex items-center text-red-700 mb-8 hover:text-white transition-all group"
      >
        <ChevronLeft
          size={24}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span className="ml-2">Voltar</span>
      </Link>

      <div style={styles.container}>
        <h1 style={styles.h1}>A História de Hogwarts Legacy</h1>
        
        <p style={styles.p}>
          Situado no final do século XIX (anos 1800), 
          <span style={styles.highlight}> Hogwarts Legacy </span> 
          transporta os jogadores para uma era muito anterior aos eventos dos livros de Harry Potter. 
          Você assume o papel de um estudante do quinto ano que ingressa tardiamente na Escola de Magia e Bruxaria de Hogwarts.
        </p>

        <h2 style={styles.h2}>O Mistério da Magia Antiga</h2>
        <p style={styles.p}>
          O protagonista possui uma habilidade incomum: a capacidade de visualizar e manipular traços de uma forma rara e poderosa de 
          <span style={styles.highlight}> Magia Antiga</span>. Esse poder é a chave para desvendar segredos que ameaçam a estabilidade do mundo bruxo.
        </p>

        <h2 style={styles.h2}>A Revolta dos Duendes e Victor Rookwood</h2>
        <p style={styles.p}>
          O conflito principal gira em torno de uma perigosa aliança entre <strong>Ranrok</strong>, o líder de uma rebelião de duendes, e <strong>Victor Rookwood</strong>, um bruxo das trevas. Ranrok busca controlar a Magia Antiga para destruir a humanidade bruxa, enquanto Rookwood usa o caos para seus próprios fins obscuros.
        </p>

        <h2 style={styles.h2}>O Papel do Professor Fig</h2>
        <p style={styles.p}>
          Sob a orientação do Professor Eleazar Fig, o jogador deve explorar as Terras Altas da Escócia, enfrentar as "Provas dos Guardiões" e decidir como usará seu conhecimento. A grande questão que guia a narrativa é: você protegerá esse segredo sagrado ou sucumbirá à tentação de usar esse poder para benefício próprio?
        </p>
      </div>
    </div>
  );
};

export default Historia;