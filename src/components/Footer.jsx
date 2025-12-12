import React from "react";
import "./Footer.css";

export default function Footer({ t }) {
  return (
    <footer className="ftr">
      <div className="container">
        <div className="ftr-inner">
          © {new Date().getFullYear()} Pulumi Hawaii, LLC. {t.footer}
        </div>
      </div>
    </footer>
  );
}
