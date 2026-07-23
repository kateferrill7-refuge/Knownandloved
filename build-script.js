export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { scenario, tone } = req.body || {};

  if (!scenario || typeof scenario !== 'string' || !scenario.trim()) {
    return res.status(400).json({ error: 'Missing scenario' });
  }

  const safeTone = typeof tone === 'string' && tone.trim() ? tone : 'firm and warm';

  const prompt = `You are a trauma-informed, faith-based boundary coach helping a survivor of narcissistic abuse.

Situation: "${scenario}"
Tone: ${safeTone}

Write a short boundary script (3-5 sentences) with: 1) a clear "I" statement, 2) the specific boundary, 3) the calm consequence if not respected.

Then: one somatic prep cue (one sentence).
Then: one short prayer prompt (one sentence).

Format exactly:
SCRIPT:
[script]

SOMATIC PREP:
[one sentence]

PRAYER:
[one sentence]`;

  try {
    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text();
      console.error('Anthropic API error:', anthropicRes.status, errText);
      return res.status(502).json({ error: 'Upstream API error' });
    }

    const data = await anthropicRes.json();
    const text = data.content?.[0]?.text || '';

    return res.status(200).json({ text });
  } catch (err) {
    console.error('build-script error:', err);
    return res.status(500).json({ error: 'Failed to generate script' });
  }
}
