import React from "react";
import "./Hero.css";

export default function Hero({ t }) {
  return (
    <section className="section hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <h2 className="hero-title">{t.heroTitle}</h2>
            <p className="hero-body">{t.heroBody}</p>

            <div className="hero-cta">
              <a
                className="btn btn-primary"
                href={`mailto:${t.email}?subject=${encodeURIComponent("Free Estimate Request")}`}
              >
                {t.ctaPrimary}
              </a>
              <a className="btn btn-ghost" href="tel:+18082277729">
                {t.ctaSecondary}
              </a>
            </div>

            <div className="chips">
              {t.chips.map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>
          </div>

          <div className="hero-right">
            {t.heroStats.map((st) => (
              <div key={st.kicker} className="hero-stat card-soft">
                <div className="hero-stat-kicker">{st.kicker}</div>
                <div className="hero-stat-value">{st.value}</div>
                <div className="hero-stat-note">{st.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
