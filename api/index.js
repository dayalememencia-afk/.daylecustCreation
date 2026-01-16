module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  // Se a OpenAI enviar um comando (POST), respondemos a varredura
  if (req.method === 'POST') {
    const { method } = req.body || {};
    
    if (method === 'tools/list') {
      return res.status(200).json({
        jsonrpc: "2.0",
        id: req.body.id || 1,
        result: {
          tools: [{
            name: "saudacao_mestra",
            description: "Saudação oficial para a Mestra Day",
            inputSchema: { type: "object", properties: {} }
          }]
        }
      });
    }
  }

  // Resposta para quando você visita o link no navegador
  return res.status(200).json({ status: "Servidor MCP Ativo", msg: "Aguardando Scan da OpenAI" });
};
