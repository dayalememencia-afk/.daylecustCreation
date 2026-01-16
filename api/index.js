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
