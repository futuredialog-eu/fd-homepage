import hubImage from '../assets/images/hub.jpg';
import margusRaimImage from '../assets/team/margus-raim.png';
import toomasLaignaImage from '../assets/team/toomas-laigna.jpeg';
import type { Content } from './types';

export const fi: Content = {
  meta: {
    title: 'Asukasviestintä ja osallistaminen kunnille | Future Dialog',
    description:
      'Tee tärkeä tieto helposti asukkaiden saataville, kuule heidän tarpeensa ja osallista heidät päätöksiin – kunnan omalla sovelluksella.',
  },
  ui: {
    bookDemo: 'Sovi tapaaminen',
    readMore: 'Lue lisää',
    copyright: 'Kaikki oikeudet pidätetään.',
    openMenu: 'Avaa valikko',
    closeMenu: 'Sulje valikko',
  },
  consent: {
    message: 'Käytämme analytiikkaevästeitä ymmärtääksemme, miten sivustoa käytetään. Ne asetetaan vain, jos hyväksyt.',
    learnMore: 'Tietosuojaseloste',
    accept: 'Hyväksy',
    decline: 'Hylkää',
    settings: 'Evästeasetukset',
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
    { label: 'Käyttöehdot', href: '/eula/' },
    { label: 'Tietosuojalauseke', href: '/application-privacy-policy/' },
  ],
  hero: {
    title: 'Julkiset palvelut, suunniteltu yhdessä niiden kanssa, joita ne palvelevat.',
    description:
      'Tee tärkeä tieto helposti löydettäväksi, anna asukkaille vaivaton tapa tulla kuulluksi ja osallista heidät päätöksiin, jotka muovaavat heidän yhteisöään. Jatka jo käyttämiesi kanavien parissa – kokoamme niiden sisällön yhteen paikkaan, helpotamme julkaisemista ja lisäämme suoran kanavan asukkaiden puhelimiin.',
    image: hubImage,
    imageAlt: 'Yhteisön osallistaminen',
  },
  howSection: {
    title: 'Mitä kuntasi hyötyy?',
    description: 'Paremmin perillä olevat asukkaat, selkeämmät painopisteet ja vahvempi luottamus.',
    items: [
      {
        icon: 'how-1',
        title: 'Tiedota',
        subTitle: 'Tieto, joka tavoittaa ihmiset',
        list: [
          'Asukkaat löytävät uutiset, tapahtumat ja palvelutiedotteet yhdestä tutusta paikasta',
          'Kiireelliset tiedotteet tavoittavat ihmiset nopeasti ja suoraan, myös kriisitilanteessa',
        ],
      },
      {
        icon: 'how-2',
        title: 'Kuuntele',
        subTitle: 'Tiedä, mitä asukkaat tarvitsevat',
        list: [
          'Asukkaat voivat kertoa huolistaan ja ideoistaan silloin, kun heille sopii',
          'Huomaat ongelmat ajoissa, ennen kuin ne kasvavat',
        ],
      },
      {
        icon: 'how-3',
        title: 'Päätä',
        subTitle: 'Päätökset, joilla on pohja',
        list: [
          'Ymmärrä, mikä asukkaille on tärkeintä',
          'Aseta painopisteet ja perustele päätökset asukkaiden todellisella palautteella',
        ],
      },
      {
        icon: 'how-4',
        title: 'Tuo yhteen',
        subTitle: 'Luottamus, joka kasvaa',
        list: [
          'Asukkaat näkevät, että heidän panoksensa johtaa tekoihin',
          'Yhä useampi osallistuu paikalliseen elämään ja päätöksiin',
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
    readMore: 'Lue kaikki uutiset',
    readMoreHref: '/blog/',
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
        image: toomasLaignaImage,
      },
      {
        name: 'Margus Räim',
        position: 'Tuotepäällikkö',
        phone: '+372 511 9436',
        phoneHref: 'tel:372 511 9436',
        email: 'margus.raim@futuredialog.eu',
        image: margusRaimImage,
      },
    ],
  },
  featuresPage: {
    meta: {
      title: 'Ominaisuudet: uutiset, tapahtumat ja palaute | Future Dialog',
      description:
        'Kuntasi oma sovellus: uutiset ja push-ilmoitukset, tapahtumat, asukkaiden palaute kartalla ja analytiikkatyöpöytä.',
    },
    intro:
      'Future Dialog on osallistuvien yhteisöjen tulevaisuus. Mobiilisovelluksemme tekee uutisten lukemisesta ja yhteisöön osallistumisesta asukkaille mukavan ja ympäri vuorokauden käytettävän. Autamme aloittamaan rakentavia keskusteluja ja tekemään tietoon perustuvia päätöksiä tuhlaamatta resursseja.',
    items: [
      {
        title: 'Oma sovellus',
        description:
          'Kuntasi saa oman sovelluksen iOS- ja Android-laitteille omalla nimellä, kuvakkeella ja väreillä. Valitset itse etusivun kansikuvan, päävärin ja palvelut – jokaisella kielellä, jolla palvelet asukkaita.',
      },
      {
        title: 'Näe, mikä toimii',
        description:
          'Työpöydältä näet, kuinka moni asukas käyttää sovellusta, millä laitteilla ja kuinka moni lukee julkaisujasi. Avoimet palautteet ja uudet ilmoitukset ovat samalla sivulla, joten mikään ei jää huomaamatta.',
      },
      {
        title: 'Julkaisut',
        description:
          'Julkaise uutisia ja tiedotteita usealla kielellä samasta editorista. Ajasta ne, kiinnitä tärkeimmät, lisää linkkipainike tai kysy, oliko julkaisusta apua – ja lähetä push-ilmoitus, jotta viesti tavoittaa asukkaat heti.',
      },
      {
        title: 'Tapahtumat',
        description:
          'Asukkaat näkevät, mitä lähellä tapahtuu, sekä ajan, paikan ja hinnan. Tapahtumat siirtyvät sovellukseen automaattisesti jo käyttämästäsi kalenterista, joten mitään ei tarvitse syöttää kahteen kertaan.',
      },
      {
        title: 'RSS-syötteet',
        description:
          'Vähemmän työtä, enemmän sisältöä yhteisölle. Yhdistä verkkosivustosi tai paikallislehden uutissyöte, niin uudet artikkelit näkyvät sovelluksessa automaattisesti.',
      },
      {
        title: 'Palaute, joka tavoittaa sinut hetkessä',
        description:
          'Asukas voi ilmoittaa ongelmasta tai ehdottaa ideaa kuvan ja karttasijainnin kanssa. Näet kaiken taululla tai kartalla, vastaat suoraan sovelluksessa, ja asukas saa ilmoituksen vastauksestasi.',
      },
    ],
    caseSection: {
      title: 'Asiakascaset',
      description: 'Ketkä käyttävät ratkaisuamme',
      items: [
        {
          icon: 'case-1',
          title: 'Kunnat',
          href: '/blog/category/municipality/',
        },
        {
          icon: 'case-4',
          title: 'Muut',
          href: '/blog/category/news/',
        },
      ],
    },
    quote: 'Jutellaan lisää siitä, miten Future Dialog voi auttaa juuri sinua ymmärtämään yhteisöäsi paremmin!',
  },
  blogPage: {
    meta: {
      title: 'Blogi: asukkaiden osallistaminen kunnissa | Future Dialog',
      description:
        'Artikkeleita ja kokemustarinoita yhteisön osallistamisesta, asukasviestinnästä ja siitä, miten kunnat käyttävät yhteisösovellusta.',
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
      title: 'Yhteystiedot ja demon varaus | Future Dialog',
      description: 'Ota yhteyttä Future Dialogiin ja varaa esittely yhteisösovelluksestamme kunnille ja organisaatioille.',
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
        'Kunnat, jotka osallistavat asukkaitaan Future Dialogin avulla, sekä tietoa kumppanuudesta osallistamisalustamme kanssa.',
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
