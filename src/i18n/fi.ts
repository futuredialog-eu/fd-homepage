import type { Content } from './types';

export const fi: Content = {
  meta: {
    title: 'Koti - Future Dialog',
    description:
      'Future Dialog luo mobiilisovelluksia, jotka auttavat yhteisöjä tekemään yhteistyötä, toteuttamaan muutoksia ja parantamaan elinympäristöään älykkään tekniikan avulla.',
  },
  ui: {
    bookDemo: 'Sovi tapaaminen',
    readMore: 'Lue lisää',
    subscribeTitle: 'Tilaa uutiskirje:',
    subscribePlaceholder: 'Sähköposti',
    subscribeButton: 'Tilaa',
    copyright: 'Kaikki oikeudet pidätetään.',
  },
  navigation: [
    { label: 'Koti', href: '/' },
    { label: 'Ominaisuudet', href: '/features/' },
    { label: 'Asiakkaat', href: '/customers/' },
    { label: 'Blogit & uutiset', href: '/category/uutiset/' },
    { label: 'Yhteystiedot', href: '/contacts/' },
    { label: 'Kirjaudu sisään', href: 'https://futuredialog.app/login', external: true },
  ],
  policyLinks: [
    {
      label: 'Ohje',
      href: 'https://drive.google.com/file/d/11j7f4tJD-gBWEyTzFzAl3GJjJhdqCq8y/view?usp=sharing',
      target: 'blank',
    },
    { label: 'Palveluehdot', href: '#', modal: 'terms' },
    { label: 'Tietosuojalauseke', href: '#', modal: 'policy' },
  ],
  hero: {
    title: 'Yhdistämme yhteisöt kätevällä mobiilisovelluksella.',
    description:
      'Future Dialog luo mobiilisovelluksia, jotka auttavat yhteisöjä tekemään yhteistyötä, toteuttamaan muutoksia ja parantamaan elinympäristöään älykkään tekniikan avulla.',
    image: '/images/hub.jpg',
    imageAlt: 'Yhteisön osallistaminen',
  },
  howSection: {
    title: 'Kuinka yhteisösovellus auttaa?',
    description: 'Autamme luomaan arvokkaita keskusteluja.',
    items: [
      {
        icon: 'how-1',
        title: 'Osallista',
        subTitle: 'Pidä keskusteluja yllä',
        list: [
          'Mobiilisovellus valitsemallasi kielellä ja muotoilulla, joka näyttää juuri sellaiselta kuin haluat',
          'Kyselylomakkeet, tapahtumakalenteri, sivustokartat ja push-notifikaatiot',
        ],
      },
      {
        icon: 'how-2',
        title: 'Seuraa',
        subTitle: 'Ymmärrä yhteisösi',
        list: [
          'Ota selvää, millainen on ihmisten mielenlaatu',
          'Kerää aloitteensa ja panoksensa muutosten aikaansaamiseksi',
        ],
      },
      {
        icon: 'how-3',
        title: 'Analysoi',
        subTitle: 'Tarvittavat tiedot vain yhden napsautuksen päässä',
        list: ['Kerää ja luokittele tilastot', 'Tee tietoisia päätöksiä'],
      },
      {
        icon: 'how-4',
        title: 'Tuo yhteen',
        subTitle: 'Auta tuomaan yhteisöä yhteen',
        list: [
          'Lisää yhteisön luottamusta ja sitoutumista',
          'Saa reaaliaikaista palautetta ja aloita rakentavia keskusteluja',
        ],
      },
    ],
  },
  counters: [
    { count: '700.000', description: 'annettua vastausta' },
    { count: '30.000', description: 'yhteisön jäsentä' },
    { count: '43', description: 'luotua sovellusta' },
    { count: '5', description: 'maassa toteutuksia' },
  ],
  reviews: [
    {
      // Left in English: this is a named person's quote and the source page does not
      // provide a Finnish version.
      review:
        "We feel like with the app the municipality is closer to the community, sort of like in their back pocket, because they can conveniently give feedback and read the latest news. Our app gathers together different municipality pages so it's like a direct channel to get the most important information.",
      author: 'Merilyn Säde',
      position: 'Former Communications Manager, Elva Municipality',
    },
  ],
  blogSection: {
    title: 'Blogimme',
    readMoreHref: '/category/uutiset/',
    posts: [
      {
        title: '3 syytä käyttää yhteisösovellusta',
        href: '/uutiset/3-syyta-kayttaa-yhteisosovellusta/',
        image: '/images/blog/nature-on-screen.png',
        categories: [
          { label: 'Osallistaminen', href: '/category/osallistaminen' },
          { label: 'Uutiset', href: '/category/uutiset' },
        ],
        readingTime: '2 min lukuaika',
        date: '6 heinäkuun, 2021',
        dateTime: '2021-07-06T10:59:18+03:00',
      },
      {
        title:
          'Ideasta toteutukseen: Halu tulla kuulluksi ja osallistua päätöksentekoon johti yhteisösovellukseen',
        href: '/uutiset/ideasta-toteutukseen-halu-tulla-kuulluksi-ja-osallistua-paatoksentekoon-johti-yhteisosovellukseen/',
        image: '/images/blog/our-solution.png',
        categories: [
          { label: 'Osallistaminen', href: '/category/osallistaminen' },
          { label: 'Uutiset', href: '/category/uutiset' },
        ],
        readingTime: '2 min lukuaika',
        date: '25 toukokuun, 2021',
        dateTime: '2021-05-25T11:03:54+03:00',
      },
      {
        title: 'Kriisitiedot nopeasti yhteisön tietoon sovelluksen avulla: kokemustarina Elvan kunnalta',
        href: '/uutiset/kriisitiedot-nopeasti-yhteison-tietoon-sovelluksen-avulla-kokemustarina-elvan-kunnalta/',
        image: '/images/blog/process.png',
        categories: [
          { label: 'Kunnat', href: '/category/kunnat' },
          { label: 'Osallistaminen', href: '/category/osallistaminen' },
          { label: 'Uutiset', href: '/category/uutiset' },
        ],
        readingTime: '3 min lukuaika',
        date: '5 huhtikuun, 2021',
        dateTime: '2021-04-05T11:02:43+03:00',
      },
    ],
  },
  contactSection: {
    title: 'Ota yhteyttä',
    quote:
      'Jutellaan lisää siitä, miten Future Dialog voi auttaa juuri sinua ymmärtämään yhteisöäsi paremmin!',
    people: [
      {
        name: 'Toomas Laigna',
        position: 'Toimitusjohtaja',
        phone: '+372 559 83 604',
        phoneHref: 'tel:372 559 83 604',
        email: 'toomas@futuredialog.eu',
        image: '/images/team/toomas-laigna.jpeg',
      },
      {
        name: 'Margus Räim',
        position: 'Liiketoiminnan kehittäjä',
        phone: '+372 511 9436',
        phoneHref: 'tel:372 511 9436',
        email: 'margus.raim@futuredialog.eu',
        image: '/images/team/margus-raim.png',
      },
    ],
  },
};
