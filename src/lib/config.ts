// Environment configuration
export const config = {
  // API configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
  },
  
  // Feature flags
  features: {
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    enableSeo: process.env.NEXT_PUBLIC_ENABLE_SEO !== 'false',
  },
  
  // UI configuration
  ui: {
    theme: process.env.NEXT_PUBLIC_THEME || 'light',
  },
};