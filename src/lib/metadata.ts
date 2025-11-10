import type { Metadata } from 'next';

export function generateMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    keywords: ['feedback', 'collection', 'user feedback', 'customer feedback', 'survey'],
    authors: [{ name: 'FeedbackHub' }],
    creator: 'FeedbackHub',
    publisher: 'FeedbackHub',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}