export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    return res.status(500).json({ error: 'SLACK_WEBHOOK_URL não configurada na Vercel.' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const { title, date, time, note } = body;
  const text = [
    '📌 *Teste de lembrete do app*',
    `*Título:* ${title || 'Sem título'}`,
    date && time ? `*Quando:* ${date} ${time}` : null,
    note ? `*Observação:* ${note}` : null
  ].filter(Boolean).join('\n');

  try {
    const slackResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    const responseText = await slackResponse.text();

    if (!slackResponse.ok) {
      return res.status(500).json({ error: `Falha no Slack: ${responseText}` });
    }

    return res.status(200).json({ ok: true, responseText });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Erro inesperado ao chamar Slack.' });
  }
}
