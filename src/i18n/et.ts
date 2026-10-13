import gettingOrganizedImage from '../assets/blog/undraw_getting-organized_lyqo.png';
import publicDiscussionImage from '../assets/blog/undraw_public-discussion_693m.png';
import puzzleSolvedImage from '../assets/blog/undraw_puzzle-solved_qdjq.png';
import hubImage from '../assets/images/hub.jpg';
import margusRaimImage from '../assets/team/margus-raim.png';
import toomasLaignaImage from '../assets/team/toomas-laigna.jpeg';
import type { Content } from './types';

export const et: Content = {
  meta: {
    title: 'Elanike teavitamine ja kaasamine omavalitsuses | Future Dialog',
    description:
      'Tee oluline info elanikele kergesti kättesaadavaks, kuula nende vajadusi ja kaasa neid kohalikesse otsustesse – omavalitsuse enda äpi kaudu.',
  },
  ui: {
    bookDemo: 'Broneeri kohtumine',
    readMore: 'Loe lisaks',
    copyright: 'Kõik õigused kaitstud.',
    openMenu: 'Ava menüü',
    closeMenu: 'Sulge menüü',
  },
  consent: {
    message:
      'Kasutame analüütikaküpsiseid, et mõista, kuidas saiti kasutatakse. Need salvestatakse ainult teie nõusolekul.',
    learnMore: 'Privaatsuspoliitika',
    accept: 'Nõustun',
    decline: 'Keeldun',
    settings: 'Küpsiste seaded',
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
    { label: 'Kasutustingimused', href: '/eula/' },
    { label: 'Privaatsuspoliitika', href: '/application-privacy-policy/' },
  ],
  hero: {
    title: 'Avalikud teenused, kujundatud koos elanikega, kelle jaoks need on mõeldud.',
    description:
      'Tee oluline info kergesti leitavaks, anna elanikele lihtne võimalus kaasa rääkida ja kaasa neid otsustesse, mis nende kogukonda kujundavad. Jätka kanalitega, mida juba kasutad – koondame nende sisu ühte kohta, teeme avaldamise lihtsamaks ja lisame otsekanali elanike telefonidesse.',
    image: hubImage,
    imageAlt: 'Kogukonna kaasamine',
  },
  howSection: {
    title: 'Mida see omavalitsusele annab?',
    description: 'Paremini informeeritud elanikud, selgemad prioriteedid ja tugevam usaldus.',
    items: [
      {
        icon: 'how-1',
        title: 'Teavita',
        subTitle: 'Info, mis jõuab inimesteni',
        list: [
          'Elanikud leiavad uudised, sündmused ja teenuste info ühest tuttavast kohast',
          'Kiireloomulised teated jõuavad inimesteni kiiresti ja otse, ka kriisi ajal',
        ],
      },
      {
        icon: 'how-2',
        title: 'Kuula',
        subTitle: 'Saa teada, mida elanikud vajavad',
        list: [
          'Elanikud saavad muresid ja ideid jagada just siis, kui neile sobib',
          'Märkad probleeme varakult, enne kui need kasvavad',
        ],
      },
      {
        icon: 'how-3',
        title: 'Otsusta',
        subTitle: 'Andmetel põhinevad otsused',
        list: [
          'Mõista, mis on elanikele kõige olulisem',
          'Sea prioriteete ja põhjenda otsuseid elanike tegeliku tagasisidega',
        ],
      },
      {
        icon: 'how-4',
        title: 'Liida',
        subTitle: 'Usaldus, mis kasvab',
        list: ['Elanikud näevad, et nende panus viib tegudeni', 'Rohkem inimesi osaleb kohalikus elus ja otsustes'],
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
    readMore: 'Loe kõiki uudiseid',
    readMoreHref: '/blog/',
    posts: [
      {
        title: 'Kommunikatsioonijuhtimise väljakutsed kohalikes omavalitsustes',
        href: '/blog/kommunikatsioonijuhtimise-valjakutsed-kohalikes-omavalitsustes/',
        image: puzzleSolvedImage,
        categories: [
          { label: 'Kaasamine', href: '/blog/category/engagement/' },
          { label: 'Omavalitsused', href: '/blog/category/municipality/' },
        ],
        readingTime: '3 min lugemist',
        date: 'oktoober 12, 2026',
        dateTime: '2026-10-12T12:00:00+03:00',
      },
      {
        title: 'Miks kogukonna kaasamine on oluline',
        href: '/blog/miks-kogukonna-kaasamine-on-oluline/',
        image: gettingOrganizedImage,
        categories: [
          { label: 'Kaasamine', href: '/blog/category/engagement/' },
          { label: 'Omavalitsused', href: '/blog/category/municipality/' },
        ],
        readingTime: '3 min lugemist',
        date: 'oktoober 1, 2026',
        dateTime: '2026-10-01T12:00:00+03:00',
      },
      {
        title: '10 eelist kogukonnaäpi kasutamiseks omavalitsustele ja kogukondadele',
        href: '/blog/10-eelist-kogukonnaapi-kasutamiseks-omavalitsustele-ja-kogukondadele/',
        image: publicDiscussionImage,
        categories: [
          { label: 'Kaasamine', href: '/blog/category/engagement/' },
          { label: 'Omavalitsused', href: '/blog/category/municipality/' },
          { label: 'Uudised', href: '/blog/category/news/' },
        ],
        readingTime: '2 min lugemist',
        date: 'juuli 29, 2021',
        dateTime: '2021-07-29T13:13:15+03:00',
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
        image: toomasLaignaImage,
      },
      {
        name: 'Margus Räim',
        position: 'Tootejuht',
        phone: '+372 511 9436',
        phoneHref: 'tel:372 511 9436',
        email: 'margus.raim@futuredialog.eu',
        image: margusRaimImage,
      },
    ],
  },
  featuresPage: {
    meta: {
      title: 'Omadused: küsitlused, tagasiside ja uudised | Future Dialog',
      description:
        'Kaasa elanikke küsitluste, tagasisidekanali, uudiste, tõuketeavituste ja analüütikatöölauaga oma omavalitsuse kogukonnaäpis.',
    },
    intro:
      'Future Dialog on kaasatud kogukondade tulevik. Meie mobiilirakendus muudab uudiste lugemise ja kogukonnas panustamise elanike jaoks mugavaks ja ööpäev läbi kättesaadavaks. Aitame alustada edasiviivaid vestlusi ja langetada andmepõhiseid otsuseid ressursse raiskamata.',
    items: [
      {
        title: 'Äpp ja veebileht',
        description:
          'Sinu uus rakendus töötab iOS-il, Androidil ja veebis. Kohanda seda täpselt nii, nagu soovid - lisa oma logo, värvid, stiil ja räägi kogukonnaga nende emakeeles.',
      },
      {
        title: 'Kasulik analüütika',
        description:
          'Kas tunned enda kogukonda? Meie võimekas analüütikatöölaud võimaldab näha, kes on teisel pool ekraani ning kuidas ta sisu vastu võtab. See aitab ka sõnumeid paremini sihtida.',
      },
      {
        title: 'Postitused',
        description:
          'Loo postitusi ja avalda neis uudiseid, anna märku eesootavatest sündmustest või korralda küsitlusi. Postitused muudavad vajaliku sisu leidmise mugavaks.',
      },
      {
        title: 'RSS uudistevoog',
        description:
          'Vähem tööd, rohkem sisu kogukonnale. RSS-voo abil ilmuvad kõige olulisemad uudised rakendusse automaatselt.',
      },
      {
        title: 'Tagasiside, mis jõuab sinuni hetkega',
        description:
          'Loo sekunditega vestlus kogukonnaliikmetega. Peale tagasiside saad küsida üksikasjalikke arvamusi ning pakkuda välja lahendusi.',
      },
    ],
    caseSection: {
      title: 'Kogemuslood',
      description: 'Mida räägivad meie partnerid',
      items: [
        {
          icon: 'case-1',
          title: 'Omavalitsused',
          href: '/blog/category/municipality/',
        },
        {
          icon: 'case-4',
          title: 'Muu',
          href: '/blog/category/news/',
        },
      ],
    },
    quote: 'Võta meiega ühendust ja arutame, kuidas Future Dialog aitab teil enda kogukonda paremini mõista.',
  },
  blogPage: {
    meta: {
      title: 'Blogi: kogukonna kaasamine omavalitsustes | Future Dialog',
      description:
        'Artiklid ja kogemuslood kogukonna kaasamisest, elanikega suhtlemisest ja sellest, kuidas omavalitsused kogukonnaäppi kasutavad.',
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
      title: 'Kontakt ja demo broneerimine | Future Dialog',
      description:
        'Võta Future Dialogiga ühendust ja broneeri demo meie kogukonnaäpist omavalitsustele ja organisatsioonidele.',
    },
    title: 'Kontakt',
    aboutTitle: 'Kes me oleme?',
    aboutDescription:
      'Future Dialog sai alguse soovist ühendada tarkades linnades elavad inimesed ja omavalitsused, kes tahavad päriselt midagi muuta. Loome nüüdisaegseid mobiilirakendusi, mis soodustavad kaasamist. Aitame algatada sisukaid vestlusi ja teha andmepõhiseid otsuseid väiksema ressursikuluga.',
  },
  customersPage: {
    meta: {
      title: 'Kliendid ja partnerid | Future Dialog',
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
