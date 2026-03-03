"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import ScrollObserver from "@/components/ScrollObserver";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <ScrollObserver />
      <section className="contactv2-page">
        <div className="container contactv2-shell">
          <aside className="contactv2-left reveal-on-scroll animate__animated animate__fadeInUp">
            <h1>Kontakt</h1>
            <p>
              Ako želite saradnju ili dodatne informacije, javite se direktno.
              <strong> Odgovaram brzo</strong> i predlažem sledeće konkretne korake.
            </p>

            <div className="contactv2-lines">
              <article className="contactv2-line">
                <div className="contactv2-icon">
                  <i className="fas fa-phone-alt" />
                </div>
                <div>
                  <span>Telefon</span>
                  <a href="tel:+381612255625">+381 61 22 55625</a>
                </div>
              </article>

              <article className="contactv2-line">
                <div className="contactv2-icon">
                  <i className="far fa-envelope" />
                </div>
                <div>
                  <span>E-pošta</span>
                  <a href="mailto:buljovcicdario@gmail.com">buljovcicdario@gmail.com</a>
                </div>
              </article>
            </div>
          </aside>

          <div className="contactv2-form-wrap reveal-on-scroll animate__animated animate__fadeInUp">
            {submitted ? <div className="alert alert-success">Hvala vam na poruci. Javljam vam se uskoro.</div> : null}

            <form onSubmit={handleSubmit} className="contactv2-form">
              <div className="form-group">
                <label htmlFor="ime">Ime i prezime</label>
                <input type="text" id="ime" name="ime" placeholder="Vaše ime i prezime" required />
              </div>

              <div className="form-group">
                <label htmlFor="kontakt">Kontakt podatak</label>
                <input type="text" id="kontakt" name="kontakt" placeholder="Email adresa ili broj telefona" required />
              </div>

              <div className="form-group">
                <label htmlFor="poruka">Vaša poruka</label>
                <textarea id="poruka" name="poruka" placeholder="Ukratko opišite projekat ili pitanje." required />
              </div>

              <button type="submit" className="contactv2-submit">
                Pošalji upit <i className="far fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
