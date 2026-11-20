// Central site settings. Values marked TODO are defaults awaiting confirmation.
export const site = {
  name: 'Quintas Technology Partners',
  short: 'Quintas',
  tagline: 'Engineering enterprise technology for what’s next.',
  email: 'info@quintastechnology.com',
  phone: '', // TODO add phone number
  address: ['421 Fayetteville Street, Suite 1100', 'Raleigh, NC 27601, USA'],
  // Structured address for search engines (keep in sync with `address` above and the Google Business Profile)
  street: '421 Fayetteville Street, Suite 1100',
  city: 'Raleigh',
  region: 'NC',
  postalCode: '27601',
  services: [
    'Cloud migration',
    'Digital transformation',
    'Data center infrastructure',
    'Cybersecurity',
    'Data and AI',
    'Enterprise ecommerce',
    'Managed IT services',
  ],
  linkedin: 'https://www.linkedin.com/', // TODO company page URL
  // Official profiles (LinkedIn company page, Google Business Profile, etc.) for schema sameAs. Add once live.
  sameAs: [] as string[],
  formEndpoint: '', // TODO e.g. Formspree or HubSpot endpoint
};

export const nav = [
  { label: 'Capabilities', href: '/capabilities/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'Partners', href: '/partners/' },
  { label: 'About', href: '/about/' },
];
