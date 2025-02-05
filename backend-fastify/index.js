import fastify from "fastify";
import fetch from "node-fetch";

const app = fastify({ logger: true });

const PORT = process.env.PORT || 3001;
const API_KEY = "AIzaSyCc777dV0t7hMn7JmlOkvQXLFT-jpdPSaY";
const SPREADSHEET_ID = "2PACX-1vSDQ5e6SsWqfvBSZzlDKTtxXv65rb38YPwl1L8sn5HcsTE2MhPU0mPsTKmQXuDDK43e3L6ZCfbW5uhp";

// Rota para buscar dados da planilha
app.get("/api/dados", async (request, reply) => {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/A1:D10?key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }

    const data = await response.json();
    return data.values; // Retorna apenas os valores da planilha
  } catch (error) {
    app.log.error(error);
    return reply.status(500).send({ error: "Erro ao buscar dados da planilha" });
  }
});

// Iniciar o servidor
const start = async () => {
  try {
    await app.listen({ port: PORT });
    app.log.info(`Servidor rodando em http://localhost:${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
