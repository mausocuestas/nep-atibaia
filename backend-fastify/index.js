import fastify from "fastify";
import fetch from "node-fetch";
import serverless from "serverless-http";

const app = fastify({ logger: true });

const API_KEY = process.env.API_KEY;
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

app.get("/api/dados", async (request, reply) => {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/A1:B10?key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }

    const data = await response.json();
    return data.values;
  } catch (error) {
    app.log.error(error);
    return reply.status(500).send({ error: "Erro ao buscar dados da planilha" });
  }
});

// Exportar o handler para a Vercel
export const handler = serverless(app);
