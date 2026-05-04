// api/chat.js
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    let parsedBody = req.body;
    if (typeof parsedBody === 'string') {
      parsedBody = JSON.parse(parsedBody);
    }
    
    const { messages, system } = parsedBody;

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Vercel environment variable GEMINI_API_KEY is missing.");
    }
    if (!messages || !Array.isArray(messages)) {
      throw new Error("Invalid request: messages array is missing or malformed.");
    }

    // Convert your frontend message format to Gemini's format
    const contents = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Call the current Gemini 2.5 Flash model
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: system || "You are an AI assistant." }]
        },
        contents: contents,
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Failed to fetch from Gemini API");
    }

    // Format the response so your index.html doesn't need to change
    return res.status(200).json({ 
      content: [{ text: data.candidates[0].content.parts[0].text }] 
    });

  } catch (err) {
    return res.status(500).json({ 
      type: "error", 
      error: { message: `Backend Crash: ${err.message}` } 
    });
  }
}