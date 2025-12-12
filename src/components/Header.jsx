import React from "react";
import "./Header.css";

export default function Header({ lang, setLang, t }) {
  const isJa = lang === "ja";

  return (
    <header className="hdr">
      <div className="hdr-glass">
        <div className="container">
          <div className="hdr-row">
            <div className="hdr-left">
              <img className="hdr-logo" src="/pulumi-logo.png" alt="Pulumi logo" />
              <div className="hdr-text">
                <div className="hdr-top">
                  <h1 className="hdr-brand">{t.brand}</h1>
                  <LangToggle isJa={isJa} setLang={setLang} />
                </div>
                <div className="hdr-tagline">{t.tagline}</div>
                <div className="hdr-meta">
                  <span className="hdr-name">{t.name}</span>
                  <span className="hdr-dot">•</span>
                  <span>{t.title}</span>
                </div>
              </div>
            </div>

            <div className="hdr-actions">
              <a className="hdr-action hdr-actionPrimary" href={`mailto:${t.email}`}>
                Email
              </a>
              <a className="hdr-action" href="tel:+18082277729">
                Call
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hdr-strip">
        <div className="container">
          <div className="hdr-stripRow">
            <span className="hdr-pill">{isJa ? "見積無料" : "Free Estimates"}</span>
            <span className="hdr-stripText">
              {isJa ? "オアフ • 清掃・点検・物件ケア" : "Oʻahu • Cleaning • Inspection • Property Care"}
            </span>
            <span className="hdr-stripRight">
              {isJa ? "丁寧・確実" : "Trusted & Detailed"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function LangToggle({ isJa, setLang }) {
  return (
    <div className="hdr-toggle" role="group" aria-label="Language">
      <span className={`hdr-toggleLabel ${!isJa ? "on" : ""}`}>EN</span>
      <label className="hdr-switch" title="Toggle language">
        <input
          type="checkbox"
          checked={isJa}
          onChange={() => setLang(isJa ? "en" : "ja")}
          aria-label="Toggle English/Japanese"
        />
        <span className="hdr-slider" />
      </label>
      <span className={`hdr-toggleLabel ${isJa ? "on" : ""}`}>JP</span>
    </div>
  );
}
