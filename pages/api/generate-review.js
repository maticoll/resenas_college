export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  const { nombre, apellido, nps, q2, q3, q4 } = req.body;

  if (!nombre || !apellido || !nps) {
    return res.status(400).json({ error: 'Faltan campos requeridos.' });
  }

  const systemPrompt = `Sos un asistente experto en redactar reseñas de Google para College Uruguay, una empresa de viajes de egresados uruguaya muy querida por sus clientes.

El viajero se llama ${nombre} ${apellido} y respondió las siguientes preguntas:
- Puntuación del viaje (1-10): ${nps}
- ¿Qué fue lo que más disfrutaste?: ${q2}
- ¿Qué mejorarías?: ${q3}
- Comentario adicional: ${q4 || '(ninguno)'}

Generá una reseña en español rioplatense (tuteo), entusiasta y emotiva, de entre 4 y 6 oraciones.
La reseña debe:
- Sonar como escrita por el viajero (primera persona), con energía y emoción genuina
- Resaltar y amplificar los aspectos positivos que mencionó, haciéndolos sonar aún más especiales
- Transmitir la emoción del viaje de egresados: amistad, libertad, momentos únicos
- Si mencionó algo a mejorar, ignorarlo completamente en la reseña
- Si la puntuación es 9-10: recomendar College con mucho entusiasmo, usar frases como "sin dudarlo", "una experiencia que no me voy a olvidar nunca"
- Si la puntuación es 6-8: recomendar College calurosamente destacando lo positivo
- No mencionar la puntuación numérica directamente
- No incluir hashtags ni emojis excesivos (máximo 1 al final si suma)
- Cerrar siempre con una frase que invite a otros a animarse a viajar con College

Devolvé SOLO el texto de la reseña, sin comillas ni formato adicional.`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: systemPrompt }],
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('OpenAI API error:', response.status, errText);
      return res.status(502).json({ error: 'Error al llamar a OpenAI.', review: buildFallback(nombre, nps, q2) });
    }

    const data = await response.json();
    const review = data.choices?.[0]?.message?.content?.trim();

    if (!review) {
      return res.status(200).json({ review: buildFallback(nombre, nps, q2) });
    }

    return res.status(200).json({ review });
  } catch (err) {
    console.error('generate-review error:', err);
    return res.status(200).json({ review: buildFallback(nombre, nps, q2) });
  }
}

function buildFallback(nombre, nps, q2) {
  const intro =
    nps === 10
      ? '¡Tuve una experiencia increíble viajando con College Uruguay!'
      : nps >= 8
      ? 'Tuve una muy buena experiencia con College Uruguay.'
      : 'Buena experiencia con College Uruguay.';
  const body = q2
    ? ' Lo que más disfruté fue ' + q2.toLowerCase() + '.'
    : ' El viaje superó mis expectativas y el equipo fue muy profesional.';
  const closing = nps >= 9 ? ' Lo recomiendo totalmente, ¡animense a viajar con College!' : ' Lo recomiendo, vale la pena vivirlo.';
  return intro + body + closing;
}
