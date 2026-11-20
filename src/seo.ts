// JSON-LD helpers for page-level structured data. Site-wide Organization data lives in layouts/Base.astro.
const ORIGIN = 'https://quintastechnology.com';
const ORG = { '@id': `${ORIGIN}/#organization` };

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${ORIGIN}${it.path}`,
    })),
  };
}

export function service(name: string, description: string, path: string, serviceType = name) {
  return {
    '@type': 'Service',
    name,
    serviceType,
    description,
    url: `${ORIGIN}${path}`,
    provider: ORG,
    areaServed: { '@type': 'Country', name: 'United States' },
  };
}

export function article(p: { title: string; description: string; path: string; date: Date; author: string }) {
  return {
    '@type': 'Article',
    headline: p.title,
    description: p.description,
    url: `${ORIGIN}${p.path}`,
    mainEntityOfPage: `${ORIGIN}${p.path}`,
    datePublished: p.date.toISOString().slice(0, 10),
    dateModified: p.date.toISOString().slice(0, 10),
    image: `${ORIGIN}/og-image.png`,
    author: { '@type': 'Organization', name: p.author, url: `${ORIGIN}/about/` },
    publisher: ORG,
  };
}
