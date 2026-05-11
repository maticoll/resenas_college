import { sql } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre, apellido, nps, q2, q3, q4 } = req.body;

    if (!nombre || !apellido || !nps) {
      return res.status(400).json({ error: 'Faltan campos requeridos.' });
    }

    try {
      await sql`
        INSERT INTO reviews (nombre, apellido, nps, q2, q3, q4)
        VALUES (${nombre}, ${apellido}, ${nps}, ${q2 || null}, ${q3 || null}, ${q4 || null})
      `;
      return res.status(201).json({ ok: true });
    } catch (err) {
      console.error('DB insert error:', err);
      return res.status(500).json({ error: 'Error al guardar la reseña.' });
    }
  }

  if (req.method === 'GET') {
    const adminPassword = req.headers['x-admin-password'];
    if (!adminPassword || adminPassword !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'No autorizado.' });
    }

    try {
      const rows = await sql`
        SELECT * FROM reviews
        ORDER BY created_at DESC
      `;
      return res.status(200).json(rows);
    } catch (err) {
      console.error('DB fetch error:', err);
      return res.status(500).json({ error: 'Error al obtener las reseñas.' });
    }
  }

  return res.status(405).json({ error: 'Método no permitido.' });
}
