import hubImage from '../assets/images/hub.jpg';
import margusRaimImage from '../assets/team/margus-raim.png';
import toomasLaignaImage from '../assets/team/toomas-laigna.jpeg';
import type { Content } from './types';

export const en: Content = {
  meta: {
    title: 'Community Engagement App for Municipalities | Future Dialog',
    description:
      'A community engagement app for municipalities: make important information easy to find, hear what residents need and involve them in local decisions.',
  },
  ui: {
    bookDemo: 'Book a demo',
    readMore: 'Read more',
    copyright: 'All rights reserved.',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  consent: {
    message: 'We use analytics cookies to understand how the site is used. They are only set if you accept.',
    learnMore: 'Privacy policy',
    accept: 'Accept',
    decline: 'Decline',
    settings: 'Cookie settings',
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features/' },
    { label: 'Customers', href: '/customers-partners/' },
    { label: 'Blog & news', href: '/blog/' },
    { label: 'Contacts', href: '/contacts/' },
    { label: 'Log in', href: 'https://app.futuredialog.eu', external: true },
  ],
  policyLinks: [
    { label: 'EULA', href: '/eula/' },
    { label: 'Privacy policy', href: '/application-privacy-policy/' },
  ],
  hero: {
    title: 'Public services, shaped with the people they serve.',
    description:
      'Make important information easy to find, give residents a simple way to be heard, and involve them in the decisions that shape their community. Keep the channels you already use. Your community engagement app brings their content together in one place, makes publishing easier and adds a direct channel to residents’ phones.',
    image: hubImage,
    imageAlt: 'Community engagement app connecting a municipality with its residents',
  },
  howSection: {
    title: 'What your municipality gains',
    description: 'Better-informed residents, clearer priorities and stronger trust.',
    items: [
      {
        icon: 'how-1',
        title: 'Inform',
        subTitle: 'Information that reaches people',
        list: [
          'Residents find news, events and service updates in one familiar place',
          'Urgent messages reach people quickly and directly, even in a crisis',
        ],
      },
      {
        icon: 'how-2',
        title: 'Listen',
        subTitle: 'Hear what residents need',
        list: [
          'Residents can raise concerns and ideas whenever it suits them',
          'Your team spots issues early, before they grow',
        ],
      },
      {
        icon: 'how-3',
        title: 'Decide',
        subTitle: 'Decisions backed by evidence',
        list: [
          'Understand what matters most to residents',
          'Set priorities and justify decisions with real resident input',
        ],
      },
      {
        icon: 'how-4',
        title: 'Connect',
        subTitle: 'Trust that grows over time',
        list: ['Residents see that their input leads to action', 'More people take part in local life and decisions'],
      },
    ],
  },
  counters: [
    { count: '700.000', description: 'answers given' },
    { count: '30.000', description: 'community members' },
    { count: '43', description: 'apps delivered' },
    { count: '5', description: 'countries' },
  ],
  reviews: [
    {
      review:
        'This app is an ideal solution in crisis communication. If there is some kind of crisis at the local level, the app is the best channel to inform people - information reaches people quickly and directly.',
      author: 'Liina Siniveer',
      position: 'Head of Communication, Hiiumaa municipality',
    },
    {
      review:
        "We feel like with the app the municipality is closer to the community, sort of like in their back pocket, because they can conveniently give feedback and read the latest news. Our app gathers together different municipality pages so it's like a direct channel to get the most important information.",
      author: 'Merilyn Säde',
      position: 'Communications Manager, Elva municipality',
    },
    {
      review:
        "From a local resident's point of view, the app is a convenient solution to communicate your concerns and thoughts. It is important for the local government to know what is done well and what needs to be improved in order to be able to find all the issues that need to be dealt with. The app connects and creates an opportunity for this.",
      author: 'Maarja Ilves',
      position: 'Former communication specialist, Järva municipality',
    },
    {
      review:
        'People get and find information on the app better than on social media. There have been cases where we have shared information on each of our channels, but it has gone unnoticed on social media. With the app, it is certain that the necessary information will reach our people.',
      author: 'Estrit Aasma',
      position: 'Communication specialist, Tartu municipality',
    },
  ],
  blogSection: {
    title: 'Our Blog',
    readMore: 'Read all news',
    readMoreHref: '/blog/',
  },
  contactSection: {
    title: 'Get in touch',
    quote: 'Let’s talk about how Future Dialog can help you understand your community better!',
    people: [
      {
        name: 'Toomas Laigna',
        position: 'Managing Director',
        phone: '+372 559 83 604',
        phoneHref: 'tel:372 559 83 604',
        email: 'toomas@futuredialog.eu',
        image: toomasLaignaImage,
      },
      {
        name: 'Margus Räim',
        position: 'Product Manager',
        phone: '+372 511 9436',
        phoneHref: 'tel:372 511 9436',
        email: 'margus.raim@futuredialog.eu',
        image: margusRaimImage,
      },
    ],
  },
  featuresPage: {
    meta: {
      title: 'Features: Surveys, Feedback, News and Analytics | Future Dialog',
      description:
        'Engage residents with surveys, a feedback channel, news posts, push notifications and an analytics dashboard in your municipality’s own app.',
    },
    intro:
      'Future Dialog is the future of engaged communities. Our mobile app makes reading news and contributing to the community transparent and available to people at all times. We help you initiate active conversations and make data-driven decisions with fewer resources.',
    items: [
      {
        title: 'Mobile app and website',
        description:
          'Your new app runs on iOS, Android, and the web. Customize it to look exactly like you want - add your logo, colors and style.',
      },
      {
        title: 'Powerful data',
        description:
          "Do you know who you're talking to? Our dashboard and data center let's you control content and gain actionable insights about your community.",
      },
      {
        title: 'Posts',
        description:
          'Create posts in the online dashboard to publish news stories, make announcements or create surveys. Posts make it easy to navigate through the content.',
      },
      {
        title: 'RSS',
        description:
          'Less work for you, more content for the community. Bring the most important news to the app automatically with easy RSS feed.',
      },
      {
        title: 'Actionable feedback',
        description:
          'Create a dialog with the members of your community in the feedback channel. In addition to surveys, ask for detailed opinions and offer solutions immediately.',
      },
    ],
    caseSection: {
      title: 'Case Studies',
      description: 'Who uses the solution',
      items: [
        {
          icon: 'case-1',
          title: 'Municipalities',
          href: '/blog/category/municipality/',
        },
        {
          icon: 'case-4',
          title: 'Others',
          href: '/blog/category/news/',
        },
      ],
    },
    quote: 'Let’s talk about how Future Dialog can help you understand your community better!',
  },
  blogPage: {
    meta: {
      title: 'Blog: Community Engagement for Municipalities | Future Dialog',
      description:
        'Articles and case studies on community engagement, resident communication and how municipalities use community apps in practice.',
    },
    title: 'News',
    description: 'Follow our news, stories and unique insights! Solutions for engagement in different spheres',
    categoryLabels: {
      news: 'News',
      engagement: 'Engagement',
      municipality: 'Municipality',
    },
    readingTime: '{minutes} min read',
    photoCredit: 'Photo from',
    shareTitle: 'Like this article? Spread the word.',
  },
  contactsPage: {
    meta: {
      title: 'Contact Us and Book a Demo | Future Dialog',
      description:
        'Get in touch with Future Dialog in Tallinn and book a demo of our community engagement app for municipalities and organisations.',
    },
    title: 'Contacts',
    aboutTitle: 'Who are we?',
    aboutDescription:
      'Future Dialog was created to bridge the gap between people living in smart cities and governments trying to make a difference. We build state-of-the-art mobile apps that foster engagement. We help you initiate active conversations and make data-driven decisions with fewer resources.',
  },
  customersPage: {
    meta: {
      title: 'Customers and Partners | Future Dialog',
      description:
        'Municipalities that engage their residents with Future Dialog, and how partners can offer our community engagement platform to their clients.',
    },
    title: 'Our happy customers',
    items: [
      {
        title: 'Saue',
        description: 'Municipality of Saue',
        image: '/images/customers/saue.jpg',
        href: 'https://sauevald.ee/',
      },
      {
        title: 'Boden',
        description: 'Municipality of Boden',
        image: '/images/customers/boden.jpg',
        href: 'https://boden.se/',
      },
    ],
    partners: {
      offerTitle: 'What we offer',
      offerDescription:
        'As a Future Dialog partner, you can improve your traction to your customers, increase your revenue, make better teamwork and expand your business base. Our partners create new business for themselves with our cloud-based platform. Our technical solution can be used and tailored for multiple use cases with our ready-made packages.',
      benefitsTitle: 'What you benefit from us?',
      benefits: [
        'Full support for building successful business cases',
        'Quick and scalable set up, full technical maintenance',
        'Smart tasks and targeting based on feedback, surveys',
        'Communicate faster and collaborate with ease',
        'Ready-made sales and marketing tools',
        'Fully developed technical cloud platform',
      ],
      workTitle: 'How we work',
      workDescription:
        "We build state-of-the-art technology for engagement in a mobile environment. Therefore we expect our partners to be strong and well-established players in their fields of expertise to ensure the best possible experience for the end user. If you have an established community you want to engage within a mobile and measurable way, get in touch and we're happy to tell you more about our cloud platform",
    },
    quote: 'Let’s talk about how Future Dialog can help you understand your community better!',
  },
};
