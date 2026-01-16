module.exports = async (req, res) => {
  // CORS (no desenvolvimento é ok '*', em produção restrinja)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Helper: garantir que temos um objeto body (fallback se Vercel não parseou)
  let body = req.body;
  if (!body) {
    try {
      const raw = await new Promise((resolve, reject) => {
        let data = '';
        req.on('data', chunk => (data += chunk));
        req.on('end', () => resolve(data));
        req.on('error', reject);
      });
      body = raw ? JSON.parse(raw) : {};
    } catch (err) {
      console.warn('Erro ao parsear body:', err);
      body = {};
    }
  }

  // Log útil para depuração (remova/ajuste em produção)
  console.log('Request:', { method: req.method, url: req.url, body });

  // Recomendação de segurança: verificar assinatura/token do scanner aqui.
  // Exemplo: if (req.headers['x-mcp-secret'] !== process.env.MCP_SECRET) return res.status(401).json({ error: 'unauthorized' });

  if (req.method === 'POST') {
    const { method, id } = body || {};

    if (method === 'tools/list') {
      return res.status(200).json({
        jsonrpc: "2.0",
        id: id === undefined ? null : id,
        result: {
          tools: [{
            name: "saudacao_mestra",
            description: "Saudação oficial para a Mestra Day",
            inputSchema: { type: "object", properties: {} }
          }]
        }
      });
    }

    // Se desejar, responda com erro JSON-RPC para métodos não suportados
    return res.status(400).json({
      jsonrpc: "2.0",
      id: id === undefined ? null : id,
      error: { code: -32601, message: "Method not found" }
    });
  }

  // GET / navegação humana
  return res.status(200).json({ status: "Servidor MCP Ativo", msg: "Aguardando Scan da OpenAI" });
};
