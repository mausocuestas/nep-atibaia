import React, { useEffect, useState } from "react";

const DadosPlanilha = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchDadosPlanilha = async () => {
      try {
        const response = await fetch("https://nep-atibaia.vercel.app/api/dados"); // URL do backend
        const data = await response.json();

        // Extrair cabeçalhos e linhas
        const [headers, ...rows] = data;

        // Filtrar apenas os dados do bairro "Campo dos Aleixos"
        const filteredRows = rows.filter((row) => row[2] === "Campo dos Aleixos");

        // Armazenar os dados filtrados no estado
        setDados({ headers, rows: filteredRows });
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchDadosPlanilha();
  }, []);

  if (!dados.headers) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h2>Dados Filtrados por Bairro</h2>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            {dados.headers.map((header, index) => (
              <th key={index} style={{ padding: "8px", textAlign: "center" }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={{ padding: "8px", textAlign: "center" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DadosPlanilha;
