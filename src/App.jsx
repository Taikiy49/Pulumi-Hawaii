import React, { useMemo, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { COPY } from "./content/copy";

export default function App() {
  const [lang, setLang] = useState("en");
  const t = useMemo(() => (lang === "ja" ? COPY.ja : COPY.en), [lang]);

  return (
    <div className="app">
      <div className="app-bg" aria-hidden="true" />

      <Header lang={lang} setLang={setLang} t={t} />

      {/* Full-width sections with centered content */}
      <Hero t={t} />
      <Services t={t} />
      <Contact t={t} />

      <Footer t={t} />
    </div>
  );
}
