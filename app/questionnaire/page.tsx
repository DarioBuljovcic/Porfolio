"use client";

import { useState } from "react";
import { getSupabase } from "@/lib/supabase";

// ─── Section definitions ───────────────────────────────────────────────────────

const SECTIONS: Section[] = [
  {
    id: "biznis",
    number: "01",
    title: ["Vaš", "Biznis"],
    fields: [
      {
        id: "naziv",
        label: "Naziv biznisa",
        type: "text",
        placeholder: "npr. Acme Studio",
        required: true,
      },
      {
        id: "opis",
        label: "Čime se bavite?",
        hint: "jednom rečenicom",
        type: "text",
        placeholder: "npr. Prodajemo ručno rađene keramičke šolje online",
      },
      {
        id: "ciljnaPublika",
        label: "Ko je vaša ciljna grupa?",
        type: "text",
        placeholder: "npr. Mladi profesionalci, 25–35, zainteresovani za dizajn",
      },
    ],
  },
  {
    id: "ciljevi",
    number: "02",
    title: ["Ciljevi"],
    fields: [
      {
        id: "svrha",
        label: "Glavna svrha sajta",
        type: "chips",
        required: true,
        options: [
          "Prodaja proizvoda",
          "Generisanje upita",
          "Portfolio / prezentacija",
          "Rezervacije / termini",
          "Informisanje / edukacija",
          "Zajednica / članstvo",
        ],
      },
      {
        id: "akcija",
        label: "Šta se traži od posetioca?",
        hint: "glavni poziv na akciju",
        type: "text",
        placeholder: "npr. Zakažite poziv, Kupite odmah, Prijavite se",
        required: true,
      },
    ],
  },
  {
    id: "sadrzaj",
    number: "03",
    title: ["Sadržaj", "& Stranice"],
    fields: [
      {
        id: "stranice",
        label: "Koje stranice su vam potrebne?",
        type: "chips",
        required: true,
        options: [
          "Početna",
          "O nama",
          "Usluge",
          "Portfolio",
          "Blog",
          "Cenovnik",
          "Prodavnica",
          "Kontakt",
          "FAQ",
        ],
      },
      {
        id: "sadrzajSpreman",
        label: "Da li imate postojeći sadržaj?",
        hint: "tekst, slike, logo",
        type: "select",
        options: [
          "Da, sve je spremno",
          "Delimično — neke stvari nedostaju",
          "Ne, trebam pomoć pri kreiranju",
        ],
      },
      {
        id: "jezici",
        label: "Da li su potrebni višejezični sadržaji?",
        type: "text",
        placeholder: "npr. Samo srpski, ili srpski + engleski",
      },
    ],
  },
  {
    id: "dizajn",
    number: "04",
    title: ["Dizajn"],
    fields: [
      {
        id: "izgled",
        label: "Opišite željeni izgled i stil",
        type: "textarea",
        placeholder:
          "npr. Čisto, minimalno, moderno. Nije preterano kičasto. Profesionalno ali pristupačno.",
      },
      {
        id: "brandSmjernice",
        label: "Da li imate brand stil?",
        hint: "boje, fontovi",
        type: "select",
        options: [
          "Da, kompletan brand priručnik",
          "Da, delimičan (samo boje/logo)",
          "Ne, treba ih kreirati",
        ],
      },
      {
        id: "reference",
        label: "Referentni sajtovi koji vam se sviđaju",
        hint: "i zašto",
        type: "textarea",
        placeholder: "npr. stripe.com — sviđa mi se čist raspored i tipografija",
      },
    ],
  },
  {
    id: "tehnicko",
    number: "05",
    title: ["Tehničko"],
    fields: [
      {
        id: "domen",
        label: "Da li imate domensko ime?",
        type: "select",
        options: [
          "Da, već je registrovano",
          "Ne, treba ga kupiti",
          "Nisam siguran/na",
        ],
      },
      {
        id: "integracije",
        label: "Da li su vam potrebne integracije?",
        type: "chips",
        options: [
          "Plaćanje (Stripe i sl.)",
          "Email marketing",
          "Sistem rezervacija",
          "CRM",
          "Analitika",
          "Live chat",
          "Društvene mreže",
        ],
      },
      {
        id: "cms",
        label: "Da li ćete sami upravljati sajtom nakon lansiranja?",
        type: "select",
        options: [
          "Da, trebam CMS koji mogu uređivati",
          "Delimično — samo ću ažurirati sadržaj",
          "Ne, vi ćete ga održavati",
        ],
      },
    ],
  },
  {
    id: "rokovi",
    number: "06",
    title: ["Rokovi &", "Budžet"],
    fields: [
      {
        id: "rok",
        label: "Rok za lansiranje",
        type: "text",
        placeholder: "npr. Kraj aprila",
      },
      {
        id: "budzet",
        label: "Raspon budžeta",
        type: "select",
        options: ["Ispod €500", "€500 – €1000", "€1000+", "Fleksibilno / TBD"],
      },
      {
        id: "napomene",
        label: "Ima li nešto drugo što trebamo znati?",
        type: "textarea",
        placeholder: "Posebni zahtevi, ograničenja, zabrinutosti...",
      },
    ],
  },
];

// ─── Types ─────────────────────────────────────────────────────────────────────

type FormData = Record<string, Record<string, string | string[]>>;
type FieldErrors = Record<string, string>;

type FieldType = "text" | "textarea" | "select" | "chips";

interface FieldDef {
  id: string;
  label: string;
  hint?: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

interface Section {
  id: string;
  number: string;
  title: string[];
  fields: FieldDef[];
}

// ─── Validation ────────────────────────────────────────────────────────────────

function validateSection(
  sectionId: string,
  fields: FieldDef[],
  formData: FormData
): FieldErrors {
  const errors: FieldErrors = {};
  const sectionData = formData[sectionId] || {};

  for (const field of fields) {
    if (!field.required) continue;

    const value = sectionData[field.id];

    if (field.type === "chips") {
      if (!value || (value as string[]).length === 0) {
        errors[field.id] = "Izaberite najmanje jednu opciju.";
      }
    } else {
      if (!value || (value as string).trim() === "") {
        errors[field.id] = "Ovo polje je obavezno.";
      }
    }
  }

  return errors;
}

// ─── ChipGroup ─────────────────────────────────────────────────────────────────

function ChipGroup({
  options,
  selected,
  onChange,
  error,
}: {
  options: string[];
  selected: string[];
  onChange: (val: string[]) => void;
  error?: string;
}) {
  const toggle = (opt: string) => {
    if (selected.includes(opt)) onChange(selected.filter((s) => s !== opt));
    else onChange([...selected, opt]);
  };

  return (
    <div>
      <div className="upitnik-chips">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={`upitnik-chip${selected.includes(opt) ? " active" : ""}${error ? " error-border" : ""}`}
          >
            {opt}
          </button>
        ))}
      </div>
      {error && <p className="upitnik-field-error">{error}</p>}
    </div>
  );
}

// ─── Field ──────────────────────────────────────────────────────────────────────

function Field({
  field,
  value,
  onChange,
  error,
}: {
  field: FieldDef;
  value: string | string[] | undefined;
  onChange: (val: string | string[]) => void;
  error?: string;
}) {
  if (field.type === "chips") {
    return (
      <ChipGroup
        options={field.options!}
        selected={(value as string[]) || []}
        onChange={onChange}
        error={error}
      />
    );
  }

  if (field.type === "textarea") {
    return (
      <div>
        <textarea
          className={`upitnik-textarea${error ? " input-error" : ""}`}
          value={(value as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
        />
        {error && <p className="upitnik-field-error">{error}</p>}
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <div>
        <select
          className={`upitnik-select${error ? " input-error" : ""}`}
          value={(value as string) || ""}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Izaberite...</option>
          {field.options!.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {error && <p className="upitnik-field-error">{error}</p>}
      </div>
    );
  }

  return (
    <div>
      <input
        type={field.type}
        className={`upitnik-input${error ? " input-error" : ""}`}
        value={(value as string) || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
      />
      {error && <p className="upitnik-field-error">{error}</p>}
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────────

export default function UpitnikPage() {
  const [formData, setFormData] = useState<FormData>({});
  const [activeSection, setActiveSection] = useState(0);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const update = (sectionId: string, fieldId: string, val: string | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [sectionId]: { ...(prev[sectionId] || {}), [fieldId]: val },
    }));
    // clear error for this field as user types
    if (fieldErrors[fieldId]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[fieldId];
        return next;
      });
    }
  };

  const handleNext = () => {
    const section = SECTIONS[activeSection];
    const errors = validateSection(section.id, section.fields, formData);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setActiveSection((p) => Math.min(SECTIONS.length - 1, p + 1));
  };

  const handleBack = () => {
    setFieldErrors({});
    setActiveSection((p) => Math.max(0, p - 1));
  };

  const handleSubmit = async () => {
    const section = SECTIONS[activeSection];
    const errors = validateSection(section.id, section.fields, formData);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setSaving(true);
    setSaveError(null);

    const { error } = await getSupabase()
      .from("submissions")
      .insert([{ odgovori: formData }]);

    setSaving(false);

    if (error) {
      setSaveError("Došlo je do greške pri slanju. Pokušajte ponovo.");
      console.error("Supabase error:", JSON.stringify(error, null, 2));
      console.error("Message:", error.message);
      console.error("Code:", error.code);
      console.error("Details:", error.details);
      console.error("Hint:", error.hint);
    } else {
      setSubmitted(true);
    }
  };

  // ── Success ───────────────────────────────────────────────────────────────

  if (submitted) {
    return (
      <div className="upitnik-success">
        <div className="upitnik-success-inner">
          <div className="upitnik-success-icon">✓</div>
          <h2>Gotovo!</h2>
          <p>
            Vaši odgovori su uspešno poslati. Pregledaćemo sve i javiti vam se
            u roku od <strong>48 sati</strong>.
          </p>
          <button
            className="btn-primary"
            onClick={() => {
              setSubmitted(false);
              setActiveSection(0);
              setFormData({});
              setFieldErrors({});
            }}
          >
            Počni ispočetka
          </button>
        </div>
      </div>
    );
  }

  // ── Form ──────────────────────────────────────────────────────────────────

  const section = SECTIONS[activeSection];
  const isLast = activeSection === SECTIONS.length - 1;

  return (
    <div className="upitnik-page">
      {/* Sticky topbar */}
      <div className="upitnik-topbar">
        <div className="upitnik-topbar-inner">
          <div className="upitnik-topbar-meta">
            <span className="upitnik-topbar-label">Upitnik za sajt</span>
            <span className="upitnik-topbar-sep">·</span>
            <span className="upitnik-topbar-step">
              {activeSection + 1} od {SECTIONS.length}
            </span>
          </div>

          <div className="upitnik-dots">
            {SECTIONS.map((s, i) => {
              let cls = "upitnik-dot";
              if (i < activeSection) cls += " done";
              else if (i === activeSection) cls += " active";
              return (
                <div
                  key={s.id}
                  className={cls}
                  onClick={() => i < activeSection && setActiveSection(i)}
                  role={i < activeSection ? "button" : undefined}
                  title={i < activeSection ? s.number : undefined}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="upitnik-content">
        <div className="upitnik-section-header">
          <div className="upitnik-number">{section.number}</div>
          <h1 className="upitnik-title">
            {section.title.map((word, i) => (
              <span key={i} style={i % 2 === 1 ? { color: "var(--accent)" } : undefined}>
                {i > 0 ? " " : ""}
                {word}
              </span>
            ))}
          </h1>
        </div>

        <div className="upitnik-fields">
          {section.fields.map((field) => (
            <div key={field.id} className="upitnik-field">
              <label className="upitnik-label" htmlFor={field.id}>
                {field.label}
                {field.required && <span className="upitnik-required">*</span>}
                {field.hint && (
                  <span className="upitnik-hint">— {field.hint}</span>
                )}
              </label>
              <Field
                field={field}
                value={formData[section.id]?.[field.id]}
                onChange={(val) => update(section.id, field.id, val)}
                error={fieldErrors[field.id]}
              />
            </div>
          ))}
        </div>

        {saveError && <div className="upitnik-error-msg">{saveError}</div>}

        <div className="upitnik-nav">
          <button
            className="upitnik-btn-back"
            onClick={handleBack}
            disabled={activeSection === 0}
          >
            ← Nazad
          </button>

          {isLast ? (
            <button
              className="upitnik-btn-submit"
              onClick={handleSubmit}
              disabled={saving}
            >
              {saving ? "Šaljem..." : "Pošalji upitnik →"}
            </button>
          ) : (
            <button className="upitnik-btn-next" onClick={handleNext}>
              Nastavi →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}