export type ProjectCase = {
  slug: string;
  title: string;
  shortDescription: string;
  listDescription: string;
  highlights: string[];
  iconClass: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string | null;
  githubNote?: string;
  problem: string;
  role: string;
  decisions: string[];
  outcomes: string[];
  stack: string[];
};

export const projects: ProjectCase[] = [
  {
    slug: "arhangelapp",
    title: "Arhangelapp.com",
    shortDescription: "Landing stranica za mobilnu aplikaciju sa glavnim ciljem da prikupi **sredstva za razvoj proizvoda**.",
    listDescription:
      "Landing stranica koja komunicira vrednost aplikacije i usmerava posetioce ka podršci razvoja projekta.",
    highlights: ["Jedini developer", "Design + razvoj", "Next.js + Tailwind", "Deploy na Vercel"],
    iconClass: "fas fa-cross",
    tags: ["Mobilna App", "Srpski", "Duhovnost"],
    liveUrl: "https://arhangelapp.com",
    githubUrl: null,
    githubNote: "Kod nije javan jer je projekat klijentski.",
    problem: "Landing stranica je napravljena da prikupi **novac za razvoj mobilne aplikacije**.",
    role:
      "Bio sam **jedini developer** na projektu i bio sam odgovoran za **kompletan design i development sajta**.",
    decisions: [
      "**Tehnološki izbor:** izabrao sam Next.js i Tailwind CSS zbog brzog razvoja i jasne strukture UI-ja.",
      "**Hosting odluka:** izabrao sam Vercel umesto drugih platformi zbog jednostavnog deployment-a i korisnih feature-a.",
      "**Tradeoff:** prioritet je bio brz i stabilan izlazak landing stranice, a ne razvoj kompleksnog backend sistema u ovoj fazi."
    ],
    outcomes: [
      "**Primarni rezultat:** sajt je uspešno služio za prikupljanje sredstava za razvoj aplikacije.",
      "**Poslovni efekat:** projekat je dobio jasan kanal kojim korisnici mogu da podrže dalji razvoj."
    ],
    stack: ["Next.js", "Tailwind CSS", "Vercel"]
  },
  {
    slug: "zgradar",
    title: "Zgradar.rs",
    shortDescription: "Platforma za upravljanje sadržajem i vestima za stanare, uz **portfolio prezentaciju kompanije**.",
    listDescription:
      "Sajt za kompaniju koja održava zgrade, sa custom CMS-om za upravljanje sadržajem i vestima prema stanarima.",
    highlights: ["Jedini developer", "Migracija PHP -> Next.js", "Custom CMS", "Design + sadržaj"],
    iconClass: "fas fa-building",
    tags: ["Next.js", "SaaS", "Srbija"],
    liveUrl: "https://zgradar.rs",
    githubUrl: null,
    githubNote: "Kod nije javan jer je projekat klijentski.",
    problem:
      "Kompaniji je bila potrebna **centralna platforma** za upravljanje vestima za stanare i zgrade, kao i jasna portfolio prezentacija usluga.",
    role:
      "Bio sam **jedini developer** i bio sam odgovoran za **design, development i sadržaj sajta**.",
    decisions: [
      "**Arhitektonska odluka:** migrirao sam postojeće rešenje sa PHP-a na Next.js zbog modernijeg i efikasnijeg razvoja.",
      "**Sadržaj odluka:** implementirao sam custom CMS da tim može samostalno da upravlja sadržajem sajta.",
      "**Tradeoff:** odustao sam od brzog patch pristupa na starom sistemu i uložio vreme u migraciju radi bolje dugoročne održivosti."
    ],
    outcomes: [
      "**Primarni rezultat:** kompanija je dobila funkcionalnu platformu za objavu i upravljanje vestima za stanare i zgrade.",
      "**Poslovni efekat:** sajt je ujedno postao portfolio kanal za prezentaciju usluga kompanije."
    ],
    stack: ["Next.js", "Custom CMS", "Frontend + Content Workflow"]
  },
  {
    slug: "inhaus",
    title: "Inhaus.ae",
    shortDescription: "Portfolio sajt kreativnog studija za promociju usluga i projekata uz fokus na **SEO i performanse**.",
    listDescription:
      "Sajt za kreativni studio koji promoviše usluge i projekte kroz portfolio i sadržaj koji tim može lako da menja.",
    highlights: ["Jedini developer", "SEO + performanse", "Next.js", "Image optimization tradeoff + custom CMS"],
    iconClass: "fas fa-film",
    tags: ["Kreativni Studio", "Dubai", "Brending"],
    liveUrl: "https://inhaus.ae",
    githubUrl: null,
    githubNote: "Kod nije javan jer je projekat klijentski.",
    problem:
      "Studiju je bila potrebna platforma za promociju usluga i projekata, koja istovremeno funkcioniše kao **portfolio**.",
    role: "Bio sam **jedini developer** i bio sam odgovoran za **development sajta**.",
    decisions: [
      "**Tehnički izbor:** izabrali smo Next.js zbog SEO benefita i performansi.",
      "**Performanse odluka:** isključili smo Image Optimization jer je trošio previše resursa u ovom setup-u i nije bio neophodan.",
      "**Sadržaj odluka:** dodat je custom CMS da tim može samostalno da ažurira sadržaj."
    ],
    outcomes: [
      "**Primarni rezultat:** studio je dobio platformu za promociju usluga i projekata.",
      "**Poslovni efekat:** sajt se koristi kao portfolio kanal za predstavljanje rada."
    ],
    stack: ["Next.js", "Custom CMS", "SEO", "Performance Optimizacija"]
  }
];

export function getProjectBySlug(slug: string): ProjectCase | undefined {
  return projects.find((project) => project.slug === slug);
}
