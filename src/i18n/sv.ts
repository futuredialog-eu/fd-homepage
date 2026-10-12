import gettingOrganizedImage from '../assets/blog/undraw_getting-organized_lyqo.png';
import publicDiscussionImage from '../assets/blog/undraw_public-discussion_693m.png';
import puzzleSolvedImage from '../assets/blog/undraw_puzzle-solved_qdjq.png';
import hubImage from '../assets/images/hub.jpg';
import margusRaimImage from '../assets/team/margus-raim.png';
import toomasLaignaImage from '../assets/team/toomas-laigna.jpeg';
import type { Content } from './types';

export const sv: Content = {
  meta: {
    title: 'Invånarapp för kommunal kommunikation | Future Dialog',
    description:
      'En invånarapp för kommuner: dela nyheter, skicka pushnotiser, gör enkäter och samla in synpunkter från invånarna – allt på ett ställe.',
  },
  ui: {
    bookDemo: 'Boka en demo',
    readMore: 'Läs mer',
    copyright: 'Alla rättigheter förbehållna.',
    openMenu: 'Öppna meny',
    closeMenu: 'Stäng meny',
  },
  consent: {
    message: 'Vi använder analyscookies för att förstå hur webbplatsen används. De sätts bara om du godkänner dem.',
    learnMore: 'Integritetspolicy',
    accept: 'Godkänn',
    decline: 'Avböj',
    settings: 'Cookieinställningar',
  },
  navigation: [
    { label: 'Hem', href: '/' },
    { label: 'Funktioner', href: '/features/' },
    { label: 'Kunder', href: '/customers-partners/' },
    { label: 'Blogg & nyheter', href: '/blog/' },
    { label: 'Kontakt', href: '/contacts/' },
    { label: 'Logga in', href: 'https://app.futuredialog.eu', external: true },
  ],
  policyLinks: [
    { label: 'EULA', href: '/eula/' },
    { label: 'Integritetspolicy', href: '/application-privacy-policy/' },
  ],
  hero: {
    title: 'En direkt kontakt mellan dig och dina invånare.',
    description:
      'Håll invånarna informerade, samla in synpunkter och uppmuntra till delaktighet – allt via kommunens egen mobilapp. Inga algoritmer från sociala medier mellan dig och invånarna.',
    image: hubImage,
    imageAlt: 'Invånardelaktighet',
  },
  howSection: {
    title: 'Hur kan vi hjälpa till?',
    description: 'Vi för samman människor.',
    items: [
      {
        icon: 'how-1',
        title: 'Engagera',
        subTitle: 'Håll människor delaktiga',
        list: [
          'Mobilapp och webbpanel med er egen profil, precis som ni vill ha den',
          'Enkäter, evenemangskalender och pushnotiser',
        ],
      },
      {
        icon: 'how-2',
        title: 'Lyssna',
        subTitle: 'Förstå era invånare',
        list: ['Kartlägg invånarnas behov och önskemål', 'Samla in deras förslag och synpunkter'],
      },
      {
        icon: 'how-3',
        title: 'Analysera',
        subTitle: 'Informationen nära till hands',
        list: ['Samla in och kategorisera insikter', 'Fatta beslut baserade på insikter'],
      },
      {
        icon: 'how-4',
        title: 'Knyt samman',
        subTitle: 'Kontakter som gör skillnad',
        list: ['Bygg upp invånarnas förtroende och engagemang', 'Få omedelbar återkoppling och starta samtal'],
      },
    ],
  },
  counters: [
    { count: '700 000', description: 'givna svar' },
    { count: '30 000', description: 'invånare' },
    { count: '43', description: 'levererade appar' },
    { count: '5', description: 'länder' },
  ],
  reviews: [
    {
      review:
        'Appen är en idealisk lösning för kriskommunikation. Om det uppstår någon form av kris på lokal nivå är appen den bästa kanalen för att informera människor – informationen når fram snabbt och direkt.',
      author: 'Liina Siniveer',
      position: 'Kommunikationschef, Hiiumaa kommun',
    },
    {
      review:
        'Vi upplever att kommunen med appen kommer närmare invånarna, nästan som om den fanns i deras bakficka, eftersom de enkelt kan lämna synpunkter och läsa de senaste nyheterna. Vår app samlar kommunens olika sidor på ett ställe, så den fungerar som en direkt kanal till den viktigaste informationen.',
      author: 'Merilyn Säde',
      position: 'Kommunikationsansvarig, Elva kommun',
    },
    {
      review:
        'Ur en invånares perspektiv är appen ett smidigt sätt att framföra sina bekymmer och tankar. Det är viktigt för kommunen att veta vad som fungerar bra och vad som behöver förbättras, för att kunna hitta alla frågor som behöver hanteras. Appen knyter samman och skapar möjligheten till detta.',
      author: 'Maarja Ilves',
      position: 'Tidigare kommunikatör, Järva kommun',
    },
    {
      review:
        'Människor tar del av och hittar information bättre i appen än i sociala medier. Det har hänt att vi har delat information i alla våra kanaler, men att den har gått obemärkt förbi i sociala medier. Med appen kan vi vara säkra på att den nödvändiga informationen når våra invånare.',
      author: 'Estrit Aasma',
      position: 'Kommunikatör, Tartu kommun',
    },
  ],
  blogSection: {
    title: 'Vår blogg',
    readMore: 'Läs alla nyheter',
    readMoreHref: '/blog/',
    posts: [
      {
        title: 'Utmaningarna med kommunikationsarbete i kommuner',
        href: '/blog/utmaningarna-med-kommunikationsarbete-i-kommuner/',
        image: puzzleSolvedImage,
        categories: [
          { label: 'Delaktighet', href: '/blog/category/engagement/' },
          { label: 'Kommun', href: '/blog/category/municipality/' },
        ],
        readingTime: '3 min läsning',
        date: '12 oktober 2026',
        dateTime: '2026-10-12T12:00:00+03:00',
      },
      {
        title: 'Varför invånardelaktighet är viktigt',
        href: '/blog/varfor-invanardelaktighet-ar-viktigt/',
        image: gettingOrganizedImage,
        categories: [
          { label: 'Delaktighet', href: '/blog/category/engagement/' },
          { label: 'Kommun', href: '/blog/category/municipality/' },
        ],
        readingTime: '3 min läsning',
        date: '1 oktober 2026',
        dateTime: '2026-10-01T12:00:00+03:00',
      },
      {
        title: '10 fördelar med invånarappar för kommuner och lokalsamhällen',
        href: '/blog/10-fordelar-med-invanarappar-for-kommuner-och-lokalsamhallen/',
        image: publicDiscussionImage,
        categories: [
          { label: 'Delaktighet', href: '/blog/category/engagement/' },
          { label: 'Kommun', href: '/blog/category/municipality/' },
          { label: 'Nyheter', href: '/blog/category/news/' },
        ],
        readingTime: '2 min läsning',
        date: '29 juli 2021',
        dateTime: '2021-07-29T13:15:40+03:00',
      },
    ],
  },
  contactSection: {
    title: 'Kontakta oss',
    quote: 'Låt oss prata om hur Future Dialog kan hjälpa er att förstå era invånare bättre!',
    people: [
      {
        name: 'Toomas Laigna',
        position: 'Verkställande direktör',
        phone: '+372 559 83 604',
        phoneHref: 'tel:372 559 83 604',
        email: 'toomas@futuredialog.eu',
        image: toomasLaignaImage,
      },
      {
        name: 'Margus Räim',
        position: 'Produktägare',
        phone: '+372 511 9436',
        phoneHref: 'tel:372 511 9436',
        email: 'margus.raim@futuredialog.eu',
        image: margusRaimImage,
      },
    ],
  },
  featuresPage: {
    meta: {
      title: 'Funktioner: enkäter, synpunkter och nyheter | Future Dialog',
      description:
        'Engagera invånarna med enkäter, en kanal för synpunkter, nyheter, pushnotiser och en analyspanel i kommunens egen app.',
    },
    intro:
      'Future Dialog är framtiden för engagerade lokalsamhällen. Vår mobilapp gör det transparent och alltid möjligt för invånarna att läsa nyheter och bidra till samhället. Vi hjälper er att starta aktiva samtal och fatta datadrivna beslut med mindre resurser.',
    items: [
      {
        title: 'Mobilapp och webbplats',
        description:
          'Er nya app fungerar på iOS, Android och webben. Anpassa den så att den ser ut precis som ni vill – lägg till er logotyp, era färger och er stil.',
      },
      {
        title: 'Kraftfull data',
        description:
          'Vet ni vem ni pratar med? Med vår panel och vårt datacenter styr ni innehållet och får användbara insikter om era invånare.',
      },
      {
        title: 'Inlägg',
        description:
          'Skapa inlägg i webbpanelen för att publicera nyheter, göra tillkännagivanden eller skapa enkäter. Inläggen gör det enkelt att navigera i innehållet.',
      },
      {
        title: 'RSS',
        description:
          'Mindre arbete för er, mer innehåll för invånarna. Få in de viktigaste nyheterna i appen automatiskt med ett enkelt RSS-flöde.',
      },
      {
        title: 'Synpunkter som leder till handling',
        description:
          'Skapa en dialog med invånarna i kanalen för synpunkter. Utöver enkäter kan ni be om utförliga åsikter och erbjuda lösningar direkt.',
      },
    ],
    caseSection: {
      title: 'Kundcase',
      description: 'Vem använder lösningen',
      items: [
        {
          icon: 'case-1',
          title: 'Kommuner',
          href: '/blog/category/municipality/',
        },
        {
          icon: 'case-4',
          title: 'Övriga',
          href: '/blog/category/news/',
        },
      ],
    },
    quote: 'Låt oss prata om hur Future Dialog kan hjälpa er att förstå era invånare bättre!',
  },
  blogPage: {
    meta: {
      title: 'Blogg: invånardialog i kommuner | Future Dialog',
      description:
        'Artiklar och fallstudier om invånardialog, kommunikation med invånare och hur kommuner använder invånarappar i praktiken.',
    },
    title: 'Nyheter',
    description: 'Följ våra nyheter, berättelser och unika insikter! Lösningar för delaktighet inom olika områden',
    categoryLabels: {
      news: 'Nyheter',
      engagement: 'Delaktighet',
      municipality: 'Kommun',
    },
    readingTime: '{minutes} min läsning',
    photoCredit: 'Bild från',
    shareTitle: 'Gillar du artikeln? Sprid den vidare.',
  },
  contactsPage: {
    meta: {
      title: 'Kontakta oss och boka en demo | Future Dialog',
      description:
        'Kontakta Future Dialog i Tallinn och boka en demo av vår app för invånardialog för kommuner och organisationer.',
    },
    title: 'Kontakt',
    aboutTitle: 'Vilka är vi?',
    aboutDescription:
      'Future Dialog grundades för att överbrygga klyftan mellan människor som bor i smarta städer och de offentliga aktörer som vill göra skillnad. Vi bygger moderna mobilappar som främjar delaktighet. Vi hjälper er att starta aktiva samtal och fatta datadrivna beslut med mindre resurser.',
  },
  customersPage: {
    meta: {
      title: 'Kunder och partner | Future Dialog',
      description:
        'Kommuner som engagerar sina invånare med Future Dialog, och hur partner kan erbjuda vår plattform för invånardialog till sina kunder.',
    },
    title: 'Våra nöjda kunder',
    items: [
      {
        title: 'Saue',
        description: 'Saue kommun',
        image: '/images/customers/saue.jpg',
        href: 'https://sauevald.ee/',
      },
      {
        title: 'Boden',
        description: 'Bodens kommun',
        image: '/images/customers/boden.jpg',
        href: 'https://boden.se/',
      },
    ],
    partners: {
      offerTitle: 'Vad vi erbjuder',
      offerDescription:
        'Som partner till Future Dialog kan du stärka relationen till dina kunder, öka dina intäkter, förbättra samarbetet i teamet och bredda din affärsbas. Våra partner skapar nya affärer för sig själva med vår molnbaserade plattform. Vår tekniska lösning kan användas och anpassas för många olika användningsområden med våra färdiga paket.',
      benefitsTitle: 'Vad får du av oss?',
      benefits: [
        'Fullt stöd för att bygga framgångsrika affärscase',
        'Snabb och skalbar driftsättning, fullständigt tekniskt underhåll',
        'Smarta uppgifter och målgruppsstyrning baserat på synpunkter och enkäter',
        'Kommunicera snabbare och samarbeta enkelt',
        'Färdiga verktyg för försäljning och marknadsföring',
        'Färdigutvecklad teknisk molnplattform',
      ],
      workTitle: 'Så arbetar vi',
      workDescription:
        'Vi bygger modern teknik för delaktighet i mobila miljöer. Därför förväntar vi oss att våra partner är starka och väletablerade aktörer inom sina expertområden, för att säkerställa bästa möjliga upplevelse för slutanvändaren. Om du har en etablerad gemenskap som du vill engagera på ett mobilt och mätbart sätt, kontakta oss så berättar vi gärna mer om vår molnplattform.',
    },
    quote: 'Låt oss prata om hur Future Dialog kan hjälpa er att förstå era invånare bättre!',
  },
};
