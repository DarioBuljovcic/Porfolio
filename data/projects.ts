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
  employerMessage?: {
    quote: string;
    author: string;
  };
};

export const projects: ProjectCase[] = [
  {
    slug: "arhangelapp",
    title: "Arhangelapp.com",
    shortDescription:
      "Landing stranica za mobilnu aplikaciju sa jasnim ciljem: da predstavi proizvod i podstakne korisnike da **podrže razvoj aplikacije**.",
    listDescription:
      "Sajt koji u kratkoj formi objašnjava ideju proizvoda, gradi poverenje i usmerava posetioce ka podršci daljeg razvoja.",
    highlights: [
      "Beez.dev tim",
      "Design + razvoj",
      "Next.js + Tailwind",
      "Deploy na Vercel",
    ],
    iconClass: "fas fa-cross",
    tags: ["Mobilna App", "Srpski", "Duhovnost"],
    liveUrl: "https://arhangelapp.com",
    githubUrl: null,
    githubNote: "Kod nije javan jer je projekat klijentski.",
    problem:
      "Proizvod je bio u ranoj fazi i bilo je potrebno napraviti sajt koji će u kratkom roku jasno objasniti ideju aplikacije, izgraditi poverenje i motivisati korisnike da **finansijski podrže razvoj**.",
    role: "Vodili smo projekat od ideje do isporuke i bili zaduženi za **strukturu sadržaja, dizajn i razvoj sajta**, sa fokusom da poruka bude jasna i da ceo flow vodi korisnika ka podršci projektu.",
    decisions: [
      "**Tehnološki izbor:** koristili smo Next.js i Tailwind CSS kako bismo brzo isporučili performantnu i preglednu landing stranicu.",
      "**Struktura sadržaja:** sadržaj i sekcije smo organizovali tako da korisnik brzo razume vrednost proizvoda i bez konfuzije dođe do poziva na akciju.",
      "**Tradeoff:** prioritet je bio brz izlazak kvalitetne landing stranice, dok su naprednije funkcionalnosti ostavljene za kasniju fazu razvoja proizvoda.",
    ],
    outcomes: [
      "**Primarni rezultat:** projekat je dobio jasan i profesionalan kanal za predstavljanje aplikacije i prikupljanje podrške.",
      "**Poslovni efekat:** sajt je pojednostavio način na koji zainteresovani korisnici mogu da razumeju ideju proizvoda i podrže njegov dalji razvoj.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    employerMessage: {
      quote:
        "Beez.dev je energičan i sposoban tim. Razvili smo zajedno aplikaciju, a potom i sajt, gde su pokazali visoku proaktivnost u predlaganju rešenja u tehnologiji i dizajnu. Pored sjajnih rezultata, veoma su ugodni za saradnju, uživanje!",
      author: "Vidak Radenović, CEO Arhangelapp",
    },
  },
  {
    slug: "zgradar",
    title: "Zgradar.rs",
    shortDescription:
      "Sajt i interni sistem za objavu sadržaja i vesti za stanare, uz **jasnu prezentaciju usluga kompanije**.",
    listDescription:
      "Platforma za firmu koja održava zgrade, sa custom CMS-om koji timu omogućava da samostalno uređuje sadržaj i objavljuje vesti.",
    highlights: [
      "Beez.dev tim",
      "Migracija PHP -> Next.js",
      "Custom CMS",
      "Design + sadržaj",
    ],
    iconClass: "fas fa-building",
    tags: ["Next.js", "SaaS", "Srbija"],
    liveUrl: "https://zgradar.rs",
    githubUrl: null,
    githubNote: "Kod nije javan jer je projekat klijentski.",
    problem:
      "Postojeće rešenje nije dovoljno dobro podržavalo svakodnevno objavljivanje sadržaja, a kompaniji je istovremeno bio potreban sajt koji jasnije objašnjava usluge i ostavlja profesionalniji utisak.",
    role: "Radili smo na **migraciji, dizajnu, razvoju i organizaciji sadržaja**, sa ciljem da tim dobije jednostavan alat za upravljanje sajtom i jasniju online prezentaciju kompanije.",
    decisions: [
      "**Migracija sistema:** postojeće PHP rešenje smo zamenili Next.js aplikacijom kako bi sajt bio lakši za održavanje i dalji razvoj.",
      "**Custom CMS:** implementirali smo administraciju koja omogućava timu da bez developera menja ključni sadržaj i objavljuje novosti.",
      "**Tradeoff:** umesto kratkoročnog popravljanja starog sistema, fokus je stavljen na stabilnije i dugoročnije rešenje.",
    ],
    outcomes: [
      "**Primarni rezultat:** kompanija je dobila funkcionalan sajt i sistem koji podržava redovno objavljivanje sadržaja i novosti.",
      "**Poslovni efekat:** sajt sada jasnije predstavlja usluge firme, dok tim ima veću samostalnost u svakodnevnom radu sa sadržajem.",
    ],
    stack: ["Next.js", "Custom CMS", "Frontend + Content Workflow"],
    employerMessage: {
      quote:
        "Saradnja sa Beez.dev timom je bila mnogo više od same izrade sajta. Od prvih razgovora su se potrudili da razumeju kako radimo, gde su problemi u starom rešenju i šta novi sajt treba da omogući našem timu. U planiranju i dizajnu bili su strpljivi, otvoreni za razgovor i spremni da svaku ideju pretoče u praktično rešenje. Tokom celog procesa komunikacija je bila jednostavna i ljudska, bez nepotrebnog komplikovanja, što nam je ulivalo sigurnost da projekat ide u dobrom smeru. Krajnji rezultat je sajt koji bolje predstavlja firmu i značajno nam olakšava rad sa sadržajem.",
      author: "Daniel Drčić, Vlasnik Zgradara",
    },
  },
  {
    slug: "inhaus",
    title: "Inhaus.ae",
    shortDescription:
      "Portfolio sajt kreativnog studija napravljen da jasno predstavi usluge i projekte, uz fokus na **SEO, performanse i lako uređivanje sadržaja**.",
    listDescription:
      "Sajt za kreativni studio koji kombinuje portfolio prezentaciju, dobar tehnički rezultat i jednostavno upravljanje sadržajem za interni tim.",
    highlights: [
      "Beez.dev tim",
      "SEO + performanse",
      "Next.js",
      "Image optimization tradeoff + custom CMS",
    ],
    iconClass: "fas fa-film",
    tags: ["Kreativni Studio", "Dubai", "Brending"],
    liveUrl: "https://inhaus.ae",
    githubUrl: null,
    githubNote: "Kod nije javan jer je projekat klijentski.",
    problem:
      "Studiju je bio potreban sajt koji može da funkcioniše i kao reprezentativan portfolio i kao praktičan marketinški kanal, bez žrtvovanja performansi i SEO osnove.",
    role: "Bili smo zaduženi za **razvoj sajta, tehničku strukturu i implementaciju CMS workflow-a**, sa fokusom na brzinu, održivost i lakši rad tima sa sadržajem.",
    decisions: [
      "**Tehnička osnova:** Next.js je izabran zbog dobrog balansa između SEO benefita, performansi i razvoja sadržajnog sajta.",
      "**Performanse:** Image Optimization je isključen jer u konkretnom setup-u nije donosio dovoljno vrednosti u odnosu na potrošnju resursa.",
      "**Sadržaj workflow:** dodat je custom CMS kako bi tim mogao samostalno da ažurira portfolio i druge ključne stranice.",
    ],
    outcomes: [
      "**Primarni rezultat:** studio je dobio brz i pregledan sajt koji jasno predstavlja usluge i projekte.",
      "**Poslovni efekat:** tim može lakše da održava sadržaj, dok sajt služi kao stabilan portfolio i prodajni kanal.",
    ],
    stack: ["Next.js", "Custom CMS", "SEO", "Optimizacija performansi"],
    employerMessage: {
      quote:
        "Rad sa Beez.dev timom je bio prijatan, jasan i veoma profesionalan. Od samog početka su umeli da vode razgovor tako da izvuku prave informacije, saslušaju naše ciljeve i prevedu ih u konkretan plan. Tokom planiranja i razvoja stalno smo imali osećaj dobre saradnje, jer su znali da objasne predloge, prihvate sugestije i prilagode rešenja onome što nam je zaista potrebno. Ceo proces je bio miran i dobro organizovan, što je dosta značilo jer ovakvi projekti često znaju da postanu haotični. Na kraju smo dobili brz, pregledan i kvalitetan sajt, ali i saradnju koja je od početka do kraja bila laka i pouzdana.",
      author: "David Gomori, CEO Markteching",
    },
  },
];

export function getProjectBySlug(slug: string): ProjectCase | undefined {
  return projects.find((project) => project.slug === slug);
}
