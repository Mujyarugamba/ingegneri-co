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
      "La SCIA — Segnalazione Certificata di Inizio Attività — è uno degli strumenti più utilizzati per avviare interventi edilizi compatibili con la normativa vigente. Permette di iniziare i lavori in tempi ridotti rispetto al permesso di costruire, a condizione che l'intervento rientri nelle categorie previste dal regolamento edilizio comunale e dalle norme nazionali.",
      "In generale, la SCIA si utilizza per interventi di manutenzione straordinaria, restauro e risanamento conservativo, ristrutturazioni edilizie che non comportino incremento volumetrico significativo, cambi d'uso compatibili e molte tipologie di installazione di impianti, fermo restando la verifica puntuale del caso concreto.",
      "La documentazione da predisporre include elaborati grafici, relazioni tecniche, computi estimativi quando richiesti e gli allegati previsti dalla pratica comunale. Un errore nella qualificazione dell'intervento può comportare sanzioni o la sospensione dei lavori: per questo è fondamentale un'analisi tecnica preliminare accurata.",
      "Ingegneri & Co affianca privati, imprese e professionisti nella corretta individuazione del titolo abilitativo, nella redazione della documentazione e nella gestione dell'iter autorizzativo fino al completamento dell'intervento.",
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
      "Nel panorama delle pratiche edilizie, CILA, SCIA e Permesso di Costruire rappresentano tre livelli diversi di complessità procedurale e di incidenza dell'intervento sul fabbricato e sul contesto urbanistico.",
      "La CILA (Comunicazione di Inizio Lavori Asseverata) è generalmente destinata agli interventi di manutenzione ordinaria e ad alcune tipologie di lavori minori, con tempi rapidi e documentazione più snella. La SCIA copre interventi di maggiore entità, consentendo l'inizio dei lavori con contestuale presentazione della pratica, salvo verifiche successive da parte del Comune.",
      "Il Permesso di Costruire resta necessario per le opere più rilevanti, come le nuove costruzioni, le volumetrie importanti o gli interventi che incidono in modo significativo sull'assetto urbanistico. In questi casi il rilascio del titolo precede l'avvio del cantiere.",
      "La scelta dello strumento corretto dipende dalla classificazione dell'intervento, dal PRG vigente, dalle eventuali vincolistiche e dalla documentazione tecnica disponibile. Un supporto professionale consente di evitare errori procedurali e di ottimizzare tempi e costi del progetto.",
    ],
  },
  {
    slug: "come-funziona-transizione-5-0",
    title: "Come funziona la Transizione 5.0",
    category: "Industria",
    excerpt:
      "Panoramica su digitalizzazione, efficienza energetica e agevolazioni per le imprese che investono in innovazione tecnologica.",
    description:
      "Transizione 5.0: come funziona, requisiti e opportunità per imprese che combinano digitalizzazione, efficienza energetica e innovazione industriale.",
    publishedAt: "2026-02-01",
    content: [
      "La Transizione 5.0 rappresenta l'evoluzione delle politiche industriali verso un modello che integra digitalizzazione, intelligenza artificiale, efficienza energetica e sostenibilità dei processi produttivi. L'obiettivo è incentivare investimenti che migliorino competitività e performance ambientali delle imprese.",
      "Gli interventi ammissibili riguardano tipicamente beni strumentali innovativi, soluzioni digitali, sistemi di monitoraggio energetico, automazione avanzata e tecnologie abilitanti collegate a riduzione dei consumi e miglioramento produttivo.",
      "Per accedere alle agevolazioni è necessario dimostrare il rispetto dei requisiti tecnici previsti, la coerenza del piano di investimento e l'impatto atteso in termini di efficienza. La documentazione include diagnosi, relazioni tecniche, preventivi e perizie asseverate a seconda della tipologia di intervento.",
      "Ingegneri & Co supporta le imprese nell'analisi di fattibilità, nella progettazione tecnica, nella predisposizione della documentazione e nell'integrazione tra impianti, automazione e obiettivi energetici.",
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
      "L'efficientamento energetico è uno degli ambiti prioritari per la riqualificazione del patrimonio edilizio esistente. Interventi mirati su involucro, impianti e sistemi di controllo consentono di ridurre i consumi, migliorare il comfort e aumentare il valore dell'immobile.",
      "Il percorso inizia generalmente con una valutazione tecnica o una diagnosi energetica, finalizzata a individuare le criticità e a definire un piano di intervento coerente con budget, obiettivi e accesso agli eventuali incentivi disponibili.",
      "Tra le soluzioni più diffuse rientrano isolamento termico, sostituzione di infissi, installazione di impianti ad alta efficienza, produzione di energia da fonti rinnovabili e sistemi di monitoraggio dei consumi. Ogni intervento deve essere dimensionato in relazione alle caratteristiche costruttive dell'edificio e al suo uso.",
      "Un approccio multidisciplinare consente di integrare progettazione edilizia, impiantistica e analisi economica, garantendo soluzioni efficaci e conformi alla normativa vigente.",
    ],
  },
  {
    slug: "automazione-smart-building",
    title: "Automazione e Smart Building",
    category: "Innovazione",
    excerpt:
      "Come l'automazione e i sistemi intelligenti migliorano efficienza, sicurezza e gestione degli edifici moderni.",
    description:
      "Automazione e Smart Building: tecnologie, benefici e applicazioni per edifici efficienti, connessi e facili da gestire.",
    publishedAt: "2026-02-18",
    content: [
      "Gli edifici intelligenti combiniano automazione, connettività e monitoraggio in tempo reale per ottimizzare consumi, comfort e manutenzione. Il Smart Building non è solo tecnologia: è un modello integrato di gestione degli spazi e degli impianti.",
      "I sistemi di building automation consentono di controllare illuminazione, climatizzazione, accessi e consumi energetici, adattando il funzionamento dell'edificio alle effettive esigenze di utilizzo. L'integrazione con sensori IoT e piattaforme di supervisione amplia le possibilità di analisi e intervento.",
      "Per imprese e condomini, i vantaggi includono riduzione dei costi operativi, maggiore affidabilità degli impianti, tracciabilità dei dati e possibilità di manutenzione predittiva. La progettazione deve considerare scalabilità, cybersecurity e semplicità di gestione.",
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
      "L'intelligenza artificiale sta entrando progressivamente nei processi dell'ingegneria, offrendo strumenti per analisi predittiva, automazione documentale, supporto decisionale e ottimizzazione delle risorse. Non sostituisce la competenza professionale, ma la amplifica quando utilizzata con criterio.",
      "Nei settori edilizio e industriale, l'IA può supportare diagnosi energetiche, manutenzione predittiva, classificazione documenti, monitoraggio impianti e analisi di grandi volumi di dati provenienti da sensori e sistemi SCADA.",
      "L'introduzione di soluzioni basate su IA richiede attenzione a qualità dei dati, affidabilità degli algoritmi, conformità normativa e integrazione con i sistemi esistenti. Un approccio graduale e verificabile riduce i rischi e massimizza il ritorno sull'investimento.",
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
