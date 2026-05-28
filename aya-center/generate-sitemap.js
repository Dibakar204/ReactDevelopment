import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname: 'https://laxmiganeshayacentre.vercel.app' });
streamToPromise(sitemap).then((data) =>
  createWriteStream('./public/sitemap.xml').write(data.toString())
);

links.forEach(link => sitemap.write(link));
sitemap.end();
