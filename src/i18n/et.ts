import type { Content } from './types';

export const et: Content = {
  meta: {
    title: 'Esileht - Future Dialog',
    description:
      'Future Dialog loob mobiilirakendusi, mis aitavad kogukondadel koostööd teha, muudatusi ellu viia ja targa tehnoloogia abil enda elukeskkonda paremaks muuta.',
  },
  ui: {
    bookDemo: 'Broneeri kohtumine',
    readMore: 'Loe lisaks',
    copyright: 'Kõik õigused kaitstud.',
    openMenu: 'Ava menüü',
    closeMenu: 'Sulge menüü',
    close: 'Sulge',
  },
  navigation: [
    { label: 'Esileht', href: '/' },
    { label: 'Omadused', href: '/features/' },
    { label: 'Kliendid', href: '/customers-partners/' },
    { label: 'Blogi & uudised', href: '/blog/' },
    { label: 'Kontakt', href: '/contacts/' },
    {
      label: 'Logi sisse',
      href: 'https://app.futuredialog.eu',
      external: true,
    },
  ],
  policyLinks: [
    { label: 'Tingimused', href: '#', modal: 'terms' },
    { label: 'Privaatsuspoliitika', href: '#', modal: 'policy' },
  ],
  hero: {
    title: 'Ühendame kogukondi mugavate mobiilirakenduste abiga.',
    description:
      'Future Dialog loob mobiilirakendusi, mis aitavad kogukondadel koostööd teha, muudatusi ellu viia ja targa tehnoloogia abil enda elukeskkonda paremaks muuta.',
    image: '/images/hub.jpg',
    imageAlt: 'Kogukonna kaasamine',
  },
  howSection: {
    title: 'Kuidas kogukonnaäpp aitab?',
    description: 'Aitame luua väärtuslikke vestlusi ning tugevdada sidet kohaliku omavalitsuse ja elanike vahel.',
    items: [
      {
        icon: 'how-1',
        title: 'Kaasa oma elanikke',
        subTitle: 'Kutsu arutlema ja anna arutlemiseks võimalus',
        list: [
          'Sinu valitud keeles ja kujundusega mobiilirakendus, mis näeb välja täpselt selline nagu soovid',
          'Küsimustikud, ürituste kalender, uudised ja kiirteavitused otse elanike telefoniekraanidele',
        ],
      },
      {
        icon: 'how-2',
        title: 'Jälgi',
        subTitle: 'Mõista oma kogukonda',
        list: [
          'Saa teada, milline on inimeste meelestatus ja arvamus',
          'Kogu nende ettepanekuid ja ideid vajalike muutuste elluviimiseks',
        ],
      },
      {
        icon: 'how-3',
        title: 'Analüüsi',
        subTitle: 'Vajalik info vaid ühe kliki kaugusel',
        list: ['Kogu, kategoriseeri ja analüüsi statistikat', 'Tee andmetel põhinevaid argumenteeritud otsuseid'],
      },
      {
        icon: 'how-4',
        title: 'Liida',
        subTitle: 'Aita kogukonnal kokku tulla',
        list: [
          'Suurenda omavahelist usaldust ja pühendumust tegutsemiseks',
          'Saa reaalajas tagasisidet ja alusta arutelusid',
        ],
      },
    ],
  },
  counters: [
    { count: '700.000', description: 'vastust' },
    { count: '30.000', description: 'kogukonnaliiget' },
    { count: '43', description: 'loodud rakendust' },
    { count: '2000', description: 'küsitud küsimust' },
  ],
  reviews: [
    {
      review:
        'Äpp on ideaalne lahendus kriisikommunikatsioonis. Kui kohalikul tasandil on mingisugune kriis, siis on äpp kõige parem kanal, mille kaudu teavitada - info jõuab inimesteni kiiresti ja otse.',
      author: 'Liina Siniveer',
      position: 'Kommunikatsiooniosakonna juhataja, Hiiumaa vald',
    },
    {
      review:
        'Kohaliku elaniku vaatest on äpp mugav lahendus andmaks teada oma muredest ja mõtetest. Kohalikule omavalitsusele on oluline teada, mis on hästi või halvasti, et osata üles leida kõik tegelemist vajavad teemad. Äpp ühendab ja loob selleks võimaluse.',
      author: 'Maarja Ilves',
      position: 'Endine avalike suhete peaspetsialist, Järva vald',
    },
    {
      review:
        'Meile tundub, et äpikasutajate jaoks on vald nende jaoks n-ö lähemal, tagataskus, sest äpi kaudu saab mugavalt tagasisidet anda ja kohe ka värskeid uudiseid lugeda. Äpp koondab erinevad valla lehed ja info justkui inimese peopesale kokku ehk on kanal kõikide oluliste teemadeni jõudmiseks.',
      author: 'Merilyn Säde',
      position: 'Endine kommunikatsioonijuht, Elva vald',
    },
    {
      review:
        'Hiiumaa äpp pole vaid meie valla elanikele, vaid ka sagedastele külalistele ja turistidele. Äpi mõte on olla suhtlusplatvorm, mis ühendab Hiiumaa kogukonna ning aitab ka Hiiumaa sõpradel suhelda omavalitsusega, võtta osa kohalikust otsustusprotsessist ning olla kursis uudiste ja toimuvaga.',
      author: 'Mirjam Savioja',
      position: 'Endine vallavanema assistent, Hiiumaa vald',
    },
    {
      review:
        'Inimesed saavad ja leiavad äpist info paremini üles kui sotsiaalmeediast. On olnud juhtumeid, kus oleme infot jaganud igas meie kanalis, aga sotsiaalmeedias on see märkamata jäänud. Äpiga on kindel, et vajalik info jõuab elanikuni.',
      author: 'Estrit Aasma',
      position: 'Kommunikatsioonispetsialist, Tartu vald',
    },
  ],
  blogSection: {
    title: 'Viimased uudised',
    readMoreHref: '/blog/',
    posts: [
      {
        title:
          'Future Dialog kutsus kohaliku omavalitsuse esindajad üle-eestiliselt kokku kogukonnakaasamisest rääkima',
        href: 'https://www.futuredialog.eu/et/uudised/future-dialog-kutsus-kohaliku-omavalitsuse-esindajad-ule-eestiliselt-kokku-kogukonnakaasamisest-raakima/',
        image: '/images/blog/share-opinion.png',
        categories: [
          { label: 'Kaasamine', href: '/blog/category/engagement/' },
          { label: 'Omavalitsused', href: '/blog/category/municipality/' },
          { label: 'Uudised', href: '/blog/category/news/' },
        ],
        readingTime: '3 min lugemist',
        date: 'oktoober 4, 2021',
        dateTime: '2026-10-04T18:10:53+03:00',
      },
      {
        title: 'Future Dialog võtab osa 2021 Linnade ja Valdade Päevadest',
        href: 'https://www.futuredialog.eu/et/uudised/future-dialog-votab-osa-2026-linnade-ja-valdade-paevadest/',
        image: '/images/blog/our-neighborhood.png',
        categories: [
          { label: 'Omavalitsused', href: '/blog/category/municipality/' },
          { label: 'Uudised', href: '/blog/category/news/' },
        ],
        readingTime: '1 min lugemist',
        date: 'august 17, 2021',
        dateTime: '2026-08-17T09:41:41+03:00',
      },
      {
        title: '10 eelist kogukonnaäpi kasutamiseks omavalitsustele ja kogukondadele',
        href: '/blog/10-eelist-kogukonnaapi-kasutamiseks-omavalitsustele-ja-kogukondadele/',
        image: '/images/blog/public-discussion.png',
        categories: [
          { label: 'Kaasamine', href: '/blog/category/engagement/' },
          { label: 'Omavalitsused', href: '/blog/category/municipality/' },
          { label: 'Uudised', href: '/blog/category/news/' },
        ],
        readingTime: '2 min lugemist',
        date: 'juuli 29, 2021',
        dateTime: '2026-07-29T13:13:15+03:00',
      },
    ],
  },
  contactSection: {
    title: 'Võta ühendust',
    quote: 'Võta meiega ühendust ja arutame, kuidas Future Dialog aitab teil enda kogukonda paremini mõista.',
    people: [
      {
        name: 'Toomas Laigna',
        position: 'Tegevjuht',
        phone: '+372 559 83 604',
        phoneHref: 'tel:372 559 83 604',
        email: 'toomas@futuredialog.eu',
        image: '/images/team/toomas-laigna.jpeg',
      },
      {
        name: 'Margus Räim',
        position: 'Ärianalüütik',
        phone: '+372 511 9436',
        phoneHref: 'tel:372 511 9436',
        email: 'margus.raim@futuredialog.eu',
        image: '/images/team/margus-raim.png',
      },
    ],
  },
  featuresPage: {
    meta: {
      title: 'Omadused - Future Dialog',
      description:
        'Pakume digitaalset SaaS-lahendust, mis sisaldab küsitlustööriistu, tagasisidekanalit, postitusi ja analüütikatöölauda. SaaS-tööriistad mugavaks haldamiseks ja ligipääsuks.',
    },
    intro:
      'Future Dialog on kaasatud kogukondade tulevik. Meie mobiilirakendus muudab uudiste lugemise ja kogukonnas panustamise elanike jaoks mugavaks ja ööpäev läbi kättesaadavaks. Aitame alustada edasiviivaid vestlusi ja langetada andmepõhiseid otsuseid ressursse raiskamata.',
    items: [
      {
        title: 'Äpp ja veebileht',
        description:
          'Sinu uus rakendus töötab iOS-il, Androidil ja veebis. Kohanda seda täpselt nii, nagu soovid - lisa oma logo, värvid, stiil ja räägi kogukonnaga nende emakeeles.',
        image: '/images/features/1.png',
      },
      {
        title: 'Kasulik analüütika',
        description:
          'Kas tunned enda kogukonda? Meie võimekas analüütikatöölaud võimaldab näha, kes on teisel pool ekraani ning kuidas ta sisu vastu võtab. See aitab ka sõnumeid paremini sihtida.',
        image: '/images/features/2.png',
      },
      {
        title: 'Postitused',
        description:
          'Loo postitusi ja avalda neis uudiseid, anna märku eesootavatest sündmustest või korralda küsitlusi. Postitused muudavad vajaliku sisu leidmise mugavaks.',
        image: '/images/features/3.png',
      },
      {
        title: 'RSS uudistevoog',
        description:
          'Vähem tööd, rohkem sisu kogukonnale. RSS-voo abil ilmuvad kõige olulisemad uudised rakendusse automaatselt.',
        image: '/images/features/4.png',
      },
      {
        title: 'Tagasiside, mis jõuab sinuni hetkega',
        description:
          'Loo sekunditega vestlus kogukonnaliikmetega. Peale tagasiside saad küsida üksikasjalikke arvamusi ning pakkuda välja lahendusi.',
        image: '/images/features/5.png',
      },
    ],
    caseSection: {
      title: 'Kogemuslood',
      description: 'Mida räägivad meie partnerid',
      items: [
        {
          icon: 'case-1',
          title: 'Omavalitsused',
          href: 'https://et.futuredialog.co/category/omavalitsused/',
        },
        {
          icon: 'case-2',
          title: 'Ettevõtted',
          href: 'https://et.futuredialog.co/category/ettevotted/',
        },
        {
          icon: 'case-3',
          title: 'Erakonnad',
          href: 'https://et.futuredialog.co/category/erakonnad',
        },
        {
          icon: 'case-4',
          title: 'Muu',
          href: 'https://et.futuredialog.co/category/uudised/',
        },
      ],
    },
    quote: 'Võta meiega ühendust ja arutame, kuidas Future Dialog aitab teil enda kogukonda paremini mõista.',
  },
  blogPage: {
    meta: {
      title: 'Uudised - Future Dialog',
      description:
        'Jälgi meie uudiseid, lugusid ja teadmisi! Ülevaade meie SaaS-lahendustest ja nende kasutamisest praktikas.',
    },
    title: 'Uudised',
    description: 'Jälgi meie uudiseid, lugusid ja teadmisi! Kaasamislahendused erinevates valdkondades',
    categoryLabels: {
      news: 'Uudised',
      engagement: 'Kaasamine',
      municipality: 'Omavalitsused',
    },
    readingTime: '{minutes} min lugemist',
    photoCredit: 'Foto:',
    shareTitle: 'Meeldis artikkel? Jaga seda.',
  },
  contactsPage: {
    meta: {
      title: 'Kontakt - Future Dialog',
      description: 'Future Dialogi kontaktandmed ja kontaktivorm müügiosakonnaga',
    },
    title: 'Kontakt',
    aboutTitle: 'Kes me oleme?',
    aboutDescription:
      'Future Dialog sai alguse soovist ühendada tarkades linnades elavad inimesed ja omavalitsused, kes tahavad päriselt midagi muuta. Loome nüüdisaegseid mobiilirakendusi, mis soodustavad kaasamist. Aitame algatada sisukaid vestlusi ja teha andmepõhiseid otsuseid väiksema ressursikuluga.',
  },
  customersPage: {
    meta: {
      title: 'Kliendid - Future Dialog',
      description:
        'Future Dialogi kliendid ja koostööpartnerid – omavalitsused, ettevõtted ja kogukonnad, kes kasutavad meie pilvepõhist platvormi.',
    },
    title: 'Kliendid',
    items: [
      {
        title: 'Saue',
        description: 'Saue vald',
        image: '/images/customers/saue.jpg',
        href: 'https://sauevald.ee/',
      },
      {
        title: 'Boden',
        description: 'Bodeni vald',
        image: '/images/customers/boden.jpg',
        href: 'https://boden.se/',
      },
    ],
    partners: {
      offerTitle: 'Mida me pakume?',
      offerDescription:
        'Future Dialogi kööstööpartneriks olemine võimaldab sul tunda paremini oma kliente, suurendada tulukust ning laiendada ärivõimalusi. Meie platvormi kasutamine võimaldab rakendada ka täiesti uusi ärisuundi. Meie valmislahendused on kohandatud vastavalt kliendi soovidele.',
      benefitsTitle: 'Mis kasu meist on?',
      benefits: [
        'Välja arendatud tehniline platvorm;',
        'Kiire ja kohandatud lahendus ning selle toimimise tagamine;',
        'Müügi- ja turunduslahendused;',
        'Täismahus tugiteenus.',
      ],
      workTitle: 'Kuidas me töötame?',
      workDescription:
        'Rakendame tänapäevast tehnoloogiat mobiilses keskkonnas tegutsemiseks. Lähtudes lõppkasutajast, soovime, et meie partnerid oleksid oma erialal tugevad ja väljakujunenud tegijad. Kui soovid oma kogukonda kiirelt ja lihtsalt kaasata, võta meiega julgelt ühendust.',
    },
    quote: 'Võta meiega ühendust ja arutame, kuidas Future Dialog aitab teil enda kogukonda paremini mõista.',
  },
};
