import type { Content } from './types';

export const en: Content = {
  meta: {
    title: 'Easy-to-use mobile applications for communities - Future Dialog',
    description:
      'We create mobile apps that allow communities to open dialogue, work together, and use smart technologies in the growing urban or business environment.',
  },
  ui: {
    bookDemo: 'Book a demo',
    readMore: 'Read more',
    subscribeTitle: 'Subscribe to our newsletter:',
    subscribePlaceholder: 'Email',
    subscribeButton: 'Subscribe',
    copyright: 'All rights reserved.',
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features/' },
    { label: 'Customers', href: '/customers-partners/' },
    { label: 'Blog & news', href: '/category/news/' },
    { label: 'Contacts', href: '/contacts/' },
    { label: 'Log in', href: 'https://futuredialog.app/login', external: true },
  ],
  policyLinks: [
    {
      label: 'User Manual',
      href: 'https://drive.google.com/file/d/11j7f4tJD-gBWEyTzFzAl3GJjJhdqCq8y/view?usp=sharing',
      target: 'blank',
    },
    { label: 'Terms of Service', href: '#', modal: 'terms' },
    { label: 'Privacy policy', href: '#', modal: 'policy' },
  ],
  hero: {
    title: 'We bring communities together with easy-to-use mobile applications.',
    description:
      'Future Dialog creates mobile apps that allow communities to work together, launch initiatives, and use smart technologies in the growing urban environment.',
    image: '/images/hub.jpg',
    imageAlt: 'Community Engagement',
  },
  howSection: {
    title: 'How can we help?',
    description: 'We bring communities together.',
    items: [
      {
        icon: 'how-1',
        title: 'Engage',
        subTitle: 'Keep people involved',
        list: [
          'Branded mobile app and web dashboard that looks exactly like you want',
          'Questionnaires, events calendar and push notifications',
        ],
      },
      {
        icon: 'how-2',
        title: 'Observe',
        subTitle: 'Understand your community',
        list: ["Study people's needs and requirements", 'Collect their suggestions and input'],
      },
      {
        icon: 'how-3',
        title: 'Analyze',
        subTitle: 'Info at your fingertips',
        list: ['Collect and categorize insights', 'Make insight driven decisions'],
      },
      {
        icon: 'how-4',
        title: 'Connect',
        subTitle: 'Connections that matter',
        list: [
          "Build the community's trust and commitment",
          'Get instant feedback and start conversations',
        ],
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
    readMoreHref: '/category/news/',
    posts: [
      {
        title: '10 benefits of using community apps for municipalities and communities',
        href: '/municipality/10-benefits-of-using-community-apps-for-municipalities-and-communities/',
        image: '/images/blog/public-discussion.png',
        categories: [
          { label: 'Engagement', href: '/category/engagement' },
          { label: 'Municipality', href: '/category/municipality' },
          { label: 'News', href: '/category/news' },
        ],
        readingTime: '2 min read',
        date: 'July 29, 2021',
        dateTime: '2021-07-29T13:15:40+03:00',
      },
      {
        title: '3 reasons to use a community engagement app',
        href: '/news/3-reasons-to-use-a-community-engagement-app/',
        image: '/images/blog/nature-on-screen.png',
        categories: [
          { label: 'Engagement', href: '/category/engagement' },
          { label: 'News', href: '/category/news' },
        ],
        readingTime: '2 min read',
        date: 'July 6, 2021',
        dateTime: '2021-07-06T18:02:38+03:00',
      },
      {
        title:
          'From ideation to creation: How the ambition to participate in decision-making led to the birth of a community app',
        href: '/news/from-ideation-to-creation-how-the-ambition-to-participate-in-decision-making-led-to-the-birth-of-a-community-app/',
        image: '/images/blog/our-solution.png',
        categories: [
          { label: 'Engagement', href: '/category/engagement' },
          { label: 'News', href: '/category/news' },
        ],
        readingTime: '2 min read',
        date: 'May 25, 2021',
        dateTime: '2021-05-25T10:25:47+03:00',
      },
    ],
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
        image: '/images/team/toomas-laigna.jpeg',
      },
      {
        name: 'Margus Räim',
        position: 'Business Developer',
        phone: '+372 511 9436',
        phoneHref: 'tel:372 511 9436',
        email: 'margus.raim@futuredialog.eu',
        image: '/images/team/margus-raim.png',
      },
    ],
  },
  featuresPage: {
    meta: {
      title: 'SaaS platform: online surveys, media dashboard, posts - Future Dialog',
      description:
        'We offer digital SaaS product with survey tools, feedback channel, posts for publishing content, media dashboard. SaaS tools for providing ease of management and access.',
    },
    intro:
      'Future Dialog is the future of engaged communities. Our mobile app makes reading news and contributing to the community transparent and available to people at all times. We help you initiate active conversations and make data-driven decisions with fewer resources.',
    storeTitle: 'Try it now on your platform',
    items: [
      {
        title: 'Mobile app and website',
        description:
          'Your new app runs on iOS, Android, and the web. Customize it to look exactly like you want - add your logo, colors and style.',
        image: '/images/features/1.png',
      },
      {
        title: 'Powerful data',
        description:
          "Do you know who you're talking to? Our dashboard and data center let's you control content and gain actionable insights about your community.",
        image: '/images/features/2.png',
      },
      {
        title: 'Posts',
        description:
          'Create posts in the online dashboard to publish news stories, make announcements or create surveys. Posts make it easy to navigate through the content.',
        image: '/images/features/3.png',
      },
      {
        title: 'RSS',
        description:
          'Less work for you, more content for the community. Bring the most important news to the app automatically with easy RSS feed.',
        image: '/images/features/4.png',
      },
      {
        title: 'Actionable feedback',
        description:
          'Create a dialog with the members of your community in the feedback channel. In addition to surveys, ask for detailed opinions and offer solutions immediately.',
        image: '/images/features/5.png',
      },
    ],
    caseSection: {
      title: 'Case Studies',
      description: 'Who uses the solution',
      items: [
        {
          icon: 'case-1',
          title: 'Municipalities',
          href: 'https://futuredialog.co/category/municipality/',
        },
        { icon: 'case-2', title: 'Business', href: 'https://futuredialog.co/category/business/' },
        {
          icon: 'case-3',
          title: 'Political Parties',
          href: 'https://futuredialog.co/category/political-parties/',
        },
        { icon: 'case-4', title: 'Others', href: 'https://futuredialog.co/category/news/' },
      ],
    },
    quote: 'Let’s talk about how Future Dialog can help you understand your community better!',
  },
  contactsPage: {
    meta: {
      title: 'Contacts of the company - Future Dialog',
      description: 'Contact details of Future Dialog, contact form with the sales department',
    },
    title: 'Contacts',
    aboutTitle: 'Who are we?',
    aboutDescription:
      'Future Dialog was created to bridge the gap between people living in smart cities and governments trying to make a difference. We build state-of-the-art mobile apps that foster engagement. We help you initiate active conversations and make data-driven decisions with fewer resources.',
  },
};
