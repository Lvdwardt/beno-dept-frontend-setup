export default {
  language: 'nl',
  direction: 'ltr',
  url: 'http://www.deptagency.com',
  gtm: 'GTM-XXXX',
  title: 'DEPT Frontend Setup',
  description: 'DEPT vanilla frontend setup, with JSX templates and tailwindcss',
  image: 'https://www.deptagency.com/wp-content/uploads/2024/09/dept-logo.svg',
  preconnect: [
    {
      url: 'https://googletagmanager.com/',
    },
    {
      url: 'https://google-analytics.com/',
    },
  ],
  preload: [
    {
      url: '/assets/styles.css',
      as: 'style',
      onload: 'onload="this.onload=null;this.rel=\'stylesheet\'"',
    },
  ],
  skiplinks: [
    {
      label: 'Go to main content',
      url: '#content',
    },
    {
      label: 'Go to footer content',
      url: '#footer',
    },
  ],
} as const
