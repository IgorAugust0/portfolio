import { getEnvVariable } from '@/lib/utils';
import { MetadataRoute } from 'next';

const websiteUrl = getEnvVariable('WEBSITE_URL');

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${websiteUrl}/sitemap/1`,
  };
}
