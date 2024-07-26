import { getEnvVariable } from '@/lib/utils';
import { MetadataRoute } from 'next';

const websiteUrl = getEnvVariable('WEBSITE_URL');
export default function sitemap(): MetadataRoute.Sitemap {
    return [
      {
        url: websiteUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
    ]
  }
