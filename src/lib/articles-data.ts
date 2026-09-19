export type ArticleCategory =
  | "Edilizia"
  | "Industria"
  | "Energia"
  | "Innovazione";

export type ArticleLink = { label: string; href: string };
export type ArticleSource = { label: string; href: string };

export type Article = {
  slug: string;
  title: string;
  seoTitle?: string;
  category: ArticleCategory;
  excerpt: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  content: string[];
  relatedServices?: ArticleLink[];
  sources?: ArticleSource[];
};

export const approfondimentiIntro =
  "Guide tecniche, aggiornamenti normativi, casi studio e contenuti dedicati a edilizia, energia, impianti, automazione e innovazione tecnologica.";

export const articles: Article[] = [
  {
    slug: "quando-serve-una-scia",
    title: "Quando serve una SCIA?",
    seoTitle: "Quando serve una SCIA? | Ingegneri & Co",
    category: "Edilizia",
    excerpt:
      "Guida pratica per capire quando la Segnalazione Certificata di Inizio Attività è lo strumento corretto per il tuo intervento edilizio.",
    description:
      "Quando serve una SCIA? Guida tecnica su requisiti, documentazione e casi d'uso per privati, imprese e professionisti del settore edilizio.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-09-19",
    relatedServices: [
      { label: "Pratiche edilizie", href: "/servizi/pratiche-edilizie" },
      { label: "Conformità urbanistica e catastale", href: "/servizi/conformita-urbanistica-catastale" },
    ],
    sources: [
      { label: "Gazzetta Ufficiale — DPR 380/2001, Testo unico edilizia", href: "https://www.gazzettaufficiale.it/eli/id/2001/10/20/001G0429/sg" },
    ],
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
    seoTitle: "CILA, SCIA e Permesso di Costruire | Ingegneri & Co",
    category: "Edilizia",
    excerpt:
      "Confronto tra i principali titoli abilitativi edilizi per orientarsi nella scelta dello strumento più adatto al proprio progetto.",
    description:
      "CILA, SCIA o Permesso di Costruire? Differenze, ambiti di applicazione e criteri di scelta spiegati in modo chiaro per committenti e professionisti.",
    publishedAt: "2026-01-22",
    updatedAt: "2026-09-19",
    relatedServices: [
      { label: "Pratiche edilizie", href: "/servizi/pratiche-edilizie" },
      { label: "Conformità urbanistica e catastale", href: "/servizi/conformita-urbanistica-catastale" },
    ],
    sources: [
      { label: "Gazzetta Ufficiale — DPR 380/2001, Testo unico edilizia", href: "https://www.gazzettaufficiale.it/eli/id/2001/10/20/001G0429/sg" },
    ],
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
    seoTitle: "Transizione 5.0 e iperammortamento 2026 | Ingegneri & Co",
    category: "Industria",
    excerpt:
      "Il quadro 2026 della Transizione 5.0: chiusura del precedente credito d'imposta e nuova misura di iperammortamento per investimenti digitali ed energetici.",
    description:
      "Transizione 5.0 nel 2026: come cambia la misura con il nuovo iperammortamento, quali investimenti riguarda e quali verifiche tecniche richiede.",
    publishedAt: "2026-02-01",
    updatedAt: "2026-09-19",
    relatedServices: [
      { label: "Nuovo Piano Transizione 5.0", href: "/servizi/transizione-5-0" },
      { label: "Automazione industriale e sistemi di controllo", href: "/servizi/automazione-industriale" },
      { label: "Fotovoltaico e sistemi di accumulo", href: "/servizi/fotovoltaico" },
      { label: "Integrazione software, API e dati", href: "/servizi/integrazione-software-dati" },
    ],
    sources: [
      { label: "MIMIT — Nuovo Piano Transizione 5.0 - Iperammortamento", href: "https://www.mimit.gov.it/it/incentivi/nuovo-piano-transizione-5-0-iperammortamento" },
      { label: "MIMIT — Piano Transizione 5.0 (precedente misura)", href: "https://www.mimit.gov.it/it/incentivi/piano-transizione-5-0" },
      { label: "MIMIT — Decreto direttoriale 10 giugno 2026", href: "https://www.mimit.gov.it/it/normativa/decreti-direttoriali/decreto-direttoriale-10-giugno-2026-iperammortamento-termini-e-modelli-di-comunicazione" },
    ],
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
    seoTitle: "Efficientamento energetico edifici | Ingegneri & Co",
    category: "Energia",
    excerpt:
      "Strategie e interventi per ridurre i consumi, migliorare il comfort abitativo e valorizzare il patrimonio immobiliare.",
    description:
      "Efficientamento energetico degli edifici: diagnosi, interventi, incentivi e soluzioni tecniche per ridurre consumi e migliorare le prestazioni.",
    publishedAt: "2026-02-10",
    updatedAt: "2026-09-19",
    relatedServices: [
      { label: "Diagnosi energetiche", href: "/servizi/diagnosi-energetiche" },
      { label: "Efficientamento energetico", href: "/servizi/efficientamento-energetico" },
      { label: "Impianti termici e climatizzazione", href: "/servizi/impianti-termici-climatizzazione" },
      { label: "Fotovoltaico e sistemi di accumulo", href: "/servizi/fotovoltaico" },
    ],
    sources: [
      { label: "ENEA — Linee guida per la diagnosi energetica degli edifici", href: "https://www.efficienzaenergetica.enea.it/servizi-per/pubblica-amministrazione/riqualificazione-energetica-degli-edifici-della-pubblica-amministrazione/edilizia-pubblica-e-scolastica/linee-guida-per-la-diagnosi-energetica-degli-edifici-pubblici.html" },
      { label: "Commissione europea — Prestazione energetica degli edifici", href: "https://energy.ec.europa.eu/topics/energy-efficiency/energy-performance-buildings_en" },
    ],
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
    seoTitle: "Smart Building e automazione | Ingegneri & Co",
    category: "Innovazione",
    excerpt:
      "Come l'automazione e i sistemi intelligenti possono migliorare efficienza, sicurezza e gestione degli edifici moderni.",
    description:
      "Automazione e Smart Building: tecnologie, benefici e applicazioni per edifici efficienti, connessi e facili da gestire.",
    publishedAt: "2026-02-18",
    updatedAt: "2026-09-19",
    relatedServices: [
      { label: "Smart Building, Building Automation e IoT", href: "/servizi/smart-building-iot" },
      { label: "Progettazione e verifica impianti elettrici", href: "/servizi/impianti-elettrici" },
      { label: "Automazione industriale e sistemi di controllo", href: "/servizi/automazione-industriale" },
      { label: "Integrazione software, API e dati", href: "/servizi/integrazione-software-dati" },
    ],
    sources: [
      { label: "Commissione europea — Smart Readiness Indicator", href: "https://energy.ec.europa.eu/topics/energy-efficiency/energy-performance-buildings/smart-readiness-indicator_en" },
    ],
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
    seoTitle: "AI applicata all'ingegneria | Ingegneri & Co",
    category: "Innovazione",
    excerpt:
      "Opportunità, casi d'uso e limiti dell'IA nei processi tecnici, dalla progettazione al monitoraggio operativo.",
    description:
      "Intelligenza Artificiale applicata all'ingegneria: casi d'uso concreti, vantaggi e criteri per integrarla nei processi tecnici e digitali.",
    publishedAt: "2026-02-25",
    updatedAt: "2026-09-19",
    relatedServices: [
      { label: "Intelligenza artificiale per PMI", href: "/servizi/intelligenza-artificiale-pmi" },
      { label: "Analisi documentale e assistenti AI", href: "/servizi/analisi-documentale-assistenti-ai" },
      { label: "Integrazione software, API e dati", href: "/servizi/integrazione-software-dati" },
      { label: "Automazione dei processi e workflow", href: "/servizi/automazione-processi" },
    ],
    sources: [
      { label: "Commissione europea — Approccio europeo all'intelligenza artificiale e AI Act", href: "https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence" },
    ],
    content: [
      "L'intelligenza artificiale sta entrando progressivamente nei processi dell'ingegneria, offrendo strumenti per analisi predittiva, automazione documentale, supporto decisionale e ottimizzazione delle risorse. Non sostituisce la competenza professionale, ma può ampliarne gli strumenti quando utilizzata con criterio.",
      "Nei settori edilizio e industriale, l'IA può supportare diagnosi energetiche, manutenzione predittiva, classificazione documenti, monitoraggio impianti e analisi di grandi volumi di dati provenienti da sensori e sistemi SCADA.",
      "L'introduzione di soluzioni basate su IA richiede attenzione a qualità dei dati, affidabilità degli algoritmi, conformità normativa e integrazione con i sistemi esistenti. Un approccio graduale e verificabile può ridurre i rischi e aiutare a valutare concretamente benefici e limiti dell'investimento.",
      "Ingegneri & Co esplora e implementa soluzioni digitali che coniugano rigore tecnico, innovazione e utilità operativa, affiancando imprese e professionisti nell'adozione consapevole delle nuove tecnologie.",
    ],
  },
  {
    slug: "ape-quando-serve-validita",
    title: "APE: quando serve e quanto dura",
    seoTitle: "APE: quando serve e quanto dura | Ingegneri & Co",
    category: "Energia",
    excerpt:
      "Quando è richiesto l'Attestato di Prestazione Energetica, quanto può durare e perché non va confuso con diagnosi energetica e relazione Legge 10.",
    description:
      "APE: quando è richiesto, validità e differenze rispetto a diagnosi energetica e Legge 10, con riferimento alla procedura CENED in Lombardia.",
    publishedAt: "2026-09-19",
    relatedServices: [
      { label: "APE e certificazione energetica", href: "/servizi/ape-certificazione-energetica" },
      { label: "Relazione Legge 10", href: "/servizi/legge-10" },
      { label: "Diagnosi energetiche", href: "/servizi/diagnosi-energetiche" },
    ],
    sources: [
      { label: "Normattiva — D.Lgs. 192/2005, art. 6", href: "https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Adecreto.legislativo%3A2005-08-19%3B192~art6=" },
      { label: "Regione Lombardia — CENED, Certificazione Energetica degli Edifici", href: "https://www.regione.lombardia.it/ambiente-e-territorio/energia/cened-certificazione-energetica-degli-edifici" },
      { label: "Gazzetta Ufficiale — Linee guida nazionali APE, DM 26 giugno 2015", href: "https://www.gazzettaufficiale.it/eli/id/2015/07/15/15A05200/sg" },
    ],
    content: [
      "L'APE, Attestato di Prestazione Energetica, descrive la prestazione energetica di un edificio o di una unità immobiliare secondo la procedura applicabile. Il D.Lgs. 192/2005 prevede il rilascio dell'attestato, tra gli altri casi, per edifici o unità immobiliari costruiti, venduti o locati a un nuovo locatario, fatti salvi i casi e le esclusioni previsti dalla disciplina vigente.",
      "Nelle compravendite e nelle nuove locazioni il proprietario deve rendere disponibile l'APE al potenziale acquirente o al nuovo locatario secondo quanto previsto dalla normativa. Se è già disponibile un attestato in corso di validità e conforme alle disposizioni applicabili, non è necessario produrne automaticamente uno nuovo per il solo fatto che cambia il soggetto interessato.",
      "La validità temporale massima dell'APE è di dieci anni dal rilascio, ma è subordinata al rispetto delle prescrizioni relative ai controlli di efficienza energetica dei sistemi tecnici e l'attestato deve essere aggiornato quando un intervento di ristrutturazione o riqualificazione modifica la classe energetica dell'edificio o dell'unità immobiliare.",
      "APE, relazione energetica di progetto e diagnosi energetica hanno finalità diverse. L'APE certifica la prestazione e la classe energetica; la relazione tecnica energetica accompagna il progetto nei casi previsti; la diagnosi analizza in maggiore dettaglio consumi, usi significativi e possibili interventi. In Lombardia il sistema regionale di riferimento per la certificazione energetica è CENED.",
    ],
  },
  {
    slug: "relazione-legge-10-quando-serve",
    title: "Relazione Legge 10: quando serve",
    seoTitle: "Relazione Legge 10: quando serve | Ingegneri & Co",
    category: "Energia",
    excerpt:
      "A cosa serve la relazione tecnica energetica, quali interventi può riguardare e perché deve essere coordinata con involucro e impianti.",
    description:
      "Relazione Legge 10: funzione, casi di applicazione e rapporto con progetto energetico, impianti e APE.",
    publishedAt: "2026-09-19",
    relatedServices: [
      { label: "Relazione Legge 10", href: "/servizi/legge-10" },
      { label: "Impianti termici e climatizzazione", href: "/servizi/impianti-termici-climatizzazione" },
      { label: "APE e certificazione energetica", href: "/servizi/ape-certificazione-energetica" },
      { label: "Efficientamento energetico", href: "/servizi/efficientamento-energetico" },
    ],
    sources: [
      { label: "Gazzetta Ufficiale — DM 26 giugno 2015, schemi della relazione tecnica", href: "https://www.gazzettaufficiale.it/eli/id/2015/07/15/15A05199/sg" },
      { label: "Gazzetta Ufficiale — DM 26 giugno 2015, requisiti minimi degli edifici", href: "https://www.gazzettaufficiale.it/eli/id/2015/07/15/15A05198/sg" },
    ],
    content: [
      "La cosiddetta Relazione Legge 10 è la relazione tecnica energetica di progetto utilizzata per documentare il rispetto delle prescrizioni e dei requisiti minimi di prestazione energetica nei casi previsti dalla normativa. Il decreto 26 giugno 2015 definisce schemi e modalità di riferimento differenziati in funzione della tipologia di intervento.",
      "La relazione può riguardare nuove costruzioni, ristrutturazioni importanti e interventi di riqualificazione energetica, secondo la classificazione e le condizioni stabilite dalla disciplina applicabile. Non ogni lavoro edilizio richiede automaticamente lo stesso livello di verifica: il corretto inquadramento dipende dalle opere previste, dall'edificio, dagli impianti interessati e dalle disposizioni regionali pertinenti.",
      "La qualità della relazione dipende dal coordinamento dei dati di progetto. Geometrie, stratigrafie dell'involucro, serramenti, sistemi di generazione, distribuzione, emissione, regolazione e fonti rinnovabili devono essere coerenti con gli elaborati edilizi e impiantistici. Una modifica significativa del progetto può quindi richiedere di aggiornare anche le verifiche energetiche.",
      "La relazione tecnica non coincide con l'APE. La prima documenta le verifiche energetiche del progetto nei casi previsti; l'APE attesta invece la prestazione energetica dell'edificio o dell'unità immobiliare secondo la procedura di certificazione. Nei lavori di riqualificazione è utile coordinare fin dall'inizio pratica edilizia, progetto impiantistico e adempimenti energetici.",
    ],
  },
  {
    slug: "conformita-urbanistica-catastale-differenze",
    title: "Conformità urbanistica e catastale: le differenze",
    seoTitle: "Conformità urbanistica e catastale: differenze | Ingegneri & Co",
    category: "Edilizia",
    excerpt:
      "Perché conformità urbanistica e catastale sono verifiche diverse e quali documenti vanno confrontati prima di lavori o compravendite.",
    description:
      "Conformità urbanistica e catastale: differenze tra stato legittimo, titoli edilizi, planimetria catastale e stato dei luoghi.",
    publishedAt: "2026-09-19",
    relatedServices: [
      { label: "Conformità urbanistica e catastale", href: "/servizi/conformita-urbanistica-catastale" },
      { label: "Due diligence immobiliare", href: "/servizi/due-diligence-immobiliare" },
      { label: "Pratiche edilizie", href: "/servizi/pratiche-edilizie" },
    ],
    sources: [
      { label: "Normattiva — DPR 380/2001, art. 9-bis sullo stato legittimo", href: "https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3A2001%3B380~art9bis%21vig=" },
      { label: "Normattiva — DL 78/2010, art. 19 sulla conformità catastale negli atti", href: "https://www.normattiva.it/atto/caricaDettaglioAtto?atto.articolo.numero=19&atto.articolo.tipoArticolo=0&atto.codiceRedazionale=010G0101&atto.dataPubblicazioneGazzetta=2010-05-31" },
      { label: "Agenzia delle Entrate — Guida all'acquisto della casa", href: "https://www1.agenziaentrate.gov.it/web_app_entrate/guida_acquisto_casa.html" },
    ],
    content: [
      "Conformità urbanistica e conformità catastale riguardano piani diversi e non dovrebbero essere confuse. La verifica urbanistico-edilizia ricostruisce il quadro dei titoli e degli atti che concorrono a definire lo stato legittimo dell'immobile o dell'unità immobiliare secondo la disciplina edilizia. La verifica catastale riguarda invece i dati e la rappresentazione presenti negli archivi catastali.",
      "L'articolo 9-bis del DPR 380/2001 disciplina la documentazione amministrativa e lo stato legittimo degli immobili. La ricostruzione va svolta sul caso concreto, considerando i titoli rilevanti, gli eventuali atti successivi e la documentazione che la normativa ammette nei casi previsti.",
      "Sul piano catastale, per gli atti di trasferimento di unità immobiliari urbane la normativa richiede il riferimento alle planimetrie depositate e la dichiarazione di conformità allo stato di fatto dei dati catastali e delle planimetrie, dichiarazione che può essere sostituita nei casi previsti da un'attestazione di un tecnico abilitato. Questa verifica non sostituisce la ricostruzione urbanistico-edilizia.",
      "Prima di una compravendita, di una ristrutturazione o della presentazione di una nuova pratica è quindi utile confrontare stato dei luoghi, documentazione comunale e dati catastali. Se emergono scostamenti, occorre identificarne natura e origine prima di valutare eventuali aggiornamenti catastali, pratiche edilizie o percorsi di regolarizzazione ammessi dalla disciplina vigente.",
    ],
  }
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
        new Date(b.updatedAt ?? b.publishedAt).getTime() -
        new Date(a.updatedAt ?? a.publishedAt).getTime(),
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
