export default async function handler(req, res) {
  // 1. Cabeçalhos de liberação total
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 2. Responde rápido ao teste de conexão
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 3. A resposta que a OpenAI exige (JSON-RPC 2.0)
  const mcpData = {
    jsonrpc: "2.0",
    id: 1,
    result: {
      tools: [{
        name: "saudacao_mestra",
        description: "Saudação oficial para a Mestra Day",
        inputSchema: { type: "object", properties: {} }
      }]
    }
  };

  // 4. Envio garantido com cabeçalho de JSON
  return res.status(200).json(mcpData);
}
