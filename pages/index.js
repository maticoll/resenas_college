import { useState, useRef } from 'react';
import Head from 'next/head';

const GOOGLE_REVIEW_URL = 'https://g.page/r/CfX74HNdQwv6EBM/review';

function CollegeLogo() {
  return (
    <svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><style>{`.st0{fill:#fff;fill-rule:evenodd;}`}</style></defs>
      <path className="st0" d="M819.42,499.09v32.7h42.79c-6.1,16.08-19.75,24.06-40.95,24.06-15.27,0-27.46-4.37-36.63-13.06-9.17-8.74-13.76-20.02-13.76-33.88s4.48-26.28,13.43-35.5c8.9-9.23,20.18-13.87,33.72-13.87,8.74,0,16.56,1.83,23.47,5.45,6.96,3.56,12.19,8.2,15.7,13.87l31.13-18.34c-6.91-11.17-16.51-20.12-28.97-26.92-12.41-6.74-26.11-10.14-41.06-10.14-23.52,0-43.27,8.2-59.3,24.66-16.02,16.46-23.96,36.47-23.96,60.21s8.04,43.54,24.23,59.57c16.13,16.08,36.64,24.12,61.51,24.12,22.88,0,41.76-7.18,56.65-21.53,14.89-14.3,22.34-33.51,22.34-57.57v-13.81h-80.34Z" />
      <polygon className="st0" points="647.86 527.57 713.96 527.57 713.96 493.15 647.86 493.15 647.92 462.99 719.73 462.99 719.73 426.84 612.04 426.84 612.04 588.54 719.87 588.54 719.87 552.39 647.92 552.39 647.86 527.57" />
      <polygon className="st0" points="438.31 426.84 402.43 426.84 402.43 588.54 492.48 588.54 492.48 552.39 438.31 552.39 438.31 426.84" />
      <polygon className="st0" points="543.2 426.84 507.32 426.84 507.32 588.54 597.37 588.54 597.37 552.39 543.2 552.39 543.2 426.84" />
      <polygon className="st0" points="950.25 527.57 1016.34 527.57 1016.34 493.15 950.25 493.15 950.3 462.99 1022.12 462.99 1022.12 426.84 914.42 426.84 914.42 588.54 1022.25 588.54 1022.25 552.39 950.3 552.39 950.25 527.57" />
      <path className="st0" d="M220.54,475.5c-12.39,18.21-23.22,37.49-36.39,51.78-1.84,2-3.81,4.5-6.17,7.03-3.24,3.47-7.08,7.52-13.86,11.02-6.55,3.38-14,5.13-22.04,5.13-4.21,0-8.15-.51-12.73-1.56-1.2-.28-4.71-1.55-4.71-1.55-16.26-7-28.16-22.74-28.16-41.16,0-25.01,21.91-45.47,46.91-45.47,12.94,0,24.59,5.43,32.84,14.13.36.37.75.79,1.17,1.27,6.1,7.02,9.93,12.27,12.23,15.75l22.84-34.06c-7.68-11.22-17.98-20.17-30.18-26.91-12.19-6.69-26.05-9.81-40.4-9.81-22.59,0-43.81,8.69-59.35,24.77-15.54,16.13-24.79,36.1-24.79,60s9.25,44.03,24.79,60.16c15.54,16.13,37.53,24.19,58.99,24.66,14.51.32,28.64-3.24,40.89-9.93,9.76-5.4,19.5-10.5,36.41-35.87l.45-.65c.86-1.18,1.43-1.86,2.28-3.05,1.09-1.48,2.18-3.08,3.45-4.9l4.25-6.44c10.67-16.23,17.02-25.23,32.1-45.91,0,0,9.28-12.22,20.04-17.51,6.62-3.25,14-5.13,22.04-5.13,4.21,0,8.15.51,12.73,1.56,1.2.28,4.71,1.55,4.71,1.55,16.26,7,28.16,22.74,28.16,41.16,0,25.01-21.91,45.47-46.91,45.47-19.41,0-35.32-12.32-43.13-28.89-3.79-8.03-6-17.34-6-17.34l-26.04,38.13c1.83,4.49,3.92,8.06,6.11,10.99l-.02.03c7.68,11.22,17.98,20.17,30.18,26.91,12.19,6.69,26.05,9.81,40.4,9.81,22.59,0,43.81-8.69,59.35-24.77,15.54-16.13,24.79-36.1,24.79-60s-9.25-44.03-24.79-60.16c-10.38-10.77-23.63-17.94-37.68-21.65-4.14-1.3-8.52-2.22-13.21-2.71-2.7-.28-7.32-.39-10.27-.3-13.75.06-27.08,3.59-38.72,9.94-9.61,5.31-19.36,10.57-35.79,34.94l-6.77,9.56Z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Home() {
  const [step, setStep] = useState(0);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [nps, setNps] = useState(0);
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  // "step" values:
  // 0 = nombre/apellido
  // 1 = NPS
  // 2 = q2 disfrutaste
  // 3 = q3 mejorarías
  // 4 = q4 comentario libre
  // 'loading' = generando reseña
  // 'positive' = resultado NPS >= 6
  // 'negative' = resultado NPS 1-5

  const stepQuestionRef = useRef(null);

  function goToStep(n) {
    setStep(n);
    setTimeout(() => {
      if (stepQuestionRef.current) {
        stepQuestionRef.current.setAttribute('tabindex', '-1');
        stepQuestionRef.current.focus();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  }

  async function submitForm() {
    setStep('loading');
    setLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (nps >= 6) {
      try {
        const res = await fetch('/api/generate-review', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nombre, apellido, nps, q2, q3, q4 }),
        });
        const data = await res.json();
        setReviewText(data.review || buildFallbackReview());
      } catch {
        setReviewText(buildFallbackReview());
      }
      setLoading(false);
      setStep('positive');
    } else {
      // Guardar en DB (fire and forget, no bloqueamos la UI)
      fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, apellido, nps, q2, q3, q4 }),
      }).catch(() => {});
      setLoading(false);
      setStep('negative');
    }
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  }

  function buildFallbackReview() {
    const intro =
      nps === 10
        ? '¡Tuve una experiencia increíble viajando con College Uruguay!'
        : nps >= 8
        ? 'Tuve una muy buena experiencia con College Uruguay.'
        : 'Buena experiencia con College Uruguay.';
    const body = q2
      ? ' Lo que más disfruté fue ' + q2.toLowerCase() + '.'
      : ' El viaje superó mis expectativas y el equipo fue muy profesional.';
    const closing = nps >= 9 ? ' Lo recomiendo totalmente.' : ' Lo recomiendo.';
    return intro + body + closing;
  }

  function copyReview() {
    navigator.clipboard.writeText(reviewText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  function getProgressSegmentClass(i) {
    if (typeof step !== 'number') return 'progress-segment done';
    if (i < step) return 'progress-segment done';
    if (i === step) return 'progress-segment active';
    return 'progress-segment';
  }

  const showProgress = typeof step === 'number' && step >= 1 && step <= 4;

  return (
    <>
      <Head>
        <title>College Uruguay — Tu opinión</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="card" role="main">
        {/* Header */}
        <div className="card-header">
          <div className="logo-area" aria-label="College Uruguay">
            <CollegeLogo />
          </div>
          <h1>¿Contanos como fue tu experiencia?</h1>
          <p>Solo te lleva 5 minutos y nos ayuda a seguir mejorando ✦</p>
        </div>

        <div className="card-body">
          {/* Progress bar */}
          {showProgress && (
            <div
              className="progress-wrap"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={4}
              aria-valuenow={step}
              aria-label="Progreso del formulario"
            >
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={getProgressSegmentClass(i)} />
              ))}
            </div>
          )}

          {/* STEP 0: Nombre y apellido */}
          <div className={`step${step === 0 ? ' visible' : ''}`} role="group" aria-labelledby="q0-label">
            <div className="step-question" id="q0-label" ref={step === 0 ? stepQuestionRef : null}>
              ¿Cómo te llamás?
            </div>
            <label htmlFor="inputNombre" className="sr-only">Nombre</label>
            <input
              type="text"
              id="inputNombre"
              className="text-input"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              aria-required="true"
              autoComplete="given-name"
            />
            <label htmlFor="inputApellido" className="sr-only">Apellido</label>
            <input
              type="text"
              id="inputApellido"
              className="text-input"
              placeholder="Tu apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              aria-required="true"
              autoComplete="family-name"
            />
            <button
              className="btn btn-primary"
              disabled={!nombre.trim() || !apellido.trim()}
              aria-disabled={!nombre.trim() || !apellido.trim()}
              onClick={() => goToStep(1)}
            >
              Continuar
              <ArrowRight />
            </button>
          </div>

          {/* STEP 1: NPS */}
          <div className={`step${step === 1 ? ' visible' : ''}`} role="group" aria-labelledby="q1-label">
            <div className="step-label">Pregunta 1 de 4</div>
            <div className="step-question" id="q1-label" ref={step === 1 ? stepQuestionRef : null}>
              ¿Como fue tu experiencia viajando con College?
            </div>
            <div className="nps-grid" role="radiogroup" aria-label="Puntuación del 1 al 10">
              {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                <button
                  key={n}
                  className={`nps-btn${nps === n ? ' selected' : ''}`}
                  onClick={() => setNps(n)}
                  aria-label={n === 1 ? '1 — Muy malo' : n === 10 ? '10 — Excelente' : String(n)}
                  role="radio"
                  aria-checked={nps === n}
                >
                  {n}
                </button>
              ))}
            </div>
            <div className="nps-labels" aria-hidden="true">
              <span>Muy malo</span>
              <span>Excelente</span>
            </div>
            <div className="btn-nav-row">
              <button
                className="btn btn-back"
                onClick={() => goToStep(0)}
                aria-label="Volver a la pregunta anterior"
              >
                <ArrowLeft />
              </button>
              <button
                className="btn btn-primary"
                disabled={nps === 0}
                aria-disabled={nps === 0}
                onClick={() => goToStep(2)}
              >
                Continuar
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* STEP 2: ¿Qué disfrutaste? */}
          <div className={`step${step === 2 ? ' visible' : ''}`} role="group" aria-labelledby="q2-label">
            <div className="step-label">Pregunta 2 de 4</div>
            <div className="step-question" id="q2-label" ref={step === 2 ? stepQuestionRef : null}>
              ¿Qué fue lo que más disfrutaste?
            </div>
            <label htmlFor="q2Text" className="sr-only">¿Qué fue lo que más disfrutaste?</label>
            <textarea
              id="q2Text"
              placeholder="Contanos qué momentos o aspectos te gustaron más del viaje..."
              value={q2}
              onChange={(e) => setQ2(e.target.value)}
              aria-required="true"
            />
            <div className="btn-nav-row">
              <button
                className="btn btn-back"
                onClick={() => goToStep(1)}
                aria-label="Volver a la pregunta anterior"
              >
                <ArrowLeft />
              </button>
              <button
                className="btn btn-primary"
                disabled={!q2.trim()}
                aria-disabled={!q2.trim()}
                onClick={() => goToStep(3)}
              >
                Continuar
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* STEP 3: ¿Qué mejorarías? */}
          <div className={`step${step === 3 ? ' visible' : ''}`} role="group" aria-labelledby="q3-label">
            <div className="step-label">Pregunta 3 de 4</div>
            <div className="step-question" id="q3-label" ref={step === 3 ? stepQuestionRef : null}>
              ¿Qué mejorarías?
            </div>
            <label htmlFor="q3Text" className="sr-only">¿Qué mejorarías?</label>
            <textarea
              id="q3Text"
              placeholder="¿Hay algo que podríamos mejorar para la próxima vez?..."
              value={q3}
              onChange={(e) => setQ3(e.target.value)}
              aria-required="true"
            />
            <div className="btn-nav-row">
              <button
                className="btn btn-back"
                onClick={() => goToStep(2)}
                aria-label="Volver a la pregunta anterior"
              >
                <ArrowLeft />
              </button>
              <button
                className="btn btn-primary"
                disabled={!q3.trim()}
                aria-disabled={!q3.trim()}
                onClick={() => goToStep(4)}
              >
                Continuar
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* STEP 4: Texto libre */}
          <div className={`step${step === 4 ? ' visible' : ''}`} role="group" aria-labelledby="q4-label">
            <div className="step-label">Para terminar</div>
            <div className="step-question" id="q4-label" ref={step === 4 ? stepQuestionRef : null}>
              Contanos lo que quieras sobre tu experiencia
            </div>
            <label htmlFor="feedbackText" className="sr-only">Tu comentario</label>
            <textarea
              id="feedbackText"
              placeholder="Escribí acá todo lo que quieras compartir con nosotros..."
              value={q4}
              onChange={(e) => setQ4(e.target.value)}
              aria-describedby="feedbackHint"
            />
            <div id="feedbackHint" className="hint-text">Opcional — podés dejarlo en blanco.</div>
            <div className="btn-nav-row">
              <button
                className="btn btn-back"
                onClick={() => goToStep(3)}
                aria-label="Volver a la pregunta anterior"
              >
                <ArrowLeft />
              </button>
              <button className="btn btn-primary" onClick={submitForm}>
                Enviar respuestas
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* LOADING */}
          <div className={`step${step === 'loading' ? ' visible' : ''}`}>
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div className="spinner" aria-hidden="true" />
              <p style={{ marginTop: 20, fontSize: 16, fontWeight: 700, color: 'var(--c-text-sub)' }}>
                Generando tu reseña...
              </p>
              <p style={{ fontSize: 13, color: 'var(--c-text-muted)', marginTop: 6 }}>
                Esto solo tarda unos segundos
              </p>
            </div>
          </div>

          {/* RESULTADO POSITIVO */}
          <div
            className={`step${step === 'positive' ? ' visible' : ''}`}
            tabIndex={step === 'positive' ? -1 : undefined}
          >
            <div className="result-icon positive" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className="stars" role="img" aria-label="5 estrellas">
              {[1,2,3,4,5].map((i) => <StarIcon key={i} />)}
            </div>
            <div className="result-title">¡Gracias por compartirlo!</div>
            <div className="result-sub">
              Tu experiencia puede ayudar a otras personas a elegir su próximo viaje.<br />
              <strong>Copiá tu reseña</strong> y publicala en Google con un clic.
            </div>
            <div className="review-box" aria-live="polite">
              {reviewText}
            </div>
            <div className={`copied-msg${copied ? ' show' : ''}`} role="status" aria-live="polite">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copiado al portapapeles
            </div>
            <button className="btn btn-copy" onClick={copyReview} aria-label="Copiar reseña al portapapeles">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copiar reseña
            </button>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-google"
              aria-label="Publicar reseña en Google Maps (se abre en una nueva pestaña)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Publicar en Google Maps
            </a>
          </div>

          {/* RESULTADO NEGATIVO */}
          <div
            className={`step${step === 'negative' ? ' visible' : ''}`}
            tabIndex={step === 'negative' ? -1 : undefined}
          >
            <div className="result-icon negative" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="result-title">Gracias por tu sinceridad</div>
            <div className="result-sub">
              Recibimos tu feedback y lo vamos a tener muy en cuenta.<br />
              Nos comprometemos a mejorar para darte una mejor experiencia la próxima vez.
            </div>
            <div className="alert-box" role="note">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>
                Si querés que te contactemos para hablar sobre tu experiencia, respondé a este formulario y te escribimos pronto.
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
