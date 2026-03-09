import Link from "next/link";
import Image from "next/image";
import ScrollObserver from "@/components/ScrollObserver";
export default function AboutPage() {
  return (
    <>
      <ScrollObserver />
      <section className="aboutv2-wrap">
        <aside className="aboutv2-left reveal-on-scroll animate__animated animate__fadeInUp">
          <div className="aboutv2-left-sticky">
            <p className="aboutv2-kicker">O meni</p>
            <h1>
              Veštine
              <br />i alati
            </h1>
            <div className="aboutv2-line" />

            <div className="aboutv2-skill-list">
              <article className="aboutv2-skill-card reveal-on-scroll animate__animated animate__fadeInUp">
                <div className="aboutv2-skill-head">
                  <h3>Frontend</h3>
                  <span>Napredno</span>
                </div>
                <p>
                  <strong>React i Next.js</strong>, fokus na <strong>brz UI</strong>, čistu strukturu i održiv kod.
                </p>
              </article>

              <article className="aboutv2-skill-card reveal-on-scroll animate__animated animate__fadeInUp animate__delay-1s">
                <div className="aboutv2-skill-head">
                  <h3>Mobile</h3>
                  <span>Napredno</span>
                </div>
                <p>
                  <strong>React Native</strong> aplikacije sa jasnim UX tokom i <strong>stabilnim performansama</strong>.
                </p>
              </article>

              <article className="aboutv2-skill-card reveal-on-scroll animate__animated animate__fadeInUp animate__delay-2s">
                <div className="aboutv2-skill-head">
                  <h3>UI/UX i API</h3>
                  <span>Aktivno</span>
                </div>
                <p>
                  <strong>Dizajn interfejsa</strong>, frontend-backend integracija i isporuka funkcionalnih feature-a.
                </p>
              </article>
            </div>
          </div>
        </aside>

        <div className="aboutv2-right">
          <div className="aboutv2-top reveal-on-scroll animate__animated animate__fadeInUp">
            <div className="aboutv2-top-copy">
              <span className="aboutv2-top-kicker">Poslovni fokus</span>
              <h2>
                Fokus mi je <strong>jednostavan</strong>:
              </h2>
              <p className="aboutv2-top-lead">
                sajt ili aplikacija treba da donese <strong>više relevantnih upita</strong>, <strong>bolju prezentaciju
                  ponude</strong> i <strong>stabilnu osnovu za dalje skaliranje</strong>.
              </p>
              <ul className="aboutv2-top-points">
                <li>
                  <strong>Više upita:</strong> jasan tok od prve sekunde do kontakta.
                </li>
                <li>
                  <strong>Jasnija ponuda:</strong> poruka koja brzo objašnjava vrednost.
                </li>
                <li>
                  <strong>Skaliranje:</strong> tehnička osnova spremna za naredne iteracije.
                </li>
              </ul>
              <p className="aboutv2-top-next">Pročitaj ispod kako to konkretno isporučujem.</p>
            </div>
            <div className="aboutv2-image aboutv2-image-top">
              <Image src="/assets/Me.jpg" alt="Dario Buljovčić" width={900} height={900} />
            </div>
          </div>

          <article className="aboutv2-panel reveal-on-scroll animate__animated animate__fadeInUp">
            <h2>Rezultati koje isporučujem</h2>
            <ul className="aboutv2-story-list">
              <li>
                <strong>Jasnija poruka:</strong> CTA tok koji korisnika vodi ka konkretnoj akciji.
              </li>
              <li>
                <strong>Brz frontend:</strong> manje odustajanja i bolje korisničko iskustvo.
              </li>
              <li>
                <strong>Povezan API sloj:</strong> pouzdan rad bez improvizacije u produkciji.
              </li>
              <li>
                <strong>Održiv kod:</strong> lakše izmene bez skupog tehničkog duga.
              </li>
            </ul>
          </article>

          <article className="aboutv2-panel reveal-on-scroll animate__animated animate__fadeInUp">
            <h2>Kako radim na projektu</h2>
            <p>
              Kao <strong>self-taught developer</strong> koji radi na realnim klijentskim zadacima, navikao sam da
              samostalno rešavam probleme i držim fokus na poslovnom cilju. Svaku funkcionalnost planiram kroz
              <strong> vrednost za korisnika</strong> i merljiv efekat za projekat.
            </p>
            <div className="aboutv2-mini-grid">
              <div>
                <h3>Način saradnje</h3>
                <p>
                  <strong>Jasna komunikacija</strong>, kratke iteracije i transparentni prioriteti bez nepotrebnog šuma.
                </p>
              </div>
              <div className="is-accent">
                <h3>Pouzdanost</h3>
                <p>
                  Disciplina kroz redovan trening prelazi u <strong>konzistentnu isporuku</strong> u radu.
                </p>
              </div>
            </div>
          </article>

          <article className="aboutv2-panel reveal-on-scroll animate__animated animate__fadeInUp">
            <h2>Stack koji koristim</h2>
            <p>
              Radim sa tehnologijama koje direktno koristim u klijentskim projektima i koje daju <strong>brz razvoj </strong>
              uz <strong>kvalitetnu osnovu</strong>.
            </p>
            <div className="aboutv2-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Next.js</span>
              <span>React Native</span>
              <span>API integracija</span>
              <span>UI/UX</span>
            </div>
          </article>

          <article className="aboutv2-cta reveal-on-scroll animate__animated animate__zoomIn">
            <p>
              Ako želite web rešenje koje donosi <strong>više upita</strong> i <strong>jasniji prodajni tok</strong>,
              hajde da pričamo.
            </p>
            <div className="hero-btns mt-20">
              <Link href="/kontakt" className="btn-primary">
                Zakaži razgovor
              </Link>
              <Link href="/projekti" className="btn-secondary">
                Pogledaj projekte
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
