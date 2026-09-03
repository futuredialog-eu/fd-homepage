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
    subscribeTitle: 'Liitu meie uudiskirjaga:',
    subscribePlaceholder: 'E-post',
    subscribeButton: 'Liitu',
    copyright: 'Kõik õigused kaitstud.',
  },
  navigation: [
    { label: 'Esileht', href: '/' },
    { label: 'Omadused', href: '/features/' },
    { label: 'Kliendid', href: '/customers-partners/' },
    { label: 'Blogi & uudised', href: '/category/uudised/' },
    { label: 'Kontakt', href: '/contacts/' },
    { label: 'Logi sisse', href: 'https://futuredialog.app/login', external: true },
  ],
  policyLinks: [
    {
      label: 'Juhend',
      href: 'https://drive.google.com/file/d/11j7f4tJD-gBWEyTzFzAl3GJjJhdqCq8y/view?usp=sharing',
      target: 'blank',
    },
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
    description:
      'Aitame luua väärtuslikke vestlusi ning tugevdada sidet kohaliku omavalitsuse ja elanike vahel.',
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
        list: [
          'Kogu, kategoriseeri ja analüüsi statistikat',
          'Tee andmetel põhinevaid argumenteeritud otsuseid',
        ],
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
    readMoreHref: '/category/uudised/',
    posts: [
      {
        title:
          'Future Dialog kutsus kohaliku omavalitsuse esindajad üle-eestiliselt kokku kogukonnakaasamisest rääkima',
        href: '/uudised/future-dialog-kutsus-kohaliku-omavalitsuse-esindajad-ule-eestiliselt-kokku-kogukonnakaasamisest-raakima/',
        image: '/images/blog/share-opinion.png',
        categories: [
          { label: 'Kaasamine', href: '/category/kaasamine' },
          { label: 'Omavalitsused', href: '/category/omavalitsused' },
          { label: 'Uudised', href: '/category/uudised' },
        ],
        readingTime: '3 min lugemist',
        date: 'oktoober 4, 2021',
        dateTime: '2021-10-04T18:10:53+03:00',
      },
      {
        title: 'Future Dialog võtab osa 2021 Linnade ja Valdade Päevadest',
        href: '/uudised/future-dialog-votab-osa-2021-linnade-ja-valdade-paevadest/',
        image: '/images/blog/our-neighborhood.png',
        categories: [
          { label: 'Omavalitsused', href: '/category/omavalitsused' },
          { label: 'Uudised', href: '/category/uudised' },
        ],
        readingTime: '1 min lugemist',
        date: 'august 17, 2021',
        dateTime: '2021-08-17T09:41:41+03:00',
      },
      {
        title: '10 eelist kogukonnaäpi kasutamiseks omavalitsustele ja kogukondadele',
        href: '/uudised/10-eelist-kogukonnaapi-kasutamiseks-omavalitsustele-ja-kogukondadele/',
        image: '/images/blog/public-discussion.png',
        categories: [
          { label: 'Kaasamine', href: '/category/kaasamine' },
          { label: 'Omavalitsused', href: '/category/omavalitsused' },
          { label: 'Uudised', href: '/category/uudised' },
        ],
        readingTime: '2 min lugemist',
        date: 'juuli 29, 2021',
        dateTime: '2021-07-29T13:13:15+03:00',
      },
    ],
  },
  contactSection: {
    title: 'Võta ühendust',
    quote:
      'Võta meiega ühendust ja arutame, kuidas Future Dialog aitab teil enda kogukonda paremini mõista.',
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
};
