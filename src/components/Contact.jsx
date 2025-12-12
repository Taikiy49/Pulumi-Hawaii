import React from "react";
import "./Contact.css";

export default function Contact({ t }) {
  return (
    <section className="section section-tight contact">
      <div className="container">
        <div className="contact-card card">
          <div className="contact-left">
            <h3 className="section-title">{t.contactTitle}</h3>
            <p className="section-subtitle contact-sub">
              {t.group}
            </p>

            <div className="contact-list">
              <a className="contact-row" href={`mailto:${t.email}`}>
                <span className="contact-label">{t.emailLabel}</span>
                <span className="contact-value">{t.email}</span>
              </a>

              <a className="contact-row" href="tel:+18082277729">
                <span className="contact-label">{t.phoneLabel}</span>
                <span className="contact-value">{t.phone}</span>
              </a>

              <div className="contact-row static">
                <span className="contact-label">{t.addressLabel}</span>
                <span className="contact-value">{t.address}</span>
              </div>
            </div>
          </div>

          <div className="contact-right card-soft">
            <div className="contact-priceTitle">{t.priceTitle}</div>
            <div className="contact-priceBody">{t.priceText}</div>

            <div className="contact-actions">
              <a
                className="btn btn-primary"
                href={`mailto:${t.email}?subject=${encodeURIComponent(
                  "Free Estimate Request"
                )}`}
              >
                {t.ctaPrimary}
              </a>
              <a className="btn btn-ghost" href="tel:+18082277729">
                {t.ctaSecondary}
              </a>
            </div>
          </div>
        </div>

        {/* Japanese service block (only show in JP) */}
        {t.jpBlockTitle && (
          <div className="contact-jp card-soft">
            <div className="contact-jp-title">{t.jpBlockTitle}</div>
            <pre className="contact-jp-text">{t.jpBlockBody}</pre>
          </div>
        )}
      </div>
    </section>
  );
}
