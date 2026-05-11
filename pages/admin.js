import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [fetchError, setFetchError] = useState('');

  // Auto-login si hay sesión guardada
  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('admin_auth') === '1') {
      setAuthed(true);
    }
  }, []);

  useEffect(() => {
    if (authed) {
      loadReviews();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed]);

  async function checkPassword() {
    const res = await fetch('/api/reviews', {
      headers: { 'x-admin-password': password },
    });
    if (res.ok) {
      sessionStorage.setItem('admin_auth', '1');
      setAuthed(true);
      setLoginError('');
    } else {
      setLoginError('Contraseña incorrecta');
      setPassword('');
    }
  }

  function logout() {
    sessionStorage.removeItem('admin_auth');
    setAuthed(false);
    setReviews([]);
    setPassword('');
  }

  async function loadReviews() {
    setLoadingReviews(true);
    setFetchError('');
    try {
      const pwd = typeof window !== 'undefined' ? sessionStorage.getItem('admin_pwd') || '' : '';
      const res = await fetch('/api/reviews', {
        headers: { 'x-admin-password': pwd },
      });
      if (!res.ok) {
        setFetchError('Error al cargar las reseñas. Sesión expirada, por favor volvé a iniciar sesión.');
        return;
      }
      const data = await res.json();
      setReviews(data);
    } catch {
      setFetchError('Error de red al cargar las reseñas.');
    } finally {
      setLoadingReviews(false);
    }
  }

  function handlePasswordSubmit(e) {
    e.preventDefault();
    // Guardar en sessionStorage para usarla en loadReviews
    sessionStorage.setItem('admin_pwd', password);
    checkPassword();
  }

  // Stats
  const total = reviews.length;
  const avgNps = total
    ? (reviews.reduce((s, r) => s + r.nps, 0) / total).toFixed(1)
    : '—';
  const today = reviews.filter((r) => {
    const d = new Date(r.created_at);
    const n = new Date();
    return d.toDateString() === n.toDateString();
  }).length;

  if (!authed) {
    return (
      <>
        <Head>
          <title>Admin — College Uruguay</title>
        </Head>
        <div id="loginGate">
          <div className="login-card">
            <div style={{ fontSize: 36, marginBottom: 12 }}>🔒</div>
            <h1>Panel Admin</h1>
            <p>College Uruguay — Reseñas internas</p>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                className="login-input"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                autoFocus
              />
              {loginError && (
                <div className="login-error">{loginError}</div>
              )}
              <button type="submit" className="btn btn-primary" style={{ marginTop: 0, width: '100%' }}>
                Entrar
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Admin — College Uruguay</title>
      </Head>
      <div style={{ minHeight: '100dvh', width: '100%' }}>
        <div className="topbar">
          <div>
            <div className="topbar-title">Panel de Reseñas</div>
            <div className="topbar-sub">College Uruguay — Solo uso interno</div>
          </div>
          <button className="topbar-logout" onClick={logout}>
            Cerrar sesión
          </button>
        </div>

        <div className="main-content">
          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{total || '—'}</div>
              <div className="stat-label">Reseñas negativas</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{avgNps}</div>
              <div className="stat-label">NPS promedio</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{total ? today : '—'}</div>
              <div className="stat-label">Hoy</div>
            </div>
          </div>

          {/* List header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div className="section-title" style={{ marginBottom: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Feedback negativo (NPS 1–5)
            </div>
            <button className="refresh-btn" onClick={loadReviews}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
              Actualizar
            </button>
          </div>

          {/* Reviews list */}
          <div id="reviewsList">
            {loadingReviews && (
              <div className="state-msg">Cargando...</div>
            )}
            {fetchError && (
              <div className="state-msg" style={{ color: '#ef4444' }}>{fetchError}</div>
            )}
            {!loadingReviews && !fetchError && reviews.length === 0 && (
              <div className="state-msg">No hay reseñas negativas aún.</div>
            )}
            {!loadingReviews && !fetchError && reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ReviewCard({ review: r }) {
  const date = new Date(r.created_at);
  const dateStr = date.toLocaleDateString('es-UY', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  const badgeClass = r.nps <= 3 ? 'nps-badge low' : 'nps-badge mid';

  return (
    <div className="review-card">
      <div className="review-card-header">
        <div>
          <div className="reviewer-name">{r.nombre} {r.apellido}</div>
          <div className="reviewer-date">{dateStr}</div>
        </div>
        <span className={badgeClass}>NPS {r.nps}</span>
      </div>
      <div className="answers-grid">
        <div className="answer-row">
          <div className="answer-label">¿Qué fue lo que más disfrutaste?</div>
          <div className={`answer-text${r.q2 ? '' : ' empty'}`}>
            {r.q2 || 'Sin respuesta'}
          </div>
        </div>
        <div className="answer-row">
          <div className="answer-label">¿Qué mejorarías?</div>
          <div className={`answer-text${r.q3 ? '' : ' empty'}`}>
            {r.q3 || 'Sin respuesta'}
          </div>
        </div>
        {r.q4 && (
          <div className="answer-row">
            <div className="answer-label">Comentario adicional</div>
            <div className="answer-text">{r.q4}</div>
          </div>
        )}
      </div>
    </div>
  );
}
