import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isCourseLevel } from '@/constants/courses/levels.ts';
import { getCourseSeo } from '@/constants/courses/seo.ts';
import { getSeoRouteKey, type SeoRouteKey } from '@/constants/routes.ts';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/constants/site.ts';
import type { Locale } from '@/i18n/translations.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

type SeoMeta = {
  title: string;
  description: string;
};

function upsertMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.content = content;
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }

  element.href = href;
}

function upsertJsonLd(id: string, data: unknown) {
  let element = document.head.querySelector<HTMLScriptElement>(`script[data-seo-id="${id}"]`);

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.dataset.seoId = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

function buildCanonicalUrl(pathname: string) {
  if (pathname === '/') {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}${pathname}`;
}

function getSeoMeta(routeKey: SeoRouteKey, locale: Locale, t: (key: string) => string): SeoMeta {
  if (isCourseLevel(routeKey)) {
    const courseSeo = getCourseSeo(routeKey);

    return {
      title: `${SITE_NAME} | ${courseSeo.seoTitle[locale]}`,
      description: courseSeo.seoDescription[locale]
    };
  }

  const description = t(`seo.${routeKey}.description`);

  if (routeKey === 'home') {
    return {
      title: `${SITE_NAME} | ${SITE_TAGLINE}`,
      description
    };
  }

  const title = t(`seo.${routeKey}.title`);

  return {
    title: `${SITE_NAME} | ${title}`,
    description
  };
}

function buildStructuredData(routeKey: SeoRouteKey, meta: SeoMeta, canonicalUrl: string) {
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: meta.title,
    description: meta.description,
    url: canonicalUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL
    },
    inLanguage: ['en', 'vi']
  };

  if (routeKey !== 'home') {
    return webPage;
  }

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      description: meta.description,
      inLanguage: ['en', 'vi']
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: SITE_NAME,
      url: SITE_URL,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      },
      description: meta.description,
      inLanguage: ['en', 'vi']
    },
    webPage
  ];
}

export function PageMeta() {
  const location = useLocation();
  const { locale, t } = useTranslation();

  useEffect(() => {
    const routeKey = getSeoRouteKey(location.pathname);
    const meta = getSeoMeta(routeKey, locale, t);
    const canonicalUrl = buildCanonicalUrl(location.pathname);
    const ogLocale = locale === 'vi' ? 'vi_VN' : 'en_US';

    document.title = meta.title;
    document.documentElement.lang = locale;

    upsertMeta('description', meta.description);
    upsertMeta(
      'robots',
      routeKey === 'notFound' ? 'noindex, follow' : 'index, follow, max-image-preview:large'
    );
    upsertMeta('application-name', SITE_NAME);
    upsertMeta('og:title', meta.title, 'property');
    upsertMeta('og:description', meta.description, 'property');
    upsertMeta('og:url', canonicalUrl, 'property');
    upsertMeta('og:type', 'website', 'property');
    upsertMeta('og:site_name', SITE_NAME, 'property');
    upsertMeta('og:locale', ogLocale, 'property');
    upsertMeta('twitter:card', 'summary');
    upsertMeta('twitter:title', meta.title);
    upsertMeta('twitter:description', meta.description);
    upsertLink('canonical', canonicalUrl);

    upsertJsonLd('structured-data', buildStructuredData(routeKey, meta, canonicalUrl));
  }, [location.pathname, locale, t]);

  return null;
}
