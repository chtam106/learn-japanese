import { forwardRef } from 'react';
import { Link, NavLink, type LinkProps, type NavLinkProps } from 'react-router-dom';
import { withLocale } from '@/i18n/locale-routing.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

/**
 * Drop-in replacements for react-router's `Link`/`NavLink` that prefix a string
 * `to` with the active locale, so internal navigation keeps the user in their
 * language (vi stays at the root, en is served under `/en`).
 */
export const LocaleLink = forwardRef<HTMLAnchorElement, LinkProps>(function LocaleLink(
  { to, ...rest },
  ref
) {
  const { locale } = useTranslation();
  const localizedTo = typeof to === 'string' ? withLocale(to, locale) : to;

  return <Link ref={ref} to={localizedTo} {...rest} />;
});

export const LocaleNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function LocaleNavLink(
  { to, ...rest },
  ref
) {
  const { locale } = useTranslation();
  const localizedTo = typeof to === 'string' ? withLocale(to, locale) : to;

  return <NavLink ref={ref} to={localizedTo} {...rest} />;
});
