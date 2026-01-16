module.exports = (req, res) => {
  // Configurações para a OpenAI conseguir ler o servidor
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Responde rápido se for apenas um teste de conexão
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Entrega as ferramentas que a OpenAI quer escanear
  res.status(200).json({
    mcp_version: "1.0",
    tools: [
      {
        name: "saudacao_mestra",
        description: "Saudação oficial para a Mestra Day",
        input_schema: { type: "object", properties: {} }
      }
    ]
  });
};
