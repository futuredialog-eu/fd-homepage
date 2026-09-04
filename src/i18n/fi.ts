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
    copyright: 'Kaikki oikeudet pidätetään.',
    openMenu: 'Avaa valikko',
    closeMenu: 'Sulje valikko',
    close: 'Sulje',
  },
  navigation: [
    { label: 'Koti', href: '/' },
    { label: 'Ominaisuudet', href: '/features/' },
    { label: 'Asiakkaat', href: '/customers-partners/' },
    { label: 'Blogit & uutiset', href: '/blog/' },
    { label: 'Yhteystiedot', href: '/contacts/' },
    {
      label: 'Kirjaudu sisään',
      href: 'https://app.futuredialog.eu',
      external: true,
    },
  ],
  policyLinks: [
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
    readMoreHref: '/blog/',
    posts: [
      {
        title: '3 syytä käyttää yhteisösovellusta',
        href: '/blog/3-syyta-kayttaa-yhteisosovellusta/',
        image: '/images/blog/nature-on-screen.png',
        categories: [
          { label: 'Osallistaminen', href: '/blog/category/engagement/' },
          { label: 'Uutiset', href: '/blog/category/news/' },
        ],
        readingTime: '2 min lukuaika',
        date: '6 heinäkuun, 2021',
        dateTime: '2026-07-06T10:59:18+03:00',
      },
      {
        title: 'Ideasta toteutukseen: Halu tulla kuulluksi ja osallistua päätöksentekoon johti yhteisösovellukseen',
        href: '/blog/ideasta-toteutukseen-halu-tulla-kuulluksi-ja-osallistua-paatoksentekoon-johti-yhteisosovellukseen/',
        image: '/images/blog/our-solution.png',
        categories: [
          { label: 'Osallistaminen', href: '/blog/category/engagement/' },
          { label: 'Uutiset', href: '/blog/category/news/' },
        ],
        readingTime: '2 min lukuaika',
        date: '25 toukokuun, 2021',
        dateTime: '2026-05-25T11:03:54+03:00',
      },
      {
        title: 'Kriisitiedot nopeasti yhteisön tietoon sovelluksen avulla: kokemustarina Elvan kunnalta',
        href: '/blog/kriisitiedot-nopeasti-yhteison-tietoon-sovelluksen-avulla-kokemustarina-elvan-kunnalta/',
        image: '/images/blog/process.png',
        categories: [
          { label: 'Kunnat', href: '/blog/category/municipality/' },
          { label: 'Osallistaminen', href: '/blog/category/engagement/' },
          { label: 'Uutiset', href: '/blog/category/news/' },
        ],
        readingTime: '3 min lukuaika',
        date: '5 huhtikuun, 2021',
        dateTime: '2026-04-05T11:02:43+03:00',
      },
    ],
  },
  contactSection: {
    title: 'Ota yhteyttä',
    quote: 'Jutellaan lisää siitä, miten Future Dialog voi auttaa juuri sinua ymmärtämään yhteisöäsi paremmin!',
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
  featuresPage: {
    meta: {
      title: 'Ominaisuudet - Future Dialog',
      description:
        'Tarjoamme digitaalisen SaaS-tuotteen, joka sisältää kyselytyökalut, palautekanavan, julkaisut ja analytiikkatyöpöydän. SaaS-työkalut helppoon hallintaan ja käyttöön.',
    },
    intro:
      'Future Dialog on osallistuvien yhteisöjen tulevaisuus. Mobiilisovelluksemme tekee uutisten lukemisesta ja yhteisöön osallistumisesta asukkaille mukavan ja ympäri vuorokauden käytettävän. Autamme aloittamaan rakentavia keskusteluja ja tekemään tietoon perustuvia päätöksiä tuhlaamatta resursseja.',
    items: [
      {
        title: 'Sovellus ja verkkosivusto',
        description:
          'Uusi sovelluksesi toimii iOS- ja Android- alustoilla sekä internetverkossa. Muokkaa sitä juuri haluamallasi tavalla – lisää logosi, värisi, tyylisi ja keskustele yhteisön kanssa äidinkielellään.',
        image: '/images/features/1.png',
      },
      {
        title: 'Hyödyllinen analytiikka',
        description:
          'Tunnetko yhteisösi? Tehokkaan analytiikkatyöpöytämme avulla näet, kuka on näytön toisella puolella ja miten sisältöä vastaanotetaan.',
        image: '/images/features/2.png',
      },
      {
        title: 'Julkaisut',
        description:
          'Luo julkaisuja ja jaa uutisia, ilmoita tulevista tapahtumista tai suorita kyselyjä. Julkaisut helpottavat tarvitsemasi sisällön löytämistä.',
        image: '/images/features/3.png',
      },
      {
        title: 'RSS syötteet',
        description:
          'Vähemmän työtä, enemmän sisältöä yhteisölle, RSS-syötteet näyttävät sovelluksen tärkeimmät uutiset automaattisesti.',
        image: '/images/features/4.png',
      },
      {
        title: 'Palaute, joka tavoittaa sinut hetkessä',
        description:
          'Luo keskusteluyhteys yhteisöjäsenten kanssa sekunneissa. Palautteen lisäksi voit pyytää yksityiskohtaisia mielipiteitä ja ehdottaa ratkaisuja.',
        image: '/images/features/5.png',
      },
    ],
    caseSection: {
      title: 'Asiakascaset',
      description: 'Ketkä käyttävät ratkaisuamme',
      items: [
        {
          icon: 'case-1',
          title: 'Kunnat',
          href: 'https://fi.futuredialog.co/category/kunnat/',
        },
        {
          icon: 'case-2',
          title: 'Yritykset',
          href: 'https://fi.futuredialog.co/category/yritykset/',
        },
        {
          icon: 'case-3',
          title: 'Puolueet',
          href: 'https://fi.futuredialog.co/category/puolueet/',
        },
        {
          icon: 'case-4',
          title: 'Muut',
          href: 'https://fi.futuredialog.co/category/uutiset/',
        },
      ],
    },
    quote: 'Jutellaan lisää siitä, miten Future Dialog voi auttaa juuri sinua ymmärtämään yhteisöäsi paremmin!',
  },
  blogPage: {
    meta: {
      title: 'Uutiset - Future Dialog',
      description:
        'Seuraa uutisiamme, tarinoitamme ja näkemyksiämme! Tietoa SaaS-tuotteistamme ja niiden käytöstä käytännössä.',
    },
    title: 'Uutiset',
    description: 'Seuraa uutisiamme, tarinoitamme ja näkemyksiämme! Osallistamisen ratkaisuja eri toimialoille',
    categoryLabels: {
      news: 'Uutiset',
      engagement: 'Osallistaminen',
      municipality: 'Kunnat',
    },
    readingTime: '{minutes} min lukuaika',
    photoCredit: 'Kuva:',
    shareTitle: 'Piditkö artikkelista? Jaa se.',
  },
  contactsPage: {
    meta: {
      title: 'Yhteystiedot - Future Dialog',
      description: 'Future Dialogin yhteystiedot ja yhteydenottolomake myyntiosastolle',
    },
    title: 'Yhteystiedot',
    aboutTitle: 'Keitä me olemme?',
    aboutDescription:
      'Future Dialog syntyi tarpeesta yhdistää älykkäissä kaupungeissa asuvat ihmiset ja julkinen sektori, joka haluaa saada aikaan todellista muutosta. Rakennamme huippuluokan mobiilisovelluksia, jotka lisäävät osallisuutta. Autamme käynnistämään aktiivisen vuoropuhelun ja tekemään dataan perustuvia päätöksiä pienemmillä resursseilla.',
  },
  customersPage: {
    meta: {
      title: 'Asiakkaat ja kumppanit - Future Dialog',
      description:
        'Tarjoamme pilvipohjaisia palveluita yhteisöille ja yrityksille. Paras pilvialusta eri tarpeisiin – henkilöstön johtaminen, markkinointi ja kansalaisten osallistaminen.',
    },
    title: 'Tyytyväiset asiakkaamme',
    items: [
      {
        title: 'Saue',
        description: 'Sauen kunta',
        image: '/images/customers/saue.jpg',
        href: 'https://sauevald.ee/',
      },
      {
        title: 'Boden',
        description: 'Bodenin kunta',
        image: '/images/customers/boden.jpg',
        href: 'https://boden.se/',
      },
    ],
    partners: {
      offerTitle: 'Mitä tarjoamme',
      offerDescription:
        'Future Dialogin kumppanina tavoitat asiakkaasi paremmin, kasvatat liikevaihtoasi, tehostat tiimityötä ja laajennat liiketoimintaasi. Kumppanimme luovat pilvipohjaisen platformimme avulla itselleen uutta liiketoimintaa. Tekninen ratkaisumme on valmispakettien ansiosta käytettävissä ja räätälöitävissä useisiin eri käyttötarkoituksiin.',
      benefitsTitle: 'Mitä hyödyt meistä?',
      benefits: [
        'Täysi tuki menestyvien liiketoimintamallien rakentamiseen',
        'Nopea ja skaalautuva käyttöönotto sekä täysi tekninen ylläpito',
        'Älykkäät tehtävät ja kohdentaminen palautteen ja kyselyiden perusteella',
        'Nopeampi viestintä ja vaivaton yhteistyö',
        'Valmiit myynnin ja markkinoinnin työkalut',
        'Täysin valmis tekninen pilvialusta',
      ],
      workTitle: 'Kuinka toimimme',
      workDescription:
        'Rakennamme huippuluokan teknologiaa osallistamiseen mobiiliympäristössä. Siksi odotamme kumppaneiltamme vahvaa ja vakiintunutta asemaa omalla toimialallaan, jotta voimme varmistaa loppukäyttäjälle parhaan mahdollisen kokemuksen. Jos haluat osallistaa vakiintunutta yhteisöäsi mobiilisti ja mitattavasti, ota yhteyttä – kerromme mielellämme lisää pilvialustastamme.',
    },
    quote: 'Jutellaan lisää siitä, miten Future Dialog voi auttaa juuri sinua ymmärtämään yhteisöäsi paremmin!',
  },
};
