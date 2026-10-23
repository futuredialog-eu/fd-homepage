import hubImage from '../assets/images/hub.jpg';
import margusRaimImage from '../assets/team/margus-raim.png';
import toomasLaignaImage from '../assets/team/toomas-laigna.jpeg';
import type { Content } from './types';

export const sv: Content = {
  meta: {
    title: 'Invånarkommunikation för kommuner | Future Dialog',
    description:
      'Gör viktig information lätt att hitta för invånarna, lyssna in deras behov och involvera dem i lokala beslut – via kommunens egen app.',
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
    title: 'Offentlig service, formad tillsammans med dem den är till för.',
    description:
      'Gör viktig information lätt att hitta, ge invånarna ett enkelt sätt att bli hörda och involvera dem i besluten som formar deras närmiljö. Fortsätt använda de kanaler du redan har – vi samlar innehållet på ett ställe, gör det enklare att publicera och lägger till en direkt kanal till invånarnas telefoner.',
    image: hubImage,
    imageAlt: 'Invånardelaktighet',
  },
  howSection: {
    title: 'Vad kommunen vinner',
    description: 'Bättre informerade invånare, tydligare prioriteringar och starkare förtroende.',
    items: [
      {
        icon: 'how-1',
        title: 'Informera',
        subTitle: 'Information som når fram',
        list: [
          'Invånarna hittar nyheter, evenemang och information om service på ett välkänt ställe',
          'Brådskande meddelanden når människor snabbt och direkt, även i en kris',
        ],
      },
      {
        icon: 'how-2',
        title: 'Lyssna',
        subTitle: 'Vet vad invånarna behöver',
        list: ['Invånarna kan dela synpunkter och idéer när det passar dem', 'Du ser problem tidigt, innan de växer'],
      },
      {
        icon: 'how-3',
        title: 'Besluta',
        subTitle: 'Beslut med stöd i underlag',
        list: [
          'Förstå vad som betyder mest för invånarna',
          'Prioritera och motivera beslut med verkliga synpunkter från invånarna',
        ],
      },
      {
        icon: 'how-4',
        title: 'Knyt samman',
        subTitle: 'Förtroende som växer',
        list: [
          'Invånarna ser att deras synpunkter leder till handling',
          'Fler deltar i det lokala livet och i besluten',
        ],
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
        'Appen är en ideal lösning för kriskommunikation. Om det uppstår någon form av kris på lokal nivå är appen den bästa kanalen för att informera människor – informationen når fram snabbt och direkt.',
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
      position: 'Före detta kommunikatör, Järva kommun',
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
  },
  contactSection: {
    title: 'Kontakta oss',
    quote: 'Låt oss prata om hur Future Dialog kan hjälpa dig att förstå dina invånare bättre!',
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
        position: 'Produktchef',
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
      'Future Dialog är framtiden för engagerade lokalsamhällen. Vår mobilapp gör det transparent och alltid möjligt för invånarna att läsa nyheter och bidra till samhället. Vi hjälper dig att starta aktiva samtal och fatta datadrivna beslut med mindre resurser.',
    items: [
      {
        title: 'Mobilapp och webbplats',
        description:
          'Din nya app fungerar på iOS, Android och webben. Anpassa den så att den ser ut precis som du vill – lägg till er logotyp, dina färger och din stil.',
      },
      {
        title: 'Kraftfull analys',
        description:
          'Känner du till din gemenskap? Med vår panel och vårt datacenter styr du innehållet och får användbara insikter om era invånare.',
      },
      {
        title: 'Inlägg',
        description:
          'Skapa inlägg i webbpanelen för att publicera nyheter, göra tillkännagivanden eller skapa enkäter. Inläggen gör det enkelt att navigera i innehållet.',
      },
      {
        title: 'RSS',
        description:
          'Mindre arbete för dig, mer innehåll för invånarna. Få in de viktigaste nyheterna i appen automatiskt med ett enkelt RSS-flöde.',
      },
      {
        title: 'Synpunkter som leder till handling',
        description:
          'Skapa en dialog med invånarna i kanalen för synpunkter. Utöver enkäter kan du be om utförliga åsikter och erbjuda lösningar direkt.',
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
    quote: 'Låt oss prata om hur Future Dialog kan hjälpa dig att förstå dina invånare bättre!',
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
      'Future Dialog grundades för att överbrygga klyftan mellan människor som bor i smarta städer och de offentliga aktörer som vill göra skillnad. Vi bygger moderna mobilappar som främjar delaktighet. Vi hjälper dig att starta aktiva samtal och fatta datadrivna beslut med mindre resurser.',
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
    quote: 'Låt oss prata om hur Future Dialog kan hjälpa dig att förstå dina invånare bättre!',
  },
};
