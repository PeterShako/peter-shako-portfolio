// api/chat.js
export default async function handler(req, res) {
  // 1. CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // 2. Safely parse the body (Vercel occasionally passes this as a string)
    let parsedBody = req.body;
    if (typeof parsedBody === 'string') {
      parsedBody = JSON.parse(parsedBody);
    }
    
    const { messages, system } = parsedBody;

    // 3. Fail fast validations
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error("Vercel environment variable ANTHROPIC_API_KEY is missing.");
    }
    if (!messages || !Array.isArray(messages)) {
      throw new Error("Invalid request: messages array is missing or malformed.");
    }

    // 4. Upstream API Call
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 1024,
        system: system || "You are an AI assistant.",
        messages: messages,
      }),
    });

    const data = await response.json();
    return res.status(response.status).json(data);

  } catch (err) {
    // 5. Wrap the backend crash in the exact envelope the frontend expects
    return res.status(500).json({ 
      type: "error", 
      error: { message: `Backend Crash: ${err.message}` } 
    });
  }
}