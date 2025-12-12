import React from "react";
import "./Header.css";

export default function Header({ lang, setLang, t }) {
  const isJa = lang === "ja";

  return (
    <header className="hdr">
      <div className="hdr-top">
        <div className="container hdr-top-inner">
          <div className="hdr-top-left">
            <span className="hdr-pill">Free Estimates</span>
            <span className="hdr-dot">•</span>
            <span className="hdr-miniText">
              Oʻahu • Cleaning & Property Care
            </span>
          </div>

          <div className="hdr-top-right">
            <a className="hdr-link" href="mailto:pulumihawaii@gmail.com">
              Email
            </a>
            <a className="hdr-link" href="tel:+18082277729">
              Call
            </a>
          </div>
        </div>
      </div>

      <div className="hdr-main">
        <div className="container hdr-main-inner">
          <div className="hdr-left">
            <img
              className="hdr-logo"
              src="/pulumi-logo.png"
              alt="Pulumi logo"
            />

            <div className="hdr-text">
              <div className="hdr-row">
                <h1 className="hdr-brand">{t.brand}</h1>
                <LangToggle isJa={isJa} setLang={setLang} />
              </div>

              <div className="hdr-tagline">{t.tagline}</div>

              <div className="hdr-person">
                <span className="hdr-name">{t.name}</span>
                <span className="hdr-personDot">•</span>
                <span className="hdr-role">{t.title}</span>
              </div>
            </div>
          </div>

          <div className="hdr-divider" />
        </div>
      </div>
    </header>
  );
}

function LangToggle({ isJa, setLang }) {
  return (
    <div className="hdr-toggle" role="group" aria-label="Language">
      <span className={`hdr-toggle-label ${!isJa ? "on" : ""}`}>EN</span>
      <label className="hdr-switch">
        <input
          type="checkbox"
          checked={isJa}
          onChange={() => setLang(isJa ? "en" : "ja")}
        />
        <span className="hdr-slider" />
      </label>
      <span className={`hdr-toggle-label ${isJa ? "on" : ""}`}>JP</span>
    </div>
  );
}
