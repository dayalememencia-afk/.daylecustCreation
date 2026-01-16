module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  // A OpenAI envia comandos via POST. Este bloco responde aos dois comandos obrigatórios:
  if (req.method === 'POST') {
    const { method } = req.body;

    // 1. Comando de Varredura (Scan)
    if (method === 'tools/list') {
      return res.status(200).json({
        jsonrpc: "2.0",
        id: req.body.id,
        result: {
          tools: [{
            name: "saudacao_mestra",
            description: "Saudação oficial para a Mestra Day",
            inputSchema: { type: "object", properties: {} }
          }]
        }
      });
    }

    // 2. Comando de Execução
    if (method === 'tools/call') {
      return res.status(200).json({
        jsonrpc: "2.0",
        id: req.body.id,
        result: { content: [{ type: "text", text: "Olá Mestra Day! O seu servidor MCP está online e funcionando perfeitamente." }] }
      });
    }
  }

  // Resposta padrão para o navegador (o que você vê no print 1000030963)
  return res.status(200).json({ status: "Servidor MCP Ativo", use: "OpenAI Scan" });
};
