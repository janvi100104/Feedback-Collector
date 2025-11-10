'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// This is a mock analytics component for demonstration
// In a real application, you would integrate with services like Google Analytics

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Mock analytics tracking
    console.log(`Page view: ${pathname}`);
    
    // In a real application, you would send this data to your analytics service
    // Example with Google Analytics:
    // if (window.gtag) {
    //   window.gtag('config', 'GA_MEASUREMENT_ID', {
    //     page_path: pathname,
    //   });
    // }
  }, [pathname]);

  return null;
}