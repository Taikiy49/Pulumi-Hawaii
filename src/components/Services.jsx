import React from "react";
import "./Services.css";

export default function Services({ t }) {
  return (
    <section className="section services">
      <div className="container">
        <h3 className="section-title">{t.servicesTitle}</h3>
        <p className="section-subtitle">{t.servicesSubtitle}</p>

        <div className="services-grid">
          {t.services.map((s) => (
            <div key={s.title} className="services-card card">
              <div className="services-top">
                <div className="services-icon">{s.icon}</div>
                <div className="services-title">{s.title}</div>
              </div>
              <div className="services-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
