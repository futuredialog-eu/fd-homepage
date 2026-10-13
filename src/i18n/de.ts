import gettingOrganizedImage from '../assets/blog/undraw_getting-organized_lyqo.png';
import publicDiscussionImage from '../assets/blog/undraw_public-discussion_693m.png';
import puzzleSolvedImage from '../assets/blog/undraw_puzzle-solved_qdjq.png';
import hubImage from '../assets/images/hub.jpg';
import margusRaimImage from '../assets/team/margus-raim.png';
import toomasLaignaImage from '../assets/team/toomas-laigna.jpeg';
import type { Content } from './types';

export const de: Content = {
  meta: {
    title: 'Bürgerinformation und Beteiligung für Gemeinden | Future Dialog',
    description:
      'Wichtige Informationen leicht zugänglich machen, Anliegen der Bürger hören und sie an Entscheidungen beteiligen – mit der eigenen App Ihrer Gemeinde.',
  },
  ui: {
    bookDemo: 'Demo buchen',
    readMore: 'Mehr lesen',
    copyright: 'Alle Rechte vorbehalten.',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
  },
  consent: {
    message:
      'Wir verwenden Analyse-Cookies, um zu verstehen, wie die Website genutzt wird. Sie werden nur gesetzt, wenn Sie zustimmen.',
    learnMore: 'Datenschutzerklärung',
    accept: 'Akzeptieren',
    decline: 'Ablehnen',
    settings: 'Cookie-Einstellungen',
  },
  navigation: [
    { label: 'Startseite', href: '/' },
    { label: 'Funktionen', href: '/features/' },
    { label: 'Kunden', href: '/customers-partners/' },
    { label: 'Blog & News', href: '/blog/' },
    { label: 'Kontakt', href: '/contacts/' },
    { label: 'Anmelden', href: 'https://app.futuredialog.eu', external: true },
  ],
  policyLinks: [
    { label: 'EULA', href: '/eula/' },
    { label: 'Datenschutzerklärung', href: '/application-privacy-policy/' },
  ],
  hero: {
    title: 'Öffentliche Dienste, gestaltet mit den Menschen, für die sie da sind.',
    description:
      'Machen Sie wichtige Informationen leicht auffindbar, geben Sie Bürgerinnen und Bürgern eine einfache Möglichkeit, gehört zu werden, und beteiligen Sie sie an den Entscheidungen, die ihr Umfeld prägen. Nutzen Sie weiterhin Ihre bestehenden Kanäle – wir bündeln ihre Inhalte an einem Ort, erleichtern das Veröffentlichen und ergänzen einen direkten Kanal auf die Smartphones der Bürger.',
    image: hubImage,
    imageAlt: 'Bürgerbeteiligung',
  },
  howSection: {
    title: 'Was Ihre Gemeinde gewinnt',
    description: 'Besser informierte Bürger, klarere Prioritäten und mehr Vertrauen.',
    items: [
      {
        icon: 'how-1',
        title: 'Informieren',
        subTitle: 'Informationen, die ankommen',
        list: [
          'Bürger finden Neuigkeiten, Veranstaltungen und Service-Hinweise an einem vertrauten Ort',
          'Dringende Meldungen erreichen die Menschen schnell und direkt – auch in der Krise',
        ],
      },
      {
        icon: 'how-2',
        title: 'Zuhören',
        subTitle: 'Wissen, was Bürger brauchen',
        list: [
          'Bürger teilen Anliegen und Ideen, wann es ihnen passt',
          'Sie erkennen Probleme früh, bevor sie größer werden',
        ],
      },
      {
        icon: 'how-3',
        title: 'Entscheiden',
        subTitle: 'Entscheidungen mit fundierter Grundlage',
        list: [
          'Verstehen, was den Menschen in Ihrer Gemeinde am wichtigsten ist',
          'Prioritäten setzen und Entscheidungen mit echtem Bürgerfeedback begründen',
        ],
      },
      {
        icon: 'how-4',
        title: 'Verbinden',
        subTitle: 'Vertrauen, das wächst',
        list: [
          'Bürger sehen, dass ihre Beiträge zu Ergebnissen führen',
          'Mehr Menschen beteiligen sich am Gemeindeleben und an Entscheidungen',
        ],
      },
    ],
  },
  counters: [
    { count: '700.000', description: 'gegebene Antworten' },
    { count: '30.000', description: 'Mitglieder in Gemeinschaften' },
    { count: '43', description: 'ausgelieferte Apps' },
    { count: '5', description: 'Länder' },
  ],
  reviews: [
    {
      review:
        'Diese App ist eine ideale Lösung für die Krisenkommunikation. Wenn es auf lokaler Ebene zu einer Krise kommt, ist die App der beste Kanal, um die Menschen zu informieren – die Informationen erreichen sie schnell und direkt.',
      author: 'Liina Siniveer',
      position: 'Leiterin Kommunikation, Gemeinde Hiiumaa',
    },
    {
      review:
        'Wir haben das Gefühl, dass die Gemeinde mit der App näher an der Gemeinschaft ist – gewissermaßen in der Hosentasche der Menschen –, weil sie bequem Feedback geben und die neuesten Nachrichten lesen können. Unsere App bündelt verschiedene Seiten der Gemeinde und ist damit ein direkter Kanal für die wichtigsten Informationen.',
      author: 'Merilyn Säde',
      position: 'Kommunikationsmanagerin, Gemeinde Elva',
    },
    {
      review:
        'Aus Sicht der Einwohnerinnen und Einwohner ist die App eine bequeme Möglichkeit, Anliegen und Gedanken mitzuteilen. Für die Kommunalverwaltung ist es wichtig zu wissen, was gut läuft und was verbessert werden muss, um alle zu bearbeitenden Themen zu erkennen. Die App verbindet und schafft dafür eine Möglichkeit.',
      author: 'Maarja Ilves',
      position: 'Ehemalige Kommunikationsreferentin, Gemeinde Järva',
    },
    {
      review:
        'Die Menschen erhalten und finden Informationen in der App besser als in sozialen Medien. Es gab Fälle, in denen wir Informationen auf allen unseren Kanälen geteilt haben, sie in den sozialen Medien aber unbemerkt blieben. Mit der App ist sicher, dass die notwendigen Informationen unsere Menschen erreichen.',
      author: 'Estrit Aasma',
      position: 'Kommunikationsreferentin, Gemeinde Tartu',
    },
  ],
  blogSection: {
    title: 'Unser Blog',
    readMore: 'Alle Neuigkeiten lesen',
    readMoreHref: '/blog/',
    posts: [
      {
        title: 'Die Herausforderungen der Kommunikation in Kommunalverwaltungen',
        href: '/blog/die-herausforderungen-der-kommunikation-in-kommunalverwaltungen/',
        image: puzzleSolvedImage,
        categories: [
          { label: 'Beteiligung', href: '/blog/category/engagement/' },
          { label: 'Kommunen', href: '/blog/category/municipality/' },
        ],
        readingTime: '3 Min. Lesezeit',
        date: '12. Oktober 2026',
        dateTime: '2026-10-12T12:00:00+03:00',
      },
      {
        title: 'Warum Bürgerbeteiligung wichtig ist',
        href: '/blog/warum-buergerbeteiligung-wichtig-ist/',
        image: gettingOrganizedImage,
        categories: [
          { label: 'Beteiligung', href: '/blog/category/engagement/' },
          { label: 'Kommunen', href: '/blog/category/municipality/' },
        ],
        readingTime: '3 Min. Lesezeit',
        date: '1. Oktober 2026',
        dateTime: '2026-10-01T12:00:00+03:00',
      },
      {
        title: '10 Vorteile von Community-Apps für Gemeinden und Gemeinschaften',
        href: '/blog/10-vorteile-von-community-apps-fuer-gemeinden-und-gemeinschaften/',
        image: publicDiscussionImage,
        categories: [
          { label: 'Beteiligung', href: '/blog/category/engagement/' },
          { label: 'Kommunen', href: '/blog/category/municipality/' },
          { label: 'News', href: '/blog/category/news/' },
        ],
        readingTime: '2 Min. Lesezeit',
        date: '29. Juli 2021',
        dateTime: '2021-07-29T13:15:40+03:00',
      },
    ],
  },
  contactSection: {
    title: 'Kontakt aufnehmen',
    quote: 'Lassen Sie uns darüber sprechen, wie Future Dialog Ihnen helfen kann, Ihre Gemeinschaft besser zu verstehen!',
    people: [
      {
        name: 'Toomas Laigna',
        position: 'Geschäftsführer',
        phone: '+372 559 83 604',
        phoneHref: 'tel:372 559 83 604',
        email: 'toomas@futuredialog.eu',
        image: toomasLaignaImage,
      },
      {
        name: 'Margus Räim',
        position: 'Produktmanager',
        phone: '+372 511 9436',
        phoneHref: 'tel:372 511 9436',
        email: 'margus.raim@futuredialog.eu',
        image: margusRaimImage,
      },
    ],
  },
  featuresPage: {
    meta: {
      title: 'Funktionen: Umfragen, Feedback und News | Future Dialog',
      description:
        'Beteiligen Sie Bürger mit Umfragen, Feedback-Kanal, Neuigkeiten, Push-Mitteilungen und Analyse-Dashboard in der eigenen App Ihrer Gemeinde.',
    },
    intro:
      'Future Dialog ist die Zukunft engagierter Gemeinschaften. Mit unserer mobilen App wird das Lesen von Nachrichten und die Mitwirkung in der Gemeinschaft transparent und jederzeit für alle verfügbar. Wir helfen Ihnen, aktive Gespräche anzustoßen und mit weniger Ressourcen datenbasierte Entscheidungen zu treffen.',
    items: [
      {
        title: 'Mobile App und Website',
        description:
          'Ihre neue App läuft auf iOS, Android und im Web. Passen Sie sie ganz nach Ihren Vorstellungen an – mit Ihrem Logo, Ihren Farben und Ihrem Stil.',
      },
      {
        title: 'Aussagekräftige Daten',
        description:
          'Wissen Sie, mit wem Sie sprechen? Mit unserem Dashboard und Datencenter steuern Sie Inhalte und gewinnen verwertbare Erkenntnisse über Ihre Gemeinschaft.',
      },
      {
        title: 'Beiträge',
        description:
          'Erstellen Sie im Online-Dashboard Beiträge, um Nachrichten zu veröffentlichen, Ankündigungen zu machen oder Umfragen durchzuführen. Beiträge erleichtern die Navigation durch die Inhalte.',
      },
      {
        title: 'RSS',
        description:
          'Weniger Arbeit für Sie, mehr Inhalte für die Gemeinschaft. Bringen Sie die wichtigsten Nachrichten automatisch per RSS-Feed in die App.',
      },
      {
        title: 'Verwertbares Feedback',
        description:
          'Treten Sie im Feedback-Kanal in den Dialog mit den Mitgliedern Ihrer Gemeinschaft. Fragen Sie zusätzlich zu Umfragen nach ausführlichen Meinungen und bieten Sie sofort Lösungen an.',
      },
    ],
    caseSection: {
      title: 'Fallstudien',
      description: 'Wer die Lösung nutzt',
      items: [
        {
          icon: 'case-1',
          title: 'Kommunen',
          href: '/blog/category/municipality/',
        },
        {
          icon: 'case-4',
          title: 'Sonstige',
          href: '/blog/category/news/',
        },
      ],
    },
    quote: 'Lassen Sie uns darüber sprechen, wie Future Dialog Ihnen helfen kann, Ihre Gemeinschaft besser zu verstehen!',
  },
  blogPage: {
    meta: {
      title: 'Blog: Bürgerbeteiligung in Gemeinden | Future Dialog',
      description:
        'Artikel und Fallstudien zu Bürgerbeteiligung, Bürgerkommunikation und dazu, wie Gemeinden Community-Apps in der Praxis nutzen.',
    },
    title: 'News',
    description:
      'Folgen Sie unseren Neuigkeiten, Geschichten und besonderen Einblicken! Lösungen für Beteiligung in verschiedenen Bereichen',
    categoryLabels: {
      news: 'News',
      engagement: 'Beteiligung',
      municipality: 'Kommunen',
    },
    readingTime: '{minutes} Min. Lesezeit',
    photoCredit: 'Foto von',
    shareTitle: 'Gefällt Ihnen dieser Artikel? Teilen Sie ihn.',
  },
  contactsPage: {
    meta: {
      title: 'Kontakt und Demo-Termin | Future Dialog',
      description: 'Nehmen Sie Kontakt mit Future Dialog auf und vereinbaren Sie eine Demo unserer Bürgerbeteiligungs-App für Gemeinden und Organisationen.',
    },
    title: 'Kontakt',
    aboutTitle: 'Wer sind wir?',
    aboutDescription:
      'Future Dialog wurde gegründet, um die Lücke zwischen den Menschen in Smart Cities und den Verwaltungen zu schließen, die etwas bewegen wollen. Wir entwickeln moderne mobile Apps, die Beteiligung fördern. Wir helfen Ihnen, aktive Gespräche anzustoßen und mit weniger Ressourcen datenbasierte Entscheidungen zu treffen.',
  },
  customersPage: {
    meta: {
      title: 'Kunden und Partner | Future Dialog',
      description:
        'Gemeinden, die ihre Bürger mit Future Dialog beteiligen, und wie Partner unsere Beteiligungsplattform ihren Kunden anbieten können.',
    },
    title: 'Unsere zufriedenen Kunden',
    items: [
      {
        title: 'Saue',
        description: 'Gemeinde Saue',
        image: '/images/customers/saue.jpg',
        href: 'https://sauevald.ee/',
      },
      {
        title: 'Boden',
        description: 'Gemeinde Boden',
        image: '/images/customers/boden.jpg',
        href: 'https://boden.se/',
      },
    ],
    partners: {
      offerTitle: 'Was wir bieten',
      offerDescription:
        'Als Partner von Future Dialog können Sie die Bindung zu Ihren Kunden stärken, Ihren Umsatz steigern, die Zusammenarbeit im Team verbessern und Ihre Geschäftsbasis erweitern. Unsere Partner erschließen mit unserer cloudbasierten Plattform neue Geschäftsfelder. Unsere technische Lösung lässt sich mit unseren vorkonfigurierten Paketen für zahlreiche Anwendungsfälle nutzen und anpassen.',
      benefitsTitle: 'Welche Vorteile bieten wir Ihnen?',
      benefits: [
        'Volle Unterstützung beim Aufbau erfolgreicher Business Cases',
        'Schnelle und skalierbare Einrichtung, vollständige technische Wartung',
        'Intelligente Aufgaben und Zielgruppenansprache auf Basis von Feedback und Umfragen',
        'Schneller kommunizieren und einfach zusammenarbeiten',
        'Fertige Vertriebs- und Marketingwerkzeuge',
        'Vollständig entwickelte technische Cloud-Plattform',
      ],
      workTitle: 'Wie wir arbeiten',
      workDescription:
        'Wir entwickeln modernste Technologie für Beteiligung im mobilen Umfeld. Daher erwarten wir von unseren Partnern, dass sie starke und etablierte Akteure in ihren Fachgebieten sind, um den Endnutzern das bestmögliche Erlebnis zu bieten. Wenn Sie eine bestehende Gemeinschaft mobil und messbar einbinden möchten, nehmen Sie Kontakt mit uns auf – wir erzählen Ihnen gern mehr über unsere Cloud-Plattform.',
    },
    quote: 'Lassen Sie uns darüber sprechen, wie Future Dialog Ihnen helfen kann, Ihre Gemeinschaft besser zu verstehen!',
  },
};
