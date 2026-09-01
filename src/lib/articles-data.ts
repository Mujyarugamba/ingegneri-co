export type ArticleCategory =
  | "Edilizia"
  | "Industria"
  | "Energia"
  | "Innovazione";

export type Article = {
  slug: string;
  title: string;
  category: ArticleCategory;
  excerpt: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  content: string[];
};

export const approfondimentiIntro =
  "Guide tecniche, aggiornamenti normativi, casi studio e contenuti dedicati a edilizia, energia, impianti, automazione e innovazione tecnologica.";

export const articles: Article[] = [
  {
    slug: "quando-serve-una-scia",
    title: "Quando serve una SCIA?",
    category: "Edilizia",
    excerpt:
      "Guida pratica per capire quando la Segnalazione Certificata di Inizio Attività è lo strumento corretto per il tuo intervento edilizio.",
    description:
      "Quando serve una SCIA? Guida tecnica su requisiti, documentazione e casi d'uso per privati, imprese e professionisti del settore edilizio.",
    publishedAt: "2026-01-15",
    content: [
      "La SCIA — Segnalazione Certificata di Inizio Attività — è uno degli strumenti utilizzati per avviare determinati interventi edilizi previsti dalla normativa. La sua applicabilità va verificata sul caso concreto, tenendo conto della disciplina nazionale, regionale, comunale e degli eventuali vincoli presenti.",
      "In generale, la SCIA può riguardare interventi di manutenzione straordinaria che interessano parti strutturali, interventi di restauro e risanamento conservativo sulle parti strutturali e alcune ristrutturazioni edilizie. Per opere di diversa natura possono invece trovare applicazione CILA, permesso di costruire, edilizia libera o altri titoli e procedure.",
      "La documentazione da predisporre dipende dall'intervento e dal Comune competente e può comprendere elaborati grafici, relazioni tecniche, asseverazioni e gli ulteriori allegati richiesti. Un errore nella qualificazione dell'intervento può comportare conseguenze amministrative e sanzioni: per questo è fondamentale una verifica tecnica preliminare.",
      "Ingegneri & Co affianca privati, imprese e professionisti nella corretta individuazione del titolo abilitativo, nella redazione della documentazione e nella gestione dell'iter tecnico-amministrativo dell'intervento.",
    ],
  },
  {
    slug: "differenze-cila-scia-permesso-costruire",
    title: "Differenze tra CILA, SCIA e Permesso di Costruire",
    category: "Edilizia",
    excerpt:
      "Confronto tra i principali titoli abilitativi edilizi per orientarsi nella scelta dello strumento più adatto al proprio progetto.",
    description:
      "CILA, SCIA o Permesso di Costruire? Differenze, ambiti di applicazione e criteri di scelta spiegati in modo chiaro per committenti e professionisti.",
    publishedAt: "2026-01-22",
    content: [
      "Nel panorama delle pratiche edilizie, CILA, SCIA e Permesso di Costruire si applicano a interventi differenti e non rappresentano semplicemente tre livelli crescenti della stessa procedura. La corretta qualificazione dipende dalle opere previste e dalla disciplina applicabile all'immobile.",
      "La CILA (Comunicazione di Inizio Lavori Asseverata) è generalmente utilizzata per interventi di manutenzione straordinaria che non interessano le parti strutturali dell'edificio e per gli altri casi previsti dalla normativa. La manutenzione ordinaria rientra invece, di regola, nell'edilizia libera, salvo vincoli, discipline speciali o opere che richiedano ulteriori adempimenti. La SCIA trova applicazione in diverse ipotesi di maggiore rilevanza, comprese alcune opere sulle parti strutturali e alcune ristrutturazioni edilizie.",
      "Il Permesso di Costruire resta necessario per gli interventi individuati dalla legge, tra cui nuove costruzioni e trasformazioni urbanistiche o edilizie di maggiore consistenza. In questi casi l'avvio dei lavori è subordinato al rilascio del titolo, fatti salvi i procedimenti alternativi ammessi dalla normativa.",
      "La scelta dello strumento corretto dipende dalla classificazione dell'intervento, dagli strumenti urbanistici vigenti, dagli eventuali vincoli e dalla documentazione disponibile. Una verifica professionale preventiva consente di evitare semplificazioni improprie e di impostare correttamente il procedimento.",
    ],
  },
  {
    slug: "come-funziona-transizione-5-0",
    title: "Transizione 5.0 nel 2026: il nuovo iperammortamento",
    category: "Industria",
    excerpt:
      "Il quadro 2026 della Transizione 5.0: chiusura del precedente credito d'imposta e nuova misura di iperammortamento per investimenti digitali ed energetici.",
    description:
      "Transizione 5.0 nel 2026: come cambia la misura con il nuovo iperammortamento, quali investimenti riguarda e quali verifiche tecniche richiede.",
    publishedAt: "2026-02-01",
    updatedAt: "2026-09-01",
    content: [
      "Nel 2026 il quadro della Transizione 5.0 è cambiato. Il precedente Piano basato sul credito d'imposta ha chiuso i termini per nuove domande; per i nuovi investimenti il riferimento è il Nuovo Piano Transizione 5.0 - Iperammortamento, introdotto dalla legge di bilancio 2026 e reso operativo con i provvedimenti attuativi del 2026.",
      "La nuova misura sostiene investimenti in beni strumentali tecnologicamente avanzati e, nei casi previsti, investimenti destinati all'autoproduzione e all'autoconsumo di energia da fonti rinnovabili. L'agevolazione opera attraverso una maggiorazione del costo fiscalmente riconosciuto dei beni ai fini delle quote di ammortamento e dei canoni di locazione finanziaria, in sostituzione dei precedenti crediti d'imposta Transizione 4.0 e 5.0.",
      "La piattaforma GSE per la prenotazione delle agevolazioni è operativa dal 12 giugno 2026. La misura riguarda gli investimenti effettuati dal 1° gennaio 2026 al 30 settembre 2028, nel rispetto dei requisiti tecnici e procedurali previsti dalla disciplina vigente. L'effettività e la conformità degli investimenti devono essere comprovate anche tramite perizia tecnica asseverata e certificazione contabile nei casi e con le modalità previste.",
      "Ingegneri & Co può supportare l'analisi tecnica degli investimenti, l'integrazione tra beni, impianti, automazione ed energia e la predisposizione della documentazione tecnica di competenza, fermo restando che l'accesso all'agevolazione va verificato sul singolo progetto e sulla normativa vigente al momento della domanda.",
    ],
  },
  {
    slug: "efficientamento-energetico-edifici",
    title: "Efficientamento energetico degli edifici",
    category: "Energia",
    excerpt:
      "Strategie e interventi per ridurre i consumi, migliorare il comfort abitativo e valorizzare il patrimonio immobiliare.",
    description:
      "Efficientamento energetico degli edifici: diagnosi, interventi, incentivi e soluzioni tecniche per ridurre consumi e migliorare le prestazioni.",
    publishedAt: "2026-02-10",
    content: [
      "L'efficientamento energetico è uno degli ambiti prioritari per la riqualificazione del patrimonio edilizio esistente. Interventi mirati su involucro, impianti e sistemi di controllo possono ridurre i consumi, migliorare il comfort e contribuire alla valorizzazione dell'immobile, in funzione delle caratteristiche del caso concreto.",
      "Il percorso inizia generalmente con una valutazione tecnica o una diagnosi energetica, finalizzata a individuare le criticità e a definire un piano di intervento coerente con budget, obiettivi e accesso agli eventuali incentivi disponibili.",
      "Tra le soluzioni più diffuse rientrano isolamento termico, sostituzione di infissi, installazione di impianti ad alta efficienza, produzione di energia da fonti rinnovabili e sistemi di monitoraggio dei consumi. Ogni intervento deve essere dimensionato in relazione alle caratteristiche costruttive dell'edificio e al suo uso.",
      "Un approccio multidisciplinare consente di integrare progettazione edilizia, impiantistica e analisi economica, favorendo soluzioni tecnicamente coerenti e impostate nel rispetto della normativa applicabile.",
    ],
  },
  {
    slug: "automazione-smart-building",
    title: "Automazione e Smart Building",
    category: "Innovazione",
    excerpt:
      "Come l'automazione e i sistemi intelligenti possono migliorare efficienza, sicurezza e gestione degli edifici moderni.",
    description:
      "Automazione e Smart Building: tecnologie, benefici e applicazioni per edifici efficienti, connessi e facili da gestire.",
    publishedAt: "2026-02-18",
    content: [
      "Gli edifici intelligenti combinano automazione, connettività e monitoraggio in tempo reale per ottimizzare consumi, comfort e manutenzione. Lo Smart Building non è solo tecnologia: è un modello integrato di gestione degli spazi e degli impianti.",
      "I sistemi di building automation consentono di controllare illuminazione, climatizzazione, accessi e consumi energetici, adattando il funzionamento dell'edificio alle effettive esigenze di utilizzo. L'integrazione con sensori IoT e piattaforme di supervisione amplia le possibilità di analisi e intervento.",
      "Per imprese e condomini, i possibili benefici includono riduzione dei costi operativi, maggiore affidabilità degli impianti, tracciabilità dei dati e supporto alla manutenzione predittiva. I risultati dipendono dalla configurazione degli impianti, dai dati disponibili e dalle modalità di utilizzo. La progettazione deve considerare scalabilità, cybersecurity e semplicità di gestione.",
      "Ingegneri & Co progetta soluzioni su misura che uniscono competenze impiantistiche, informatiche e di integrazione hardware/software, dalla fase di analisi fino alla messa in servizio.",
    ],
  },
  {
    slug: "intelligenza-artificiale-applicata-ingegneria",
    title: "Intelligenza Artificiale applicata all'ingegneria",
    category: "Innovazione",
    excerpt:
      "Opportunità, casi d'uso e limiti dell'IA nei processi tecnici, dalla progettazione al monitoraggio operativo.",
    description:
      "Intelligenza Artificiale applicata all'ingegneria: casi d'uso concreti, vantaggi e criteri per integrarla nei processi tecnici e digitali.",
    publishedAt: "2026-02-25",
    content: [
      "L'intelligenza artificiale sta entrando progressivamente nei processi dell'ingegneria, offrendo strumenti per analisi predittiva, automazione documentale, supporto decisionale e ottimizzazione delle risorse. Non sostituisce la competenza professionale, ma può ampliarne gli strumenti quando utilizzata con criterio.",
      "Nei settori edilizio e industriale, l'IA può supportare diagnosi energetiche, manutenzione predittiva, classificazione documenti, monitoraggio impianti e analisi di grandi volumi di dati provenienti da sensori e sistemi SCADA.",
      "L'introduzione di soluzioni basate su IA richiede attenzione a qualità dei dati, affidabilità degli algoritmi, conformità normativa e integrazione con i sistemi esistenti. Un approccio graduale e verificabile può ridurre i rischi e aiutare a valutare concretamente benefici e limiti dell'investimento.",
      "Ingegneri & Co esplora e implementa soluzioni digitali che coniugano rigore tecnico, innovazione e utilità operativa, affiancando imprese e professionisti nell'adozione consapevole delle nuove tecnologie.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}

export function getLatestArticles(limit = 3): Article[] {
  return [...articles]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
}

export function formatArticleDate(date: string): string {
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
