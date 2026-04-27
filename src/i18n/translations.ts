export const languages = {
  en: 'English',
  cs: 'Čeština',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.speaking': 'Speaking',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Petr Stanislav',
    'hero.name.line1': 'Petr Stanislav —',
    'hero.name.line2': 'AI Leader & CTO',
    'hero.subtitle': 'AI Leader | CTO | Consultant',
    'hero.description': "I help companies navigate AI adoption—from strategy to production. CTO & Co-Founder at Elm.ai, with a PhD in AI and years of experience building data-driven solutions.",
    'hero.cta.primary': "Let's Talk",
    'hero.cta.secondary': 'Learn More',

    // What I Do
    'whatido.title': 'What I Do',
    'whatido.strategy.title': 'AI Strategy & Implementation',
    'whatido.strategy.description': 'Helping companies navigate AI adoption from strategy to production.',
    'whatido.leadership.title': 'Technical Leadership',
    'whatido.leadership.description': 'Building and leading teams that deliver impactful AI solutions.',
    'whatido.research.title': 'Research & Innovation',
    'whatido.research.description': 'PhD researcher bridging academic insights with practical applications.',

    // Social Proof
    'trusted.by': 'Trusted by',

    // Recent Activity
    'recent.title': 'Recent Activity',
    'recent.viewall': 'View all',

    // CTA Section
    'cta.title': 'Ready to discuss your AI strategy?',
    'cta.description': "Whether you're starting your AI journey or scaling existing solutions, I'd love to hear about your challenges.",
    'cta.button': 'Get in Touch',

    // About Page
    'about.title': 'About Me',
    'about.subtitle': 'From academic research to building AI products at scale',
    'about.experience': 'Experience',
    'about.expertise': 'Expertise',
    'about.education': 'Education',
    'about.technical': 'Technical',
    'about.leadership': 'Leadership',
    'about.cta.title': 'Want to work together?',
    'about.cta.description': "I'm always interested in discussing AI strategy, technical challenges, or speaking opportunities.",

    // Speaking Page
    'speaking.title': 'Speaking',
    'speaking.subtitle': 'Talks, podcasts, and presentations on AI and technology',
    'speaking.empty': 'Speaking engagements coming soon. Check back later or connect with me on',
    'speaking.cta.title': 'Interested in having me speak?',
    'speaking.cta.description': 'I speak about AI adoption, technical leadership, building AI products, and machine learning in practice.',
    'speaking.watch': 'Watch',
    'speaking.slides': 'Slides',

    // Projects Page
    'projects.title': 'Projects',
    'projects.subtitle': "Things I've built and contributed to",
    'projects.empty': 'Projects coming soon. In the meantime, check out my',
    'projects.opensource': 'Open Source',
    'projects.opensource.description': 'Check out my contributions and experiments on GitHub.',
    'projects.github': 'View GitHub Profile',
    'projects.cta.title': 'Have a project in mind?',
    'projects.cta.description': "I'm always interested in challenging technical problems and AI applications.",

    // Contact Page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let\'s discuss how I can help with your AI challenges',
    'contact.connect': "Let's Connect",
    'contact.connect.description': "Whether you're looking for AI consulting, interested in having me speak at your event, or just want to discuss technology and innovation—I'd love to hear from you.",
    'contact.help.title': 'What I Can Help With',
    'contact.help.strategy': 'AI Strategy & Consulting',
    'contact.help.strategy.description': 'Help your organization navigate AI adoption, from identifying use cases to implementation strategy and team building.',
    'contact.help.advisory': 'Technical Advisory',
    'contact.help.advisory.description': 'Architecture reviews, technology selection, and guidance on building scalable AI/ML systems.',
    'contact.help.speaking': 'Speaking & Workshops',
    'contact.help.speaking.description': 'Keynotes, conference talks, and hands-on workshops on AI, data science, and technical leadership.',
    'contact.help.media': 'Podcast & Media',
    'contact.help.media.description': 'Happy to discuss AI trends, startup experiences, and technology on podcasts and media appearances.',
    'contact.schedule': 'Schedule a Call',
    'contact.schedule.description': 'Prefer to schedule directly? Book a time that works for you.',
    'contact.schedule.placeholder': 'Calendly integration coming soon. For now, please reach out via LinkedIn.',
    'contact.linkedin': 'Message on LinkedIn',

    // Footer
    'footer.rights': 'All rights reserved.',

    // Types
    'type.talk': 'Talk',
    'type.podcast': 'Podcast',
    'type.workshop': 'Workshop',
    'type.panel': 'Panel',
  },
  cs: {
    // Navigation
    'nav.home': 'Domů',
    'nav.about': 'O mně',
    'nav.speaking': 'Přednášky',
    'nav.projects': 'Projekty',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.title': 'Petr Stanislav',
    'hero.name.line1': 'Petr Stanislav —',
    'hero.name.line2': 'AI Leader & CTO',
    'hero.subtitle': 'AI Leader | CTO | Konzultant',
    'hero.description': 'Pomáhám firmám s adopcí AI—od strategie po produkci. CTO & Co-Founder Elm.ai, s PhD v AI a lety zkušeností s budováním datových řešení.',
    'hero.cta.primary': 'Pojďme si promluvit',
    'hero.cta.secondary': 'Více informací',

    // What I Do
    'whatido.title': 'Čím se zabývám',
    'whatido.strategy.title': 'AI Strategie & Implementace',
    'whatido.strategy.description': 'Pomáhám firmám s adopcí AI od strategie po produkci.',
    'whatido.leadership.title': 'Technické vedení',
    'whatido.leadership.description': 'Budování a vedení týmů, které dodávají efektivní AI řešení.',
    'whatido.research.title': 'Výzkum & Inovace',
    'whatido.research.description': 'PhD výzkumník propojující akademické poznatky s praktickými aplikacemi.',

    // Social Proof
    'trusted.by': 'Důvěřují mi',

    // Recent Activity
    'recent.title': 'Nedávná aktivita',
    'recent.viewall': 'Zobrazit vše',

    // CTA Section
    'cta.title': 'Připraveni diskutovat vaši AI strategii?',
    'cta.description': 'Ať už začínáte s AI nebo škálujete existující řešení, rád si poslechnu o vašich výzvách.',
    'cta.button': 'Kontaktujte mě',

    // About Page
    'about.title': 'O mně',
    'about.subtitle': 'Od akademického výzkumu k budování AI produktů ve velkém měřítku',
    'about.experience': 'Zkušenosti',
    'about.expertise': 'Odbornost',
    'about.education': 'Vzdělání',
    'about.technical': 'Technické',
    'about.leadership': 'Vedení',
    'about.cta.title': 'Chcete spolupracovat?',
    'about.cta.description': 'Vždy rád diskutuji o AI strategii, technických výzvách nebo příležitostech k přednáškám.',

    // Speaking Page
    'speaking.title': 'Přednášky',
    'speaking.subtitle': 'Přednášky, podcasty a prezentace o AI a technologiích',
    'speaking.empty': 'Přednášky brzy. Mezitím se se mnou spojte na',
    'speaking.cta.title': 'Máte zájem o přednášku?',
    'speaking.cta.description': 'Přednáším o adopci AI, technickém vedení, budování AI produktů a strojovém učení v praxi.',
    'speaking.watch': 'Sledovat',
    'speaking.slides': 'Slajdy',

    // Projects Page
    'projects.title': 'Projekty',
    'projects.subtitle': 'Věci, které jsem vytvořil a na kterých jsem se podílel',
    'projects.empty': 'Projekty brzy. Mezitím se podívejte na můj',
    'projects.opensource': 'Open Source',
    'projects.opensource.description': 'Podívejte se na mé příspěvky a experimenty na GitHubu.',
    'projects.github': 'Zobrazit GitHub profil',
    'projects.cta.title': 'Máte nápad na projekt?',
    'projects.cta.description': 'Vždy mě zajímají náročné technické problémy a AI aplikace.',

    // Contact Page
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Pojďme probrat, jak vám mohu pomoci s AI výzvami',
    'contact.connect': 'Spojme se',
    'contact.connect.description': 'Ať už hledáte AI konzultace, máte zájem o přednášku na vaší akci, nebo si chcete jen popovídat o technologiích a inovacích—rád se s vámi spojím.',
    'contact.help.title': 'S čím mohu pomoci',
    'contact.help.strategy': 'AI Strategie & Konzultace',
    'contact.help.strategy.description': 'Pomohu vaší organizaci s adopcí AI, od identifikace případů užití po strategii implementace a budování týmu.',
    'contact.help.advisory': 'Technické poradenství',
    'contact.help.advisory.description': 'Revize architektury, výběr technologií a rady pro budování škálovatelných AI/ML systémů.',
    'contact.help.speaking': 'Přednášky & Workshopy',
    'contact.help.speaking.description': 'Keynote přednášky, konferenční prezentace a praktické workshopy o AI, data science a technickém vedení.',
    'contact.help.media': 'Podcasty & Média',
    'contact.help.media.description': 'Rád diskutuji o AI trendech, startup zkušenostech a technologiích v podcastech a médiích.',
    'contact.schedule': 'Naplánovat hovor',
    'contact.schedule.description': 'Preferujete přímé naplánování? Rezervujte si čas, který vám vyhovuje.',
    'contact.schedule.placeholder': 'Integrace Calendly brzy. Prozatím mě prosím kontaktujte přes LinkedIn.',
    'contact.linkedin': 'Napsat na LinkedIn',

    // Footer
    'footer.rights': 'Všechna práva vyhrazena.',

    // Types
    'type.talk': 'Přednáška',
    'type.podcast': 'Podcast',
    'type.workshop': 'Workshop',
    'type.panel': 'Panel',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof translations['en']): string {
    return translations[lang][key] || translations[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) {
    return cleanPath;
  }
  return `/${lang}${cleanPath}`;
}
