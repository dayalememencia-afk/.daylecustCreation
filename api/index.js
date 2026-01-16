module.exports = async (req, res) => {
  // Libera o acesso para a OpenAI
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Responde rápido se for apenas um teste
  if (req.method === 'OPTIONS') return res.status(200).end();

  // Resposta oficial do protocolo MCP que a OpenAI exige
  const mcpResponse = {
    jsonrpc: "2.0",
    id: req.body?.id || 1,
    result: {
      tools: [
        {
          name: "saudacao_mestra",
          description: "Saudação especial para a Mestra Day",
          inputSchema: { type: "object", properties: {} }
        }
      ]
    }
  };

  return res.status(200).json(mcpResponse);
};
