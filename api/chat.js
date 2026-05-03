// api/chat.js - Place this in the root /api folder
export default async function handler(req, res) {
  // Handle CORS preflight
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { messages } = req.body;

  // Validation: Fail fast if request is malformed
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  try {
    // Using the official Anthropic API endpoint
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
        system: PETER_CONTEXT, // Use the full detailed string here
        messages: messages,
        }),
    });

    const data = await response.json();

    // Propagate the actual status from Anthropic to your frontend
    return res.status(response.status).json(data);
  } catch (err) {
    console.error('Function error:', err);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}