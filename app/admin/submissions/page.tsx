"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";
import "./submissions.css";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface Submission {
  id: string;
  created_at: string;
  odgovori: Record<string, Record<string, string | string[]>>;
}

// ─── Label maps ────────────────────────────────────────────────────────────────

const SECTION_LABELS: Record<string, string> = {
  biznis: "Biznis",
  ciljevi: "Ciljevi",
  sadrzaj: "Sadržaj & Stranice",
  dizajn: "Dizajn",
  tehnicko: "Tehničko",
  rokovi: "Rokovi & Budžet",
};

const FIELD_LABELS: Record<string, string> = {
  naziv: "Naziv biznisa",
  opis: "Čime se bave",
  ciljnaPublika: "Ciljna grupa",
  svrha: "Svrha sajta",
  akcija: "Poziv na akciju",
  stranice: "Stranice",
  sadrzajSpreman: "Postojeći sadržaj",
  jezici: "Jezici",
  izgled: "Izgled i stil",
  brandSmjernice: "Brand stil",
  reference: "Referentni sajtovi",
  domen: "Domensko ime",
  integracije: "Integracije",
  cms: "Upravljanje sajtom",
  rok: "Rok lansiranja",
  budzet: "Budžet",
  napomene: "Napomene",
};

// ─── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("sr-RS", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getTitle(submission: Submission): string {
  return (submission.odgovori?.biznis?.naziv as string) || "Bez naziva";
}

function getBudget(submission: Submission): string {
  return (submission.odgovori?.rokovi?.budzet as string) || "—";
}

// ─── SubmissionRow ─────────────────────────────────────────────────────────────

function SubmissionRow({ submission }: { submission: Submission }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sub-row">
      <button className="sub-row-header" onClick={() => setOpen((p) => !p)}>
        <div className="sub-row-left">
          <span className="sub-row-title">{getTitle(submission)}</span>
          <span className="sub-row-budget">{getBudget(submission)}</span>
        </div>
        <div className="sub-row-right">
          <span className="sub-row-date">{formatDate(submission.created_at)}</span>
          <span className="sub-row-chevron">{open ? "↑" : "↓"}</span>
        </div>
      </button>

      {open && (
        <div className="sub-row-body">
          {Object.entries(submission.odgovori).map(([sectionId, fields]) => (
            <div key={sectionId} className="sub-section">
              <div className="sub-section-label">
                {SECTION_LABELS[sectionId] ?? sectionId}
              </div>
              <div className="sub-fields">
                {Object.entries(fields).map(([fieldId, value]) => {
                  if (!value || (Array.isArray(value) && value.length === 0)) return null;
                  return (
                    <div key={fieldId} className="sub-field">
                      <span className="sub-field-label">
                        {FIELD_LABELS[fieldId] ?? fieldId}
                      </span>
                      <span className="sub-field-value">
                        {Array.isArray(value) ? value.join(", ") : value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────────

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const { data, error } = await getSupabase()
        .from("submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setError("Greška pri učitavanju: " + error.message);
      } else {
        setSubmissions(data as Submission[]);
      }
      setLoading(false);
    }

    load();
  }, []);

  return (
    <div className="subs-page">
      <div className="subs-header">
        <div>
          <h1 className="subs-title">Upitnici</h1>
          {!loading && !error && (
            <p className="subs-count">
              {submissions.length} {submissions.length === 1 ? "odgovor" : "odgovora"}
            </p>
          )}
        </div>
      </div>

      <div className="subs-list">
        {loading && <p className="subs-state">Učitavam...</p>}
        {error && <p className="subs-state subs-error">{error}</p>}
        {!loading && !error && submissions.length === 0 && (
          <p className="subs-state">Nema još uvek odgovora.</p>
        )}
        {submissions.map((s) => (
          <SubmissionRow key={s.id} submission={s} />
        ))}
      </div>
    </div>
  );
}
