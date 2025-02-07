// src/pages/dados.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const DadosPage = () => {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const { data, error } = await supabase
          .from('produtos_farma') // Substitua pelo nome da sua tabela
          .select('*'); // Seleciona todas as colunas

        if (error) {
          console.error('Erro ao buscar dados:', error);
        } else {
          setDados(data);
        }
      } catch (err) {
        console.error('Erro inesperado:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDados();
  }, []);

  return (
    <div>
      <h1>Dados da Tabela</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
<ul>
  {dados.map((item) => (
    <li key={item.catmat}>
      {item.produto}
    </li>
  ))}
</ul>
      )}
    </div>
  );
};

export default DadosPage;
