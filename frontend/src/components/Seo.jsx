import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.hathimshynu.com';
const SUFFIX = 'Hathim Shynu | Web Developer in Marthandam, Kanyakumari';

const PAGES = {
  '/': {
    title: 'Hathim Shynu | Freelance Web Developer in Marthandam, Kanyakumari',
    description: 'Hathim Shynu (C.R. Shynumon) is a freelance full stack web developer in Marthandam, Irenipuram and Kanyakumari district, Tamil Nadu. Websites, web apps, e-commerce and custom software for businesses.',
  },
  '/projects': {
    title: `Projects - ${SUFFIX}`,
    description: 'Websites, web apps, games and e-commerce projects built by Hathim Shynu, a freelance web developer in Marthandam, Kanyakumari.',
  },
  '/skills': {
    title: `Skills - ${SUFFIX}`,
    description: 'React, Next.js, Node.js, Laravel, PHP, Python, MongoDB and MySQL skills of Hathim Shynu, full stack web developer in Kanyakumari.',
  },
  '/experience': {
    title: `Experience - ${SUFFIX}`,
    description: '4+ years of full stack web development experience. Hathim Shynu, freelance web developer based in Marthandam, Tamil Nadu.',
  },
  '/blog': {
    title: `Blog - ${SUFFIX}`,
    description: 'Articles and notes on web development by Hathim Shynu, freelance web developer in Marthandam, Kanyakumari.',
  },
  '/about': {
    title: `About - ${SUFFIX}`,
    description: 'About Hathim Shynu (C.R. Shynumon), a freelance full stack web developer from Marthandam, serving Irenipuram and all of Kanyakumari district.',
  },
  '/contact': {
    title: `Contact - Hire a Freelance Web Developer in Marthandam | Hathim Shynu`,
    description: 'Hire Hathim Shynu, freelance web developer in Marthandam, Irenipuram and Kanyakumari. Call +91 9597610074 or email shynushyni55@gmail.com.',
  },
  '/privacy': {
    title: 'Privacy Policy - AI News Shorts | Hathim Shynu',
    description: 'Privacy policy for the AI News Shorts app by Hathim Shynu.',
  },
  '/terms': {
    title: 'Terms of Service - AI News Shorts | Hathim Shynu',
    description: 'Terms of service for the AI News Shorts app by Hathim Shynu.',
  },
};

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

// Keeps <title>, description, canonical and social tags in sync with the current route.
export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = PAGES[pathname] || PAGES['/'];
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

    document.title = page.title;
    setMeta('meta[name="description"]', 'content', page.description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:title"]', 'content', page.title);
    setMeta('meta[property="og:description"]', 'content', page.description);
    setMeta('meta[name="twitter:title"]', 'content', page.title);
    setMeta('meta[name="twitter:description"]', 'content', page.description);
  }, [pathname]);

  return null;
}
