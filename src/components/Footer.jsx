import React from "react";
import "./Footer.css";

export default function Footer({ t }) {
  return (
    <footer className="ftr">
      <div className="container ftr-inner">
        <span>© {new Date().getFullYear()} Pulumi Hawaii, LLC. {t.footer}</span>
      </div>
    </footer>
  );
}
