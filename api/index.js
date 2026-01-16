export default async function handler(req, res) {
  // Responde ao scan da OpenAI dizendo quais ferramentas você tem
  res.status(200).json({
    mcp_version: "1.0",
    tools: [
      {
        name: "saudacao_mestra",
        description: "Uma saudação especial para a Mestra Day",
        input_schema: { type: "object", properties: {} }
      }
    ]
  });
}
export default async function handler(req, res) {
  // Permite que a OpenAI acesse o servidor de qualquer lugar
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Resposta padrão que a OpenAI exige para o Scan
  const response = {
    mcp_version: "1.0",
    tools: [
      {
        name: "saudacao_mestra",
        description: "Saudação oficial para a Mestra Day",
        input_schema: { type: "object", properties: {} }
      }
    ]
  };

  return res.status(200).json(response);
    }
