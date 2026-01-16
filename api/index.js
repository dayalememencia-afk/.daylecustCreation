module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  // A OpenAI envia um comando chamado 'list_tools'. Este código responde a ele:
  res.status(200).json({
    jsonrpc: "2.0",
    id: req.body?.id || 1,
    result: {
      tools: [
        {
          name: "saudacao_mestra",
          description: "Saudação oficial para a Mestra Day",
          inputSchema: { type: "object", properties: {} }
        }
      ]
    }
  });
};
