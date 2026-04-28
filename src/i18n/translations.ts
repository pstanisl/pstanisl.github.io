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
    'nav.work': 'Work',
    'nav.connect': 'Connect',

    // Hero
    'hero.title': 'Petr Stanislav',
    'hero.subtitle': 'AI Leader | CTO | Consultant',
    'hero.description': "I help companies navigate AI adoption—from strategy to production. CTO & Co-Founder at Elin.ai, with a PhD in AI and years of experience building data-driven solutions.",

    // Home Page
    'home.hero.label': 'AI Engineering · Leadership · Research',
    'home.hero.tagline': "I build AI systems that ship to production. CTO, researcher, and the person companies call when they need AI strategy that actually works.",
    'home.hero.scroll': '↓ scroll',
    'home.work.title': 'Selected Work',
    'home.work.viewall': 'View all work →',
    'home.signal.title': 'Currently',
    'home.connect.heading': "Let's talk.",
    'home.connect.subtext': 'AI strategy, technical advisory, or just a good conversation about where this is all going.',
    'home.connect.cta': 'Get in touch →',

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

    // Work Page
    'work.title': 'Work',
    'work.subtitle': 'Projects, talks, and everything in between',
    'work.filter.all': 'All',
    'work.filter.projects': 'Projects',
    'work.filter.talks': 'Talks',

    // Connect Page
    'connect.title': 'Connect',
    'connect.heading': "Let's talk.",
    'connect.subtext': 'AI strategy, technical advisory, or just a good conversation about where this is all going.',
    'connect.cta': 'Message on LinkedIn',

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
    'nav.work': 'Práce',
    'nav.connect': 'Spojme se',

    // Hero
    'hero.title': 'Petr Stanislav',
    'hero.subtitle': 'AI Leader | CTO | Konzultant',
    'hero.description': 'Pomáhám firmám s adopcí AI—od strategie po produkci. CTO & Co-Founder Elin.ai, s PhD v AI a lety zkušeností s budováním datových řešení.',

    // Home Page
    'home.hero.label': 'AI Inženýrství · Vedení · Výzkum',
    'home.hero.tagline': 'Stavím AI systémy, které fungují v produkci. CTO, výzkumník a člověk, kterého firmy volají, když potřebují AI strategii, která opravdu funguje.',
    'home.hero.scroll': '↓ scroll',
    'home.work.title': 'Vybraná práce',
    'home.work.viewall': 'Zobrazit vše →',
    'home.signal.title': 'Aktuálně',
    'home.connect.heading': 'Pojďme si promluvit.',
    'home.connect.subtext': 'AI strategie, technické poradenství, nebo jen dobrý rozhovor o tom, kam to všechno směřuje.',
    'home.connect.cta': 'Ozvěte se →',

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

    // Work Page
    'work.title': 'Práce',
    'work.subtitle': 'Projekty, přednášky a vše mezi tím',
    'work.filter.all': 'Vše',
    'work.filter.projects': 'Projekty',
    'work.filter.talks': 'Přednášky',

    // Connect Page
    'connect.title': 'Kontakt',
    'connect.heading': 'Pojďme si promluvit.',
    'connect.subtext': 'AI strategie, technické poradenství, nebo jen dobrý rozhovor o tom, kam to všechno směřuje.',
    'connect.cta': 'Napsat na LinkedIn',

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
