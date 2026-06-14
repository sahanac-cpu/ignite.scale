/* Tiny locale hook + helpers. No external i18n lib.
   Locale is derived from URL prefix: paths starting /ar -> "ar", everything else -> "en".
   On every render the document html lang/dir are kept in sync. */

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function useLocale() {
  const { pathname } = useLocation()
  const locale = pathname === '/ar' || pathname.startsWith('/ar/') ? 'ar' : 'en'
  useEffect(() => {
    document.documentElement.setAttribute('lang', locale === 'ar' ? 'ar' : 'en')
    document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')
  }, [locale])
  return locale
}

/* Toggle current path between EN and AR equivalents. */
export function swapLocale(pathname, target) {
  if (target === 'ar') {
    if (pathname === '/' || pathname === '') return '/ar'
    if (pathname.startsWith('/ar')) return pathname
    return `/ar${pathname}`
  }
  if (pathname === '/ar' || pathname === '/ar/') return '/'
  if (pathname.startsWith('/ar/')) return pathname.slice(3)
  return pathname
}

/* Drop the /ar prefix to find the EN equivalent path. */
export function enPath(pathname) {
  return swapLocale(pathname, 'en')
}

/* Add the /ar prefix to find the AR equivalent path. */
export function arPath(pathname) {
  return swapLocale(pathname, 'ar')
}

/* Tiny string helper. Pass an object { en: 'Hello', ar: 'مرحبا' } and the current locale. */
export function t(locale, strings) {
  return strings[locale] ?? strings.en
}

/* Hook returning a t function bound to current locale.
   Returns [locale, t] where t(en, ar) picks the right string based on locale.
   Use like: const [locale, t] = useT(); <h1>{t('Hello', 'مرحبا')}</h1> */
export function useT() {
  const locale = useLocale()
  const tr = (en, ar) => (locale === 'ar' ? ar : en)
  return [locale, tr]
}
