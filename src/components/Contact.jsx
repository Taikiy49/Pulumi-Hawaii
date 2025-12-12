import React from "react";
import "./Contact.css";

export default function Contact({ t }) {
  return (
    <section className="section contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-card card">
            <h3 className="section-title">{t.contactTitle}</h3>
            <p className="section-subtitle">{t.priceText}</p>

            <div className="contact-list">
              <a className="contact-row" href={`mailto:${t.email}`}>
                <div className="contact-label">{t.emailLabel}</div>
                <div className="contact-value">{t.email}</div>
              </a>

              <a className="contact-row" href="tel:+18082277729">
                <div className="contact-label">{t.phoneLabel}</div>
                <div className="contact-value">{t.phone}</div>
              </a>

              <div className="contact-row contact-rowStatic">
                <div className="contact-label">{t.addressLabel}</div>
                <div className="contact-value">{t.address}</div>
              </div>
            </div>
          </div>

          <div className="contact-side card-soft">
            <div className="contact-sideTitle">{t.priceTitle}</div>
            <div className="contact-sideBody">{t.priceText}</div>

            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${t.email}`}>
                {t.ctaPrimary}
              </a>
              <a className="btn btn-ghost" href="tel:+18082277729">
                {t.ctaSecondary}
              </a>
            </div>

            <div className="contact-group">{t.group}</div>
          </div>
        </div>

        <div className="contact-jp card">
          <h4 className="contact-jp-title">{t.jpTitle}</h4>
          <pre className="contact-jp-text">{t.jpBody}</pre>
        </div>
      </div>
    </section>
  );
}
